<?php
if ($_GET["iconv_u_g"] === "true") {
    header("content-Type: text/html; charset=Utf-8");
//    echo mb_convert_encoding($_GET["importString"], "GBK", "UTF-8");
    echo iconv("UTF-8","GBK//IGNORE",$_GET["importString"]);
}
if ($_GET["iconv_g_u"] === "true") {
    header("charset=GB2312");
    echo iconv("GB2312", "UTF-8", $_GET["importString"]);
}