import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDatosMPComponent } from './registro-datos-mp.component';

describe('RegistroDatosMPComponent', () => {
  let component: RegistroDatosMPComponent;
  let fixture: ComponentFixture<RegistroDatosMPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDatosMPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDatosMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
