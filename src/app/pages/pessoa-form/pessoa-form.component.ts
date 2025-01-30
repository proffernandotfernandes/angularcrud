import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa-form',
  standalone: true,
  imports: [],
  templateUrl: './pessoa-form.component.html',
  styleUrl: './pessoa-form.component.css'
})
export class PessoaFormComponent {
  titulo = 'Cadastro de Pessoas';
}
