import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoItemComponent {
  public rowCol: string[];
  public rowInfo: Item;

  @Input() public set itemsRow(infoItems: Item) {
    if (infoItems) {
      this.rowCol = Object.keys(infoItems);
      this.rowInfo = infoItems;
    }
  }
}
