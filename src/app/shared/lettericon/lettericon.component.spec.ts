import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LettericonComponent } from './lettericon.component';

describe('LettericonComponent', () => {
  let component: LettericonComponent;
  let fixture: ComponentFixture<LettericonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LettericonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LettericonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
