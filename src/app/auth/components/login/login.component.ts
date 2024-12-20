import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  // async onSubmit() {
  //   if (this.loginForm.invalid) {
  //     this.showToast('Please enter valid credentials');
  //     return;
  //   }

  //   const { email, password } = this.loginForm.value;
  //   console.log('Attempting login...');

  //   try {
  //     const success = await this.authService.login({ email, password });
  //     if (success) {
  //       console.log('Login successful');
  //       await Promise.all([
  //         this.showToast('Login successful'),
  //         this.router.navigate(['/tabs/home'])
  //       ]);
  //     } else {
  //       console.log('Login failed');
  //       await this.showToast('Login failed');
  //     }
  //   } catch (error: any) {
  //     console.error('Login error:', error);
  //     await this.showToast(`Login failed: ${error.message}`);
  //   }
  // }


    async onSubmit() {
      if (this.loginForm.invalid) {
        await this.showToast('Please enter valid credentials');
        return;
      }
  
      try {
        const success = await this.authService.login(this.loginForm.value);
        
        if (success) {
          await this.showToast('Login successful');
          await this.router.navigate(['/tabs/home'], { replaceUrl: true });
        } else {
          await this.showToast('Invalid credentials');
        }
      } catch (error) {
        console.error('Login error:', error);
        await this.showToast('Login failed');
      }
    }
    
  
  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }
}