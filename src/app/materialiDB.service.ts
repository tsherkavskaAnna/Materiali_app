import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Tab_Materiali_Model } from './tab_materiali_model';

@Injectable({
  providedIn: 'root'
})
export class materialiDBService extends Dexie{
  materiali: Dexie.Table<Tab_Materiali_Model, number>;

  constructor() { 
    super('dexieDB');

    this.version(1).stores({
      materiali: '++id, dataRegistrazione, cantiere, articolo,um,quantita,fornitore,numero_bolla,note'
    });

    this.open()
    .then(data => console.log('Database aperto!'))
    .catch(err => console.log(err.message));

    this.materiali = this.table('materiali');
    console.log(this.materiali);
    

  }
    //Tutti materiali
    getAllMaterials() {
      return this.materiali.toArray().then((data) => {
        console.log(data);
        return data;
      })
      
   }

   //Aggiungere nuovo materiale
   addMaterials(material: Tab_Materiali_Model) {
    return this.materiali.add(material);
   }

   //Aggoirnare materiale 
   editMaterial(material: Tab_Materiali_Model) {
    return this.materiali.update(material.Id, material);
   }

   //Eliminare materiale
   deleteMaterial(id: number) {
    return this.materiali.delete(id);
   }
}


