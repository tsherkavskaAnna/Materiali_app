import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputDataComponent } from './inputData/data.component';
import { RigheComponent } from './righe/righe.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { materialiDBService } from './materialiDB.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputDataComponent,
    RigheComponent,
    MaterialiComponent,
    DettaglioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [materialiDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
