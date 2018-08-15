@if(Session::has("success"))
	<div class="alert alert-success" role="alert">
		<strong>成功した: </strong>{{ Session::get("success") }}
	</div>
@endif

@if(count($errors) > 0)
	<div class="alert alert-danger" role="alert">
		<strong>エラー:</strong>
		<ul>
			@foreach($errors->all() as $error)
				<li> {{ $error }} </li>
			@endforeach
		</ul>
	</div>
@endif