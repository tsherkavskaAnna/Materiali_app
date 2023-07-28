import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  searchQueryEvent: EventEmitter<string> = new EventEmitter<string>

  constructor() { }
}
