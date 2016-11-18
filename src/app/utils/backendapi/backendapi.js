//import { Injectable } from '@angular/core';
"use strict";
//@Injectable()
//export class Configuration {
function Configuration() {
    Server: string = "http://0.0.0.0:5050/";
    LoginApiUrl = this.Server + "login";
    LogoutApiUrl = this.Server + "logout";
    RegisterApUrl = this.Server + "register";
}
exports.Configuration = Configuration;
