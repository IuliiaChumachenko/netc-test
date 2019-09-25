import { ChangeDetectionStrategy, Component, Output, EventEmitter } from '@angular/core';
import { menuItems } from '../../constants/menu-items';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  public menuItems = menuItems;

  @Output() public selectMenuItem: EventEmitter<string> = new EventEmitter<string>();

  public clickMenuItem(menuItem: string): void {
    this.selectMenuItem.emit(menuItem.toLowerCase());
  }
}
