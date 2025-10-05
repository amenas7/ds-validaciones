import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent implements OnInit {
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
      checkboxCompleto: [false]
    });
  }

  // Método para actualizar validadores cuando cambia isRequired
  private updateValidators(): void {
    const control = this.formCompleto.get('checkboxCompleto');
    if (this._isRequired) {
      control?.setValidators([Validators.requiredTrue]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity({ emitEvent: false });
  }

  // Getter para calcular el status dinámicamente
  get checkboxStatus(): 'default' | 'success' | 'error' {
    const control = this.formCompleto.get('checkboxCompleto');
    if (control?.invalid && control?.touched) {
      return 'error';
    }
    if (control?.valid && control?.value) {
      return 'success';
    }
    return 'default';
  }

  // Métodos para manejar eventos
  onCheckedChange(checked: boolean): void {
    console.log('Estado cambiado usando checkedChange:', checked);
  }

  onChange(event: Event): void {
    console.log('Evento change:', event);
    console.log('Checked:', (event.target as HTMLInputElement)?.checked);
  }

  onFocus(event: FocusEvent): void {
    console.log('Checkbox enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Checkbox desenfocado:', event);
  }

  // Getter para acceder fácilmente al valor
  get valorCheckboxCompleto(): boolean {
    return this.formCompleto.get('checkboxCompleto')?.value || false;
  }
}
