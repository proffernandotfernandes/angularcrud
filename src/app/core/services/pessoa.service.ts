import { Injectable } from '@angular/core';
import { Pessoa } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listar(): Pessoa[] {
    return [
      {
        id: 1,
        nome: "Enzo",
        sobrenome: "Silva",
        dtNascimento: "2005-01-10",
      },
      {
        id: 2,
        nome: "Valentina",
        sobrenome: "Guimaraes",
        dtNascimento: "2007-08-14",
      },
    ];
  }


}
