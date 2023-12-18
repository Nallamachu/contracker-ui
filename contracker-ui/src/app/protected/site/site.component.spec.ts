import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteComponent } from './site.component';

describe('SiteComponent', () => {
  let component: SiteComponent;
  let fixture: ComponentFixture<SiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteComponent]
    });
    fixture = TestBed.createComponent(SiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
