import { Component, OnInit } from '@angular/core';
import { Tab_Materiali_Model } from '../tab_materiali_model';
import { materialiDBService } from '../services/materialiDB.service';

@Component({
  selector: 'app-materiali',
  templateUrl: './materiali.component.html',
  styleUrls: ['./materiali.component.css']
})
export class MaterialiComponent implements OnInit {

  public isLoading: boolean = true;
  public tutti_materiali: Tab_Materiali_Model[] = [];
  
    constructor(private dexieDB: materialiDBService) {}
  
   async ngOnInit() {
     try {
      this.tutti_materiali = await this.dexieDB.getAllMaterials();
      console.log('Tutti materiali:' , this.tutti_materiali);
      this.isLoading = false;
     } catch (error) {
      console.error('Qualcosa è andato storto con elenco di materiali!');
      this.isLoading = false;
     }
      
    }
    
    
}
