@section('title', Auth::user()->name.' | ホーム')
@section('css')

@endsection
@extends('admin.main')
@section('content')
	<header id="page-header">
		<h1>ダッシュボード</h1>
		<ol class="breadcrumb">
			<li class="active">ダッシュボード</li>
		</ol>
	</header>

	<div id="content" class="padding-20">
		ようこそ！
	</div>
@endsection
@section('js')
	<script type="text/javascript" src="/js/dashboard.min.js"></script>
@endsection