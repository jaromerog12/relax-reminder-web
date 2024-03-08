import { Component } from '@angular/core';
import { Actividad } from 'src/app/model/actividad';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/utils/TitleService';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-listar-actividades',
  templateUrl: './listar-actividades.component.html',
  styleUrls: ['./listar-actividades.component.css']
})
export class ListarActividadesComponent {

  actividadesBD: Actividad[] = []
  actividades: Actividad[] = []
  botonAnterior: Boolean = false;
  botonPagina1: Boolean = true;
  botonPagina2: Boolean = false;
  botonSiguiente: Boolean = false;
  ordenamientoNombre: String = 'sorting_desc'
  ordenamientoFecha: String = 'sorting_desc'

  constructor(private router: Router, private titleService: TitleService) { }

  ngOnInit(): void {
    this.actividadesBD = this.getArregloPagina1()
    this.sendDataToDashboard();
    this.actividades = this.actividadesBD
  }

  sendDataToDashboard() {
    const dataToSend = {
      title: "Lista de actividades"
    }
    this.titleService.setData(dataToSend);
  }

  redirectCrear() {
    this.router.navigateByUrl('/dashboard/create');
  }

  redirectEditar() {
    this.router.navigateByUrl('/dashboard/editar');
  }

  initActiveButton() {
    this.botonAnterior = false;
    this.botonPagina1 = false;
    this.botonPagina2 = false;
    this.botonSiguiente = false;
  }

  filtrar(textoFiltro: string) {
    if (textoFiltro != '') {
      this.actividades = this.actividadesBD.filter(actividad => actividad.nombre.toLocaleLowerCase().includes(textoFiltro.toLocaleLowerCase()));
    } else {
      this.actividades = this.getArregloPagina1()
    }
  }

  eliminarActividad(actividad: Actividad) {
    Swal.fire({
      icon: "warning",
      html: `
    Desea eliminar la actividad ${actividad.nombre}?
  `,
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: '#DA0000',
      focusConfirm: false,
      reverseButtons: true,
      confirmButtonText: `Si`,
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Se hizo clic en Sí');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        console.log('Se hizo clic en No');
      }
    });
  }

  getArregloPagina1() {
    return [
      { nombre: "Estiramientos", fechaCreacion: '2024-01-01', clase: 'odd' },
      { nombre: "Caminata rapida", fechaCreacion: '2024-01-01', clase: 'even' },
      { nombre: "Reporacion profunda", fechaCreacion: '2024-01-01', clase: 'odd' },
      { nombre: "Ejercicio de equilibrio", fechaCreacion: '2024-01-01', clase: 'even' },
      { nombre: "Sesiones de meditación", fechaCreacion: '2024-01-01', clase: 'odd' },
      { nombre: "Saltar la cuerda", fechaCreacion: '2024-01-02', clase: 'even' },
      { nombre: "Ejercicios de yoga", fechaCreacion: '2024-01-02', clase: 'odd' },
      { nombre: "Saltar la cuerda", fechaCreacion: '2024-01-02', clase: 'even' },
      { nombre: "Beber agua", fechaCreacion: '2024-01-02', clase: 'odd' },
      { nombre: "Saltar la cuerda", fechaCreacion: '2024-01-02', clase: 'even' }
    ]
  }

  getArregloPagina2() {
    return [
      { nombre: "Estiramientos", fechaCreacion: '2024-01-03', clase: 'odd' },
      { nombre: "Caminata rapida", fechaCreacion: '2024-01-03', clase: 'even' },
      { nombre: "Reporacion profunda", fechaCreacion: '2024-01-03', clase: 'odd' },
      { nombre: "Estiramientos", fechaCreacion: '2024-01-03', clase: 'even' },
      { nombre: "Caminata rapida", fechaCreacion: '2024-01-03', clase: 'odd' },
      { nombre: "Reporacion profunda", fechaCreacion: '2024-01-04', clase: 'even' },
      { nombre: "Estiramientos", fechaCreacion: '2024-01-04', clase: 'odd' },
      { nombre: "Caminata rapida", fechaCreacion: '2024-01-04', clase: 'even' },
      { nombre: "Reporacion profunda", fechaCreacion: '2024-01-04', clase: 'odd' },
      { nombre: "Saltar la cuerda", fechaCreacion: '2024-01-04', clase: 'even' }
    ]
  }

  ejecutarOrdenamiento(ordenamiento: String, columna: String) {

    if (columna == 'nombre') {
      if (ordenamiento == 'sorting_desc') {
        this.ordenamientoNombre = 'sorting_asc'
        this.ordenamientoNombreAsc()
      }
      if (ordenamiento == 'sorting_asc') {
        this.ordenamientoNombre = 'sorting_desc'
        this.ordenamientoNombreDesc()
      }
    }

    if (columna == 'fecha') {
      if (ordenamiento == 'sorting_desc') {
        this.ordenamientoFecha = 'sorting_asc'
        this.ordenamientoFechaAsc()
      }
      if (ordenamiento == 'sorting_asc') {
        this.ordenamientoFecha = 'sorting_desc'
        this.ordenamientoFechaDesc()
      }
    }
  }

  ordenamientoNombreAsc() {
    this.actividades.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });

  }

  ordenamientoNombreDesc() {
    this.actividades.sort((a, b) => {
      if (a.nombre > b.nombre) {
        return -1;
      }
      if (a.nombre < b.nombre) {
        return 1;
      }
      return 0;
    });
  }

  ordenamientoFechaAsc() {
    this.actividades.sort((a, b) => {
      if (a.fechaCreacion < b.fechaCreacion) {
        return -1;
      }
      if (a.fechaCreacion > b.fechaCreacion) {
        return 1;
      }
      return 0;
    });
  }

  ordenamientoFechaDesc() {
    this.actividades.sort((a, b) => {
      if (a.fechaCreacion > b.fechaCreacion) {
        return -1;
      }
      if (a.fechaCreacion < b.fechaCreacion) {
        return 1;
      }
      return 0;
    });
  }

  ejecutarPaginacion(boton: String) {
    this.initActiveButton()

    switch (boton) {
      case 'anterior':
        this.actividadesBD = this.getArregloPagina1()
        this.botonAnterior = true
        this.botonPagina1 = true
        break;
      case 'pagina1':
        this.actividadesBD = this.getArregloPagina1()
        this.botonPagina1 = true
        break;
      case 'pagina2':
        this.actividadesBD = this.getArregloPagina2()
        this.botonPagina2 = true
        break;
      case 'siguiente':
        this.actividadesBD = this.getArregloPagina2()
        this.botonSiguiente = true
        this.botonPagina2 = true
        break;
      default:
        console.log('La opción no coincide con ningún caso');
    }

    this.actividades = this.actividadesBD;

  }
}
