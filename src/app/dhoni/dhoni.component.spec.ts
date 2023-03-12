import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhoniComponent } from './dhoni.component';

describe('DhoniComponent', () => {
  let component: DhoniComponent;
  let fixture: ComponentFixture<DhoniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhoniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhoniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
