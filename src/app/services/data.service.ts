import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'http://localhost:8080/db/getAllData';
  constructor(private httpClient: HttpClient) { }
    
  public getAllData(): Observable<any> {
    return this.httpClient.get(this.url);
  }
}
