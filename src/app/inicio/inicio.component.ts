import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/Produto.models';
import { ProdutoService } from '../produto.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public produtos: Produto[] = [];

  constructor (private _produtoService:ProdutoService){}
  ngOnInit(): void {
    this.listarProdutos();
  }
  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto => {
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            )
          }
        )
      }
    )
  }
}
