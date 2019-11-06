import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Revisao } from 'src/app/acompanhar/acompanhar.component';

@Injectable({
  providedIn: 'root'
})
export class RevisaoService {

  constructor(private http: HttpClient) { }

  public getAllSolicitacoes(): Observable<any>{
    debugger
    const url = `${environment.apiUrl + environment.Revisao.revisao}`;
    return this.http.get(url);
  }

  public approveSolicitacao(id: any): Observable<any>{
    debugger
    const url = `${environment.apiUrl + environment.Revisao.revisao}`;
    return this.http.put(url, id);
  }

  public reproveSolicitacao(id: any): Observable<any>{
    debugger
    const url = `${environment.apiUrl + environment.Revisao.revisao + '/' + id}`;
    return this.http.delete(url);
  }

  public insertSolicitacao(revisao: Revisao): Observable<any>{
    debugger
    const url = `${environment.apiUrl + environment.Revisao.revisao}`;
    return this.http.post(url, revisao);
  }
}
