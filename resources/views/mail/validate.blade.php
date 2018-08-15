@section('title','情報の検証')
@extends('main')
@section('content')
    <section>
        <article class="content">
            <header>
                <h2 class="title first"><span>問い合わせ</span></h2>
            </header>
            <div class="post">
                    <form class="form-horizontal" name="frm-contact" action="{{route('send_mail')}}" method="POST" >
                        {{ csrf_field() }}
                        <div class="panel panel-danger" id="div-form">
                            <div class="panel-body">
                                <p>
                                    以下の情報を確認して[送信]をクリックすると、Eメールが送信されます。
                                </p>
                                <p>
                                    <div class="row">
                                        <div class="col-sm-3"><label>会社名 :</label></div>
                                        <div class="col-sm-9">{{ $data['facility_name'] }}</div>
                                    </div>
                                </p>
                                <p>
                                    <div class="row">
                                        <div class="col-sm-3"><label>氏　名 :</label></div>
                                        <div class="col-sm-9">{{ $data['name'] }}</div>
                                    </div>
                                </p>
                                <p>
                                    <div class="row">
                                        <div class="col-sm-3"><label>メールアドレス : </label></div>
                                        <div class="col-sm-9">{{ $data['email'] }}</div>
                                    </div>
                                </p>
                                <p>
                                    <div class="row">
                                        <div class="col-sm-3"><label>お問い合わせ内容 : </label></div>
                                        <div class="col-sm-9">{{ $data['inquiry_content'] }}</div>
                                    </div>
                                </p>
                                <p>
                                    <div class="row text-center">
                                        <input type="image" name="btn-send" src="/images/form_confirm_off.jpg">
                                    </div>
                                </p>
                            </div>
                        </div>
                    </form>
                </article>
            </div>
        </article>
    </section>  
@endsection
@section('js')

@endsection