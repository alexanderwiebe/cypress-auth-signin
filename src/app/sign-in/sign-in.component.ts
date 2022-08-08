import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: ActivatedRoute) {}

  ngOnInit() {}

  submit() {
    if (this.form.get('password').value === 'password') {
      console.log(this.router.snapshot.queryParamMap.get('url'));
      window.location.assign(
        `${this.router.snapshot.queryParamMap.get('url')}&token=asdf1234`
      );
    }
  }
}
