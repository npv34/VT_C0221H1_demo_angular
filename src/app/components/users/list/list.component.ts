import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../iuser";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: IUser[] = [
    {
      id: 1,
      name: 'Trong',
      email: 'trong@gmail.com',
      image: 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png',
      phone: 900909090
    },
    {
      id: 2,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 3,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 4,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 5,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 6,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 7,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 8,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 9,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    },
    {
      id: 10,
      name: 'Tuan',
      email: 'tuan@gmail.com',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOKrEWsrAgKx_6dg36oHtZISVqZo1z5WGCNQ&usqp=CAU',
      phone: 439090910
    }
  ];
  displayedColumns: string[] = ['STT', 'Name', 'Email', 'Phone'];
  dataSource = new MatTableDataSource<IUser>(this.users);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  widthImage = '50';
  isHideImg = false;
  hideButtonContent = 'Hide';
  constructor() { }

  ngOnInit(): void {

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

  deleteUser(index: number) {
      if (confirm('Are you sure?')) {
        this.users.splice(index, 1)
      }
  }

  searchUser(event: any) {
    let keyword = event.target.value;

  }

}
