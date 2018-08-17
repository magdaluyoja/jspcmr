<header id="header" role="banner">
	<div class="inner">
		<h1>
			日本小児心臓MR研究会学術研究会(Japanese Society of Pediatric Cardiac Magnetic Resonancece)
			<div class="pull-right">
				@if(Auth::user())
					{{-- @if(Auth::user()->roles[0]->name == "member") --}}
						<a  href="{{ route('logout') }}"
			                onclick="   event.preventDefault();
			                            document.getElementById('logout-form').submit();" class=" text-success">
			                ログアウト
			            </a>
			            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
			                {{ csrf_field() }}
			            </form>
			        {{-- @endif --}}
			    @else
			    	{{-- <a href="/login" class=" text-success">会員ログイン</a> --}}
				@endif
			</div>
		</h1>
		<h2><a href="/"><img src="/assets/web/images/banners/logo.png" alt=""></a></h2>
		<div class="contact">
			<p class="tel"></p>
			<p></p>
		</div>
	</div>
	
</header>