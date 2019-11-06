import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RevisaoService } from '../services/revisao/revisao.service';
import { User } from '../core/User';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

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
export class AcompanharComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['Nome', 'Bairro', 'Cidade', 'Estado', 'DataSolicitacao', 'Status', 'Observacao', 'btn-success', 'btn-danger'];
  dataSource: MatTableDataSource<Revisao>;
  currentUser: User;
  currentUserSubscription: Subscription;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private revisaoService: RevisaoService, private authService: AuthService) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    debugger
    this.getAllSolicitacoes();
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
  }

  getAllSolicitacoes() {
    debugger
    this.revisaoService.getAllSolicitacoes().subscribe(data => {
      debugger

      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  approveSolicitacao(id: any) {
    debugger
    this.revisaoService.approveSolicitacao(id).subscribe(data => {
      debugger
      this.getAllSolicitacoes();
    });
  }

  reproveSolicitacao(id: any) {
    debugger
    this.revisaoService.reproveSolicitacao(id).subscribe(data => {
      debugger
      this.getAllSolicitacoes();
    });
  }

}