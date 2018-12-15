import { Component, OnInit } from '@angular/core';
import {Lista,ListaItem} from '../../app/clases/index'
import { AlertController ,NavController } from 'ionic-angular';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string="";
  nombreItem:string ="";

  items:ListaItem[]=[];
  constructor(
    public alertCtrl: AlertController,
    public deseosService:ListaDeseosService,
    public nav:NavController

        ) {  }

  ngOnInit() {}

  agregar(){

    if(this.nombreItem.length==0){
      return;
    }
    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push(item);
    this.nombreItem = "";
  }

  borrar(index:number){

    this.items.splice(index,1);
  }

  guardarLista(){

    if(this.nombreLista.length==0){
      this.showAlert();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    // this.deseosService.listas.push(lista);
      this.deseosService.agregarLista(lista);
      this.nav.pop();


  }

  showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Error!',
    subTitle: 'Debes agregar un nombre a la lista',
    buttons: ['OK']
  });
  alert.present();
}
}
