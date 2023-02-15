import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http : HttpClient) { }

  getData(url: string,) {
    return this.http.get(url);
}

  getDataWithParams(url: string, parameters: HttpParams) {
    return this.http.get(url, { params: parameters });
}
}
