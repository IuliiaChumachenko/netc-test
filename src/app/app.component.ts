import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { GetDataService } from './core/services/get-data.service';
import { InfoItems } from './core/models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public infoItems: InfoItems | {};

  constructor(
    private getData: GetDataService,
    private cd: ChangeDetectorRef,
  ) { }

  public clickMenuItem(menuItem: string): void {
    this.getItems(menuItem);
  }

  private getItems(menuItem: string): void {
    this.getData.getItems()
      .subscribe(items => {

        this.infoItems = items.reduce( (acc, item) => {
          const key = item[menuItem]
            ? menuItem === 'date' ? this.checkDateKey(item[menuItem]) : item[menuItem]
            : `no_${menuItem}`;

          acc[key] = acc[key] || [];
          acc[key][acc[key].length] = item;
          delete acc[key][acc[key].length - 1][menuItem];

          return acc;
        }, {});

        this.cd.markForCheck();
      });
  }

  private checkDateKey(key: string): string {
    const dateArr = key.split('/');

    return String(new Date(+dateArr[2], +dateArr[1] - 1, +dateArr[0]).getFullYear());
  }
}
