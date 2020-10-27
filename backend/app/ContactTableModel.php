<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactTableModel extends Model
{
        protected $table = 'contact_table';
        protected $primaryKey ='id';
        public $incrementing = false;
        protected $keyType='int';
        public $timestamps = false;
}
