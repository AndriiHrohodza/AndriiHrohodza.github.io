<?php
$in = $_POST;$mes='';
if($in && is_array($in)) {foreach($in as $k=>$v) {if($k=='to') {$to = $v;}else{$mes .= $k.': '.$v.'<br>';}}
$headers = "From: " . strip_tags("noreply@".@$_SERVER['SERVER_NAME']) . "\r\n";
$headers .= "Reply-To: ". $to . "\r\n";$headers .= "MIME-Version: 1.0\r\n";$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
if(mail($to, "Mail from ".@$_SERVER['SERVER_NAME'], $mes, $headers)){die("1");}}
?>
