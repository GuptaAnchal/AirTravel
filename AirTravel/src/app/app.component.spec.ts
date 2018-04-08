import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayContainerComponent } from './components/display-container/display-container.component';
import { SearchTabComponent } from './components/search-tab/search-tab.component';

import { SearchService } from './services/search.service';
import { FlightInfoBoxComponent } from './components/flight-info-box/flight-info-box.component';
import { OrderByPipe } from './custom-pipes/order-by.pipe';
import { RefineByPrice } from './custom-pipes/refine-by-price.pipe';
import { ImageAdsComponent } from './components/image-ads/image-ads.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ErrorCardComponent } from './components/error-card/error-card.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        DisplayContainerComponent,
        SearchTabComponent,
        FlightInfoBoxComponent,
        OrderByPipe,
        FlightInfoBoxComponent,
        ImageAdsComponent,
        LoaderComponent,
        ErrorCardComponent,
        RefineByPrice
      ],
      providers: [SearchService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
