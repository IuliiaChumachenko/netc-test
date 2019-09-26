import {ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPanelComponent implements OnChanges {
  public infoGroupKeys: string[];

  @Input() public infoItems: string[];

  public ngOnChanges({ infoItems }: SimpleChanges): void {
    const groupedInfoItems = infoItems;

    if (groupedInfoItems && groupedInfoItems.currentValue) {
      this.infoGroupKeys = Object.keys(this.infoItems);
    }
  }

}
