<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseTableModel extends Model
{
       protected $table = 'course_table';
       protected $primaryKey ='id';
       public $incrementing = false;
       protected $keyType='int';
       public $timestamps = false;
}
