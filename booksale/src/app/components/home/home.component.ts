import { BooksdescriptionserviceService } from './../../shared/booksdescription/booksdescriptionservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  msg:string = '';

  aJornadaDeLaila: string = 'Laila é a princesa das abelhas habitantes da Floresta de Gaia. Ela adora o conforto que a vida em seu reino lhe concede. Mas sua vida irá mudar por causa de suas próprias escolhas. A Jornada de Laila é uma história infanto-juvenil de 76 páginas e que contém diversas figuras, que pode ser lido para crianças a partir de 5 anos. Há uma mensagem forte sobre orgulho, que busca ensinar as crianças sobre as consequências deste defeito. Este livro foi escrito por Vincent W. Grimmer em 2023, e tem sido elogiado pelos pais que o compraram.'

    vidasOcultas: string = 'Vidas Ocultas é um livro composto por três contos que se passam no Brasil. O primeiro conto é A Jornada Até Pore Yamari, uma história de suspense que se passa em Manaus, narrando a viagem de um caminhoneiro por uma estrada cheia de mistérios. O segundo é Confinamento da Alma, um drama paranormal que narra uma breve parte da vida de Kako Koukai, um japonês habitando o Bairro da Liberdade em São Paulo e suas ações para ajudar a alma de uma menina. A terceira história começa na época do descobrimento e é narrada sob o olhar de um pau-brasil, revisitando a escravidão e vindo até os tempos modernos. Vidas Ocultas foi escrito por Vincent W Grimmer em 2019 e é um de seus livros favoritos'

    oManuscritoDosMalakins: string = 'O Manuscrito dos Malakins é uma história com base bíblica. Neste livro Vincent W. Grimmer narra a criação do Céu e da Terra e a queda dos anjos. É uma fantasia perfeita para cristãos, respeitando a tradição. Mas também é uma história que será apreciada por qualquer um que goste de fantasia medieval e de histórias de batalhas. Há personagens poderosos, como o Arcanjo Miguel, o mensageiro Gabriel, o próprio Yahwe e o anjo caído, Lúcifer'

    contato: string = 'Você pode nos contatar pelo direct do Instagram para mais informações. Clique no botão abaixo para conversarmos.'

  constructor(private booksService: BooksdescriptionserviceService) {}

  // aJornada(msg: string): void {
  //   this.msg = this.booksService.aJornadaDeLaila
  // }

}
