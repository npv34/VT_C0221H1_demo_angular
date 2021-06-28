import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus = [
    {
      "title" : "Home",
      "url" : "home"
    },
    {
      "title" : "Users",
      "url" : "users"
    }
  ];
  titlePage = 'App'
  constructor() { }

  ngOnInit(): void {
  }

}
