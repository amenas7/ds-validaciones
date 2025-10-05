import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent implements OnInit {
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
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      textareaCompleto: ['', [Validators.minLength(10), Validators.maxLength(500)]]
    });
  }

  // Método para actualizar validadores cuando cambia isRequired
  private updateValidators(): void {
    const control = this.formCompleto.get('textareaCompleto');
    if (this._isRequired) {
      control?.setValidators([Validators.required, Validators.minLength(10), Validators.maxLength(500)]);
    } else {
      control?.setValidators([Validators.minLength(10), Validators.maxLength(500)]);
    }
    control?.updateValueAndValidity({ emitEvent: false });
  }

  // Getter para calcular el status dinámicamente
  get textareaStatus(): 'default' | 'success' | 'error' {
    const control = this.formCompleto.get('textareaCompleto');
    if (control?.invalid && control?.touched) {
      return 'error';
    }
    if (control?.valid && control?.value) {
      return 'success';
    }
    return 'default';
  }

  // Métodos para manejar eventos
  onValueChange(value: string): void {
    console.log('Valor cambiado usando valueChange:', value);
  }

  onChange(event: Event): void {
    console.log('Evento change:', event);
    console.log('Valor del evento usando change:', (event.target as HTMLInputElement)?.value);
  }

  onFocus(event: FocusEvent): void {
    console.log('Textarea enfocado:', event);
  }

  onBlur(event: FocusEvent): void {
    console.log('Textarea desenfocado:', event);
  }

  // Getter para acceder fácilmente al valor
  get valorTextareaCompleto(): string {
    return this.formCompleto.get('textareaCompleto')?.value || 'Ninguno';
  }
}
