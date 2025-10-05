import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit {
  // Formulario reactivo para el ejemplo completo
  formCompleto!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;

  private _isRequired: boolean = false;
  get isRequired(): boolean {
    return this._isRequired;
  }
  set isRequired(value: boolean) {
    this._isRequired = value;
    this.updateValidators();
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario completo (sin required por defecto)
    this.formCompleto = this.fb.group({
      radioCompleto: ['']
    });
  }

  // Método para actualizar validadores cuando cambia isRequired
  private updateValidators(): void {
    const control = this.formCompleto.get('radioCompleto');
    if (this._isRequired) {
      control?.setValidators([Validators.required]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity({ emitEvent: false });
  }

  // Getter para calcular el status dinámicamente
  get radioStatus(): 'default' | 'success' | 'error' {
    const control = this.formCompleto.get('radioCompleto');
    if (control?.invalid && control?.touched) {
      return 'error';
    }
    if (control?.valid && control?.value) {
      return 'success';
    }
    return 'default';
  }

  // Métodos para manejar eventos
  onValueChange(value: any): void {
    console.log('Valor cambiado usando valueChange:', value);
  }

  onChange(event: Event): void {
    console.log('Evento change:', event);
    console.log('Value:', (event.target as HTMLInputElement)?.value);
  }

  onFocus(event: FocusEvent): void {
    console.log('Radio enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Radio desenfocado:', event);
  }

  // Getter para acceder fácilmente al valor
  get valorRadioCompleto(): any {
    return this.formCompleto.get('radioCompleto')?.value || 'Ninguno';
  }
}
