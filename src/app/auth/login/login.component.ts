import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  showError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,

  ) {
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }


    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required,Validators.minLength(6), Validators.maxLength(20)],
      });
    }

    get f() {
      return this.loginForm.controls;
    }


    onSubmit() {
      const enteredEmail = this.loginForm.get('email')?.value;
      const enteredPassword = this.loginForm.get('password')?.value;

      const staticEmail = 'admin@gmail.com';
      const staticPassword = 'admin123';

      const staticEmail1 = 'student@gmail.com';
      const staticPassword1 = 'student123';


  if (enteredEmail === staticEmail && enteredPassword === staticPassword) {
    this.router.navigate(['/admin/home']);
  } else if (enteredEmail === staticEmail1 && enteredPassword === staticPassword1) {
    this.router.navigate(['/student/quiz']);
  }
    else {
        this.showError = true;
      }

      console.log("value: ", this.loginForm.value);
    }

}
