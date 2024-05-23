import { Component } from '@angular/core';

export interface Equipment {
  "brand":string,
  "chasis":string,
  "engine":string,
  "model":string,
  "type":string,
  "hp":string
}

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})

export class EquipmentComponent {

  ngOnInit() {
    this.getAllEquipments();
  }

  equipments: Equipment[] = [
    {
      "brand":"XCMG",
      "chasis":"42342",
      "engine":"232223",
      "model":"2022",
      "type":"Excavator",
      "hp":"210"
    },
    {
      "brand":"HYUNDAI",
      "chasis":"453543",
      "engine":"3453453",
      "model":"2017",
      "type":"Excavator",
      "hp":"140"
    }
  ]

  displayedColumns = ["brand", "chasis", "engine", "model", "type", "hp"];

  getAllEquipments() {
    return this.equipments;
  }
}
