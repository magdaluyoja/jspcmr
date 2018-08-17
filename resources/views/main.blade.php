<!DOCTYPE html>
<html dir="ltr" lang="ja">
	<head>
	    @include('partials._head')
        @include('partials._css')
        @yield('css')
	</head>
	<body>
		@include('partials._header')
		@include('partials._topnav')
		@if(Request::is('/'))
			<div id="mainImg">
				<img src="/images/top_img.jpg" width="880" height="287" alt="">
			</div>
		@endif
		<div id="wrapper">
			<div id="content">
				@include('partials._messages')
				@yield('content')
			</div>
			@include('partials._sidebar')
		</div>
		@include('partials._footer')
        @include('partials._js')
        @yield('js')
	</body>
</html>