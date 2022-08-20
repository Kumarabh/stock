import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  username: string = 'admin';
  password: string = 'test';
  tokenRequestBody: Token = {
    client_id: '',
    client_secret: '',
    scope: '',
    grant_type: ''
  }

  baseUrl = 'https://skdiyuat.sharekhan.com/id/connect/token';

  constructor(private http: HttpClient) { }

  generateToken() {
    const headers = new HttpHeaders();
    headers.set('username', this.username);
    headers.set('password', this.password);
    headers.set('Access-Control-Allow-Origin', '*')
    return this.http.post(this.baseUrl, this.tokenRequestBody, {headers: headers});

  }

}
