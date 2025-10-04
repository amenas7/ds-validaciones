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

  // Formulario reactivo para múltiples grupos
  formMultiple!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;
  isRequired: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      radioCompleto: ['', Validators.required]
    });

    // Inicializar formulario con múltiples grupos
    this.formMultiple = this.fb.group({
      metodoPago: ['', Validators.required],
      tipoEnvio: [''],
      plan: ['']
    });
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

  // Getters para acceder fácilmente a los valores
  get valorRadioCompleto(): any {
    return this.formCompleto.get('radioCompleto')?.value || 'Ninguno';
  }

  get valorMetodoPago(): any {
    return this.formMultiple.get('metodoPago')?.value || 'No seleccionado';
  }

  get valorTipoEnvio(): any {
    return this.formMultiple.get('tipoEnvio')?.value || 'No seleccionado';
  }

  get valorPlan(): any {
    return this.formMultiple.get('plan')?.value || 'No seleccionado';
  }

  get valoresMultiple(): any {
    return this.formMultiple.value;
  }
}
