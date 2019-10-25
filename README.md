# Laravel permission to Vuejs

[![License](https://img.shields.io/packagist/l/ahmedsaoud31/laravel-permission-to-vuejs)](https://en.wikipedia.org/wiki/MIT_License)
[![Total Downloads](https://img.shields.io/packagist/dt/ahmedsaoud31/laravel-permission-to-vuejs)](https://packagist.org/packages/ahmedsaoud31/laravel-permission-to-vuejs)

After installed you can do like this in [Vuejs](https://vuejs.org/):
```html
<div v-if="can('edit post')">
  <!-- Edit post form -->
</div>

<div v-if="is('super-admin')">
  <!-- Show admin tools -->
</div>
```
This package require to use [laravel-permission](https://github.com/spatie/laravel-permission)

## Installation

##### PHP side
```json
composer require ahmedsaoud31/laravel-permission-to-vuejs=dev-master
```
##### JavaScript side
```json
npm i laravel-permission-to-vuejs
```


## Config
First, add the `LaravelAndVueJS\Traits\LaravelPermissionToVueJS` trait to your `User` model(s):
```php
use LaravelAndVueJS\Traits\LaravelPermissionToVueJS;

class User extends Authenticatable
{
    use LaravelPermissionToVueJS;

    // ...
}
```
Second, add the `laravel-permission-to-vuejs` plugin in `app.js` file:
```js
import LaravelPermissionToVueJS from 'laravel-permission-to-vuejs';
Vue.use(LaravelPermissionToVueJS);
```
Third, pass permissions from Laravel To Vuejs, in HTML header add this code:
```html
<script type="text/javascript">
    window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        jsPermissions: {!! auth()->check()?auth()->user()->jsPermissions():null !!}
    }
</script>
```

## License

The MIT License (MIT).
