import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  private url: string = environment.apiUrl;
  private postUrl: string = 'posts';
  private userUrl: string = 'users';

  constructor(private http: HttpClient) {}

  getPosts() {
    const url = `${this.url}${this.postUrl}`;
    return this.http.get<any>(url);
  }

  getUsers() {
    const url = `${this.url}${this.userUrl}`;
    return this.http.get<any>(url);
  }
}
