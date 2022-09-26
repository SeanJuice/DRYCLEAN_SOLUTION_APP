import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/authentication/services/auth.service';
import { TokenStorageService } from 'src/app/authentication/services/tokeStorage.service';
import { createUserDTO } from 'src/app/shared/models/register-user.';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  public user: createUserDTO;
  constructor(
    private auth: AuthService,
    private tokenStorage: TokenStorageService
  ) {
    this.user = this.tokenStorage.getUser();
    console.log(this.user);
  }

  ngOnInit(): void {}
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

  logOut() {
    this.auth.SignOut();
  }
}
