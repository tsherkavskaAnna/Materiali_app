import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Tab_Materiali_Model } from '../tab_materiali_model';

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

//Per vedere se è aperto database
    this.open()
    .then(data => console.log('Database aperto!'))
    .catch(err => console.log(err.message));

    this.materiali = this.table('materiali');
  }
    //Tutti materiali
    async getAllMaterials() :Promise<Tab_Materiali_Model[]> {
     return await this.materiali.toArray().then((data) => {
      console.log('GetAll in Service: ',data);
      return data;
     })
    }
        
   //Aggiungere nuovo materiale
   async addMaterials(material: Tab_Materiali_Model) : Promise<number> {
    console.log('Aggiunto nuovo materiale: ', material);
    return await this.materiali.add(material);
   }

   //Modificare materiale
   async updateMaterial(updateMaterial: Tab_Materiali_Model) : Promise<void> {
    const id = updateMaterial.Data_Registrazione;
     await this.materiali.update(updateMaterial, updateMaterial)
   }

   //Eliminare materiale
   async deleteMaterial(id: number) {
    return await this.materiali.delete(id);
   }

   //Selezionare materiale con ID
  async getMaterialByID(id: number ) : Promise<Tab_Materiali_Model | undefined> {
    return await this.materiali.get(id);
   }


}


