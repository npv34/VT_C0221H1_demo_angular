import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  formEditUser: FormGroup | undefined

  constructor(private toastr: ToastrService,
              private router: ActivatedRoute,
              private userService: UserService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    let user = this.userService.findById(id);
    this.formEditUser = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')]],
      image: ['']
    });
    // @ts-ignore
    this.formEditUser.patchValue(user);

  }

  get name() {
    return this.formEditUser?.get('name');
  }

  get email() {
    return this.formEditUser?.get('email');
  }

  get phone() {
    return this.formEditUser?.get('phone');
  }

  edit() {
    let newUser = this.formEditUser?.value;
    this.userService.update(newUser);
    this.toastr.success('Update success!', 'Success!');
    this.route.navigate(['users'])
  }
}
