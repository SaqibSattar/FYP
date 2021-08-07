import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


function _window(): any {
  return window;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  get nativeWindow(): any {
    return _window();
  }

  constructor() { }
}
