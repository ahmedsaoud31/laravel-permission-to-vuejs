class LaravelPermissionToVue
{
	is = function(value){
  		if(window.Laravel.jsPermissions == 0) return false
		let roles = window.Laravel.jsPermissions.roles
		let _return = false
		if(!Array.isArray(roles)){
			return false
		}
		if(value.includes('|')){
			value.split('|').forEach(function (item) {
				if(roles.includes(item.trim())){
					_return = true
				}
			})
		}else if(value.includes('&')){
			_return = true
			value.split('&').forEach(function (item) {
				if(!roles.includes(item.trim())){
					_return = false
				}
			})
		}else{
			_return = roles.includes(value.trim())
		}
		return _return
	}

	can = function(value){
  		if(window.Laravel.jsPermissions == 0) return false
		let permissions = window.Laravel.jsPermissions.permissions
		let _return = false
		if(!Array.isArray(permissions)){
			return false
		}
		if(value.includes('|')){
			value.split('|').forEach(function (item) {
				if(permissions.includes(item.trim())){
					_return = true
				}
			})
		}else if(value.includes('&')){
			_return = true
			value.split('&').forEach(function (item) {
				if(!permissions.includes(item.trim())){
					_return = false
				}
			})
		}else{
			_return = permissions.includes(value.trim())
		}
		return _return
	}

	reloadRolesAndPermissions = async function(route = '/get-laravel-permission-to-vuejs'){
		await axios.get(route).then(
		  response => {
		    window.Laravel.jsPermissions = response.data
		  }
		)
	}
}

let lp = new LaravelPermissionToVue()

export default {
  install: (app, options) => {
	  app.config.globalProperties.can = lp.can
	  app.config.globalProperties.is = lp.is
  }
}

const is = lp.is
const can = lp.can
const reloadRolesAndPermissions = lp.reloadRolesAndPermissions
export {is, can, reloadRolesAndPermissions}

//// Ensure window.Laravel.jsPermissions is defined with a default value
window.Laravel = window.Laravel || {}
window.Laravel.jsPermissions = window.Laravel.jsPermissions || { permissions: [], roles: [] }
