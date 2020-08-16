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
  launchSuccess: boolean;
  landSuccess: boolean;
  launchFlag: boolean;
  landFlag: boolean;
  launchYrFlag: boolean;
  constructor(private router: Router) { }
  ngOnInit(): void { }
  selectedVal(val, filtertype) {
    if (filtertype === 'year') {
      this.launchYrFlag = !this.launchYrFlag;
      if (this.launchYrFlag) {
        this.launchYearData = val;
      }
      else {
        this.launchYearData = null;
      }
    }
    if (filtertype === "launch") {
      this.launchFlag = !this.launchFlag;
      if (this.launchFlag) {
        this.launchSuccess = val;
      }
      else {
        this.launchSuccess = null;
      }
    }
    if (filtertype === "land") {
      this.landFlag = !this.landFlag;
      if (this.landFlag) {
        this.landSuccess = val;
      }
      else {
        this.landSuccess = null;
      }
    }
    const payload = {
      launch_year: this.launchYearData,
      launch_success: this.launchSuccess,
      land_success: this.landSuccess
    }
    this.router.navigate(['/spacex-details'], { queryParams: { 'launch_year': payload.launch_year, 'launch_success': payload.launch_success, 'land_success': payload.land_success } });

  }
}


