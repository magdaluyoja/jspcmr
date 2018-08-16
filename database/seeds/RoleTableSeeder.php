<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
	    $role_admin = new Role();
	    $role_admin->name = 'admin';
	    $role_admin->description = 'An Admin User';
	    $role_admin->save();

	    $role_admin = new Role();
	    $role_admin->name = 'admin-member';
	    $role_admin->description = 'An Admin Member User';
	    $role_admin->save();

	    $role_member = new Role();
	    $role_member->name = 'member';
	    $role_member->description = 'A Member User';
	    $role_member->save();
	}
}
