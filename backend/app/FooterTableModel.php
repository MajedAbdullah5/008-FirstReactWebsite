<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FooterTableModel extends Model
{
        protected $table = 'footer_table';
        protected $primaryKey ='id';
        public $incrementing = false;
        protected $keyType='int';
        public $timestamps = false;
}
