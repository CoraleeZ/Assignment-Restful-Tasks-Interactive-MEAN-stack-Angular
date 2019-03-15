import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {};

  getAllOuter(){
    return this._http.get('/api/tasks/outer');
  };
  
  getOneOuter(id:any){
    return this._http.get('/api/tasks/outer/'+id);
  };

  getOneInner(id:any){
    return this._http.get('/api/tasks/inner/'+id);
  };
}
