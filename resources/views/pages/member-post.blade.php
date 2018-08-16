@if(count($member_content))
	@section('title','| 事務局から投稿された情報'.$member_content->title)
@else
	@section('title','| 事務局から投稿された情報 | 表示するデータはありません。')
@endif
@section('css')

@endsection
@extends('main')
@section('content')
	<section>
		<article class="content">
			<header>
				@if(!empty($member_content))
					<h2 class="title first"><span> {{ $member_content->title }}</span><span class="pull-right">{{ $member_content->date }}</span></h2> 
				@endif
			</header>
			<div class="post individual-post">
				@if(!empty($member_content))
					<div class="row col-sm-12">
						@if(! empty($member_content->attachments[0]))
							@if($member_content->attachments[0]->mime_type==="image")
								<img src="/uploads/{{$member_content->attachments[0]->filename}}" alt="{{$member_content->attachments[0]->filename}}" class="img-responsive block-centered">
							@endif
						@endif
					</div>
					<div class="body row margin-top-10">
						<div class="col-sm-12">{!! $member_content->body !!}</div>
					</div>
					<div class="row">
	            		<div class="col-sm-12 margin-top-10">	
							<a href="{{ $member_content->link }}">{{ $member_content->link }}</a>
						</div>
					</div>
					@foreach($member_content->attachments as $attachment)
	        			<div class="row">
	            			<div class="col-sm-12 margin-top-10">
								@if (strpos($attachment->filename, '.pdf'))
								   <a href="/uploads/{{$member_content->content_type}}{{$attachment->filename}}" target="_blank">{{$attachment->filename}}<img src="/images/pdf.png"></a>
								@else
									@if($loop->iteration != 1)
										<img src="/uploads/{{$member_content->content_type}}{{$attachment->filename}}" class="img-responsive" alt="{{$attachment->filename}}">
									@endif
								@endif
	    					</div>
	    				</div>
					@endforeach
				@else
					<p>
						表示するデータはありません。
					</p>
				@endif
            </div>
		</article>
	</section>
@endsection
@section('js')

@endsection