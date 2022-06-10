import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ModalProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
