import { TestBed } from '@angular/core/testing';

import { ShopNowServicesService } from './shop-now-services.service';

describe('ShopNowServicesService', () => {
  let service: ShopNowServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopNowServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
