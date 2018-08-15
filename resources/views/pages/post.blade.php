@section('title', $content->title)
@section('css')

@endsection
@extends('main')
@section('content')
	<section>
		<article class="content">
			<header>
				<h2 class="title first"><span> {{ $content->title }}</span><span class="pull-right">{{ $content->date }}</span></h2> 
			</header>
			<div class="post individual-post">
				<div class="row col-sm-12">
					@if(! empty($content->attachments[0]))
						@if($content->attachments[0]->mime_type==="image")
							<img src="/uploads/{{$content->attachments[0]->filename}}" alt="{{$content->attachments[0]->filename}}" class="img-responsive block-centered">
						@endif
					@endif
				</div>
				<div class="body row margin-top-10">
					<div class="col-sm-12">{!! $content->body !!}</div>
				</div>
				<div class="row">
            		<div class="col-sm-12 margin-top-10">	
						<a href="{{ $content->link }}">{{ $content->link }}</a>
					</div>
				</div>
				@foreach($content->attachments as $attachment)
        			<div class="row">
            			<div class="col-sm-12 margin-top-10">
							@if (strpos($attachment->filename, '.pdf'))
							   <a href="/uploads/{{$content->content_type}}{{$attachment->filename}}" target="_blank">{{$attachment->filename}}<img src="/images/pdf.png"></a>
							@else
								@if($loop->iteration != 1)
									<img src="/uploads/{{$content->content_type}}{{$attachment->filename}}" class="img-responsive" alt="{{$attachment->filename}}">
								@endif
							@endif
    					</div>
    				</div>
				@endforeach
            </div>
		</article>
	</section>
@endsection
@section('js')

@endsection