<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // include db connection!
    include('./db.php');

    // get id
    $id = $_GET['id'];

    // sql query to delete data!
    $deleteBlog = "DELETE FROM `blog` WHERE `id` = '$id' LIMIT 1";
    $deleteBlogStatus = mysqli_query($conn,$deleteBlog) or die(mysqli_error($conn));

    if($deleteBlogStatus) { // if successfully executed!

        echo json_encode([
            "deleteStatus"=>1
        ]);
    
    } else {

        echo json_encode([
            "deleteStatus"=>0
        ]);

    }
?>