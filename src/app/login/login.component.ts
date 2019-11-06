import { Component, OnInit } from '@angular/core';

class Login {
  User: string;
  Pass: string;
  Role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();

  constructor() { }

  ngOnInit() {
  }

  efetuarLogin(){
    debugger
    if(this.login.User == "Admin" && this.login.Pass == "Admin"){
      this.login.Role = "Admin";
    }
    else{
      this.login.Role = "User";
    }
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

}
