import { Component, OnInit } from '@angular/core';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tab_Materiali_Model1, Tab_Materiali_Model2 } from '../models/tab_materiali_model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-righe',
  templateUrl: './righe.component.html',
  styleUrls: ['./righe.component.css']
})
export class RigheComponent implements OnInit {

 selectedMateriale: Tab_Materiali_Model1 | undefined;
 addedMaterial: Tab_Materiali_Model2[] = [];
 materialId: number | null = null;
 formPage2!: FormGroup;
 saveBtn: boolean = false;

  constructor (private dexieDB: materialiDBService, public route: ActivatedRoute, 
    private router: Router, private notify: NotificationService,
    private fb: FormBuilder) {}

async ngOnInit(): Promise<void> {
 this.route.paramMap.subscribe(async params => {
  const materialId = params.get('id');
  if(materialId) {
    this.materialId = Number(materialId);

   await this.dexieDB.getMaterialByID(this.materialId).then((material) => {
      this.selectedMateriale = material; 
     }).catch((error) => {
      console.log('Errore durante recupero dati!');
     });
  }
 });

 this.formPage2 = this.fb.group({
  articolo: ['', Validators.required],
  unita_misura: ['', Validators.required],
  quantita: ['', Validators.required]
 });
 
}
async saveArticle() {
  if(this.formPage2.valid && this.formPage2.dirty) {
    const dataPage2 = this.formPage2.value;
    const material2 = new Tab_Materiali_Model2(
      dataPage2.articolo,
      dataPage2.unita_misura,
      dataPage2.quantita
    );
    
    try {
      this.addedMaterial.push(material2);
      console.log('Aggiunto nuovo articolo: ',material2);
      this.notify.showSuccess('Nuovo articolo aggiunto con successo!');
      this.formPage2.reset();
      this.saveBtn = true;
    } catch (error) {
      console.log('Errore durante inserimento di nuovo elemento');
      this.notify.showError('Qualcosa è andato storto!')
    }
    
  }

}

async saveChange() { 
  if(this.selectedMateriale) {
    this.selectedMateriale.materialiModel2.push(...this.addedMaterial);
    await this.dexieDB.updateMaterial(this.selectedMateriale);
    this.notify.showSuccess('Nuovo articolo è stato salvato con successo')
    console.log('Rinovato array: ',this.selectedMateriale);
    this.saveBtn = false;
  }
}

paginaSuccessiva() {
this.router.navigate(['/materiali'])
}


}


