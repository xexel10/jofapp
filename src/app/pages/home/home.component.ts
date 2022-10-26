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
  pages: number = 0;
  activePage = 0;
  nextURL: string = "";
  previousURL: string = "";
  constructor(private imovelService: ImovelService) {}

  ngOnInit(): void {
    this.getAnuncios('1');
    this.activePage = 1;
  }

  getAnuncios(page:string) {
    this.imovelService.listar(page).subscribe({
      next: (dados) => {
        this.anuncios = <Imovel[]>dados['results'];
        this.calculaPaginas(dados['count'], dados['next'],dados['previous']);
        console.log('Qnt paginas: ', this.pages)
        //console.log('Anuncios next ', this.anuncios);
      },
      error: (erro) => console.log(erro),
    });
  }

  calculaPaginas(count : number, next: string, previous: string) {
      this.pages = Math.ceil(count/5)
      console.log('Next: ', next);
      console.log('Previous: ', previous)

  }
  mudarPagina(pagina : number){
    //console.log('Pagina: ', pagina)
    this.getAnuncios(pagina.toString());
    this.activePage = pagina;

  }
}
