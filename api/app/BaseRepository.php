<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BaseRepository
{
    protected $model;

    public function findAll()
    {
        return $this->model->all();
    }

    public function create(array $data)
    {
        return $this->model->create($data);
    }

    public function update(array $data, $id): mixed
    {
        return $this->model
            ->where('id', $id)
            ->update($data);
    }

    public function delete($id): mixed
    {
        return $this->model->destroy($id);
    }

}