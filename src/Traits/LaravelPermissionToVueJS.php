<?php
namespace LaravelAndVueJS\Traits;
trait LaravelPermissionToVueJS
{
    /**
     * Get user permissions and roles.
     *
     * @return json
     */
	public function jsPermissions()
	{
		return json_encode($this->getPermissions());
	}

	public function objPermissions()
	{
		return (object) $this->getPermissions();
	}

	private function getPermissions()
	{
		return [
				'roles' => $this->getRoleNames(),
				'permissions' => $this->getAllPermissions()->pluck('name'),
			];
	}
}
