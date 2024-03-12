<?php
 
namespace App\Controllers;
 
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;
 
class User extends ResourceController
{
    use ResponseTrait;
    // all users
    public function index()
    {
        $model = new UserModel();
        $data['user'] = $model->orderBy('id', 'DESC')->findAll();
        return $this->respond($data);
    }
    // create
    public function create()
    {
        $model = new UserModel();
        $data = [
            'username' => $this->request->getVar('username'),
            'password'  => $this->request->getVar('password'),
            'email'  => $this->request->getVar('email'),
            'nama'  => $this->request->getVar('nama'),
            'foto'  => $this->request->getVar('foto'),
        ];

        $model->insert($data);
        $response = [
            'status'   => 201,
            'error'    => null,
            'messages' => [
                'success' => 'User berhasil didaftarkan.'
            ]
        ];
        return $this->respondCreated($response);
    }
    // // single user
    public function show($id = null)
    {
        $model = new UserModel();
        $data = $model->where('id', $id)->first();
        if ($data) {
            return $this->respond($data);
        } else {
            return $this->failNotFound('Data tidak ditemukan.');
        }
    }
    // // update
    // public function update($id = null)
    // {
    //     $model = new ProductModel();
    //     $id = $this->request->getVar('id');
    //     $data = [
    //         'nama_produk' => $this->request->getVar('nama_produk'),
    //         'harga'  => $this->request->getVar('harga'),
    //     ];
    //     $model->update($id, $data);
    //     $response = [
    //         'status'   => 200,
    //         'error'    => null,
    //         'messages' => [
    //             'success' => 'Data produk berhasil diubah.'
    //         ]
    //     ];
    //     return $this->respond($response);
    // }
    // // delete
    // public function delete($id = null)
    // {
    //     $model = new ProductModel();
    //     $data = $model->where('id', $id)->delete($id);
    //     if ($data) {
    //         $model->delete($id);
    //         $response = [
    //             'status'   => 200,
    //             'error'    => null,
    //             'messages' => [
    //                 'success' => 'Data produk berhasil dihapus.'
    //             ]
    //         ];
    //         return $this->respondDeleted($response);
    //     } else {
    //         return $this->failNotFound('Data tidak ditemukan.');
    //     }
    // }
}