import { Component } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  query: string = '';

  constructor(private headerService: HeaderService) {}

  searchSubmit() {
    this.headerService.searchQueryEvent.emit(this.query);
    this.reset();
  }
  reset() {
    this.query = '';
  }
  
}
