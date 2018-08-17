<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Content;
class MemberController extends Controller
{
    public function __construct(){
    	$this->middleware('member');
    }
    public function getMembers(){
    	$contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
    	$member_contents = Content::where('created_by','=','member')->orderby("id","desc")->paginate(5);
        $paging = $member_contents->currentPage()."of".$member_contents->total();
        return view('pages.members')->with("member_contents",$member_contents)->with("paging",$paging)->with('contents',$contents);
    }
    // public function getMemberPost($id){
    public function getMemberPost($slug){
    	$contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        // $member_content = Content::where('created_by','=','member')->find($id);
        $member_content = Content::where([['created_by','=','member'],['slug','=',$slug]])->first();
        return view('pages.member-post')->with("contents",$contents)->with("member_content",$member_content);
    }
}
