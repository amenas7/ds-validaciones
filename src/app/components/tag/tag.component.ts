import { Component } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss'
})
export class TagComponent {
  // Tags para diferentes categorías
  tecnologias = [
    { text: 'JavaScript', type: 'primary' },
    { text: 'Angular', type: 'success' },
    { text: 'TypeScript', type: 'info' },
    { text: 'Bootstrap', type: 'secondary' },
    { text: 'SCSS', type: 'warning' },
    { text: 'Desarrollo', type: 'dark' }
  ];

  estados = [
    { text: 'Activo', type: 'success' },
    { text: 'Pendiente', type: 'warning' },
    { text: 'Inactivo', type: 'secondary' },
    { text: 'Cancelado', type: 'danger' }
  ];

  categorias = [
    { text: 'Frontend', type: 'primary' },
    { text: 'Backend', type: 'success' },
    { text: 'Database', type: 'info' },
    { text: 'DevOps', type: 'warning' },
    { text: 'Testing', type: 'secondary' },
    { text: 'Documentation', type: 'dark' }
  ];

  prioridades = [
    { text: 'Alta', type: 'danger' },
    { text: 'Media', type: 'warning' },
    { text: 'Baja', type: 'info' }
  ];
}
