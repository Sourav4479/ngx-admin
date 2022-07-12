import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../constants/urlConstants';

@Injectable({
  providedIn: 'root'
})
export class HsnService {

  constructor(private httpClient: HttpClient) { }

  getList() {
    return new Observable(subscriber => {
      let body = {}
      this.httpClient.post(API_URL.GET_HSN_LIST,body).subscribe((data:{Items:[]
        "Count": Number,
        "ScannedCount": Number
    }) => {
        // const loginResponse = data;
        subscriber.next(data);
        subscriber.complete();
      }, error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }
  addHsn(hsnCode,gst,description) {
    return new Observable(subscriber => {
      let body = {hsnCode,gst,description}
      this.httpClient.post(API_URL.ADD_HSN,body,{responseType: 'text'}).subscribe((data:any) => {
        // const loginResponse = data;
        subscriber.next(data);
        subscriber.complete();
      }, error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }
  updateHsn(hsnCode,gst?,description?) {
    return new Observable(subscriber => {
      let body = {hsnCode}
      if(gst) body['gst']=gst
      if(description) body['description'] = description
      this.httpClient.post(API_URL.UPDATE_HSN,body,{responseType: 'text'}).subscribe((data:any) => {
        // const loginResponse = data;
        subscriber.next(data);
        subscriber.complete();
      }, error => {
        subscriber.error(error);
        subscriber.complete();
      });
    });
  }
}
