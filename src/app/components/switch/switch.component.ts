import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent implements OnInit {
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
      switchCompleto: [false]
    });
  }

  // Método para actualizar validadores cuando cambia isRequired
  private updateValidators(): void {
    const control = this.formCompleto.get('switchCompleto');
    if (this._isRequired) {
      control?.setValidators([Validators.requiredTrue]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity({ emitEvent: false });
  }

  // Getter para calcular el status dinámicamente
  get switchStatus(): 'default' | 'success' | 'error' {
    const control = this.formCompleto.get('switchCompleto');
    if (control?.invalid && control?.touched) {
      return 'error';
    }
    if (control?.valid && control?.value) {
      return 'success';
    }
    return 'default';
  }

  // Métodos para manejar eventos
  onValueChange(value: boolean): void {
    console.log('Valor cambiado usando valueChange:', value);
  }

  onChange(value: boolean): void {
    console.log('Valor cambiado usando change:', value);
  }

  onFocus(event: FocusEvent): void {
    console.log('Switch enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Switch desenfocado:', event);
  }

  // Getter para acceder fácilmente al valor
  get valorSwitchCompleto(): boolean {
    return this.formCompleto.get('switchCompleto')?.value || false;
  }
}
