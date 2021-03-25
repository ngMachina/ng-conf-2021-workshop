import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {
    // this.getJSON().subscribe((data) => {
    //   console.log(data);
    // });
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }
}
