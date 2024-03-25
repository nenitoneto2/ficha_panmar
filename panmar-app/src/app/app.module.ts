import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment.dev';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './pages/login/sign-in/sign-in.component';
import { SignUpComponent } from './pages/login/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/login/verify-email/verify-email.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { WikiComponent } from './pages/wiki/wiki.component';
import { ButtonComponent } from './components/header/button-header/button.component';
import { TokenTestComponent } from './components/token-test/token-test.component';
import { IconCustomComponent } from './components/icon-custom/icon-custom.component';
import { ElrondComponent } from './pages/elrold/elrond.component';
import { MagicBoxComponent } from './components/magic-box/magic-box.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {AsyncPipe} from '@angular/common';
import { ElroldMagicComponent } from './pages/elrold/magic/elrold-magic/elrold-magic.component';
import { ElroldMainComponent } from './pages/elrold/magic/elrold-main/elrold-main.component';
import { ElroldSecondaryComponent } from './pages/elrold/magic/elrold-secondary/elrold-secondary.component';
import { ElroldRangeComponent } from './pages/elrold/magic/elrold-range/elrold-range.component';
import { ElroldDurationComponent } from './pages/elrold/magic/elrold-duration/elrold-duration.component';
import { ElroldActionSpeedComponent } from './pages/elrold/magic/elrold-action-speed/elrold-action-speed.component';
import { NavHelperComponent } from './components/nav-helper/nav-helper.component';
import { PersonagemComponent } from './pages/personagem/personagem.component';
import { CharacterService } from './shared/services/character.service';
import { CharacterDataStorageService } from './shared/services/character.data-storage';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    HeaderComponent,
    PersonagensComponent,
    WikiComponent,
    ButtonComponent,
    TokenTestComponent,
    IconCustomComponent,
    ElrondComponent,
    MagicBoxComponent,
    ElroldMagicComponent,
    ElroldMainComponent,
    ElroldSecondaryComponent,
    ElroldRangeComponent,
    ElroldDurationComponent,
    ElroldActionSpeedComponent,
    NavHelperComponent,
    PersonagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    MatChipsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
    MatButtonModule,
    MatTabsModule,
    MatBadgeModule,
    MatSliderModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule
  ],
  providers: [CharacterService, CharacterDataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
