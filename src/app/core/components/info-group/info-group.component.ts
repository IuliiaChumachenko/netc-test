import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-info-group',
  templateUrl: './info-group.component.html',
  styleUrls: ['./info-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoGroupComponent {

  @Input() public groupKey: string;
  @Input() public groupInfoItems: Item[];

}
