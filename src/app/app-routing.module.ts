import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InputDataComponent } from './inputData/data.component';
import { RigheComponent } from './righe/righe.component';
import { MaterialiComponent } from './materiali/materiali.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: InputDataComponent},
  { path: 'data', component: InputDataComponent},
  { path: 'righe/:id', component: RigheComponent},
  { path: 'materiali', component: MaterialiComponent},
  { path: 'dettaglio/:id', component: DettaglioComponent},
  { path: '**', component: ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
