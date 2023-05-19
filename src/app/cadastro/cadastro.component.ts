import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router, private consultCepService: ConsultaCepService) { }

  ngOnInit(): void {
  }

  consultaCep(ev: any) {
    const cep = ev.target.value;
    return this.consultCepService.getConsultaCep(cep).subscribe(resultado => console.log(resultado));
  }

  cadastrar(form : NgForm){
    if (form.valid) {
      this.router.navigate(['./sucesso']);
    }else{
      alert('Formulário inválido!');
    }
      console.log(form.controls);
  }
}
