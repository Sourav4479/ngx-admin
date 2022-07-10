import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setData(data) {
    localStorage.setItem('ACCESS_TOKEN', data.signInUserSession.accessToken.jwtToken);
    localStorage.setItem('REFRESH_TOKEN', data.signInUserSession.refreshToken.token);
    localStorage.setItem('ID_TOKEN', data.signInUserSession.idToken.jwtToken);
  }
  isAuthenticated = (): boolean => {
    if (localStorage.getItem('ACCESS_TOKEN') &&
      localStorage.getItem("REFRESH_TOKEN") &&
      localStorage.getItem('ID_TOKEN')) {
      return true;
    } else {
      return false;
    }
  };
  clearTokens = () => {
    localStorage.clear();
  };

}
