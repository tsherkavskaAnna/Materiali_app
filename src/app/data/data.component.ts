import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Tab_Materiali_Model } from '../tab_materiali_model';
import { materialiDBService } from '../materialiDB.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, public dexieDB: materialiDBService, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', Validators.required],
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
  addMaterials() {
    if(this.form.valid && this.form.dirty) {
      this.submitted =true;
      const materiali = new Tab_Materiali_Model(
      this.form.get('id')!.value,
      this.form.get('dataRegistrazione')!.value,
      this.form.get('cantiere')!.value,
      this.form.get('articolo')!.value,
      this.form.get('um')!.value,
      this.form.get('quantita')!.value,
      this.form.get('fornitore')!.value,
      this.form.get('numero_bolla')!.value, 
      this.form.get('note')!.value,
      );
    
      this.dexieDB.addMaterials(materiali)
      .then(() => {
        this.router.navigate(['/righe'])
        console.log('Materiale salvato in database.'); 
      }).catch(error => console.log('Qualcosa andato male!')
      )
    }
    else {
      console.log('Inserire tutti dati nella form!');
      this.submitted = false;
      
    }
  }
}
