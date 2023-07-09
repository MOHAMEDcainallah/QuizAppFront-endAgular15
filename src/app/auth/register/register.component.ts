import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{
  registerForm!: FormGroup;
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
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required,Validators.minLength(6), Validators.maxLength(20)],
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit() {
    const enteredEmail = this.registerForm.get('email')?.value;
    const enteredusername = this.registerForm.get('username')?.value;
    const enteredPassword = this.registerForm.get('password')?.value;
    const enteredfirstname = this.registerForm.get('firstname')?.value;
    const enteredlastname = this.registerForm.get('lastname')?.value;
    const enteredphone = this.registerForm.get('phone')?.value;


    const staticEmail = 'aaa@gmail.com';
    const staticPassword = 'allo123456';
    const staticusername = 'aaaa';
    const staticlastname= 'bbbb';
    const staticfisrtname= 'cccc';
    const staticphone= '0606060606';

    if (enteredEmail === staticEmail && enteredPassword === staticPassword && enteredfirstname === staticfisrtname
       && enteredlastname === staticlastname && enteredphone === staticphone && enteredusername === staticusername) {
      console.log('register successful! Redirect to home page');
    } else {
      this.showError = true;
    }

    console.log("value: ", this.registerForm.value);
  }

}
