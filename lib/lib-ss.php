<?php
require_once "../func/func.php";
$id = $_GET['id'];
$sw_API = "http://swapi.co/api/starships/".$id."/";
$data = getArrJson($sw_API);
//print_r("<pre>");
//print_r($data);
//print_r("</pre>");

$name = $data['name'];
$model = $data['model'];
$manufacturer = $data['manufacturer'];
$cost_in_credits = $data['cost_in_credits'];
$length = $data['length'];
$max_atmosphering_speed = $data['max_atmosphering_speed'];
$crew = $data['crew'];
$passengers = $data['passengers'];
$cargo_capacity = $data['cargo_capacity'];
$consumables = $data['consumables'];
$hyperdrive_rating = $data['hyperdrive_rating'];
$MGLT = $data['MGLT'];
$starship_class = $data['starship_class'];

$kData = array("Name","Model","Manufacturer","Cost In Credits","Length","Max Atmosphering Speed","Crew","Passenger","Cargo Capacity","Consumables","Hyperdrive Rating","MGLT","Starship Class");
$vData = array($name,$model,$manufacturer,$cost_in_credits,$length,$max_atmosphering_speed,$crew,$passengers,$cargo_capacity,$consumables,$hyperdrive_rating,$MGLT,$starship_class);
echo tbl("aTbl",12,$kData,$vData);
?>