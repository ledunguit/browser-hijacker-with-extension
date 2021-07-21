<?php
class Config {
    public $config;
    public function __construct()
    {
        $this->config = array(
            'db' => array(
                'connectionString' => 'mysql:host=localhost;dbname=hijacker;charset=utf8',
                'emulatePrepare' => true,
                'username' => 'hijacker',
                'password' => 'Hijacker@123',
                'charset' => 'utf8',
            )
        );
    }
}

