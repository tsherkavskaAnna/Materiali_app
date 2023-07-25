import { Component, OnInit } from '@angular/core';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tab_Materiali_Model } from '../tab_materiali_model';

@Component({
  selector: 'app-righe',
  templateUrl: './righe.component.html',
  styleUrls: ['./righe.component.css']
})
export class RigheComponent implements OnInit {

 selectedMateriale: Tab_Materiali_Model | undefined;
 materialId: number | null = null;

  constructor (private dexieDB: materialiDBService, private route: ActivatedRoute, private router: Router) {}

ngOnInit(): void {
 this.route.paramMap.subscribe(params => {
  const materialId = params.get('id');
  if(materialId) {
    this.materialId = Number(materialId);
    this.dexieDB.getMaterialByID(this.materialId).then((material) => {
      this.selectedMateriale = material; 
      console.log('Materiale con id ' + materialId);
      console.log(this.selectedMateriale);
     }).catch((error) => {
      console.log('Errore durante rucupero dati!');
     });
  }
 })
 
}

salvaCambiamenti() { 
  if(this.selectedMateriale) {
    const nuovaData = new Date();
    this.selectedMateriale.Data_Registrazione = nuovaData;
    console.log('Nuova data è: '+ this.selectedMateriale.Data_Registrazione );
    
  }
}
  

paginaSuccessiva() {
this.router.navigate(['/materiali'])
}


}


