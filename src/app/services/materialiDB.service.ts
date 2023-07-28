import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Tab_Materiali_Model1, Tab_Materiali_Model2 } from '../models/tab_materiali_model';

@Injectable({
  providedIn: 'root'
})
export class materialiDBService extends Dexie{
  
  materiali: Dexie.Table<Tab_Materiali_Model1, number>;

  constructor() { 
    super('dexieDB');

    this.version(1).stores({
      materiali: '++id, _Data_Registrazione, _Cantiere, _Fornitore, _Numero_Bolla, _Note, materialiModel2',
    });

//Per vedere se è aperto database
    this.open()
    .then(data => console.log('Database aperto!'))
    .catch(err => console.log(err.message));

    this.materiali = this.table('materiali');
  }
    //Tutti materiali
    async getAllMaterials() :Promise<Tab_Materiali_Model1[]> {
     return await this.materiali.toArray().then((data) => {
      return data;
     })
    }
        
   //Aggiungere nuovo materiale
   async addMaterials(material: Tab_Materiali_Model1) : Promise<number> {
    console.log('Aggiunto nuovo materiale: ', material);
    return await this.materiali.add(material);
   }

   //Modificare materiale nella pagina 2
   async updateMaterial(material: Tab_Materiali_Model1) : Promise<void> {
     await this.materiali.update(material.id, material)
   }

   //Eliminare materiale dalla pagina 4
   async deleteMaterial(id: number) {
     await this.materiali.delete(id);
   }

   //Selezionare materiale con ID
  async getMaterialByID(id: number ) : Promise<Tab_Materiali_Model1 | undefined> {
    return await this.materiali.get(id);
   }

//Cercare marteriale con id
async searchQuery(idSearch: number | string, query: string): Promise<Tab_Materiali_Model1[]> {
  let result: Tab_Materiali_Model1[] = [];

  try {
    if (typeof idSearch === 'number') {
      const element = await this.materiali.get(idSearch);
      if (element) {
        result.push(element);
      }
    } 
  } catch (error) {
    console.log('errore durante ricerca in service!');
  }
  return result;
} 

}


