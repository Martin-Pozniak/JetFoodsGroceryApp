import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  public isLogin: boolean = true;

  constructor( private svcAuth: AuthService,
               private router: Router,
               private ctrlAlert: AlertController,
               private ctrlLoading: LoadingController ) { }

  public ngOnInit() {
  }

  public onAnonymousLogin() {

    this.svcAuth
      .anonymousLogin()
      .subscribe( resData => {
        console.log("Anonymous Login");
        console.log(resData);
        this.router.navigateByUrl("/home");
      },
      errorResp => {
        this.showAlert( errorResp.error.error.message );
      });

  }

  public onSubmit( form: NgForm ) {

    if ( !form.valid ) {
      return;
    }

    const email: string = form.value.email;
    const password: string = form.value.password;
    const firstName: string = form.value.firstName;
    const lastName: string = form.value.lastName;
    const birthday: Date = form.value.birthday;

    if( form.value.passwordConfirmation !== undefined ) {

      if( password !== form.value.passwordConfirmation) {
        return;
      }

    }

    this.ctrlLoading
      .create({
        keyboardClose: true,
        message: 'Working on it...'
      })
      .then( loadingEl => {

        let authObs: Observable<AuthResponseData>;
        loadingEl.present();

        if ( this.isLogin ) {
          authObs = this.svcAuth.login(email, password);
        }
        else {
          authObs = this.svcAuth.createAccount( firstName, lastName, email, password, birthday )
        }

        authObs
          .subscribe( resData => {

            console.log(resData);
            loadingEl.dismiss();

            if ( this.isLogin ) {
              this.router.navigateByUrl('/home');
            }
            else {
              this.isLogin = true;
              form.resetForm();
            }

          },
          errorResp => {

            const errCode = errorResp.error.error.message;
            let message = "Woops...something went wrong.";

            loadingEl.dismiss();

            if ( this.isLogin ){
              message = "We're sorry your email/password combination was incorrect or not found."
            }
            else {

              message = "We're sorry, your sign up attempt didn't quite work.";

              if ( errCode === 'EMAIL_EXISTS' ) {
                message = 'This email address already exists. Try signing in instead.'
              }

            }

            this.showAlert(message);

          });

      });

  }

  public showAlert( message: string) {

    this.ctrlAlert
      .create({
        header: 'That didn\'t quite work...',
        message: message,
        buttons: ['Okay']
      })
      .then( alertEl => {
        alertEl.present();
      });

  }

}
