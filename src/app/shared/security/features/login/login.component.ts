import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup } from '@angular/forms';
import { fLogin } from '../../login.form';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  @Output('login') register = new EventEmitter<LoginComponent>()

  loginForm: FormGroup = fLogin()

  constructor(
    private $auth: AuthService
  ) {
    // this.$auth.register('flavian.ovyn@bstorm.be', 'blop@1234=')
    this.$auth
      .login('flavian.ovyn@bstorm.be', 'blop@1234=')
      .subscribe(user => console.log(user))
  }


  handleSubmit() {
    if (this.loginForm.valid) {
      this.register.emit(this.loginForm.value)
      this.loginForm.reset()
    }
  }

}
