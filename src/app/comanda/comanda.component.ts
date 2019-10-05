import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  formComanda: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {

     this.formComanda = this.formBuilder.group({
       chopp : this.formBuilder.control(''),
       pizzas : this.formBuilder.control(''),
       recheios : this.formBuilder.control(''),
       pessoas : this.formBuilder.control(''),
       taxa : this.formBuilder.control(false)

     });
  }

  onProcessar(){
    let chopp = this.formComanda.value.chopp;
    let pizzas = this.formComanda.value.pizzas;
    let recheios = this.formComanda.value.recheios;
    let pessoas = this.formComanda.value.pessoas;
    let taxa = this.formComanda.value.taxa;

    let totalConsumo = (chopp * chopp * 7.30) + (pizzas * pizzas * 31.50) + (recheios * recheios * 5.90);
    let totalfinal = totalConsumo;
    let servico = totalConsumo * 0.10;

    if (taxa){
      let totalfinal = totalConsumo + servico;
    }

    let totalpessoa = totalfinal / pessoas;

  alert(`Consumo: R$ ${totalConsumo.toFixed(2)} /n Servicos: R$ ${servico.toFixed(2)} /n Total: R$ ${totalfinal.toFixed(2)} /n Por Pessoa: R$ ${totalpessoa.toFixed(2)} `);

  
  }

}
