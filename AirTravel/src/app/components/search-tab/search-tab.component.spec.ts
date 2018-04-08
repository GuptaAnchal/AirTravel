import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SearchTabComponent } from './search-tab.component';
import { SearchService } from '../../services/search.service';

describe('SearchTabComponent', () => {
  let component: SearchTabComponent;
  let fixture: ComponentFixture<SearchTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, FormsModule],
      declarations: [ SearchTabComponent ],
      providers: [SearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTabComponent);
    component = fixture.componentInstance;
    component.isSubmitted= true,
    component._searchService.dataFound= true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it(`should have a div component with class tab`, async(() => {
    const fixture = TestBed.createComponent(SearchTabComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.tab')).toBeTruthy();
  }));

  it(`should have a form component`, async(() => {
    const fixture = TestBed.createComponent(SearchTabComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  }));
});
