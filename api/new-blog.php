<?php
    //header
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);

    // include db connection
    include('./db.php');

    // declaring variables
    $name = "";
    $wish = "";
    $createdAt = date('d-m-Y H:i');

    // getting form data
    if(isset($_POST['name'])) {
        $name = $_POST['name'];
    }

    if(isset($_POST['wish'])) {
        $wish = $_POST['wish'];
    }

    if($name == "" && $wish == "") die(); // for empty form, the process will die!

    if($_POST) {
        $insertBlog = "INSERT INTO blog(`name`,`wish`,`createdAt`) VALUES('$name','$wish','$createdAt')";
        $insertBlogStatus = mysqli_query($conn,$insertBlog) or die(mysqli_error($conn));

        if($insertBlogStatus) { // if blog inserted in db!
            echo json_encode(array(
                "sent" => true
            ));
        } else {
            echo json_encode(["sent" => false, "message" => "Unable to Upload Blog"]);
        }
    } else {
        echo json_encode(["sent" => false, "message" => "Something went wrong"]);
    }

?>