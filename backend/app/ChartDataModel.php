<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ChartDataModel extends Model
{
    protected $table = 'chart_data';
    protected $primaryKey ='id';
    public $incrementing = false;
    protected $keyType='int';
    public $timestamps = false;
}
