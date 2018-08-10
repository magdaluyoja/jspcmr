<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $user->name = "JSPCMR Admin";
        $user->username = "jspcmr-admin";
        $user->email = "jimukyoku@ jspcmr.com";
        $user->password = bcrypt('b4rpnpezha');
        $user->profile_pic = '2.jpg';
        $user->user_type = 'admin';
        $user->created_at = date("Y-m-d H:i:s");
        $user->updated_at = date("Y-m-d H:i:s");
        $user->save();
    }
}
