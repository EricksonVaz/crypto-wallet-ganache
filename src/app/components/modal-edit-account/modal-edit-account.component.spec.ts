import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAccountComponent } from './modal-edit-account.component';

describe('ModalEditAccountComponent', () => {
  let component: ModalEditAccountComponent;
  let fixture: ComponentFixture<ModalEditAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
