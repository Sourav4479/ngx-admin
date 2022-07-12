import { Injectable, Injector } from '@angular/core';
import axios from "axios";
import { clearTokens } from '../utils/tokenUtils';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LOGOUT } from '../store/app.actions';
import { EXCEPTION, LOCAL_STORAGE, STATUS_CODE } from '../constants/common.constant';
import { Error } from '../modals/common/error';
import { NbToastrService } from '@nebular/theme';
import { checkIsAuthenticated } from 'src/app/main/auth/state/auth.selector';


@Injectable()
export class AxiosInterceptorService {
  router: any;
  constructor(private injector: Injector, private store: Store,private toastrService: NbToastrService) { }

  intercept() {
    axios.interceptors.request.use()
    axios.interceptors.request.use(function (config) {
      this.store.select(checkIsAuthenticated).subscribe(data=>{
        if(data){
          config.headers.Authorization =  localStorage.getItem(LOCAL_STORAGE.ACCESS_TOKEN);
          return config;
        }
        
      })

    });
    axios.interceptors.response.use(response => response, errorObj => {
      this.router = this.injector.get(Router);

      const status = errorObj.response ? errorObj.response.status : null;

      if (status === STATUS_CODE.FORBIDDEN_STATUS_CODE || status === STATUS_CODE.UNAUTHORIZED_STATUS_CODE) {
        clearTokens();
        this.store.dispatch(LOGOUT())
        this.router.navigate(['auth/login']);
      } else {
        const error: Error = errorObj.response.data.error;
        if (!error || this.isSystemException(error)) {
          clearTokens();
          this.store.dispatch(LOGOUT())
          this.router.navigate(['auth/login']);
        } else {
          this.toastrService.danger(error.message)
        }
      }
      // const rejectErrorObj = errorObj.response.error ? errorObj.response.error : errorObj.response;
      return Promise.reject(errorObj.response);

    });
  }

  isSystemException(error: Error) {
    return error.type && error.type === EXCEPTION.SYSTEM_EXCEPTION;
  }

}

export function AxiosConfigFactory(axiosIntercept: AxiosInterceptorService) {
  return () => axiosIntercept.intercept();
};