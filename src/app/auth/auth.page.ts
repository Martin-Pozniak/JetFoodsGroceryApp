import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

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

  ngOnInit() {
  }

  public onSubmit( form: NgForm ) {

    if ( !form.valid ) {
      return;
    }

    const email: string = form.value.email;
    const password: string = form.value.password;

    if( form.value.passwordConfirmation !== undefined ) {

      if( password !== form.value.passwordConfirmation) {
        return;
      }

    }

    this.ctrlLoading
      .create({
        keyboardClose: true,
        message: 'Working...'
      })
      .then( loadingEl => {

        loadingEl.present();

        if ( this.isLogin ) {

          this.svcAuth
            .login( email, password )
            .subscribe( resData => {
              console.log("Login");
              console.log(resData);
            },
            errorResp => {

              loadingEl.dismiss();
              const errCode = errorResp.error.error.message;

              let message = "We're sorry your email/password combination was incorrect or not found."

              this.showAlert(message);

            });

        }
        else {

          this.svcAuth
            .createAccount( email, password )
            .subscribe( resData => {
              console.log("Sign Up");
              console.log(resData);
            },
            errorResp => {

              loadingEl.dismiss();

              const errCode = errorResp.error.error.message;

              let message = "We're sorry, your sign up attempt didn't quite work.";

              if (errCode === 'EMAIL_EXISTS'){
                message = 'This email address already exists. Try signing in instead.'
              }

              this.showAlert( message );

            });

          this.isLogin = true;

          form.resetForm();

          loadingEl.dismiss();

        }

      })

    console.log(form);

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
