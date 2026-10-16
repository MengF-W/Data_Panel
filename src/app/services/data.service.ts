import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = environment.service_url + '/db/postgres/getAllData';
  constructor(private httpClient: HttpClient) { }

  public getAllData(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
