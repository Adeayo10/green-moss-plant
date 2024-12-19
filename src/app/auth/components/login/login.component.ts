
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastController: ToastController,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() { 
    try {

      if (this.loginForm.invalid) {
        this.showToast('Please enter valid credentials');
        return;
      }
      const { email, password } = this.loginForm.value;
      const success =  this.authService.login({ email, password });
      if (!success) {
        await this.showToast('Login failed');
      } else {
        await this.showToast('Login successful');
      }
      await this.router.navigate(['/tabs/home']);
     
    }catch (error: any) {
      await this.showToast(`Login failed: ${error.message}`);
    }
  }
private async showToast(message: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    position: 'bottom'
  });
  await toast.present();
}
}