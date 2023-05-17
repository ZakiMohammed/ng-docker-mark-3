import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get(name: string) {
    const url = `${this.url}${name}`;
    return this.http.get<any>(url);
  }
}
