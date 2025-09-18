import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MyFunctionsService {
  private menuAktiv: string = '';

  constructor() {}

  setMenuAktiv(section: string): string {
    this.menuAktiv = section;
    console.log('Menu wechsel');
    return this.menuAktiv;
  }

  getMenuAktiv(): string {
    return this.menuAktiv;
  }
}
