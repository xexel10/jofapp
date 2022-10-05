import { FormGroup } from '@angular/forms';
import { TokenService } from './../../../auth/token/token.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { catchError, take } from 'rxjs/operators';
import { empty, Observable, Subject, EMPTY, switchMap } from 'rxjs';
import { Imovel } from './../../../models/imovel';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ImovelService } from '../imovel.service';


@Component({
  selector: 'app-imoveis-lista',
  templateUrl: './imoveis-lista.component.html',
  styleUrls: ['./imoveis-lista.component.css'],
  preserveWhitespaces:true
})
export class ImoveisListaComponent implements OnInit {

  //O $ é uma prática da comunidade//
  //Criei um observable de imoveis que será um array de imovel
  imoveis$!: Observable<Imovel[]>;
  imovelSelecionada!: Imovel;
  error$ = new Subject<Imovel>();
  bsModalRef?: BsModalRef;
  basePath = '/admin/imovel'
  @ViewChild('deleteModal') deleteModal;
  form!: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ImovelService,
    private alertService: AlertModalService,
    private tokenService: TokenService
  ) { }


  ngOnInit() {

    if (!this.tokenService.hasToken()){
      this.router.navigate(['/login']);
    }
    this.onRefresh();


  }

  onRefresh() {
    this.imoveis$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    );
  }

  onEdit(id) {
    this.router.navigate([this.basePath+'/editar', id], { relativeTo: this.route });
  }

  onConfirmDelete() {

  }

  onDeclineDelete() {

  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar imóveis. Tente novamente mais tarde.');
  }


  onDelete(cat) {

    this.imovelSelecionada = cat;

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse imóvel?');
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(cat.id) : EMPTY)
      )
      .subscribe({
        next: (v) => console.log(v),
        error: (e) =>  this.alertService.showAlertDanger('Erro ao remover imóvel. Tente novamente mais tarde.'),
        complete: () => {
          this.onRefresh();
        }
      });

  }


}
