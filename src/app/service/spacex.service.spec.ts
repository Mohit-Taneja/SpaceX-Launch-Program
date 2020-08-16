import { TestBed } from '@angular/core/testing';

import { SpacexService } from './spacex.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
describe('SpacexService', () => {
  let service: SpacexService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SpacexService]
    });
    service = TestBed.inject(SpacexService);
    httpController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  afterEach(() => {
    httpController.verify();
  })
  it('should test get method', () => {
    const testData = [{
      "flight_number": 1, "mission_name": "FalconSat", "mission_id": [], "upcoming": false, "launch_year": "2006"
    }]
    service.getFilterData().subscribe((data: any) => {
      expect(testData).toBe(data);

    });
    const req = httpController.expectOne('https://api.spaceXdata.com/v3/launches?limit=100');
    expect(req.cancelled).toBeFalsy();
    expect(req.request.method).toEqual('GET');
    expect(req.request.responseType).toEqual('json');
    req.flush(testData);

  })
});
