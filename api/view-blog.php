<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    
    // include db connection!
    include('./db.php');
    
    // sql query to get the blogs!
    $getBlog = "SELECT * FROM `blog`";
    $getBlogStatus = mysqli_query($conn,$getBlog) or die(mysqli_error($conn));

    // check if there is blogs in the db!
    if(mysqli_num_rows($getBlogStatus) > 0){

        $getAllBlog = mysqli_fetch_all($getBlogStatus,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"blogs"=>$getAllBlog]);
    
    }
    else{

        echo json_encode(["success"=>0]);
    
    }
?>