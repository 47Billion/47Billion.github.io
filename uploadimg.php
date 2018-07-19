<?php
// echo '<pre>'; print_r($_FILES);
$hostURL = $_SERVER['HTTP_HOST'];
if(!empty($_FILES) && isset($_FILES['file']))
{
    $size = $_FILES['file']['size'];
    $type = $_FILES['file']['type'];
    $tmpPath = $_FILES['file']['tmp_name'];
    $name = $_FILES['file']['name'];

    $targetPath = "uploads/"; // target path where image will upload

    //use move_uploaded_file function to upload or move file to the given folder or path
    if(move_uploaded_file($tmpPath, $targetPath.$name))
    {
        $data['status'] = 'success';
        $data['msg'] = 'File Successfully uploaded';
        $data['imgsrc'] = $hostURL.'/'.$targetPath.$name;
    }
    else
    {
        $data['status'] = 'error';
        $data['msg'] = 'somthing went wrong';
    }
}
else
{
    $data['status'] = 'error';
    $data['msg'] = 'please upload image';
}
echo json_encode($data);

?>
