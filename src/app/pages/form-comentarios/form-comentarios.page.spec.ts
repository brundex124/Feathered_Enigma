import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComentariosPage } from './form-comentarios.page';

describe('FormComentariosPage', () => {
  let component: FormComentariosPage;
  let fixture: ComponentFixture<FormComentariosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComentariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
