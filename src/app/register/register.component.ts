﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})

export class RegisterComponent {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
      data => {
        console.log("Good in TS")
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      error => {
        console.log("Error in TS")
        this.alertService.error(error);
        this.loading = false;
      });
  }
}
