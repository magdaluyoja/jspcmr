<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\Content;
use App\Attachment;
use Session;
use Auth;
class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contents = Content::where('created_by','=',Auth::user()->roles[0]->name)->orderby("id","desc")->paginate(5);
        $paging = $contents->currentPage()."of".$contents->total();
        return view('admin.pages.content.index')->with("contents",$contents)->with("paging",$paging);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.pages.content.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::beginTransaction();

        $input_data = $request->all();

        $this->validate($request, array(
            "date"=>"required|date",
            "title"=>"required|max:255",
            "genre"=>"required",
            "slug"=>"required|unique:contents",
        ));
        if($request->link){
            $this->validate($request, array(
            "link"=>"url",
        ));
        }
        $content = new Content;
        $content->title = $request->title;
        $content->genre = $request->genre;
        $content->link = $request->link;
        $content->body = $request->body;
        $content->slug = str_replace(' ', '-', $request->slug);
        $content->created_by = Auth::user()->roles[0]->name;
        $content->date = $request->date;
        $content->save();

        $files =  $request->file('attachment');
        if(!is_null($files)){
            $validator = Validator::make(
                $input_data, [
                'attachment.*' => 'mimes:jpg,jpeg,png,pdf|max:30720'
                ],[
                    'attachment.*.mimes' => 'jpeg、png、およびpdfファイルのみが許可されます',
                    'attachment.*.max' => 'ごめんなさい！イメージの最大許容サイズは30 MBです',
                ]
            );

            if ($validator->fails()) {
                $messages = $validator->messages();
                foreach ($messages->messages() as $key => $value) {
                    foreach ($value as $errMsg) {
                        $validator->errors()->add($key, "$errMsg");
                    }
                }
                DB::rollBack();
                return redirect()->back()->withErrors($validator->errors());
                exit();
            }else{
                foreach ($files as $file) {
                    $filename = $file->getClientOriginalName();
                    $file->move("uploads/".$request->content_type ,$filename);
                    $mime_type = explode('/', $file->getClientMimeType())[0];
                    $attachment = new Attachment;
                    $attachment->content_id = $content->id;
                    $attachment->filename = $filename;
                    $attachment->mime_type = $mime_type;
                    $attachment->save();
                }
            }
        }
        DB::commit();
        Session::flash("success","新しいコンテンツが正常に保存されました.");
        return redirect()->route("content.show", $content->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $content = Content::find($id);
        return view("admin.pages.content.show")->with("content",$content);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $content = Content::find($id);
        return view("admin.pages.content.edit")->with("content",$content);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        DB::beginTransaction();

        $input_data = $request->all();

        $content = Content::find($id);
        $this->validate($request, array(
            "date"=>"required|date",
            "title"=>"required|max:255",
            "genre"=>"required",
            "slug"=>"required|unique:contents,slug,{$request->slug},slug",
        ));


        $content->title = $request->title;
        $content->genre = $request->genre;
        $content->link = $request->link;
        $content->body = $request->body;
        $content->slug = str_replace(' ', '-', $request->slug);
        $content->created_by = Auth::user()->roles[0]->name;
        $content->date = $request->date;
        $content->save();

        $files =  $request->file('attachment');
        
        if(!is_null($files)){
            $validator = Validator::make(
                $input_data, [
                'attachment.*' => 'mimes:jpg,jpeg,png,pdf|max:30720'
                ],[
                    'attachment.*.mimes' => 'jpeg、png、およびpdfファイルのみが許可されます',
                    'attachment.*.max' => 'ごめんなさい！イメージの最大許容サイズは2 MBです',
                ]
            );

            if ($validator->fails()) {
                $messages = $validator->messages();
                foreach ($messages as $key => $messageIndex) {
                    
                }
                foreach ($messages->messages() as $key => $value) {
                    foreach ($value as $errMsg) {
                        $validator->errors()->add($key, "$errMsg");
                    }
                }
                DB::rollBack();
                return redirect()->back()->withErrors($validator->errors());
                exit();
            }else{
                foreach ($files as $file) {
                    $filename = $file->getClientOriginalName();
                    $mime_type = explode('/', $file->getClientMimeType())[0];
                    $file->move("uploads/".$request->content_type ,$filename);

                    $attachment = new Attachment;
                    $attachment->content_id = $content->id;
                    $attachment->filename = $filename;
                    $attachment->mime_type = $mime_type;
                    $attachment->save();
                }
            }
        }

        DB::commit();
        Session::flash("success","コンテンツは正常に更新されました。");
        return redirect()->route("content.show", $content->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $content = Content::find($id);
        $content->delete();
        Session::flash("success","コンテンツは削除されました。");
        return redirect()->route("content.index");
    }
    public function deleteAttachment(Request $request){
        
        $contentid = $request->content_id;
        $attachment_id = $request->attachment_id;
        $attachment = Attachment::find($attachment_id);

        $a = $attachment->forceDelete();
        $content = Content::find($contentid);
        return redirect()->route("content.edit", $contentid);
    }
}
