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

  inscricao!: Subscription;
  imovel!: Imovel;
  tipoImovel!: Observable<TipoImovel[]>;
  categoria!: Observable<Categoria[]>;

  files!: Set<File>;
  progress = 0;
  ImovelImages: FileHandle[] = [];

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
      descricao: [this.imovel.descricao],
      tipoImovel: [this.imovel.tipoImovel],
      categoria: [this.imovel.categoria],
      foto: this.fb.group({
        foto: [this.imovel.fotos]
      })
    });

    // Carrega dropdownlist de tipoImovel e categoria
    this.tipoImovel = this.tipoImovelService.list();
    this.categoria = this.categoriaService.list();

    //Na Atualização pegas as images da API e coloca no array
    if (this.form.value.id) {
      this.form.value.foto.foto.forEach(e => {
        const fileHandle: FileHandle = {
          file: e.file,
          url: e.foto
        };
        this.ImovelImages.push(fileHandle);
      });
    }
  }

  onSubmit() {

    this.submitted = true;

    if (this.form.valid) {

      let msgSuccess = 'Imóvel criada com sucesso!';
      let msgError = 'Erro ao criar imóvel, tente novamente!';
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

    this.ImovelImages.forEach(images => {
      this.service.saveImages(images.file!, v)
        .subscribe((event: HttpEvent<Object>) => {
          // console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log('Upload Concluído');
          } else if (event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((event.loaded * 100) / event.total!);
            // console.log('Progresso', percentDone);
            this.progress = percentDone;
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

      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file))
      };
      this.ImovelImages.push(fileHandle);
    }
  }

  onDelete(foto) {
    //var target = event.target || event.srcElement || event.currentTarget;
    //var idAttr = target.attributes.id;
    //var value = idAttr.nodeValue;

    this.form.value.foto.foto.forEach((value, index) => {
      if (value == foto) {
        this.form.value.foto.foto.splice(index, 1);
      }
    });
  }

  removeImages(i: number) {
    this.ImovelImages.splice(i, 1);
  }

  // changeTableRowColor(idx: any) {
  //   if (this.rowClicked === idx) this.rowClicked = -1;
  //   else this.rowClicked = idx;
  // }

  fileDropped(evt){
    this.ImovelImages.push(evt);
  }

}
