import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SpacexService {
Base_URL="https://api.spaceXdata.com/v3/launches?limit=100";
  constructor(private http: HttpClient) {}

  getFilterData(data?) {
    /*  Fetch all filters data */
    if (data && data.launch_year && data.land_success && data.launch_success) {
      const options = { params: new HttpParams().set('launch_success', data.launch_success) };
      let params = new HttpParams();
      params = params.append('land_success', data.land_success);
      params = params.append('launch_year', data.launch_year);
      params = params.append('launch_success', data.launch_success);
      return this.http.get(this.Base_URL, { params: params });
    }
    /*  Fetch launch_year & land_success filters data */
    if (data && data.launch_year && data.land_success) {
      const options = { params: new HttpParams().set('launch_success', data.launch_success) };
      let params = new HttpParams();
      params = params.append('land_success', data.land_success);
      params = params.append('launch_year', data.launch_year);
      return this.http.get(this.Base_URL, { params: params });
    }
    /* Fetch launch_success & land_success filters data */
    if (data && data.launch_success && data.land_success) {
      let params = new HttpParams();
      params = params.append('land_success', data.land_success);
      params = params.append('launch_success', data.launch_success);
      return this.http.get(this.Base_URL, { params: params });
    }
    /* Fetch launch_success & launch_year fitlers data*/
    if (data && data.launch_success && data.launch_year) {
      let params = new HttpParams();
      params = params.append('launch_success', data.launch_success);
      params = params.append('launch_year', data.launch_year);
      return this.http.get(this.Base_URL, { params: params });
    }
    /* Fetch land_success filter data */
    if (data && data.land_success) {
      const options = { params: new HttpParams().set('land_success', data.land_success) };
      return this.http.get(this.Base_URL, options);
    }
    /* Fetch launch_success filter data */
    if (data && data.launch_success) {
      const options = { params: new HttpParams().set('launch_success', data.launch_success) };
      return this.http.get(this.Base_URL, options);
    }
    /* Fetch launch_year filter data */
    if (data && data.launch_year) {
      const options = { params: new HttpParams().set('launch_year', data.launch_year) };
      return this.http.get(this.Base_URL, options);
    }
    /*  Fetch all data without filters */
    else {
      return this.http.get(this.Base_URL);
    }
  }
}