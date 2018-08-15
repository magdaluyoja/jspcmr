<header id="header">
	<button id="mobileMenuBtn"></button>
	<span class="logo pull-left">
		{{-- <img src="/assets/admin/images/logo_light.png" alt="admin panel" height="35" /> --}}
		<a href="/admin"><h2  class="text-white text-center"><strong>JSPCMR</strong></h2></a>
	</span>
	<nav>
		<ul class="nav pull-right">
			<li class="dropdown pull-left">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
					<img class="user-avatar" alt="" src="/assets/admin/images/noavatar.png" height="34" /> 
					<span class="user-name">
						<span class="hidden-xs">
							{{ Auth::user()->name }} <i class="fa fa-angle-down"></i>
						</span>
					</span>
				</a>
				<ul class="dropdown-menu hold-on-click">
					<li>
						<a  href="{{ route('logout') }}"
                            onclick="   event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                        <i class="fa fa-power-off"></i>
                            ログアウト
                        </a>
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            {{ csrf_field() }}
                        </form>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</header>	