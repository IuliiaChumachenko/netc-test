import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() public selectMenuItem: EventEmitter<string> = new EventEmitter<string>();

  public clickMenuItem(menuItem: string): void {
    this.selectMenuItem.emit(menuItem);
  }
}
