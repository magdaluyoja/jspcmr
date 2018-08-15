<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Content;
use Session;
use Mail;

class PagesController extends Controller
{
    public function getIndex(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
    	return view('pages.home')->with("contents",$contents);
    }
    public function getOutline(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        return view('pages.outline')->with("contents",$contents);
    }
    public function getBureau(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        return view('pages.bureau')->with("contents",$contents);
    }
    public function getTraining(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
    	return view('pages.training')->with("contents",$contents);
    }
    public function getConference(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        return view('pages.conference')->with("contents",$contents);
    }
    public function getContactUs(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        return view('pages.contact-us')->with("contents",$contents);
    }
    public function getPosts(){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        $all_contents = Content::where('created_by','=','admin')->orderby("id","desc")->paginate(5);
        $paging = $all_contents->currentPage()."of".$all_contents->total();
        return view('pages.posts')->with("contents",$contents)->with("all_contents",$all_contents)->with("paging",$paging);
    }
    public function getPost($id){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        $content = Content::where('created_by','=','admin')->find($id);
    	return view('pages.post')->with("contents",$contents)->with('content', $content);;
    }
    public function validateMail(Request $request){
        $contents = Content::where('created_by','=','admin')->orderby("updated_at","desc")
                    ->limit(5)
                    ->get();
        $this->validate($request, array(
            "facility_name"=>"required",
            "name"=>"required",
            "email"=>"required|email",
            "inquiry_content"=>"required",
        ));
        $data = $request->all();
        $request->session()->put($data);

        return view('mail.validate')->with('data', $data)->with("contents",$contents);
    }
    public function sendMail(){
        $data = session()->all();
        Mail::send(['text' => 'mail.temp_user'], $data, function($message) use($data){
            $message->to($data["email"])->subject("Inquiry Details");
        });
        Mail::send(['text' => 'mail.temp_admin'], $data, function($message) use($data){
            $message->to(env("MAIL_FROM_ADDRESS", "info@jspcmr.sakura.ne.jp"))->subject("Inquiry Details");
            // $message->to("magdaluyoja@gmail.com")->subject("Inquiry Details");
        });
        Session::flash("success","電子メールが正常に送信されました。.");
        return redirect()->route("contact_us");
    }
}
