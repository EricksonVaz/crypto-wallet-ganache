import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGetPrivateKeyComponent } from './modal-get-private-key.component';

describe('ModalGetPrivateKeyComponent', () => {
  let component: ModalGetPrivateKeyComponent;
  let fixture: ComponentFixture<ModalGetPrivateKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalGetPrivateKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGetPrivateKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
