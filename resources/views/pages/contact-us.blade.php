@section('title','お問い合わせ')
@section('css')

@endsection
@extends('main')
@section('content')
	<section>
		<article class="content">
			<header>
				<h2 class="title first"><span>お問い合わせ</span></h2>
			</header>
			<div class="post">
                {{-- <article class="post"> --}}

                    <div class="panel panel-success">
                        <div class="panel-body">
                            <p class="dateLabel">
                                <h2>(<span class="required">※</span>)印は必須項目となっております。</h2>
                            </p>
                    		<form class="form-horizontal" name="frm-contact" action="{{route('validate_mail')}}" autocomplete='off' method="POST" data-parsley-validate>
                                {{ csrf_field() }}
                                <div class="form-group">
                                    <label for="facility_name" class="col-sm-3 label-title control-label">施設名 (<span class="required">※</span>) : </label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" id="facility_name" name="facility_name" autocomplete='facility' data-parsley-required placeholder="施設名" value="{{ old('facility_name') }}">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="name" class="col-sm-3 label-title control-label">お名前 (<span class="required">※</span>) : </label>
                                    <div class="col-sm-8">
                                        <input type="text" class="form-control" id="name" name="name" autocomplete='name' data-parsley-required value="{{ old('name') }}" placeholder="お名前">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col-sm-3 label-title control-label">メールアドレス (<span class="required">※</span>) : </label>
                                    <div class="col-sm-8">
                                        <input type="email" class="form-control" id="email" name="email" autocomplete='email' data-parsley-required value="{{ old('email') }}" placeholder="メールアドレス">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="col-sm-3 label-title control-label">お問い合わせ内容 (<span class="required">※</span>) : </label>
                                    <div class="col-sm-8">
                                    	<textarea class="form-control" id="inquiry_content" name="inquiry_content" data-parsley-required value="{{ old('email') }}" rows="10">{{ old('inquiry_content') }}</textarea>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <p class="bold">すべての入力内容をご確認のうえ、「入力確認画面へ」ボタンを押してください。</p>
                                </div>
                                <div class="text-center">
                                    <input type="image" src="/images/form_confirm_off.jpg" name="submit_inquiry" value="submit_inquiry">
                                </div>
                            </form>
                        </div>
                    </div>
                {{-- </article> --}}
			</div>
		</article>
	</section>
@endsection
@section('js')

@endsection