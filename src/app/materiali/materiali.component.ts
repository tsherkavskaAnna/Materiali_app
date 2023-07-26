import { Component, OnInit } from '@angular/core';
import { Tab_Materiali_Model1, Tab_Materiali_Model2 } from '../models/tab_materiali_model';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materiali',
  templateUrl: './materiali.component.html',
  styleUrls: ['./materiali.component.css']
})
export class MaterialiComponent implements OnInit {

  public tutti_materiali: Tab_Materiali_Model1[] = [];
  
    constructor(private dexieDB: materialiDBService, public route: ActivatedRoute) {}
  
   async ngOnInit() {
    try {
      this.tutti_materiali= await this.dexieDB.getAllMaterials();
      console.log('Tutti materiali:' , this.tutti_materiali);
      this.tutti_materiali.forEach((materiale) => materiale)
    
    } catch (error) {
      console.error('Qualcosa è andato storto con elenco di materiali!');
    } 
}

}
