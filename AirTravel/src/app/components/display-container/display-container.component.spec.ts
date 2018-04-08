import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { LoaderComponent } from '../loader/loader.component';
import { DisplayContainerComponent } from './display-container.component';
import { FlightInfoBoxComponent } from '../flight-info-box/flight-info-box.component';
import { ErrorCardComponent } from '../error-card/error-card.component';
import { OrderByPipe } from '../../custom-pipes/order-by.pipe';
import { RefineByPrice } from '../../custom-pipes/refine-by-price.pipe';
import { SearchService } from '../../services/search.service';
describe('DisplayContainerComponent', () => {
  let component: DisplayContainerComponent;
  let fixture: ComponentFixture<DisplayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ DisplayContainerComponent, LoaderComponent, FlightInfoBoxComponent, ErrorCardComponent, OrderByPipe, RefineByPrice],
      providers: [SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayContainerComponent);
    component = fixture.componentInstance;
    component._searchService.details={
        departureCity: 'chennai', arrivalCity: 'mumbai', oneWay: true, refine: 10000, departDate: '01/04/2018', returnDate: '', passengersCount: 1
      },
    component._searchService.dataFound= true;
    component._searchService.oneWayFlights=[{
      flightNo: "MK-101",	departureCity: "chennai",	arrivalCity: "mumbai",	time: {		depart: "10:00",		arrive: "12:00"},
      date: "12 Apr 2009",	amount: "500"}]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have a app-flight-info-box component`, async(() => {
    const fixture = TestBed.createComponent(DisplayContainerComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-flight-info-box')).toBeDefined();
  }));
});
