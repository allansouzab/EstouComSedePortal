import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RevisaoService } from '../services/revisao/revisao.service';

export interface Revisao {
  Nome: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
  DataSolicitacao: Date;
  Status: string;
  Observacao: string
}

@Component({
  selector: 'app-acompanhar',
  templateUrl: './acompanhar.component.html',
  styleUrls: ['./acompanhar.component.css']
})
export class AcompanharComponent implements OnInit {

  displayedColumns: string[] = ['Nome', 'Bairro', 'Cidade', 'Estado', 'DataSolicitacao', 'Status', 'Observacao', 'btn-success', 'btn-danger'];
  dataSource: MatTableDataSource<Revisao>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private revisaoService: RevisaoService) { }

  ngOnInit() {
    debugger
    this.getAllSolicitacoes();
  }

  getAllSolicitacoes() {
    debugger
    this.revisaoService.getAllSolicitacoes().subscribe(data => {
      debugger

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  approveSolicitacao(id: any){
    debugger
    this.revisaoService.approveSolicitacao(id).subscribe(data => {
      debugger
      this.getAllSolicitacoes();
    });
  }

  reproveSolicitacao(id: any){
    debugger
    this.revisaoService.reproveSolicitacao(id).subscribe(data => {
      debugger
      this.getAllSolicitacoes();
    });
  }

}