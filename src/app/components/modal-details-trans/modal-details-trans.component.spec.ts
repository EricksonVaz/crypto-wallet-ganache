import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailsTransComponent } from './modal-details-trans.component';

describe('ModalDetailsTransComponent', () => {
  let component: ModalDetailsTransComponent;
  let fixture: ComponentFixture<ModalDetailsTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailsTransComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailsTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
