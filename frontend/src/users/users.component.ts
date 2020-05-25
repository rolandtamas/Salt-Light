import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: User[];

  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(data => this.users=data);
  }
}

interface User {
  id: number,
  name:string
}
