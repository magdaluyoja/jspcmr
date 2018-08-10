<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Content extends Model
{
    use SoftDeletes;
    // public $table = "content";
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
    protected $dates = ['deleted_at'];

    protected $fillable = [
        'title','genre','link','slug','date','body','created_at','updated_at','deleted_at'
    ];

    public function attachments()
    {
        return $this->hasMany('App\Attachment');
    }
}