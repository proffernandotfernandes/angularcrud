import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../core/services/pessoa.service';
import { Pessoa } from '../../core/services/types/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent implements OnInit {
  listaPessoas: Pessoa[] = [];

  constructor(private service: PessoaService) { }

  ngOnInit(): void {

    this.listaPessoas = this.service.listar();
  }

}
