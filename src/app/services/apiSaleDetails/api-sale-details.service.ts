import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from 'src/app/resources/URL';
import { Response } from '../../models/response'

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ApiSaleDetailsService {
  url: string = URL.SALE_DETAILS;

  constructor(private _http: HttpClient) { }

  getSpecifyDetails(id: number): Observable<Response>{
    return this._http.get<Response>(this.url + "/" + id, httpOptions);
  }
}
