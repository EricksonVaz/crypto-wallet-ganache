import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from '@angular/fire/compat';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PanelComponent } from './pages/panel/panel.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ForgotFormComponent } from './components/forgot-form/forgot-form.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { AccountsContainerComponent } from './components/accounts-container/accounts-container.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountTransactionsComponent } from './components/account-transactions/account-transactions.component';
import { BackdropModalComponent } from './components/backdrop-modal/backdrop-modal.component';
import { ModalProfileComponent } from './components/modal-profile/modal-profile.component';
import { ModalAddAccountComponent } from './components/modal-add-account/modal-add-account.component';
import { ModalEditAccountComponent } from './components/modal-edit-account/modal-edit-account.component';
import { ModalDetailsTransComponent } from './components/modal-details-trans/modal-details-trans.component';
import { ModalGetPrivateKeyComponent } from './components/modal-get-private-key/modal-get-private-key.component';
import { ModalTransferComponent } from './components/modal-transfer/modal-transfer.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent,
    NotFoundComponent,
    SignupComponent,
    LoginFormComponent,
    FooterComponent,
    SignupFormComponent,
    ForgotFormComponent,
    ForgotPasswordComponent,
    HeaderComponent,
    AccountsContainerComponent,
    AccountDetailsComponent,
    AccountTransactionsComponent,
    BackdropModalComponent,
    ModalProfileComponent,
    ModalAddAccountComponent,
    ModalEditAccountComponent,
    ModalDetailsTransComponent,
    ModalGetPrivateKeyComponent,
    ModalTransferComponent
  ],
  imports: [
    //AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(()=>initializeApp(environment.firebase))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
