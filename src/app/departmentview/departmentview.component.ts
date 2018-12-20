import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import {HospitalserviceService} from '../hospitalservice.service';
@Component({
  selector: 'app-departmentview',
  templateUrl: './departmentview.component.html',
  styleUrls: ['./departmentview.component.css']
})
export class DepartmentviewComponent implements OnInit {
  match;
  matchingDepartments = [];
  departments = [];
  constructor(private route: ActivatedRoute, private hospitalService : HospitalserviceService, private router: Router) { }

  ngOnInit() {
    this.match = this.route.snapshot.paramMap.get('hospitalname');
    this.departments = this.hospitalService.getDepartments();
    this.matchingDepartments = this.departments.filter((elm, i , self) => {
      return this.match === elm.hospitalname;
    });
  }
  navigate() {
    this.router.navigate(['hospital']);
  }
  Sorting(){
    this.departments.sort(function(a, b) {
      var nameA = a.departmentname.toUpperCase(); // ignore upper and lowercase
      var nameB = b.departmentname.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    );
  }
}
