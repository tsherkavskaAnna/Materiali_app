import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { RigheComponent } from './righe/righe.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    RigheComponent,
    MaterialiComponent,
    DettaglioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
