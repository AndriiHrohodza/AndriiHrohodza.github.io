/*!
 * jQuery iNumberEntry Plugin v1.0.1 (https://github.com/irdsinc/jQuery.iNumberEntry)
 * Copyright IRDS, Inc. - http://irdsinc.com
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function ($, window, document) {
    "use strict";

    var defaults = {
        numberParts: []
    },
        NumberPart = function (options) {
            var self = this;

            self.length = options.length;
            self.maxValue = options.maxValue || /*options.length
                ? */Math.min(Number.MAX_SAFE_INTEGER, Math.pow(10, options.length) - 1)
            /*: Number.MAX_SAFE_INTEGER*/;
            self.minValue = options.minValue || 0;//Number.MIN_SAFE_INTEGER;
            //self.padStart = options.padStart || true;
            self.prefix = options.prefix || "";
            self.postfix = options.postfix || "";
            self.snapToStep = options.snapToStep || false;
            self.step = options.step || 1;
            self.toString = function () {
                return self.prefix +
                    (/*self.length ? */self.value.padStart(self.length, "0")/* : self.value.length*/) +
                    self.postfix;
            };
            self.totalLength = function () {
                //console.log("prefix:" + this.prefix.length);
                //console.log("length:" + this.length);
                //console.log("postfix:" + this.postfix.length);
                return self.prefix.length + (self.length/* || self.value.length*/) + self.postfix.length;
            };
            self.value = options.value || "";

            return self;
        },
        NumberEntry = function (element, options) {
            var self = this;

            self.$element = $(element);
            self.defaultValue = options.defaultValue || null;
            self.linked = options.linked || false;
            self.numberParts = [];
            self.totalLength = function () {
                var length = 0;

                for (var i = 0; i < self.numberParts.length; i++) {
                    var part = self.numberParts[i];

                    length += part.totalLength();
                }

                return length;
            };
            /*self.totalValueLength = function () {
        		var length = 0;

        		for (var i = 0; i < self.numberParts.length; i++) {
        			var part = self.numberParts[i];

        			length += part.length || part.value.length;
        		}

        		return length;
        	}*/;

            if (options.numberParts) {
                for (var i = 0; i < options.numberParts.length; i++) {
                    var part = options.numberParts[i];

                    self.numberParts.push(new NumberPart(part));
                }
            }

            self._init();
        };

    NumberEntry.prototype = {
        _highlightedPart: null,
        _isFocus: false,
        _originalValue: null,

        _init: function () {
            var self = this;

            self.$element.attr("autocomplete", "off");
            self.$element.attr("maxlength", self.totalLength());

            self.$element.on({
                "blur.iNumberEntry": $.proxy(self.eventBlur, self),
                "cut.iNumberEntry": $.proxy(self.eventCut, self),
                "focus.iNumberEntry": $.proxy(self.eventFocus, self),
                "keydown.iNumberEntry": $.proxy(self.eventKeydown, self),
                "keypress.iNumberEntry": $.proxy(self.eventKeypress, self),
                "keyup.iNumberEntry": $.proxy(self.eventKeyup, self),
                //"change.iNumberEntry": $.proxy(self.eventChange, self),
                //"select.iNumberEntry": $.proxy(self.eventChange, self),
                "mouseup.iNumberEntry": $.proxy(self.eventClick, self),
                "paste.iNumberEntry": $.proxy(self.eventPaste, self)
            });

            if (self.$element.val()) {
                self.updateFromElementValue();
            } else if (self.defaultValue) {
                self.setValues(self.defaultValue);
            } else {
                var displayValue = self.getDisplayValue();

                if (displayValue.length > 0) {
                    self.update();
                }
            }
        },
        changeToNearestStep: function (value, part) {
            var self = this,
                remainder = value % part.step;

            if (remainder === 0) {
                return value;
            }

            if (Math.round(remainder / part.step)) {
                var maxValue = typeof part.maxValue === "function" ? part.maxValue(self.numberParts) : part.maxValue;

                return Math.min(value + (part.step - remainder), maxValue);
            } else {
                var minValue = typeof part.minValue === "function" ? part.minValue(self.numberParts) : part.minValue;

                return Math.max(value - remainder, minValue);
            }
        },
        clear: function () {
            var self = this;

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i];

                part.value = "";
            }

            self.$element.val("");
        },
        decreaseValue: function (index) {
            var self = this,
                part = self.numberParts[index >= 0 ? index : self._highlightedPart],
                minValue = typeof part.minValue === "function" ? part.minValue(self.numberParts) : part.minValue,
                numericValue = parseInt(part.value, 10);

            if (part.linked && index >= 0) {
                numericValue--;
            } else {
                numericValue -= part.step;
            }

            if (numericValue < minValue) {
                if (self.linked) {
                    var previousIndex = (index >= 0 ? index : self._highlightedPart) - 1;

                    if (previousIndex >= 0) {
                        self.decreaseValue(previousIndex);
                    }
                }

                var maxValue = typeof part.maxValue === "function" ? part.maxValue(self.numberParts) : part.maxValue;

                numericValue = numericValue + maxValue - minValue + 1;
            }

            part.value = numericValue.toString();
        },
        eventBlur: function () {
            var self = this,
                $input = self.$element.get(0)/*,
				elementValueLength = self.$element.val().length*/;

            $input.setSelectionRange(0, 0);

            self._highlightedPart = null;
            self._originalValue = null;
            //self._isFocus = false;
            self.updateFromElementValue();
        },
        eventCut: function () {
            var self = this;

            setTimeout(function () {
                var $input = self.$element.get(0);

                $input.setSelectionRange(0, 0);

                self._highlightedPart = null;
                self._originalValue = null;
                self.updateFromElementValue();
            }, 100);
        },
        eventClick: function () {
            var self = this;

            if (self._isFocus) {
                self._isFocus = false;
            } else {
                self.updateFromElementValue();
                self.eventHighlightPart();
            }
        },
        eventFocus: function () {
            var self = this;

            self._isFocus = true;
            self._originalValue = self.$element.val();

            self.eventHighlightPart();

            setTimeout(function () {
                self._isFocus = false;
            }, 100);
        },
        eventHighlightPart: function () {
            var self = this,
                $input = self.$element.get(0),
                currentLength = 0,
                position = self.getCursorPosition(),
                part;

            if (position >= self.totalLength()) {
                var partIndex = self.numberParts.length - 1;

                part = self.numberParts[partIndex];

                self.setSelectionRange($input,
                    partIndex,
                    self.totalLength() - part.totalLength(),
                    part.length);
            } else {
                for (var i = 0; i < self.numberParts.length; i++) {
                    part = self.numberParts[i];

                    if (position > currentLength + part.totalLength() - 1) {
                        currentLength += part.totalLength();
                    } else {
                        self.setSelectionRange($input,
                            i,
                            currentLength + part.prefix.length,
                            part.length /* || part.value.length*/);

                        break;
                    }
                }
            }
        },
        eventKeydown: function (e) {
            var self = this;

            if (/*e.shiftKey || */e.ctrlKey || e.altKey || e.metaKey) {
                return;
            }

            if ((e.which > 64 && e.which < 91) ||
                (e.which > 105 && e.which < 110) ||
                (e.which > 110 && e.which < 123)) {

                e.preventDefault();
            }

            switch (e.which) {
                case 8:
                case 46:
                    setTimeout(function () {
                        var $input = self.$element.get(0);

                        $input.setSelectionRange(0, 0);

                        self._highlightedPart = null;
                        self._originalValue = null;
                        self.updateFromElementValue();
                    }, 100);

                    break;
                case 9: // tab
                    self.updateFromElementValue();

                    if (self.$element.val() !== "") {
                        if (!self._originalValue || self._originalValue === "") {
                            self.eventHighlightPart();

                            self._originalValue = self.$element.val();
                        } else if (e.shiftKey) {
                            if (self._highlightedPart === 0) {
                                break;
                            }

                            self.highlightPreviousPart();
                        } else {
                            if (self._highlightedPart === self.numberParts.length - 1) {
                                break;
                            }

                            self.highlightNextPart();
                        }

                        e.preventDefault();
                    }

                    break;
                case 27: // esc
                    self.setValues(self._originalValue);
                    self.highlightPart(self._highlightedPart);

                    break;
                case 37: // left arrow
                    e.preventDefault();

                    self.updateFromElementValue();

                    if (!self._originalValue || self._originalValue === "") {
                        self.eventHighlightPart();

                        self._originalValue = self.$element.val();
                    } else {
                        self.highlightPreviousPart();
                    }

                    break;
                case 38: // up arrow
                    e.preventDefault();

                    if (!self._originalValue || self._originalValue === "") {
                        self.updateFromElementValue();
                        self.eventHighlightPart();

                        self._originalValue = self.$element.val();
                    } else {
                        self.increaseValue();
                        self.update();
                        self.highlightPart(self._highlightedPart);
                    }

                    break;
                case 39: // right arrow
                    e.preventDefault();

                    self.updateFromElementValue();

                    if (!self._originalValue || self._originalValue === "") {
                        self.eventHighlightPart();

                        self._originalValue = self.$element.val();
                    } else {
                        self.highlightNextPart();
                    }

                    break;
                case 40: // down arrow
                    e.preventDefault();

                    if (!self._originalValue || self._originalValue === "") {
                        self.updateFromElementValue();
                        self.eventHighlightPart();

                        self._originalValue = self.$element.val();
                    } else {
                        self.decreaseValue();
                        self.update();
                        self.highlightPart(self._highlightedPart);
                    }

                    break;
            }
        },
        eventKeypress: function (e) {
            if ((e.which > 31 && e.which < 48) ||
                (e.which > 57 && e.which < 65) ||
                (e.which > 90 && e.which < 97) ||
                (e.which > 122 && e.which < 127)) {

                e.preventDefault();
            }
        },
        eventKeyup: function (e) {
            if (e.which < 48 || (e.which > 57 && e.which < 96) || e.which > 105) {
                return;
            }
        },
        eventPaste: function () {
            var self = this;

            setTimeout(function () {
                self.updateFromElementValue();
                self.eventHighlightPart();
            }, 100);
        },
        getCursorPosition: function () {
            var self = this,
                $input = self.$element.get(0);

            if ("selectionStart" in $input) {
                return $input.selectionStart;
            } else if (document.selection) { // IE FIX
                $input.focus();

                var selection = document.selection.createRange(),
                    selectionLength = document.selection.createRange().text.length;

                selection.moveStart("character", -$input.value.length);

                return selection.text.length - selectionLength;
            }

            return 0;
        },
        getDisplayValue: function () {
            var self = this,
                value = "";

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i];

                if (!part.value || part.value === "") {
                    return "";
                }

                value += part.toString();
            }

            return value;
        },
        highlightNextPart: function () {
            var self = this,
                $input = self.$element.get(0),
                currentLength = 0;

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i];

                if (self._highlightedPart > i) {
                    currentLength += part.totalLength();
                } else {
                    var nextPart;

                    if (i + 1 < self.numberParts.length) {
                        nextPart = self.numberParts[i + 1];

                        self.setSelectionRange($input,
                            i + 1,
                            currentLength + part.totalLength() + nextPart.prefix.length,
                            nextPart.length/* || nextPart.value.length*/);
                    } else {
                        nextPart = self.numberParts[0];

                        self.setSelectionRange($input, 0, nextPart.prefix.length, nextPart.length/* || nextPart.value.length*/);
                    }

                    break;
                }
            }
        },
        highlightPart: function (index) {
            var self = this,
                $input = self.$element.get(0),
                currentLength = 0;

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i];

                if (index > i) {
                    currentLength += part.totalLength();
                } else {
                    self.setSelectionRange($input, index, currentLength + part.prefix.length, part.length/* || part.value.length*/);

                    break;
                }
            }
        },
        highlightPreviousPart: function () {
            var self = this,
                $input = self.$element.get(0),
                currentLength = 0;

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i];

                if (self._highlightedPart > i + 1) {
                    currentLength += part.totalLength();
                } else {
                    var previousPart;

                    if (self._highlightedPart === 0) {
                        previousPart = self.numberParts[self.numberParts.length - 1];

                        self.setSelectionRange($input,
                            self.numberParts.length - 1,
                            self.$element.val().length - previousPart.totalLength() + previousPart.prefix.length,
                            previousPart.length/* || previousPart.value.length*/);
                    } else {
                        previousPart = self.numberParts[i];

                        self.setSelectionRange($input,
                            i,
                            currentLength + previousPart.prefix.length,
                            previousPart.length/* || previousPart.value.length*/);
                    }

                    break;
                }
            }
        },
        increaseValue: function (index) {
            var self = this,
                part = self.numberParts[index >= 0 ? index : self._highlightedPart],
                maxValue = typeof part.maxValue === "function" ? part.maxValue(self.numberParts) : part.maxValue,
                numericValue = parseInt(part.value, 10);

            if (part.linked && index >= 0) {
                numericValue++;
            } else {
                numericValue += part.step;
            }

            if (numericValue > maxValue) {
                if (self.linked) {
                    var previousIndex = (index >= 0 ? index : self._highlightedPart) - 1;

                    if (previousIndex >= 0) {
                        self.increaseValue(previousIndex);
                    }
                }

                var minValue = typeof part.minValue === "function" ? part.minValue(self.numberParts) : part.minValue;

                numericValue = numericValue - maxValue + minValue - 1;
            }

            part.value = numericValue.toString();
        },
        setValues: function (value) {
            var self = this;

            if (!value) {
                self.clear();

                return;
            }

            value = value.replace(/[^0-9]/g, "");

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i],
                    maxValue = typeof part.maxValue === "function" ? part.maxValue(self.numberParts) : part.maxValue,
                    minValue = typeof part.minValue === "function" ? part.minValue(self.numberParts) : part.minValue,
                    newValue = parseInt(value.slice(0, part.length/* || part.value.length*/), 10);

                if (isNaN(newValue)) {
                    newValue = minValue;
                }

                if (newValue > maxValue) {
                    newValue = maxValue;
                }
                else if (newValue < minValue) {
                    newValue = minValue;
                }

                if (part.snapToStep) {
                    newValue = self.changeToNearestStep(newValue, part);
                }

                part.value = newValue.toString();

                value = value.slice(part.length/* || part.value.length*/);
            }

            self.update();
        },
        setSelectionRange: function ($input, highlightedPart, startIndex, partLength) {
            var self = this;

            self._highlightedPart = highlightedPart;

            if ($input.setSelectionRange) {
                setTimeout(function () {
                    $input.setSelectionRange(startIndex, startIndex + partLength);
                }, 0);
            }
        },
        update: function () {
            var self = this,
                displayValue = self.updateElement(),
                parts = [];

            for (var i = 0; i < self.numberParts.length; i++) {
                var part = self.numberParts[i];

                parts.push(part.value);
            }

            self.$element.trigger({
                "type": "change.iNumberEntry",
                "value": {
                    "displayValue": displayValue,
                    "parts": parts
                }
            });
        },
        updateElement: function () {
            var self = this,
                displayValue = self.getDisplayValue();

            self.$element.val(displayValue);//.change();

            return displayValue;
        },
        updateFromElementValue: function () {
            var self = this;

            self.setValues(self.$element.val());
        }
    };

    $.fn.iNumberEntry = function (options) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data("iNumberEntry");

            if (!data) {
                $this.data("iNumberEntry", new NumberEntry(this, $.extend(true, {}, defaults, options, $this.data())));
            }
        });
    };
})(jQuery, window, document);

(function ($) {
    "use strict";

    $.fn.iDateNumberEntry = function (format, options) {
        var defaults = {
            linked: true,
            numberParts: []
        };

        function isLeapYear(year) {
            return !((year % 4) || (!(year % 100) && year % 400));
        }

        function getDaysInMonthYear(month, year) {
            return new Date(year, month, 0).getDate(); // Month is 1-based due to min/max values
        }

        function getDaysInMonth(month) {
            var year = (new Date()).getFullYear(),
                days = getDaysInMonthYear(month, year),
                daysToAdd = month === 2 && !isLeapYear(year) ? 1 : 0; // For February in case current year is not a leap year

            return days + daysToAdd;
        }

        function getMaxDaysInMonth(parts) {
            var days;

            if (parts.length === 3) {
                days = getDaysInMonthYear(parseInt(parts[0].value, 10), parseInt(parts[2].value, 10));
            } else {
                days = getDaysInMonth(parseInt(parts[0].value, 10));
            }

            return isNaN(days) ? 31 : days;
        }

        if (!format) {
            defaults.numberParts.push({
                length: 2,
                maxValue: 12,
                minValue: 1,
                postfix: "/"
            });
            defaults.numberParts.push({
                length: 2,
                maxValue: getMaxDaysInMonth,
                minValue: 1,
                postfix: "/"
            });
            defaults.numberParts.push({
                length: 4,
                minValue: 1
            });
        } else {
            var formatArray = format.toLowerCase().split("/");

            for (var i = 0; i < formatArray.length; i++) {
                var part = formatArray[i];

                if (part.indexOf("m") >= 0) {
                    defaults.numberParts.push({
                        length: 2,
                        maxValue: 12,
                        minValue: 1,
                        postfix: i + 1 < formatArray.length ? "/" : ""
                    });
                } else if (part.indexOf("d") >= 0) {
                    defaults.numberParts.push({
                        length: 2,
                        maxValue: getMaxDaysInMonth,
                        minValue: 1,
                        postfix: i + 1 < formatArray.length ? "/" : ""
                    });
                } else if (part.indexOf("y") >= 0) {
                    defaults.numberParts.push({
                        length: part.length > 2 ? 4 : 2,
                        minValue: 1
                    });
                }
            }
        }

        $(this).iNumberEntry($.extend(true, {}, defaults, options));
    };

    $.fn.iDateIsoNumberEntry = function (options) {
        function isLeapYear(year) {
            return !((year % 4) || (!(year % 100) && year % 400));
        }

        function getDaysInMonthYear(month, year) {
            return new Date(year, month, 0).getDate(); // Month is 1-based due to min/max values
        }

        function getDaysInMonth(month) {
            var year = (new Date()).getFullYear(),
                days = getDaysInMonthYear(month, year),
                daysToAdd = month === 2 && !isLeapYear(year) ? 1 : 0; // For February in case current year is not a leap year

            return days + daysToAdd;
        }

        function getMaxDaysInMonth(parts) {
            var days;

            if (parts.length === 3) {
                days = getDaysInMonthYear(parseInt(parts[0].value, 10), parseInt(parts[2].value, 10));
            } else {
                days = getDaysInMonth(parseInt(parts[0].value, 10));
            }

            return isNaN(days) ? 31 : days;
        }

        $(this).iNumberEntry($.extend(true, {},
            {
                linked: true,
                numberParts: [
                    {
                        length: 4,
                        minValue: 1,
                        postfix: "-"
                    },
                    {
                        length: 2,
                        maxValue: 12,
                        minValue: 1,
                        postfix: "-"
                    },
                    {
                        length: 2,
                        maxValue: getMaxDaysInMonth,
                        minValue: 1
                    }
                ]
            },
            options));
    };

    $.fn.iPhoneNumberEntry = function (options) {
        $(this).iNumberEntry($.extend(true, {},
            {
                numberParts: [
                    {
                        length: 3,
                        prefix: "(",
                        postfix: ") "
                    },
                    {
                        length: 3,
                        postfix: "-"
                    },
                    {
                        length: 4
                    }
                ]
            },
            options));
    };

    $.fn.iSocialSecurityNumberEntry = function (options) {
        $(this).iNumberEntry($.extend(true, {},
            {
                numberParts: [
                    {
                        length: 3,
                        minValue: 1,
                        postfix: "-"
                    },
                    {
                        length: 2,
                        minValue: 1,
                        postfix: "-"
                    },
                    {
                        length: 4,
                        minValue: 1
                    }
                ]
            },
            options));
    };

    $.fn.iTimeNumberEntry = function (format, options) {
        var defaults = {
            linked: true,
            numberParts: []
        };

        if (!format) {
            defaults.numberParts.push({
                length: 2,
                maxValue: 23,
                postfix: ":"
            });
            defaults.numberParts.push({
                length: 2,
                maxValue: 59,
                postfix: ":",
                step: 15
            });
            defaults.numberParts.push({
                length: 2,
                maxValue: 59,
                step: 15
            });
        } else {
            var formatArray = format.toLowerCase().split(":");

            for (var i = 0; i < formatArray.length; i++) {
                var part = formatArray[i];

                if (part.indexOf("h") >= 0) {
                    defaults.numberParts.push({
                        length: 2,
                        maxValue: 23,
                        postfix: i + 1 < formatArray.length ? ":" : ""
                    });
                } else if (part.indexOf("m") >= 0) {
                    defaults.numberParts.push({
                        length: 2,
                        maxValue: 59,
                        postfix: i + 1 < formatArray.length ? ":" : "",
                        step: 15
                    });
                } else if (part.indexOf("s") >= 0) {
                    defaults.numberParts.push({
                        length: 2,
                        maxValue: 59,
                        step: 15
                    });
                }
            }
        }

        $(this).iNumberEntry($.extend(true, {}, defaults, options));
    };

    /*$.fn.iDecimalNumberEntry = function(decimalPlaces, options) {
	    $(this).iNumberEntry($.extend(true, {},
	        {
	            numberParts: [
	                {
	                    postfix: "."
	                },
	                {
	                	length: decimalPlaces
	                }
	            ]
	        },
	        options));
	}*/

    // TODO: consider how to make currency extension with commas when value is thousands+ and a non determined length
})(jQuery);