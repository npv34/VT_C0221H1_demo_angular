import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup | undefined;
  message: string | undefined;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  submit() {
    let data =this.formLogin?.value;
    this.authService.login(data).subscribe(res => {
      if (res.message) {
         this.message = res.message;
      } else  {
        this.router.navigate(['users'])
        localStorage.setItem('asset_token', res.access_token);
        localStorage.setItem('user', res.data);
      }
    })
  }

}
