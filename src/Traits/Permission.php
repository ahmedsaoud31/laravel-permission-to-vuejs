<?php
namespace LaravelAndVueJS\Traits;
trait Permission
{
	public function jsPermissions()
	{
		return json_encode([
				'roles' => $this->getRoleNames(),
				'permissions' => $this->getAllPermissions()->pluck('name'),
			]);
	}
}
