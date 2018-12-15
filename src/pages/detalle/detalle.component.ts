import { Component, OnInit } from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Lista,ListaItem} from '../../app/clases/index';
import {ListaDeseosService} from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';
import { PendientesComponent} from '../pendientes/pendientes.component';
@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {


  idx:number;
  lista:Lista;
  constructor(
    public navControl:NavController,
    public navParams: NavParams,
    public deseosService:ListaDeseosService,
    public alertCtrl:AlertController

  ) {

    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");


   }

  ngOnInit() {}


actualizar(item:ListaItem){

  item.completado = !item.completado;

  let todosMarcados = true;

  for (let item of this.lista.items) {
      if(!item.completado){
        todosMarcados = false;
        break;
      }
  }

  this.lista.terminada = todosMarcados;



  this.deseosService.actualizaData();

}

showConfirm() {
   let confirm = this.alertCtrl.create({
     title: 'Eliminar lista!',
     message: 'Perderá toda la información almacenada',
     buttons: ['Cancelar',
       {
         text: 'Aceptar',
         handler: () => {

           // this.lista.items.splice(0,this.lista.items.length
           this.deseosService.eliminarLista(this.idx);
           this.navControl.pop();
           console.log('Aceptar');
         }
       }
     ]
   });
   confirm.present();
 }

}
