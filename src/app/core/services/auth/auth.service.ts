import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/urlConstants';
import { LoginData } from '../../modals/common/auth';
import { setTokenToLocalStorage, setUserDataToLocalStorage } from '../../utils/tokenUtils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(loginData: LoginData) {
    console.log('2')
    const username = loginData.userName;
    const password = loginData.password;
    const body = {
      email: username,
      password
    };
    return new Observable(subscriber => {
      this.httpClient.post(API_URL.LOGIN_USER, body).subscribe((data:any) => {
        console.log(3)
        const loginResponse = data;
        let jwtData =  setTokenToLocalStorage(loginResponse);
        let userData = {
            ...data.response.user,
            userGroup: jwtData['cognito:groups'][0]
        }
        setUserDataToLocalStorage(userData)
        subscriber.next(userData);
        subscriber.complete();
      }, error => {
        console.log(1)
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }
}
