<!doctype html>
<html lang="ja">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
        <title>JSPCMR ログイン</title>
        <meta name="description" content="" />
        <meta name="Jay-R A. Magdaluyo" content="" />
        <meta name="viewport" content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&amp;subset=latin,latin-ext,cyrillic,cyrillic-ext" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" type="text/css" href="/css/styles.min.css">
    </head>
    <body>
        <div class="padding-15">
            <div class="login-box">
                <form method="POST" action="{{ route('login') }}" class="sky-form boxed">
                    {{ csrf_field() }}
                    <header><i class="fa fa-users"></i> <strong>JSPCMR ログイン</strong></header>
                    <fieldset>  
                    
                        <section class="{{ $errors->has('email') ? ' has-error' : '' }}">
                            <label class="label bold">Eメール/ユーザー名</label>
                            <label class="input">
                                <i class="icon-append fa fa-user"></i>
                                <input id="email" type="text" class="form-control" name="email" value="{{ old('email') }}" required autofocus>
                                <span class="tooltip tooltip-top-right">メールアドレス/ユーザー名</span>
                                @if ($errors->has('email'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </label>
                        </section>
                        
                        <section class="{{ $errors->has('password') ? ' has-error' : '' }}">
                            <label class="label bold">パスワード</label>
                            <label class="input">
                                <i class="icon-append fa fa-lock"></i>
                                <input id="password" type="password" class="form-control" name="password" required>
                                <b class="tooltip tooltip-top-right">パスワードを入力してください</b>
                                @if ($errors->has('password'))
                                    <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </label>
                            <label class="checkbox">
                                <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}><i></i>ログイン状態を保つ
                            </label>
                        </section>

                    </fieldset>

                    <footer>
                        <button type="submit" class="btn btn-success pull-right">ログイン</button>
                        <div class="forgot-password pull-left">
                            <a href="{{ route('password.request') }}">パスワードを忘れた?</a> <br />
                        </div>
                    </footer>
                </form>
            </div>
        </div>
        <script type="text/javascript" src="/js/login.min.js"></script>
    </body>
</html>