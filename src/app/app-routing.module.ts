import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { RigheComponent } from './righe/righe.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'data', component: DataComponent},
  { path: 'righe', component: RigheComponent},
  { path: 'materiali', component: MaterialiComponent},
  { path: 'dettaglio', component: DettaglioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
