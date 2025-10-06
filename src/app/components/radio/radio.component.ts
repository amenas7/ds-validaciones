import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent implements OnInit {
  // Formulario para el ejemplo con radios individuales
  formRadioIndividual!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario para radios individuales (sin required por defecto)
    this.formRadioIndividual = this.fb.group({
      planSeleccionado: ['']
    });
  }

  // Getter para calcular el status dinámicamente
  get radioStatus(): 'default' | 'success' | 'error' {
    const control = this.formRadioIndividual.get('planSeleccionado');
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

  // Getter para mostrar el texto del plan seleccionado
  get planSeleccionadoTexto(): string {
    const plan = this.formRadioIndividual.get('planSeleccionado')?.value;
    if (plan === 'basic') {
      return 'Plan Básico - $9.99/mes (10GB de almacenamiento)';
    } else if (plan === 'pro') {
      return 'Plan Pro - $29.99/mes (100GB y soporte prioritario)';
    }
    return 'Ningún plan seleccionado';
  }
}
