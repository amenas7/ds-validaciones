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

  // Formulario reactivo para el ejemplo de grupo
  formGrupo!: FormGroup;

  // Variables para controles
  isDisabled: boolean = false;
  isRequired: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar formulario completo
    this.formCompleto = this.fb.group({
      checkboxCompleto: [false, Validators.requiredTrue]
    });

    // Inicializar formulario de grupo
    this.formGrupo = this.fb.group({
      deportes: [false],
      tecnologia: [false],
      musica: [false],
      arte: [false],
      notificaciones: [false]
    });
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

  // Getters para acceder fácilmente a los valores
  get valorCheckboxCompleto(): boolean {
    return this.formCompleto.get('checkboxCompleto')?.value || false;
  }

  get valoresGrupo(): any {
    return this.formGrupo.value;
  }

  // Contar seleccionados en el grupo
  get cantidadSeleccionados(): number {
    const valores = this.formGrupo.value;
    return Object.values(valores).filter(v => v === true).length;
  }
}
