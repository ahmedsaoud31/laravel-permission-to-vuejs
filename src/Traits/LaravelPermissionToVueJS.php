<?php
namespace LaravelAndVueJS\Traits;
trait LaravelPermissionToVueJS
{
	public function getVuejsAuthAttribute()
	{
		return json_encode([
				'roles' => $this->getRoleNames(),
				'permissions' => $this->getAllPermissions()->pluck('name'),
			]);
	}
}
