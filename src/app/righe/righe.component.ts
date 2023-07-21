import { Component, OnInit } from '@angular/core';
import { materialiDBService } from '../materialiDB.service';
import { Tab_Materiali_Model } from '../tab_materiali_model';

@Component({
  selector: 'app-righe',
  templateUrl: './righe.component.html',
  styleUrls: ['./righe.component.css']
})
export class RigheComponent implements OnInit {

tutti_materiali: Tab_Materiali_Model[] = [];

  constructor(private dexieDB: materialiDBService) {
  }


  ngOnInit() {
    this.loadMaterials();
  }

  loadMaterials() {
    this.dexieDB.getAllMaterials().then((data) => {
      this.tutti_materiali = data;
      console.log(data);
    })
    .catch((error) => 
    console.log('Errore di inserimento materiale nella tabella')
    )}
}
