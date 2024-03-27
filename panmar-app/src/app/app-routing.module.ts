import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { WikiComponent } from './pages/wiki/wiki.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { ElrondComponent } from './pages/elrold/elrond.component';
import { PersonagemComponent } from './pages/personagem/personagem.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent , data: { header: { title: 'Login', links: [ { name: 'Login', path: 'sign-in' },{ name: 'Registre-se', path: 'register-user' },{ name: 'Esqueçi a senha', path: 'forgot-password' },{ name: 'Verifique sua senha', path: 'verify-email-address' } ] } }},
  { path: 'register-user', component: SignUpComponent, data: { header: { title: 'Login', links: [ { name: 'Login', path: 'sign-in' },{ name: 'Registre-se', path: 'register-user' },{ name: 'Esqueçi a senha', path: 'forgot-password' },{ name: 'Verifique sua senha', path: 'verify-email-address' } ] } }},
  { path: 'forgot-password', component: ForgotPasswordComponent, data: { header: { title: 'Login', links: [ { name: 'Login', path: 'sign-in' },{ name: 'Registre-se', path: 'register-user' },{ name: 'Esqueçi a senha', path: 'forgot-password' },{ name: 'Verifique sua senha', path: 'verify-email-address' } ] } }},
  { path: 'verify-email-address', component: VerifyEmailComponent,canActivate: [AuthGuard], data: { header: { title: 'Login', links: [ { name: 'Login', path: 'sign-in' },{ name: 'Registre-se', path: 'register-user' },{ name: 'Esqueçi a senha', path: 'forgot-password' },{ name: 'Verifique sua senha', path: 'verify-email-address' } ] } }},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { header: { title: 'Home', links: [ { name: 'home', path: 'home' },{ name: 'personagens', path: 'personagens' }, { name: 'wiki', path: 'wiki' }, { name: 'elrold', path: 'elrold' } ] } } },
  { path: 'personagens', component: PersonagensComponent, canActivate: [AuthGuard], data: { header: { title: 'Home', links: [ { name: 'home', path: 'home' },{ name: 'personagens', path: 'personagens' }, { name: 'wiki', path: 'wiki' }, { name: 'elrold', path: 'elrold' } ] } }, },
  { path: 'personagens/new', component: PersonagemComponent, canActivate: [AuthGuard], data: { header: { title: 'Home', links: [ { name: 'home', path: 'home' },{ name: 'personagens', path: 'personagens' }, { name: 'wiki', path: 'wiki' }, { name: 'elrold', path: 'elrold' } ] } }, },
  { path: 'personagens/:id', component: PersonagemComponent, canActivate: [AuthGuard], data: { header: { title: 'Home', links: [ { name: 'home', path: 'home' },{ name: 'personagens', path: 'personagens' }, { name: 'wiki', path: 'wiki' }, { name: 'elrold', path: 'elrold' } ] } }, },
  { path: 'wiki', component: WikiComponent, canActivate: [AuthGuard], data: { header: { title: 'Home', links: [ { name: 'home', path: 'home' },{ name: 'personagens', path: 'personagens' }, { name: 'wiki', path: 'wiki' }, { name: 'elrold', path: 'elrold' } ] } } },
  { path: 'elrold', component: ElrondComponent, canActivate: [AuthGuard], data: { header: { title: 'Home', links: [ { name: 'elrold', path: 'elrold' }] } } },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }