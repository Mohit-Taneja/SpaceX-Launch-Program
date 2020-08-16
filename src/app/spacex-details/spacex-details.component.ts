import { Component, OnInit, Input } from '@angular/core';
import { SpacexService } from '../service/spacex.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-spacex-details',
  templateUrl: './spacex-details.component.html',
  styleUrls: ['./spacex-details.component.css']
})
export class SpacexDetailsComponent implements OnInit {
  list: any;
  filterData: any;
  constructor(private spacexService: SpacexService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const payload = {
        launch_year: params.launch_year,
        launch_success: params.launch_success,
        land_success: params.land_success
      }
      this.spacexService.getFilterData(payload).subscribe((res: any) => {
        if (res) {
          this.filterData = res;
        }
      })
    })

  }
  trackByFlightNo(index: number, card: any) {
    return card.flight_number;
  }
}
