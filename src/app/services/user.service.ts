import {Injectable} from '@angular/core';
import {IUser} from "../components/users/iuser";
import {any} from "codelyzer/util/function";

@Injectable({
  providedIn: 'root'
})
export class UserService {

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

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  getIndexUser(id: number) {
    let index = -1;
    this.users.forEach(function (item, i) {
      if (item.id == id) {
        index = i;
      }
    })
    return index;
  }

  findById(id: number) {
    let index = this.getIndexUser(id);
    if (index != -1) {
      return this.users[index]
    } else {
      return null;
    }
  }

  update(user: IUser) {
    let index = this.getIndexUser(user.id);
    this.users[index] = user;
  }
}
