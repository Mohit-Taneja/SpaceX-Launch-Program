import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spacex-filters',
  templateUrl: './spacex-filters.component.html',
  styleUrls: ['./spacex-filters.component.css']
})
export class SpacexFiltersComponent implements OnInit {
  list_of_yrs = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'];
  launch_landList = [{ id: 'True', val: true }, { id: 'False', val: 'false' }]
  launchYearData: any;
  launchSuccessData: boolean;
  landSuccessData: boolean;
  launchFlag: boolean;
  landFlag: boolean;
  launchYrFlag: boolean;
  constructor(private router: Router) { }
  ngOnInit(): void { }
  selectedVal(val, filtertype) {
    if (filtertype === 'year') {
      if (this.launchYearData !== val) {
        this.launchYrFlag = true;
        this.launchYearData = val;
      }
      else {
        this.launchYrFlag = !this.launchYrFlag;
        this.launchYearData = null;
      }
    }
    if (filtertype === "launch") {
      if (this.launchSuccessData !== val) {
        this.launchFlag = true;
        this.launchSuccessData = val;
      }
      else {
        this.launchFlag = !this.launchFlag;
        this.launchSuccessData = null;
      }
    }
    if (filtertype === "land") {
      if (this.landSuccessData !== val) {
        this.landFlag = true;
        this.landSuccessData = val;
      }
      else {
        this.landFlag = !this.landFlag;
        this.landSuccessData = null;
      }
    }
    const payload = {
      launch_year: this.launchYearData,
      launch_success: this.launchSuccessData,
      land_success: this.landSuccessData
    }
    this.router.navigate(['/spacex-details'], { queryParams: { 'launch_year': payload.launch_year, 'launch_success': payload.launch_success, 'land_success': payload.land_success } });

  }
}


