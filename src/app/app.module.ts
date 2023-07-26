import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDataComponent } from './inputData/data.component';
import { RigheComponent } from './righe/righe.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { materialiDBService } from './services/materialiDB.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from './services/notification.service';
import { CoreModule } from './core/core.module';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    InputDataComponent,
    RigheComponent,
    MaterialiComponent,
    DettaglioComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [materialiDBService,
              NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
