import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private userService: TokenStorageService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }
}
