import { async, TestBed } from '@angular/core/testing';
import { SharedFeatureSeatListingModule } from './shared-feature-seat-listing.module';

describe('SharedFeatureSeatListingModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedFeatureSeatListingModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedFeatureSeatListingModule).toBeDefined();
  });
});
