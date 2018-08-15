<aside id="aside">
	<nav id="sideNav">
		<ul class="nav nav-list">
			<li class=" {{ Request::is('cms') ? 'active' : '' }}">
				<a class="dashboard" href="/cms">
					<i class="main-icon fa fa-dashboard"></i> <span>ダッシュボード</span>
				</a>
			</li>
			<li class=" {{ strpos(Request::url(), 'cms/content') ? 'active' : '' }}">
				<a class="dashboard" href="/cms/content">
					<i class="main-icon fa fa-newspaper-o"></i> <span>コンテンツ</span>
				</a>
			</li>
		</ul>
	</nav>

	<span id="asidebg"><!-- aside fixed background --></span>
</aside>