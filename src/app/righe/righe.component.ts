import { Component, OnInit } from '@angular/core';
import { materialiDBService } from '../materialiDB.service';
import { Tab_Materiali_Model } from '../tab_materiali_model';

@Component({
  selector: 'app-righe',
  templateUrl: './righe.component.html',
  styleUrls: ['./righe.component.css']
})
export class RigheComponent implements OnInit {

public isLoading: boolean = true;
public tutti_materiali: Tab_Materiali_Model[] = [];

  constructor(private dexieDB: materialiDBService) {}

  ngOnInit() : void{
    this.loadMaterials();
    console.log('tutti materiali: ', this.tutti_materiali);
    
  }
  
  loadMaterials() : void {
    this.isLoading = true; 
    this.dexieDB.getAllMaterials().subscribe(
      (data) => {
        this.tutti_materiali = data;
        this.isLoading = false; 
        console.log('Dati aggiunti: ', this.tutti_materiali);
      },
      (error) => {
        console.log('Errore di inserimento materiale nella tabella');
        this.isLoading = false; 
      }
    );
  }

    

}
