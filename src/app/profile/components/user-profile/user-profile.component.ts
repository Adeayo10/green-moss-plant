import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userProfile: User | null = null;
  profileForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController
  ) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]],
      profilePictureUrl: ['']
    });
  }

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userProfile = this.authService.currentUser;
    if (this.userProfile) {
      this.profileForm.patchValue(this.userProfile);
    }
  }

  async saveProfile() {
    if (this.profileForm.valid) {
      const updatedProfile = this.profileForm.value as User;
      await this.authService.updateUserProfile(updatedProfile);
      await this.showToast('Profile updated successfully');
    }
  }

  async logout() {
    await this.authService.logout();
    await this.showToast('User logged out successfully');
    await this.router.navigate(['/auth/login']);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });

    this.profileForm.patchValue({ profilePictureUrl: image.webPath });
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