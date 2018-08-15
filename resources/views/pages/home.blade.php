@section('title','ホーム')
@section('css')

@endsection
@extends('main')
@section('content')
	<section>
		<article id="post-51" class="content">
			<header>
				<h2 class="title"><span>日本小児心臓MR研究会の取り組み</span></h2>
			</header>
			<div class="post toppage">
				<p><img src="/assets/web/images/banners/sample.jpg" alt="" width="231" height="143" class="alignleft" />本会 日本小児心臓MR研究会（略称JSPCMR）は， 小児成育医学領域における心血管MRIに関する研究と臨床応用の発展会員相互交流を目的として活動しています。<br><br>学術集会の開催 学術集会の開催 ，およびその他必要と認められる事業を行います。</p>
			</div>
		</article>
		<h2 class="title"><span>最新投稿</span></h2>
		<ul class="post">
			@foreach($contents as $content)
				<li>

					<div class="conten-prev-container">
						<div class="fading-div"><a href="{{ route('get_post',$content->id) }}" class="pull-right text-success">投稿を表示する</a></div>
						@if(! empty($content->attachments[0]))
							@if($content->attachments[0]->mime_type==="image")
								<img width="135" height="92" src="/uploads/{{$content->attachments[0]->filename}}" alt="">
							@endif
						@endif
						<h3><a href="{{ route('get_post',$content->id) }}"><b>{{ date('Y/m/d', strtotime($content->date))  }} {{ $content->title }}</b></a></h3>
						<p>{!! $content->body !!}</p>
					</div>
				</li>
			@endforeach
		</ul>
	</section>
@endsection
@section('js')

@endsection