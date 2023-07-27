import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { materialiDBService } from '../services/materialiDB.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { Tab_Materiali_Model1 } from '../models/tab_materiali_model';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class InputDataComponent implements OnInit {

  formPage1!: FormGroup;
  submitted = false;
  id: number | undefined;

  constructor(private fb: FormBuilder, private dexieDB: materialiDBService,private router: Router, 
    private route: ActivatedRoute, private notify: NotificationService) {}


  ngOnInit(): void {
    this.formPage1 = this.fb.group({
      dataRegistrazione: ['', Validators.required],
      cantiere: ['', Validators.required],
      fornitore: ['', Validators.required],
      numero_bolla: ['', Validators.required],
      note: [''],
    });

  }
 async addMaterials() {
    if(this.formPage1.valid && this.formPage1.dirty) {
      this.submitted =true;
      
const dataPage1 = this.formPage1.value;
const materiali = new Tab_Materiali_Model1(
  dataPage1.dataRegistrazione,
  dataPage1.cantiere,
  dataPage1.fornitore,
  dataPage1.numero_bolla,
  dataPage1.note
);
      try {
        const materialID = await this.dexieDB.addMaterials(materiali);
        this.notify.showSuccess('Materiale salvato in database con ID: '+ materialID);
        this.router.navigate(['/righe', materialID])
      } catch (error) {
        console.log('Errore durante inserimento di nuovo elemento');
        this.notify.showError('Qualcosa è andato storto!')
      }
    }
    else {
      this.notify.showError('Inserire tutti dati nella form!');
      this.submitted = false;
    }
  }

  
}
