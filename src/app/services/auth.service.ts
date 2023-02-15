import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  token: string = "";
  currentUser: string = "NONE";
  payload = {
    "user_id": "admin",
    "jdbcUrl":`${environment.jdbcUrl}`,
    "exp": Math.floor(Date.now() / 1000) + (24 * 60 * 60 * 7) //7 days from now
  };

  constructor() {
  }

  createToken(){
    this.token = this.signToken(this.payload, environment.secretKey);
    console.log(encodeURI(this.token));
    return this.token
  }

  base64url(source: any) {
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  }

  encodeToken(payload:any) {
    var header = {
      "alg": "HS256",
      "typ": "JWT"
    };

    var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
    var encodedHeader = this.base64url(stringifiedHeader);

    var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(payload));
    var encodedData = this.base64url(stringifiedData);

    var token = encodedHeader + "." + encodedData;
    return token;
  }

  signToken(payload:any,key:string) {
    var secret = key;
    let token:any = this.encodeToken(payload);

    var signature:any = CryptoJS.HmacSHA256(token, secret);
    signature = this.base64url(signature);

    var signedToken = token + "." + signature;
    return signedToken;
  }


}
