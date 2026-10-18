import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = environment.service_url + '/db/postgres/getAllData';
  constructor(private httpClient: HttpClient) { }

  public getAllData(pageNumber:number,pageSize:number): Observable<any> {

    let params = new HttpParams().set("pageNumber",pageNumber).set("pageSize", pageSize);

    return this.httpClient.get(this.url,{params: params});
  }
}
