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

  //foi adicionado no metodo uma verificacao para preencher os campos de endereço automaticamente
  consultaCep(ev: any, f: NgForm) {
    const cep = ev.target.value;
    //verifica se o cep não esta vazio, caso n.. retorna o metodo populandoEndereco
    if (cep != '') {
      this.consultCepService.getConsultaCep(cep).subscribe(resultado => {
        console.log(resultado)
        this.populandoEndereco(resultado, f);
      });
    }
  }

  // os nomes endereco, bairro etc, foram pegos atravez do console log q retorna o resultado, assim foi possivel preecnher o campo corretamente
  populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['./sucesso']);
    } else {
      alert('Formulário inválido!');
    }
    console.log(form.controls);
  }
}
