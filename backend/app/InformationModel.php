<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InformationModel extends Model
{
        protected $table = 'infotmation_etc';
        protected $primaryKey ='id';
        public $incrementing = false;
        protected $keyType='int';
        public $timestamps = false;
}
