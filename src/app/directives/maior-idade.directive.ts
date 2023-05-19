import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maiorIdadeValidator]',//trocado o nome do selector de appMaiorIdade para maiorIdadeValidator
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MaiorIdadeDirective,
    multi: true,
  }]

})
export class MaiorIdadeDirective  implements Validator{

  constructor() { }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // obter data de nascimento que esta vindo por meio do imput
    const dataNascimento = control.value;
    //retorna apenas o ano do usuario
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoNascMais18 =  anoNascimento + 18;

    const anoAtual = new Date().getFullYear();

    //verifica se o o usuario é maior de idade
    const ehMaior = anoNascMais18 <= anoAtual;
    // no html é necessario usar o nome que esta dentro das {}, ou seja o maiorIdadeValidator
    return ehMaior?null:{'maiorIdadeValidator':true};
  }

}
