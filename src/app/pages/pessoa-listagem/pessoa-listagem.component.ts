import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../core/services/pessoa.service';
import { Pessoa } from '../../core/services/types/types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pessoa-listagem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.css'
})
export class PessoaListagemComponent implements OnInit {
  listaPessoas: Pessoa[] = [];

  constructor(
    private service: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.service.listar().subscribe((pessoas) => {
      this.listaPessoas = pessoas;
    });

  }

  excluir(id: number) {
    if (id) {
      this.service.excluir(id).subscribe(() => {
        window.location.reload()
      })
    }
  }


}
