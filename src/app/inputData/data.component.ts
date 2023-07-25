import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Tab_Materiali_Model } from '../tab_materiali_model';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class InputDataComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  id: number | undefined;

  constructor(private fb: FormBuilder, private dexieDB: materialiDBService,private router: Router, 
    private route: ActivatedRoute, private notify: NotificationService) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      dataRegistrazione: ['', Validators.required],
      cantiere: ['', Validators.required],
      articolo: ['', Validators.required],
      um: ['', Validators.required],
      quantita: ['', Validators.required],
      fornitore: ['', Validators.required],
      numero_bolla: ['', Validators.required],
      note: [''],
    });

  }
 async addMaterials() {
    if(this.form.valid && this.form.dirty) {
      this.submitted =true;
      const materiali = new Tab_Materiali_Model(
      this.form.get('dataRegistrazione')!.value,
      this.form.get('cantiere')!.value,
      this.form.get('articolo')!.value,
      this.form.get('um')!.value,
      this.form.get('quantita')!.value,
      this.form.get('fornitore')!.value,
      this.form.get('numero_bolla')!.value, 
      this.form.get('note')!.value,
      );
    
      try {
        const materialID = await this.dexieDB.addMaterials(materiali);
        this.notify.showSuccess('Materiale salvato in database con ID: '+ materialID);
        this.router.navigate(['/righe', materialID])
      } catch (error) {
        console.log('Errore durante inserimento di nuvo elemento');
        this.notify.showError('Qualcosa è andato storto!')
      }
    }
    else {
      this.notify.showError('Inserire tutti dati nella form!');
      this.submitted = false;
    }
  }

  
}
