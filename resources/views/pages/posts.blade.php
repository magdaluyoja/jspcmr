@section('title','すべての記事')
@section('css')

@endsection
@extends('main')
@section('content')
	<section>
		<article class="content">
			<header>
				<h2 class="title first"><span>すべての記事</span></h2>
			</header>
			<div class="post">
                @if(count($all_contents))
                    {{ $all_contents->links() }}
                    <ul class="post">
                        @foreach($all_contents as $content)
                            <li>
                                <div class="conten-prev-container">
                                    <div class="fading-div"><a href="{{ route('get_post',$content->slug) }}" class="pull-right text-success">投稿を表示する</a></div>
                                    @if(! empty($content->attachments[0]))
                                        @if($content->attachments[0]->mime_type==="image")
                                            <img width="135" height="92" src="/uploads/{{$content->attachments[0]->filename}}" alt="{{$content->attachments[0]->filename}}">
                                        @endif
                                    @endif
                                    <h3><a href="{{ route('get_post',$content->slug) }}"><b>{{ date('Y/m/d', strtotime($content->date))  }} {{ $content->title }}</b></a></h3>
                                    <p>{!! $content->body !!}</p>
                                </div>
                            </li>
                        @endforeach
                    </ul>
                    {{ $all_contents->links() }}
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