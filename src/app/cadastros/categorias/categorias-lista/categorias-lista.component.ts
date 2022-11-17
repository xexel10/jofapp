import { FormGroup } from '@angular/forms';
import { TokenService } from './../../../auth/token/token.service';
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
  //categorias$!: Observable<Categoria[]>;
  categorias$!: Categoria[];
  categoriaSelecionada!: Categoria;
  error$ = new Subject<boolean>();
  bsModalRef?: BsModalRef;
  basePath = '/admin/categoria'
  @ViewChild('deleteModal') deleteModal;
  form!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CategoriaService,
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
            this.categorias$ = <Categoria[]>dados['results'];
          },
      error: (erro) => console.log(erro)
    })
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


  onDelete(cat) {

    this.categoriaSelecionada = cat;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(cat.id) : EMPTY)
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
