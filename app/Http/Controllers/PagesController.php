<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function getIndex(){
    	return view('pages.home');
    }
    public function getOutline(){
    	return view('pages.outline');
    }
}
