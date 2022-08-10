import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  form = this.fb.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private router: ActivatedRoute) {}

  ngOnInit() {}

  submit() {
    if (this.form.get("password").value === "password") {
      let newURI = `${this.router.snapshot.queryParamMap.get(
        "url"
      )}?token=asdf1234`;
      if (newURI.startsWith("https")) {
        newURI = `http${newURI.slice(5)}`;
      }
      console.log(newURI);
      window.location.assign(newURI);
    }
  }
}
