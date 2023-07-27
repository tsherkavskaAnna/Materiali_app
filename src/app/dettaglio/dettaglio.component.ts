import { Component, OnInit } from '@angular/core';
import { materialiDBService } from '../services/materialiDB.service';
import { Tab_Materiali_Model1 } from '../models/tab_materiali_model';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  public materialId!: number;
  public materialDetails: Tab_Materiali_Model1 | undefined;

  constructor(private dexieDB: materialiDBService, public route: ActivatedRoute,
    private notify: NotificationService) {}

  async ngOnInit() {
    this.materialId = this.route.snapshot.params['id'];
    if(this.materialId) {
      this.materialId = Number(this.materialId)
      this.loadDetails(this.materialId)
    }
  }

  async loadDetails(materialId: number) {
    this.dexieDB.getMaterialByID(materialId).then((data) => {
      this.materialDetails = data;
      console.log(this.materialDetails);
      
    })
  }

}
