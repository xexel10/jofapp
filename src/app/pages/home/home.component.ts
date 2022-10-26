import { Imovel } from './../../models/imovel';
import { Observable } from 'rxjs';
import { ImovelService } from './../../cadastros/imoveis/imovel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  anuncios!: Imovel[];
  constructor(private imovelService: ImovelService) {}

  ngOnInit(): void {
    this.getAnuncios();
  }

  getAnuncios() {
    this.imovelService.listar().subscribe({
      next: (dados) => {
        this.anuncios = <Imovel[]>dados['results'];
        //console.log('Anuncios next ', this.anuncios);
      },
      error: (erro) => console.log(erro),
    });
  }
}
