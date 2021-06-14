# Laravel permission to Vuejs
## Update: now support Vue 3

## npm package
[![Total Downloads](https://img.shields.io/npm/dt/laravel-permission-to-vuejs)](https://www.npmjs.com/package/laravel-permission-to-vuejs)
[![Version](https://img.shields.io/npm/v/laravel-permission-to-vuejs)](https://www.npmjs.com/package/laravel-permission-to-vuejs)
[![License](https://img.shields.io/npm/l/laravel-permission-to-vuejs)](https://en.wikipedia.org/wiki/MIT_License)

## Composer package
[![Total Downloads](https://img.shields.io/packagist/dt/ahmedsaoud31/laravel-permission-to-vuejs)](https://packagist.org/packages/ahmedsaoud31/laravel-permission-to-vuejs)
[![License](https://img.shields.io/packagist/l/ahmedsaoud31/laravel-permission-to-vuejs)](https://en.wikipedia.org/wiki/MIT_License)

After installed you can do like this in [Vuejs](https://vuejs.org/):
```html
<div v-if="can('edit post')">
  <!-- Edit post form -->
</div>

<div v-if="is('super-admin')">
  <!-- Show admin tools -->
</div>

<!-- you can use OR operator -->
<div v-if="can('edit post | delete post | publish post')">
  <!-- Do something -->
</div>

<div v-if="is('editor | tester | user')">
  <!-- Do something -->
</div>

<!-- you can use AND operator -->
<div v-if="can('edit post & delete post & publish post')">
  <!-- Do something -->
</div>

<div v-if="is('editor & tester & user')">
  <!-- Do something -->
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
Second, add and use the `laravel-permission-to-vuejs` plugin in `app.js` file:
```js
import { createApp } from 'vue'
import LaravelPermissionToVueJS from 'laravel-permission-to-vuejs'
import App from './components/App.vue'
const app = createApp(App)
app.use(LaravelPermissionToVueJS)
app.mount('#app')
```
Third, pass permissions from Laravel To Vuejs, in HTML header add this code:
```html
<script type="text/javascript">
    window.Laravel = {
        csrfToken: "{{ csrf_token() }}",
        jsPermissions: {!! auth()->check()?auth()->user()->jsPermissions():0 !!}
    }
</script>
```

## License

The MIT License (MIT).
