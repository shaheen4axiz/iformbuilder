<?php
header("Access-Control-Allow-Origin: *");
include 'iformbuilder_api.php';
$instance = new iformbuilder_api();
$postdata = file_get_contents("php://input");
$token =  $instance->getToken();
$id = $instance->saveData($postdata,$token);
echo json_encode(array('id'=>$id));

