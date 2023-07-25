import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Materiali_app';

  constructor(private toasterService: NotificationService) {}

  showToaster() {
    this.toasterService.showSuccess('Notivication con success!!!!')
  }
}
