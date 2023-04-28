import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent {

  constructor(
    private $auth: AuthService
  ) {
    // this.$auth.register('flavian.ovyn@bstorm.be', 'blop@1234=')
    this.$auth
      .login('flavian.ovyn@bstorm.be', 'blop@1234=')
      .subscribe(user => console.log(user))
  }
}
