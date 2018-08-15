<nav id="mainNav">
	<div class="inner">
		<a class="menu" id="menu"><span>MENU</span></a>
		<div class="menu-panel">
			<ul>
				<li class="{{ strpos(Request::url(), 'outline') ? 'active' : '' }}"><a href="/outline"><strong>研究会概要</strong><span>Outline</span></a>
					<ul class="sub-menu">
						<li class="{{ strpos(Request::url(), 'outline#greeting') ? 'active' : '' }}"><a href="/outline#greeting">ご挨拶</a></li>
						<li class="{{ strpos(Request::url(), 'outline#director') ? 'active' : '' }}"><a href="/outline#director">理事</a></li>
						<li class="{{ strpos(Request::url(), 'outline#constitution') ? 'active' : '' }}"><a href="/outline#constitution">会則</a></li>
					</ul>
				</li>
				<li class="{{ strpos(Request::url(), 'bureau') ? 'active' : '' }}"><a href="/bureau"><strong>事務局</strong><span>Bureau</span></a></li>
				<li class="{{ strpos(Request::url(), 'training') ? 'active' : '' }}"><a href="/training"><strong>研修コース案内</strong><span>Training</span></a></li>
				<li class="{{ strpos(Request::url(), 'conference') ? 'active' : '' }}"><a href="/conference"><strong>学術集会</strong><span>Conference</span></a></li>
				<li class="{{ strpos(Request::url(), 'contact-us') ? 'active' : '' }}"><a href="/contact-us"><strong>お問い合わせ</strong><span>Contact</span></a></li>
				<li class="{{ strpos(Request::url(), 'member') ? 'active' : '' }}"><a href="/member"><strong>会員ページ</strong><span>Member</span></a></li>
			</ul>
		</div>
	</div>
</nav>