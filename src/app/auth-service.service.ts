import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   token= '';

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token
  }

 Login(value: any)
  {
    this.http.post<{token: string}>('http://localhost:3000/login', value)
      .subscribe((res: any) => {
        console.log(res.token);
        this.token = res.token;
        console.log(this.token)

      })
    }
}
