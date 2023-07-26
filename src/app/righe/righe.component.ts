import { Component, OnInit } from '@angular/core';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tab_Materiali_Model1, Tab_Materiali_Model2 } from '../models/tab_materiali_model';

@Component({
  selector: 'app-righe',
  templateUrl: './righe.component.html',
  styleUrls: ['./righe.component.css']
})
export class RigheComponent implements OnInit {

 selectedMateriale: Tab_Materiali_Model1 | undefined;
 addedMaterial: Tab_Materiali_Model2[] = [];
 materialId: number | null = null;

  constructor (private dexieDB: materialiDBService, public route: ActivatedRoute, private router: Router) {}

async ngOnInit(): Promise<void> {
 this.route.paramMap.subscribe(async params => {
  const materialId = params.get('id');
  if(materialId) {
    this.materialId = Number(materialId);
    
   await this.dexieDB.getMaterialByID(this.materialId).then((material) => {
      this.selectedMateriale = material; 
      console.log('Materiale con id ' + materialId);
      console.log(this.selectedMateriale);
     }).catch((error) => {
      console.log('Errore durante recupero dati!');
     });
  }
 })
 
}

async saveChange() { 
  if(this.selectedMateriale) {
    
    console.log(this.addedMaterial);
    this.selectedMateriale.materialiModel2.push(...this.addedMaterial);
    await this.dexieDB.updateMaterial(this.selectedMateriale)
  }
}

paginaSuccessiva() {
this.router.navigate(['/materiali'])
}


}


