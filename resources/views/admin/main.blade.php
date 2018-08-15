<!DOCTYPE html>
<html lang="ja">
	<head>
	    @include('admin.partials._head')
        @include('admin.partials._css')
        @yield('css')
	</head>
	<body>
		<div id="wrapper">
			@include('admin.partials._sidebar')

			@include('admin.partials._header')
			<section id="middle">
				@yield('content')
			</section>
		</div>
		@include('admin.partials._js')
        @yield('js')
	</body>
</html>