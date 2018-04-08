import { TestBed, inject } from '@angular/core/testing';
import { Http, HttpModule} from '@angular/http';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchService, {
      provide: Http}],
      imports: [HttpModule]
    });
        TestBed.compileComponents();
    // inject service at start of each test
    service = TestBed.get(SearchService);
    spyOn(SearchService.prototype, 'getData').and.returnValue(Promise.resolve({ cities: ['chennai', 'mumbai'] }));
  });

  it('should be created',  () => {
    expect(service).toBeTruthy();
  });
  
  it('should run a test that gives a object type response', (done) => {
    service.getData().then(
      (result) => {
        console.log('type of', result);
        expect(result).toBeDefined();
        expect(typeof result).toEqual('object');
        done();
      });
  });
});
