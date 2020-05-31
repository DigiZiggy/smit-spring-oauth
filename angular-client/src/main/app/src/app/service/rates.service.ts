import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';
import {Observable} from 'rxjs';
import {ExchangeRateToEUR} from '../model/exchangeRateToEUR';

@Injectable()
export class RatesService {
  private ratesUrl: string;

  constructor(private http: HttpClient) {
    this.ratesUrl = 'http://localhost:8081/resource-server/api/v1/exchange-rates-to-EUR';
  }

  public deleteExchangeRate(id: number): Observable<any> {
    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get('access_token')});
    return this.http.delete(`${this.ratesUrl}/delete/${id}`, { headers });
  }

  public createExchangeRate(exchangeRate: ExchangeRateToEUR): Observable<Object> {
    const headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get('access_token')});
    return this.http.post(`${this.ratesUrl}`, exchangeRate, { headers });
  }

  public getExchangeRateById(id: number): Observable<any> {
    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get('access_token')});
    return this.http.get(`${this.ratesUrl}/${id}`, { headers });
  }

  public updateExchangeRate(id: number, value: any): Observable<Object> {
    const headers = new HttpHeaders({'Content-type': 'application/json; charset=utf-8',
      Authorization: 'Bearer ' + Cookie.get('access_token')});
    return this.http.put(`${this.ratesUrl}/edit/${id}`, value, { headers });
  }
}
