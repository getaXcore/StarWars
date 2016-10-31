<?php
function getArrJson($source){
	$sr = $source;
	$response = file_get_contents($sr);
	$data = json_decode($response,true);
	return $data;
}
function tbl($id,$nRow,$kData,$vData){
	$html = "<table id=$id>";
	for($i=0;$i<=$nRow;$i++){
		$html.= "\t<tr>";
		$html.= "\t\t<td>$kData[$i]</td>";
		$html.= "\t\t<td>: $vData[$i]</td>";
		$html.= "\t</tr>";
	}
	$html.= "</table>";
	return $html;
}


?>