import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private loginService: LoginService){}

  @Input() title: string = 'My App';
  @Output() clickMenu:EventEmitter<any> = new EventEmitter();

  toggleMenu() {
    this.clickMenu.emit();
  }

  logout() {
    this.loginService.logout();
  }
}
