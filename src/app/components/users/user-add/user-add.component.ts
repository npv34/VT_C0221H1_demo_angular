import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  formAddUser: FormGroup | undefined;
  submitted = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')]]
    })
  }

  submit() {
    this.submitted = true;
    // @ts-ignore
    let data = this.formAddUser.value;
    console.log(data)
  }

  get name() {
    return this.formAddUser?.get('name');
  }

  get email() {
    return this.formAddUser?.get('email');
  }

  get phone() {
    return this.formAddUser?.get('phone');
  }
}
