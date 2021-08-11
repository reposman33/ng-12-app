import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = []

  constructor(private activatedRoute: ActivatedRoute, private userService:UsersService) {
  }

  ngOnInit() {
    this.users = this.activatedRoute.snapshot.data.userResolver
  }
}
