<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


// ログインユーザー
Route::get('/user', fn () => Auth::user())->name('user');

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');
// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');
// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// 写真投稿
Route::post('/photos', 'PhotoController@create')->name('photo.create');
