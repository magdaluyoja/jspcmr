<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
    protected $fillable = [
        'content_id','filename','created_at','updated_at'
    ];
    public function content()
    {
        return $this->hasOne('App\Content');
    }
}
