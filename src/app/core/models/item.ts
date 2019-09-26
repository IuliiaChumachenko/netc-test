export interface InfoItems {
  [key: string]: Item[];
}

export interface Item {
  author?: string;
  series?: string;
  name?: string;
  date?: string;
}
