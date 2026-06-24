import { Routes } from '@angular/router';
import { AutenticarUsuario } from './autenticar-usuario/autenticar-usuario';
import { CriarUsuario } from './criar-usuario/criar-usuario';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {
        path: 'pages/autenticar',
        component: AutenticarUsuario
    },
    {
        path: 'pages/criar-usuario',
        component: CriarUsuario
    },
    {
        path: 'app/dashboard',
        component: Dashboard
    },
    {
        path: '',
        redirectTo: 'pages/autenticar',
        pathMatch: 'full'
    }
];
