import { Component, OnInit } from '@angular/core';
import { RevisaoService } from '../services/revisao/revisao.service';
import { Router } from '@angular/router';

class Revisao {
  Nome: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
  DataSolicitacao: Date;
  Status: string;
  Observacao: string
}

@Component({
  selector: 'app-solicitar-revisao',
  templateUrl: './solicitar-revisao.component.html',
  styleUrls: ['./solicitar-revisao.component.css']
})
export class SolicitarRevisaoComponent implements OnInit {

  revisao = new Revisao();

  constructor(private revisaoService: RevisaoService, private router: Router) { }

  ngOnInit() {
  }

  solicitar() {
    debugger

    this.revisaoService.insertSolicitacao(this.revisao).subscribe(data => {
      debugger
      this.router.navigate(['/acompanhar']);
    });
  }

}
