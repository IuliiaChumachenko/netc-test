import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { GetDataService } from './core/services/get-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public infoItems: string[];

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
        this.infoItems = items
          .map(item => item[menuItem])
          .filter(Boolean);

        this.cd.markForCheck();
      });
  }
}
