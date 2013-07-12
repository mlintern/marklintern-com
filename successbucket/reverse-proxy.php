<?php
$fullPath = $_SERVER['REQUEST_URI'];

$newUrl = "http://www.compendiumblog.com/$fullPath";

$targetServer = "www.compendiumblog.com";
$fp = fsockopen($targetServer, 80, $errno, $errstr, 30);

$out = "GET $fullPath HTTP/1.0\r\n"
		. "Host: $targetServer\r\n"
		. "X-Compendium-ID: 758c2424-6055-4d3e-880c-4021718d814e\r\n"
		. "Connection: Close\r\n\r\n";
	$write = fwrite($fp, $out);
	
	$foundHeader = false;
	while (!feof($fp))
	{
		$val = fgets($fp);
		if (!$foundHeader)
		{
			if ($val == "\r\n")
			{
				$foundHeader = true;
			}
			else
			{
				$val = trim($val);
				header($val);
			}
		}
		else
		{
			echo $val;
		}
	}
	
	fclose($fp);
	
?>