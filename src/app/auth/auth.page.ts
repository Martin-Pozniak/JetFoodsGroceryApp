import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor( private svcAuth: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  public onLogin(){
    this.svcAuth.login();
    this.router.navigateByUrl('/home');
  }

  public onSubmit( form: NgForm ) {
    console.log(form);
  }

}
