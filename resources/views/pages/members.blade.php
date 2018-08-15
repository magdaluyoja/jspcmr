@section('title','事務局から投稿された情報')
@section('css')

@endsection
@extends('main')
@section('content')
	<section>
		<article class="content">
			<header>
				<h2 class="title first"><span>事務局から投稿された情報</span></h2>
			</header>
			<div class="post">
				{{ $member_contents->links() }}

				<table class="table">
					@foreach($member_contents as $content)
						<tr>
							<td class="td-date">{{date('Y/m/d', strtotime($content->date))}}</td>
							<td class="td-genre">
								<span class="bold label {{ ($content->genre === "society") ? "label-warning" : "label-success" }}">
									{{ ($content->genre === "society") ? "学会" : "その他" }}
								</span>
							</td>
							<td class="td-title"><a href="{{route('get_member_post',$content->id)}}" class="text-success">{{$content->title}}</a></td>
						</tr>
					@endforeach
				</table>
	            {{ $member_contents->links() }}
            </div>
		</article>
	</section>
@endsection
@section('js')

@endsection