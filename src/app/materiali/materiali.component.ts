import { Component, OnInit } from '@angular/core';
import { Tab_Materiali_Model1, Tab_Materiali_Model2 } from '../models/tab_materiali_model';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-materiali',
  templateUrl: './materiali.component.html',
  styleUrls: ['./materiali.component.css']
})
export class MaterialiComponent implements OnInit {

  public tutti_materiali: Tab_Materiali_Model1[] = [];
  id!: number;
  
    constructor(private dexieDB: materialiDBService, public route: ActivatedRoute, private router: Router, private notify: NotificationService) {}
  
   async ngOnInit() {
    try {
      this.tutti_materiali= await this.dexieDB.getAllMaterials();
      console.log('Tutti materiali:' , this.tutti_materiali);
      this.tutti_materiali.forEach((materiale) => materiale)
    
    } catch (error) {
      console.error('Qualcosa è andato storto con elenco di materiali!');
    } 
}

redirectToInfo(id: number) {
  this.router.navigate(['/dettaglio', id])
}

deleteMaterial(id: number) {
  this.dexieDB.deleteMaterial(id);
  this.notify.showSuccess(`Materiale con ID: ${id} è cancellato!`)
}

}
