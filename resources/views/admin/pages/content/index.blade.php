@section('title',Auth::user()->name.' | コンテンツ')
@section('css')

@endsection
@extends('admin.main')
@section('content')
	<header id="page-header">
		<h1>ダッシュボード - コンテンツ</h1>
		<ol class="breadcrumb">
			<li><a href="#">ダッシュボード</a></li>
			<li class="active">コンテンツ</li>
		</ol>
	</header>

	<div id="content" class="padding-20">
		<div class="row">
	        <div class="col-md-12">
	        	@include('admin.partials._messages')
	        	<div class="panel panel-default">
					<div class="panel-heading panel-heading-transparent">
						<strong>コンテンツリスト</strong>
					</div>

					<div class="panel-body">
						<p><a href="{{route("content.create")}}" class="btn btn-sm btn-success">コンテンツを作成する</a></p>
						{{ $contents->links() }}
						<ul class="comment list-unstyled">
							@foreach($contents as $content)
								<li class="comment border-bottom-dashed {{{ (($loop->iteration % 2 ) != 0) ? "content-odd" :"content-even" }}}">
									@if(! empty($content->attachments[0]))
										@if($content->attachments[0]->mime_type==="image")
											<img class="avatar" src="/uploads/{{ $content->attachments[0]->filename }}" width="50" height="50" alt="avatar">
										@else
											<img class="avatar" src="/images/{{ $content->genre }}.png" width="50" height="50" alt="avatar">
										@endif
									@else
										<img class="avatar" src="/images/{{ $content->genre }}.png" width="50" height="50" alt="avatar">
									@endif
									
									<div class="comment-body"> 
										<a href="{{ route('content.show',$content->id) }}" class="comment-author">
											<div class="size-18">{{ $content->title }}</div>
										</a>
										<p class="text-muted"> {{ $content->genre }} </p>
										<div class="body">
											<div class="row">
												<div class="col-sm-12">
													<div class="content-body">
														{!! $content->body !!}
													</div>
												</div>	
												<div class="col-sm-12 btn-container">
													<ul class="list-inline size-1">
														<li>
															<a href="#" class="text-danger" 
																onclick="if(confirm('このコンテンツを削除してもよろしいですか？')){
																	event.preventDefault();
									                                document.getElementById('delete-form').submit();}"
									                        >削除</a>
									                        <form id="delete-form" action="{{ route('content.destroy',$content->id) }}" method="POST" style="display: none;">
									                            {{ csrf_field() }}
									                            <input type="hidden" name="_method" value="DELETE">
									                        </form>
														</li>
														<li class="pull-left">
															<a href="{{ route('content.show',$content->id) }}" class="text-info">ビュー</a>
														</li>
														<li class="pull-left">
															<a href="{{ route('content.edit',$content->id) }}" class="text-warning">編集</a>
														</li>
													</ul>
												</div>		
											</div>
										</div>
									</div>
								</li>
							@endforeach
						</ul>
						{{ $contents->links() }}
					</div>
				</div>
	        </div>
	    </div>  
	</div>
@endsection
@section('js')
	<script type="text/javascript" src="/js/dashboard.min.js"></script>
@endsection