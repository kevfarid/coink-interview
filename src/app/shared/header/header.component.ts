import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() title: string = 'My App';
  @Output() clickMenu:EventEmitter<any> = new EventEmitter();

  toggleMenu() {
    this.clickMenu.emit();
  }
}
