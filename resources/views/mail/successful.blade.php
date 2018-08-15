@section('title','電子メールが正常に送信されました。')
@extends('main')
@section('content')
    <section>
        <article class="content">
            <header>
                <h2 class="title first"><span>問い合わせ</span></h2>
            </header>
            <div class="post">
                <div class="panel panel-success">
                    <div class="panel-body">
                    	<div class="alert alert-success fade in alert-dismissible" style="margin-top:18px;">
						    <strong>成功！</strong> 電子メールが正常に送信されました。
						</div>
                    </div>
                </div>
            </div>
        </article>
    </section>  
@endsection
@section('js')

@endsection