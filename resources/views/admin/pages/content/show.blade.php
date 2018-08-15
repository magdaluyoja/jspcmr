@section('title',Auth::user()->name.' | コンテンツを表示する')
@section('css')

@endsection
@extends('admin.main')
@section('content')
	<header id="page-header">
		<h1>ダッシュボード - コンテンツを表示する</h1>
		<ol class="breadcrumb">
			<li><a href="/cms">ダッシュボード</a></li>
			<li><a href="/cms/content">コンテンツ</a></li>
			<li class="active">コンテンツを表示する</li>
		</ol>
	</header>
	<div id="content" class="padding-20">
		<div class="row">
	        <div class="col-md-12">
	        	@include('admin.partials._messages')
	        	<div class="panel panel-default">
					<div class="panel-heading panel-heading-transparent">
						<strong>コンテンツの詳細</strong>
					</div>

					<div class="panel-body">
						<a href="{{route('content.destroy', $content->id)}}" class="btn btn-sm btn-danger pull-right"
							onclick="if(confirm('このコンテンツを削除してもよろしいですか？')){document.getElementById('delete-form').submit();}else{return false;}"
						>削除</a>
						<form id="delete-form" action="{{ route('content.destroy',$content->id) }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                            <input type="hidden" name="_method" value="DELETE">
                        </form>
						<a href="{{route('content.edit', $content->id)}}" class="btn btn-sm btn-warning pull-right">編集</a>
						<div class="clearfix search-result">
							<h4><a href="#">{{ $content->title}}</a></h4>
							<small class="{{ ($content->genre === "society") ?  "text-success" : "text-info"}}">{{ $content->genre }}</small>
							<p>{{ $content->date }}</p>

							@if(! empty($content->attachments[0]))
								@if($content->attachments[0]->mime_type==="image")
									<div class="row col-sm-12 margin-bottom-10">
										<img src="/uploads/{{$content->attachments[0]->filename}}" alt="{{$content->attachments[0]->filename}}" class="img-responsive block-centered">
									</div >
								@endif
							@endif

							<div class="body row margin-top-10">
								<div class="col-sm-12">{!! $content->body !!}</div>
							</div>

							<div class="body row margin-top-10">
								<div class="col-sm-12"><a href="{{ $content->link }}" class="">{{ $content->link }}</a></div>
							</div>
							@foreach($content->attachments as $attachment)
	                			<div class="row">
	                    			<div class="col-sm-12 margin-top-10">

	            						<p>
	            							@if (strpos($attachment->filename, '.pdf'))
											   <a href="/uploads/{{$content->content_type}}{{$attachment->filename}}" target="_blank">{{$attachment->filename}}<img src="/images/pdf.png"></a>
											@else
												@if($loop->iteration != 1)
													<img src="/uploads/{{$content->content_type}}{{$attachment->filename}}" class="img-responsive" alt="{{$attachment->filename}}">
												@endif
											@endif
	            							
	            						</p>
	            					</div>
	            				</div>
	        				@endforeach
						</div>

					</div>
				</div>
	        </div>
	    </div>  
	</div>
@endsection
@section('js')
	<script type="text/javascript" src="/js/content.min.js"></script>
@endsection