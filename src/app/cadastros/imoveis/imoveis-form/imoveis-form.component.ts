import { FileHandle } from './../../../models/file-handle';
import { Foto } from './../../../models/foto';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpEventType, HttpEvent } from '@angular/common/http';

import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Subscription, Observable } from 'rxjs';

import { TipoImovel } from './../../../models/tipo-imovel';
import { TipoImovelService } from './../../tipo-imovel/tipo-imovel.service';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from './../../categorias/categoria.service';
import { ImovelService } from './../imovel.service';
import { Imovel } from './../../../models/imovel';
import { DomSanitizer } from '@angular/platform-browser';
import { faTowerObservation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-imoveis-form',
  templateUrl: './imoveis-form.component.html',
  styleUrls: ['./imoveis-form.component.css']
})
export class ImoveisFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;
  basePath = '/admin/imovel';
  progress = 0;

  inscricao!: Subscription;
  imovel!: Imovel;
  tipoImovel!: Observable<TipoImovel[]>;
  tipoImovel$!: TipoImovel[];

  categoria!: Observable<Categoria[]>;

  removedImage: any = [];
  images: any = [];

  constructor(
    private fb: FormBuilder,
    private service: ImovelService,
    private tipoImovelService: TipoImovelService,
    private categoriaService: CategoriaService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.inscricao = this.route.data.subscribe(
      (data) => {
        this.imovel = data['imovel'];
      }
    );

    this.form = this.fb.group({
      id: [this.imovel.id],
      nome: [this.imovel.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      descricao: [this.imovel.descricao, [Validators.required]],
      tipoImovel: [this.imovel.tipoImovel, [Validators.required]],
      categoria: [this.imovel.categoria, [Validators.required]],
      foto: this.fb.group({
        foto: [this.imovel.fotos]
      })

    });

    // Carrega dropdownlist de tipoImovel e categoria
    console.log("--------------_GET IMOVEIS--------------")
    //this.getTipoImoveis('1');

    this.tipoImovel = this.tipoImovelService.listAll();
    this.categoria = this.categoriaService.listAll();

    //Na Atualiza????o pegas as images da API e coloca no array
    if (this.form.value.id) {
      this.form.value.foto.foto.forEach(e => {
        this.images.push(e);
      });
    }
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.valid) {

      let msgSuccess = 'Im??vel criada com sucesso!';
      let msgError = 'Erro ao criar im??vel, tente novamente!';
      if (this.form.value.id) {
        msgSuccess = 'Categoria atualizada com sucesso!';
        msgError = 'Erro ao atualizar imovel, tente novamente!';
      }

      this.service.save(this.form.value).subscribe({
        next: (v) => {
          this.onUpload(v);
        },
        error: (e) => this.modal.showAlertDanger(msgError),
        complete: () => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        }
      });

    } else {
      this.verificaValidacoesForm(this.form);
    }
  }

  onUpload(v) {

    this.images.forEach(images => {
      if (images.id === undefined) {
        this.service.saveImages(images, v)
          .subscribe({
            next: (v) => console.log(v),
            error: (e) => this.modal.showAlertDanger(e.error()),
            complete: () => {
              this.modal.showAlertSuccess('Inserido com sucesso!');
            }
          });
      }
    });

    this.removedImage.forEach(e => {
      this.service.deleteImage(e.id)
        .subscribe({
          next: (v) => console.log(v),
          error: (e) => this.modal.showAlertDanger(e.message),
          complete: () => {
            this.modal.showAlertSuccess('Inserido com sucesso!');
          }
        });
    });

  }

  onCancel() {
    this.submitted = false;
    this.form.reset;
    this.location.back();
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }


  resetar() {
    this.form.reset();
  }

  verificaValidTouched(campo) {
    return !this.form.controls[campo].valid && (this.form.controls[campo].touched || this.form.controls[campo].dirty)
  }

  verificaRequired(campo) {
    return this.form.controls[campo].hasError('required') && (this.form.controls[campo].touched || this.form.controls[campo].dirty)
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  verificaValidacoesForm(formGroup: FormGroup | FormArray) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
      if (controle instanceof FormGroup || controle instanceof FormArray) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  onFileSelected(event: any) {

    if (event.target.files) {

      const imageTela = event.target.files[0];
      const novaImagem = { foto: imageTela, url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageTela)) } as Foto;
      this.images.push(novaImagem);
    }
  }

  removeImages(i: number) {
    if (this.images[i].id !== undefined) {
      this.removedImage.push(this.images[i])
    }

    this.images.splice(i, 1);
  }

  fileDropped(evt) {
    this.images.push(evt);
  }

  getTipoImoveis(page: string){
    console.log("Dentro do m??todo GET TIPO IMOVEIS");

    this.tipoImovelService.lista(page).subscribe({
      next: (dados) => {this.tipoImovel$ = <TipoImovel[]>dados['results'];
      console.log("Dentro do next ",dados)
      console.log("Tipos imoveis: ",this.tipoImovel$);
      },
      error: (erro) => console.log(erro)

    })

  }

}
