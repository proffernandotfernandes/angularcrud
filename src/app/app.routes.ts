import { Routes } from '@angular/router';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem.component';
import { PessoaFormComponent } from './pages/pessoa-form/pessoa-form.component';
import { PessoaLoginComponent } from './pages/pessoa-login/pessoa-login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'pessoas',
        component: PessoaListagemComponent,
        title: 'Pessoas',
    },
    {
        path: 'pessoas/incluir',
        component: PessoaFormComponent,
        title: 'Pessoas - Incluir',
    },
    {
        path: 'pessoas/alterar/:id',
        component: PessoaFormComponent,
        title: 'Pessoas - Alterar',
    },
    {
        path: 'pessoas/login',
        component: PessoaLoginComponent,
        title: 'Login',
    },
];
