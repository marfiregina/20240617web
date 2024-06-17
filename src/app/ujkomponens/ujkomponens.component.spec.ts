import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjkomponensComponent } from './ujkomponens.component';

describe('UjkomponensComponent', () => {
  let component: UjkomponensComponent;
  let fixture: ComponentFixture<UjkomponensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UjkomponensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UjkomponensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
