import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatorComponent } from './duplicator.component';

describe('DuplicatorComponent', () => {
  let component: DuplicatorComponent;
  let fixture: ComponentFixture<DuplicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuplicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuplicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
