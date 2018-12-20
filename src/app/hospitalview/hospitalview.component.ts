import { Component, OnInit } from '@angular/core';
import {HospitalserviceService} from '../hospitalservice.service';
@Component({
  selector: 'app-hospitalview',
  templateUrl: './hospitalview.component.html',
  styleUrls: ['./hospitalview.component.css']
})
export class HospitalviewComponent implements OnInit {
  hospitals = [];
  headers = [];
  constructor(private hospitalService : HospitalserviceService) { }

  ngOnInit() {
   this.hospitals = this.hospitalService.getHospitals();
  }

}
