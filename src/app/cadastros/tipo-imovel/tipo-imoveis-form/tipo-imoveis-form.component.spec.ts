import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoImoveisFormComponent } from './tipo-imoveis-form.component';

describe('TipoImoveisFormComponent', () => {
  let component: TipoImoveisFormComponent;
  let fixture: ComponentFixture<TipoImoveisFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoImoveisFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoImoveisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
