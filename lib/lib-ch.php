<?php
require_once "../func/func.php";
$id = $_GET['id'];
$sw_API = "http://swapi.co/api/people/".$id."/";
$data = getArrJson($sw_API);
//print_r("<pre>");
//print_r($data);
//print_r("</pre>");

$name = $data['name'];
$height = $data['height'];
$mass = $data['mass'];
$hair_color = $data['hair_color'];
$skin_color = $data['skin_color'];
$eye_color = $data['eye_color'];
$birth_year = $data['birth_year'];
$gender = $data['gender'];

$kData = array("Name","Height","Mass","Hair Color","Skin Color","Eye Color","Birth Year","Gender");
$vData = array($name,$height,$mass,$hair_color,$skin_color,$eye_color,$birth_year,$gender);
echo tbl("iTbl",7,$kData,$vData);

?>