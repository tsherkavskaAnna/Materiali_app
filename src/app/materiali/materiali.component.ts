import { Component, OnInit } from '@angular/core';
import { Tab_Materiali_Model1, Tab_Materiali_Model2 } from '../models/tab_materiali_model';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-materiali',
  templateUrl: './materiali.component.html',
  styleUrls: ['./materiali.component.css']
})
export class MaterialiComponent implements OnInit {

  public tutti_materiali: Tab_Materiali_Model1[] = [];
  public risultati_ricerca: Tab_Materiali_Model1[] = [];
  id!: number;
  query: string = '';
  
    constructor(private dexieDB: materialiDBService, public route: ActivatedRoute, private router: Router, private notify: NotificationService, private headerService: HeaderService) {}
  
   async ngOnInit() {
    try {
      this.tutti_materiali= await this.dexieDB.getAllMaterials();
    
    } catch (error) {
      console.error('Qualcosa è andato storto con elenco di materiali!');
    } 

    this.headerService.searchQueryEvent.subscribe((query: string) => {
      this.query = query;
      this.searchQuery();
    })
}

redirectToInfo(id: number) {
  this.router.navigate(['/dettaglio', id])
}

async deleteMaterial(id: number) {
  try {
    await this.dexieDB.deleteMaterial(id);
    this.notify.showSuccess(`Materiale con ID: ${id} è cancellato!`);
    this.tutti_materiali = await this.dexieDB.getAllMaterials();
  } catch (error) {
    this.notify.showError('Non è stato eliminato elemento!')
  }
}
async searchQuery() {
  try {
    const searchId = Number(this.query);
    this.risultati_ricerca = await this.dexieDB.searchQuery(isNaN(searchId) ? this.query : searchId, this.query);
    if(searchId) {
      this.router.navigate(['/dettaglio', searchId]);
    }

    
  } catch (error) {
    console.log('errore');
    
  }
 }
 
 
}
