<?php
require_once "../func/func.php";
$id = $_GET['id'];
$sw_API = "http://swapi.co/api/planets/".$id."/";
$data = getArrJson($sw_API);
//print_r("<pre>");
//print_r($data);
//print_r("</pre>");

$name = $data['name'];
$rotation_period = $data['rotation_period'];
$orbital_period = $data['orbital_period'];
$diameter = $data['diameter'];
$climate = $data['climate'];
$gravity = $data['gravity'];
$terrain = $data['terrain'];
$surface_water = $data['surface_water'];
$population = $data['population'];

$kData = array("Name","Rotation Period","Orbital Period","Diameter","Climate","Gravity","Terrain","Surface Water","Population");
$vData = array($name,$rotation_period,$orbital_period,$diameter,$climate,$gravity,$terrain,$surface_water,$population);
echo tbl("sTbl",8,$kData,$vData);
?>