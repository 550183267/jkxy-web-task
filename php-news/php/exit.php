<?php
session_start () ;
unset($_SESSION['user']);
header("Location:../news.index.html");
?>