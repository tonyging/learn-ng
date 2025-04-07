import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

}
