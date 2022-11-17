import { TipoImovel } from 'src/app/models/tipo-imovel';
import { FormGroup } from '@angular/forms';
import { TokenService } from './../../../auth/token/token.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, take } from 'rxjs/operators';
import { Observable, Subject, EMPTY, switchMap } from 'rxjs';
import { Categoria } from './../../../models/categoria';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TipoImovelService } from '../tipo-imovel.service';


@Component({
  selector: 'app-categorias-lista',
  templateUrl: './tipo-imoveis-lista.component.html',
  styleUrls: ['./tipo-imoveis-lista.component.css'],
  preserveWhitespaces: true
})
export class TipoImoveisListaComponent implements OnInit {

  //O $ é uma prática da comunidade//
  //Criei um observable de categorias que será um array de categoria
  //tipos_imovel$!: Observable<TipoImovel[]>;
  tipos_imovel$!: TipoImovel[];
  tiposImovelSelecionado!: TipoImovel;
  error$ = new Subject<boolean>();
  bsModalRef?: BsModalRef;
  basePath = '/admin/tipo-imovel'
  @ViewChild('deleteModal') deleteModal;
  form!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: TipoImovelService,
    private alertService: AlertModalService,
    private tokenService: TokenService
  ) { }


  ngOnInit() {

    if (!this.tokenService.hasToken()){
      this.router.navigate(['/login']);
    }
    this.onRefresh('1');


  }

  onRefresh(page: string) {
    this.service.lista('1').subscribe({
      next: (dados) => {
            console.log("Dados: ",dados)
            this.tipos_imovel$ = <TipoImovel[]>dados['results'];
          },
      error: (erro) => console.log(erro)
    })



    //this.tipos_imovel$ = this.service.list().pipe(
     // catchError(error => {
     //   console.error(error);
      //  this.handleError();
       // return EMPTY;
      //})
    //);
  }

  onEdit(id) {
    this.router.navigate([this.basePath+'/editar', id], { relativeTo: this.route });
  }

  onConfirmDelete() {

  }

  onDeclineDelete() {

  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }


  onDelete(tp) {

    this.tiposImovelSelecionado = tp;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(tp.id) : EMPTY)
      )
      .subscribe({
        next: (v) => console.log(v),
        error: (e) =>  this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.'),
        complete: () => {
          this.onRefresh('1');
        }
      });

  }


}

