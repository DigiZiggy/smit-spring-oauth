import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Cookie} from 'ng2-cookies';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AppService {
  public clientId = 'smitFront';
  public redirectUri = 'http://localhost:8089/';
  private userUrl = 'http://localhost:8081/resource-server/api/v1/user/info';

  constructor(private http: HttpClient){}

  public retrieveToken(code){
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.clientId);
    params.append('client_secret', 'clientSecret');
    params.append('redirect_uri', this.redirectUri);
    params.append('code', code);

    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'});
    this.http.post('http://localhost:8083/auth/realms/smit/protocol/openid-connect/token',
       params.toString(),
       { headers })
    .subscribe(
      (data) => this.saveToken(data),
      (err) => alert('Invalid Credentials'),
    );
  }

  public saveToken(token){
    const expireDate = new Date().getTime() + (1000 * token.expires_in);
    Cookie.set('access_token', token.access_token, expireDate);
    console.log('Obtained Access token');
    window.location.href = 'http://localhost:8089';
  }

  public getResource(resourceUrl) : Observable<any>{
    const headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Authorization': 'Bearer ' + Cookie.get('access_token')});
    return this.http.get(resourceUrl, { headers });
  }

  public checkCredentials(){
    return Cookie.check('access_token');
  }

  public logout() {
    const token = Cookie.get('access_token');
    Cookie.delete('access_token');
    window.location.href = 'http://localhost:8083/auth/realms/smit/protocol/openid-connect/logout?id_token_hint='
      + token
      + '&post_logout_redirect_uri=' + this.redirectUri;
  }
}
