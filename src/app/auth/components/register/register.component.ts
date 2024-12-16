
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    // private toastController: ToastController
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      address: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      try {
        await this.authService.register(this.registerForm.value);
        await this.router.navigate(['/auth/login']);
        alert('Registration successful!');
        // await this.showToast('Registration successful!');
      } catch (error) {
        // await this.showToast('Registration failed: ' + error.message);
        alert("Registration failed: ");
      }
    }
  }

  // private async showToast(message: string) {
  //   const toast = await this.toastController.create({
  //     message,
  //     duration: 2000,
  //     position: 'bottom'
  //   });
  //   await toast.present();
  // }
}