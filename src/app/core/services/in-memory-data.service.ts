import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  public createDb() {
    const items = [
      {
        author: 'Ivanov',
        series: 'Seria_1',
        name: 'Name_1',
        date: '20/10/2005',
      },
      {
        author: 'Ivanov',
        series: 'Seria_1',
        name: 'Name_2',
        date: '20/11/2005',
      },
      {
        author: 'Ivanov',
        series: 'Seria_1',
        name: 'Name_3',
        date: '20/01/2008',
      },
      {
        author: 'Ivanov',
        series: 'Seria_2',
        name: 'Name_1',
        date: '25/01/2008',
      },
      {
        author: 'Ivanov',
        series: 'Seria_2',
        name: 'Name_2',
        date: '26/02/2008',
      },
      {
        author: 'Kapvor',
        series: 'Seria_1',
        name: 'Name_2',
        date: '11/01/2008',
      },
      {
        author: 'Kapvor',
        series: 'Seria_1',
        name: 'Name_2',
        date: '14/02/2008',
      },
      {
        author: 'Ig',
        name: 'Name',
        date: '14/02/2010',
      },
    ];

    return {items};
  }
}
