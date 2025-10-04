import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  // Iconos comunes organizados por categorías
  iconosBasicos = [
    { name: 'home', label: 'Inicio' },
    { name: 'user', label: 'Usuario' },
    { name: 'cog', label: 'Configuración' },
    { name: 'search', label: 'Buscar' },
    { name: 'star', label: 'Favorito' },
    { name: 'heart', label: 'Me gusta' }
  ];

  iconosAcciones = [
    { name: 'edit', label: 'Editar' },
    { name: 'save', label: 'Guardar' },
    { name: 'trash', label: 'Eliminar' },
    { name: 'download', label: 'Descargar' },
    { name: 'upload', label: 'Subir' },
    { name: 'print', label: 'Imprimir' }
  ];

  iconosNavegacion = [
    { name: 'chevron-left', label: 'Anterior' },
    { name: 'chevron-right', label: 'Siguiente' },
    { name: 'chevron-up', label: 'Arriba' },
    { name: 'chevron-down', label: 'Abajo' },
    { name: 'arrow-left', label: 'Regresar' },
    { name: 'arrow-right', label: 'Avanzar' }
  ];

  iconosEstado = [
    { name: 'check', label: 'Correcto', color: '#28a745' },
    { name: 'times', label: 'Error', color: '#dc3545' },
    { name: 'exclamation-triangle', label: 'Advertencia', color: '#ffc107' },
    { name: 'info', label: 'Información', color: '#17a2b8' }
  ];

  iconosComunicacion = [
    { name: 'envelope', label: 'Email' },
    { name: 'phone', label: 'Teléfono' },
    { name: 'bell', label: 'Notificación' },
    { name: 'comment', label: 'Comentario' },
    { name: 'share', label: 'Compartir' },
    { name: 'paper-plane', label: 'Enviar' }
  ];
}
