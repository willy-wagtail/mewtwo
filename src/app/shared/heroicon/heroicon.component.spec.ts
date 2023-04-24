import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroiconComponent } from './heroicon.component';

describe('HeroiconComponent', () => {
  let component: HeroiconComponent;
  let fixture: ComponentFixture<HeroiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HeroiconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
