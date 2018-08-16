<?php

namespace App\Http\Middleware;

use Closure;
use Auth;
class MemberMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ( Auth::check() && Auth::user()->roles[0]->name === 'member' )
        {
            return $next($request);
        }else{
            return redirect('/');
        }
    }
}
