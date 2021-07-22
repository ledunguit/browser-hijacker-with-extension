<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once './db.php';
require_once './config.php';

if (isset($_POST['data'])) {
    var_dump($_POST['data']);
    $db = new Database();
    try {
        $db->insertInto('data', 'value', ':value')
            ->execute(array(
                'value' => $_POST['data'],
            ));
        echo 'Đã thêm vào cơ sở dữ liệu';
    } catch (\Exception $e) {
        throw new \Exception('Nothing here');
    }
}
