import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {
  // Formulario reactivo para validación dinámica
  formCompleto!: FormGroup;

  // Opciones simples
  opcionesSimples = [
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' },
    { value: '3', label: 'Opción 3' },
    { value: '4', label: 'Opción 4' },
    { value: '5', label: 'Opción 5' }
  ];

  // Ejemplo con estructura personalizada (bindValue y bindLabel)
  pacientes = [
    { cpac_id: 101, nombre_completo: 'Juan Pérez García', edad: 35 },
    { cpac_id: 102, nombre_completo: 'María García López', edad: 28 },
    { cpac_id: 103, nombre_completo: 'Carlos López Martínez', edad: 42 }
  ];

  // Variables para el ejemplo dinámico
  valorSeleccionado: string = '';
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
      selectCompleto: ['']
    });
  }

  // Método para actualizar validadores cuando cambia isRequired
  private updateValidators(): void {
    const control = this.formCompleto.get('selectCompleto');
    if (this._isRequired) {
      control?.setValidators([Validators.required]);
    } else {
      control?.clearValidators();
    }
    control?.updateValueAndValidity({ emitEvent: false });
  }

  // Getter para calcular el status dinámicamente
  get selectStatus(): 'default' | 'success' | 'error' {
    const control = this.formCompleto.get('selectCompleto');
    if (control?.invalid && control?.touched) {
      return 'error';
    }
    if (control?.valid && control?.value) {
      return 'success';
    }
    return 'default';
  }

  // Método para manejar el cambio de valor
  onValueChange(value: string | number): void {
    console.log('Valor seleccionado usando valueChange:', value);
    this.valorSeleccionado = value.toString();
  }

  // Método para manejar el evento change
  onChange(event: any): void {
    console.log('Evento change completo usando change:', event);
    console.log('Valor del evento usando change:', event?.target?.value);
  }
}
