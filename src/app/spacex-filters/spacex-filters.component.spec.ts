import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { SpacexFiltersComponent } from './spacex-filters.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
describe('SpacexFiltersComponent', () => {
  let component: SpacexFiltersComponent;
  let fixture: ComponentFixture<SpacexFiltersComponent>;
  let routerSpy: jasmine.SpyObj<any> = jasmine.createSpyObj('Router', ['selectVal'])
  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [SpacexFiltersComponent],
      providers: [{ provide: Router, useValue: routerSpy }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display proper data', () => {
    const label1 = fixture.debugElement.nativeElement.querySelectorAll('label')[0];
    expect(label1.textContent).toEqual('Launch Year');
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3.textContent).toEqual('Filters');
    const label2 = fixture.debugElement.nativeElement.querySelectorAll('label')[1];
    expect(label2.textContent).toEqual('Successful Launch');
    const label3 = fixture.debugElement.nativeElement.querySelectorAll('label')[2];
    expect(label3.textContent).toEqual('Successful Landing');

  })

  it('should call method on button click', fakeAsync(() => {
    let launch_year = '2006';
    let launch_success = false;
    let land_success = true;
    spyOn(component, 'selectedVal').and.callThrough();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn_launchYr');
    button.click();
    expect(component.selectedVal).toHaveBeenCalledWith(launch_year, 'year');
    //  expect(TestBed.get(Router).selectedVal).toHaveBeenCalledWith(['/spacex-details'],{queryParams:{launch_year:launch_year,launch_success:launch_success,land_success:land_success}});
  }))

  /* it('should navigate to details component',fakeAsync(()=>{
    spyOn(component,'selectedVal').and.callThrough();

    const button:HTMLElement =fixture.debugElement.nativeElement.querySelector('#btn_launchYr');
    button.click();
expect(component.selectedVal).toHaveBeenCalledWith(['/spacex-details'])
  }) */
});

