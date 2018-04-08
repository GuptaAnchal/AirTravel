import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { SearchService } from '../../services/search.service';
import { FlightInfoBoxComponent } from './flight-info-box.component';

describe('FlightInfoBoxComponent', () => {
  let component: FlightInfoBoxComponent;
  let fixture: ComponentFixture<FlightInfoBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ FlightInfoBoxComponent ],
      providers: [SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightInfoBoxComponent);
    component = fixture.componentInstance;
    component._searchService.details={
        departureCity: 'chennai', arrivalCity: 'mumbai', oneWay: true, refine: 10000, departDate: '01/04/2018', returnDate: '', passengersCount: 1
      },
    component._searchService.dataFound= true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
