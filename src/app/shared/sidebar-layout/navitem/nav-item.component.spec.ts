import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavitemComponent } from './nav-item.component';

describe('NavitemComponent', () => {
  let component: NavitemComponent;
  let fixture: ComponentFixture<NavitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavitemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
