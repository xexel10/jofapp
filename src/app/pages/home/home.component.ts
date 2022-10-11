import { Imovel } from './../../models/imovel';
import { Observable } from 'rxjs';
import { ImovelService } from './../../cadastros/imoveis/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anuncios!: Observable<Imovel[]>;
  anuncios_!: Imovel[];
  constructor(private imovelService: ImovelService) { }

  ngOnInit(): void {
    this.getAnuncios();
    console.log("anuncios: ", this.anuncios)
  }

  getAnuncios(){
    this.imovelService.list().subscribe({
      next: (dados) => this.anuncios_ = dados,
      error: (erro) => console.log(erro)
    })
    this.anuncios = this.imovelService.list();
   // this.homeService.getAnuncios().subscribe({
   //   next: (anunciosRetornados) => this.anuncios = anunciosRetornados,
   //   error: (e) => console.log(e)
   // });

  }

}