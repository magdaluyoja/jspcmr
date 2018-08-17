@section('title',Auth::user()->name.' | 新しいコンテンツを作成する')
@section('css')

@endsection
@extends('admin.main')
@section('content')
	<header id="page-header">
		<h1>ダッシュボード - 新しいコンテンツを作成する</h1>
		<ol class="breadcrumb">
			<li><a href="/cms">ダッシュボード</a></li>
			<li><a href="/cms/content">コンテンツ</a></li>
			<li class="active">新しいコンテンツを作成する</li>
		</ol>
	</header>
	<div id="content" class="padding-20">
		<div class="row">
	        <div class="col-md-12">
	        	@include('admin.partials._messages')
	        	<div class="panel panel-default">
					<div class="panel-heading panel-heading-transparent">
						<strong>新しいコンテンツ</strong>
					</div>

					<div class="panel-body">
						<form class="form-horizontal" action="{{route('content.store')}}" method="POST" id="frm-new-content" enctype="multipart/form-data" data-parsley-validate autocomplete="off">
	                	{{ csrf_field() }}
		                    <div class="card-body wizard-content">
		                        <div class="form-group row">
		                            <label for="date" class="bold col-sm-3 control-label col-form-label">投稿日 <span class="text-danger">*</span></label>
		                            <div class="col-sm-8">
		                                <input  type="text" class="form-control datepicker" name="date" id="date" placeholder="投稿日 yyyy-mm-dd" data-parsley-required value="{{ old('date') }}">
		                            </div>
		                        </div>
		                        <div class="form-group row">
		                            <label for="title" class="bold col-sm-3 control-label col-form-label">タイトル <span class="text-danger">*</span></label>
		                            <div class="col-sm-8">
		                                <input  type="text" class="form-control" id="title" name="title" placeholder="タイトル" data-parsley-required value="{{ old('title') }}">
		                            </div>
		                        </div>
		                        <div class="form-group row">
		                            <label for="slug" class="bold col-sm-3 control-label col-form-label">Slug <span class="text-danger">*</span></label>
		                            <div class="col-sm-8">
		                                <input  type="text" class="form-control" id="slug" name="slug" placeholder="Slug" data-parsley-required value="{{ old('slug') }}">
		                                <small class="text-muted block">これは、IDを使用する代わりにURLで使用されます。</small>
		                            </div>
		                        </div>
		                        <div class="form-group row">
		                            <label for="genre" class="bold col-sm-3 control-label col-form-label">ジャンル <span class="text-danger">*</span></label>
		                            <div class="col-sm-8">
		                                <select class="form-control required" id="genre" name="genre" data-parsley-required>
		                                    <option value="">--ジャンル--</option>
		                                    <option value="society" {{(old('genre')==="society") ? "selected" : ""}}>社会</option>
		                                    <option value="others" {{(old('genre')==="others") ? "selected" : ""}}>その他</option>
		                                </select>
		                            </div>
		                        </div>
		                        <div class="form-group row">
		                            <label class="bold col-sm-3 control-label col-form-label" for="pdf-attachment">ファイル <span class="text-danger">&nbsp;</span></label>
		                            <div class="col-sm-8">
		                            	<div class="fancy-file-upload fancy-file-primary">
											<i class="fa fa-upload"></i>
											<input type="file" class="form-control" id="pdf-attachment" name="attachment[]" multiple>
											<input type="text" class="form-control" placeholder="ファイルを参照" readonly="">
											<span class="button">ブラウズ</span>
										</div>
										<small class="text-muted block">複数のアップロード - 最大ファイルサイズ: 30Mb (pdf/jpg/png)。 最初のファイルが画像の場合、サムネイル画像として使用されます。</small>
										<div class="div-list"></div>
		                            </div>
		                        </div>
		                         <div class="form-group row">
		                            <label for="link" class="bold col-sm-3 control-label col-form-label">リンク <span class="text-danger">&nbsp;</span></label>
		                            <div class="col-sm-8">
		                                <input  type="text" class="form-control" id="link" name="link" placeholder="リンク" data-parsley-required value="{{ old('link') }}">
		                            </div>
		                        </div>
		                        <div class="form-group row margin-bottom-20">
		                            <label class="bold col-sm-3 control-label col-form-label" for="content">コンテンツ <span class="text-danger">&nbsp;</span></label>
		                            <div class="col-sm-8">
		                                <textarea class="summernote form-control" name="body" data-height="200" data-lang="ja-JP">{!! old('body') !!}</textarea>
		                            </div>
		                        </div>
		                    </div>
		                    <div class="panel-footer">
		                    	<div class="form-group row">
			                    	<label class="col-sm-3">&nbsp;</label>
		                            <div class="col-sm-8">
		                                <button type="submit" class="btn btn-primary btn-block pull-right">Submit</button>
		                            </div>
		                        </div>
		                    </div>
		                </form>
					</div>
				</div>
	        </div>
	    </div>  
	</div>
@endsection
@section('js')
	<script type="text/javascript" src="/js/content.min.js"></script>
@endsection