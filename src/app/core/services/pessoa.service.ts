import { Injectable } from '@angular/core';
import { Pessoa } from './types/types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = 'http://localhost:3000/pessoas'

  constructor(private http: HttpClient) { }

  listar(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.API)
  }

  incluir(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.API, pessoa)
  }
  editar(pessoa: Pessoa): Observable<Pessoa> {
    const url = `${this.API}/${pessoa.id}`
    return this.http.put<Pessoa>(url, pessoa)
  }
  buscarPorId(id: number): Observable<Pessoa | undefined> {
    return this.http.get<Pessoa>(this.API + `/${id}`);
  }

  excluir(id: number): Observable<Pessoa> {
    return this.http.delete<Pessoa>(this.API + `/${id}`);
  }
}
