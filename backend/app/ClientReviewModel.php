<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChartReviewModel extends Model
{
   protected $table = 'client_review';
       protected $primaryKey ='id';
       public $incrementing = false;
       protected $keyType='int';
       public $timestamps = false;
}
