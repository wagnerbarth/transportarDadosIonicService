import { Component } from '@angular/core';
import { IFilme } from '../models/IFilme.module';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaVideos: IFilme[] = [
    {
      nome: 'Lucifer (2016)',
      lancamento: '2016',
      classificacao: 85,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      duracao: '45m',
      generos: ['Crime', 'Sci-Fi & Fantasy'],
      pagina: ''
    },
    {
      nome: 'Rogai por Nós (2021)',
      lancamento: '02/04/2021 (US)',
      classificacao: 72,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
      duracao: '1h 39m',
      generos: ['Terror'],
      pagina: ''
    },
    {
      nome: 'The Flash (2014)',
      lancamento: '2014',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      duracao: '44m',
      generos: ['Drama', 'Sci-Fi & Fantasy'],
      pagina: ''
    },

  ];

  constructor() { }

}
