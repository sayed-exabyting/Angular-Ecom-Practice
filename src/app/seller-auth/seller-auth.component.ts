import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { login, signup } from '../../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent {

  constructor(private seller:SellerService) { }
  showLogin = false;
  authError: string = '';

  ngOnInit(): void {
    this.seller.reloadSeller();
  }

  signUp(data: signup):void {
    this.seller.userSignUp(data);
  }

  login(data: login):void {
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
     if(isError) {
       this.authError = 'Email or Password is incorrect';
     }
    }
    );
  }

  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
