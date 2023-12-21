<?php

// jwt token
require_once('../vendor/autoload.php');

use Firebase\JWT\JWT;
use Firebase\JWT\Key;



// KEY
$jwt_token_key = "mwandamena";
$payload = [
    "id" => "1",
    "user" => "Mwandamena",
    "role" => "admin"
];

// encode toaken
$encoded_token = JWT::encode($payload, $jwt_token_key, 'HS256');

$headers = getallheaders();


try {

    header("Access-Control-Allow-Origin: http://localhost:5173");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header('Content-Type: application/json');
    header("Access-Control-Allow-Headers: origin, X-requested-with, Content-Type, Accept, Authorization");


        if($_SERVER['REQUEST_METHOD'] === "GET"){

            if(!isset($headers["Authorization"])){
                http_response_code(401);
                echo json_encode(["Error"=> "Unauthorized: Token Missing"]);
                exit;
            }

            $token = str_replace('Bearer ', '', $headers['Authorization']);

            $decoded = JWT::decode($token, new Key($jwt_token_key, 'HS256'));

            if($decoded->id !== $payload['id'] || $decoded->user !== $payload['user']){
                http_response_code(402);
                echo json_encode(["Error" => "Wrong Token"]);
                exit;
            } else {

                $api = "https://api.spacexdata.com/v3/rockets";
            
                $res = file_get_contents($api);
            
                if($res === false){
                    die("Error Fetching Data from the api");
                }
            
            
                $rockets = json_decode($res);
                echo json_encode($rockets);
            }

        
        }


} catch (Exception $error) {
    http_response_code(401);
    echo json_encode(["Error" => "Unathourized"]);
    exit();
}

?>