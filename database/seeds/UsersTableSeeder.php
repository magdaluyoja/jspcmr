<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_admin = Role::where('name', 'admin')->first();
        $role_member  = Role::where('name', 'member')->first();

        $admin = new User();
        $admin->name = "JSPCMR Admin";
        $admin->username = "jspcmr-admin";
        $admin->email = "jimukyoku@jspcmr.com";
        $admin->password = bcrypt('b4rpnpezha');
        $admin->profile_pic = '2.jpg';
        // $admin->user_type = 'admin';
        $admin->created_at = date("Y-m-d H:i:s");
        $admin->updated_at = date("Y-m-d H:i:s");
        $admin->save();
        $admin->roles()->attach($role_admin);

        $member = new User();
        $member->name = "JSPCMR Member";
        $member->username = "jspcmr-member";
        $member->email = "info@jspcmr.sakura.ne.jp";
        $member->password = bcrypt('jspcmr-123456');
        $member->profile_pic = '2.jpg';
        // $member->user_type = 'member';
        $member->created_at = date("Y-m-d H:i:s");
        $member->updated_at = date("Y-m-d H:i:s");
        $member->save();
        $member->roles()->attach($role_member);
    }
}
