import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KohliComponent } from './kohli.component';



describe('AuctionListComponent', () => {
  let component: KohliComponent;
  let fixture: ComponentFixture<KohliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KohliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KohliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
