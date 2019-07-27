
<meta charset="utf-8"> 
<?php
$urok="Урок 22";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['name']))			{$name			= $_POST['name'];		if ($name == '')	{unset($name);}}
if (isset($_POST['bussnes']))		{$bussnes		= $_POST['bussnes'];		if ($bussnes == '')	{unset($bussnes);}}
if (isset($_POST['specialist']))			{$specialist			= $_POST['specialist'];		if ($specialist == '')	{unset($text);}}
if (isset($_POST['time']))			{$time			= $_POST['time'];		if ($time == '')		{unset($time);}}
//стирание треугольных скобок из полей формы
if (isset($name) ) {
$name=stripslashes($name);
$name=htmlspecialchars($name);
}
if (isset($bussnes) ) {
$bussnes=stripslashes($bussnes);
$bussnes=htmlspecialchars($bussnes);
}
if (isset($specialist) ) {
$specialist=stripslashes($specialist);
$specialist=htmlspecialchars($specialist);
}
// адрес почты куда придет письмо
$address="ahrohodza1@gmail.com";
// текст письма 
$note_text="Тема : $urok \r\nИмя : $name \r\n Email : $bussnes \r\n Дополнительная информация : $specialist";

if (isset($name)  &&  isset ($time) ) {
mail($address,$urok,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
echo "<p style='color:#009900;'>Уважаемый(ая) <b>$name</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b> $bussnes</b>.</p>";
}

?>