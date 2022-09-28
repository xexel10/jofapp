import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError } from 'rxjs/operators';
import { empty, Observable, Subject, EMPTY } from 'rxjs';
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

  // array de categoria
  //categorias!: Categoria[];

  //O $ é uma prática da comunidade//
  //Criei um observable de categorias que será um array de categoria
  categorias$!: Observable<Categoria[]>;
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

  onEdit(id){
    this.router.navigate(['/editar', id], {relativeTo: this.route});
  }

  onDelete(cat){

  }

  onConfirmDelete(){

  }

  onDeclineDelete(){

  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }


}
