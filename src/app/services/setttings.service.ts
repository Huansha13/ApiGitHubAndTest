import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetttingsService {
  private userName!: string;
  constructor() { }

  getUserName(): string {
    return this.userName;
  }

  setUserName(value: string) {
    this.userName = value;
  }
}
