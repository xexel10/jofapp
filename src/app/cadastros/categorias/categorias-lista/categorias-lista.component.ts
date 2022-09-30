import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, take } from 'rxjs/operators';
import { empty, Observable, Subject, EMPTY, switchMap } from 'rxjs';
import { Categoria } from './../../../models/categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoriaService } from '../categoria.service';


@Component({
  selector: 'app-categorias-lista',
  templateUrl: './categorias-lista.component.html',
  styleUrls: ['./categorias-lista.component.css'],
  preserveWhitespaces: true
})
export class CategoriasListaComponent implements OnInit {

  //O $ é uma prática da comunidade//
  //Criei um observable de categorias que será um array de categoria
  categorias$!: Observable<Categoria[]>;
  categoriaSelecionada!: Categoria;
  error$ = new Subject<boolean>();
  bsModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CategoriaService,
    private alertService: AlertModalService
  ) { }


  ngOnInit() {
    this.onRefresh();
    console.log('Route: ', this.router.url)

  }

  onRefresh() {
    this.categorias$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    );
  }

  onEdit(id) {
    this.router.navigate(['/editar', id], { relativeTo: this.route });
  }

  onDelete(cat) {

    this.categoriaSelecionada = cat;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(cat.id) : EMPTY)
      )
      .subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        }
      );
  }

  onConfirmDelete() {

  }

  onDeclineDelete() {

  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }


}
