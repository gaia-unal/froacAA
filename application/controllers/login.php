<?php
/**
 * Created by PhpStorm.
 * User: danny
 * Date: 23/02/15
 * Time: 02:40 PM
 */
class Login extends CI_Controller{

    public function __construct() {
        parent::__construct ();

    }

    public function index() {
        $data = array(
            'view' => 'base/login/login_view'
        );
        $this->load->view('base/login/login_view', $data);
    }
}
?>
