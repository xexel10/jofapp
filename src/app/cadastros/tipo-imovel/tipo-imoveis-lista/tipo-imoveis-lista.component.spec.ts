import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoImoveisListaComponent } from './tipo-imoveis-lista.component';

describe('TipoImoveisListaComponent', () => {
  let component: TipoImoveisListaComponent;
  let fixture: ComponentFixture<TipoImoveisListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoImoveisListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoImoveisListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
