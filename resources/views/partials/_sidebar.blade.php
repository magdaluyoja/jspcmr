<aside id="sidebar">
	<section class="widgetInfo">
		<div class="newsTitle">
			<h3 class="title"><span>お知らせ</span></h3>
			<p><a href="/posts">一覧</a>
		</div>
		<div class="post news">
			@foreach($contents as $content)
			<p><a href="{{ route('get_post',$content->id) }}"><time datetime="{{ date('Y/m/d', strtotime($content->date))  }}">{{ date('Y/m/d', strtotime($content->date))  }}</time><span>{{ $content->title }}</span></a>
			@endforeach
		</div>
	</section>
	<p class="banner">
		<a href="#"><img src="/assets/web/images/banners/side_banner2_df.jpg" alt="" /></a>
	</p>

</aside>