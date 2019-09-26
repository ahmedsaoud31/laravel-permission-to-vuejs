<?php
namespace LaravelAndVueJS;
trait LaravelPermissionToVueJS
{
    public function __construct()
	{
		$this->fillable[] = ['vuejs_auth'];
	}
	
    public function getVuejsAuthAttribute()
	{
        return json_encode([
				'roles' => $this->getRoleNames(),
				'permissions' => $this->getAllPermissions()->pluck('name'),
			]);
	}
}
