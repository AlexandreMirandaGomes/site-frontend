import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.signIn(this.email, this.password).subscribe(auth => {
      this.authService.token = auth.token;
      console.log(auth);
      this.router.navigate(['/home']);
      localStorage.setItem('token',auth.token);
    });
  }

}
