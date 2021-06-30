import {Component, OnInit, Output, ViewChild, EventEmitter} from '@angular/core';
import {IUser} from "../iuser";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: IUser[] = [];
  displayedColumns: string[] = ['STT', 'Name', 'Email', 'Phone', 'Action'];
  dataSource = new MatTableDataSource<IUser>(this.users);
  widthImage: string = '50';
  isHideImg: boolean = false;
  hideButtonContent: string = 'Hide';
  message: string = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private toastr: ToastrService,
              private userService: UserService) {
  }

  ngOnInit(): void {
      this.users = this.userService.getAll();
      this.dataSource = new MatTableDataSource<IUser>(this.users);
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
    // @ts-ignore
    this.dataSource.sort = this.sort;
  }

  showHideImage(): void {
    this.isHideImg = !this.isHideImg;
    this.hideButtonContent = (this.isHideImg) ? 'Show' : 'Hide'
  }

  deleteUser(index: number): void {
    if (confirm('Are you sure?')) {
      this.users.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.toastr.success('Delete success!', 'Success!');
    }
  }

  searchUser(event: any) {
    let keyword = event.target.value;

  }

}
