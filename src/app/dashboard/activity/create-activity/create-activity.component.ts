import { Component, OnInit } from '@angular/core';
import { TitleService } from "../../../utils/TitleService";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {
  nameRemainingChars: number = 20
  nameMaximumChars: number = 20;
  descriptionRemainingChars: number = 300
  descriptionMaximumChars: number = 300;
  constructor(private titleService: TitleService, private router: Router) {
  }

  ngOnInit() {
    this.sendDataToDashboard();
  }

  sendDataToDashboard() {
    const dataToSend = {
      title: "Crear actividad"
    }
    this.titleService.setData(dataToSend);
  }

  nameUpdateCharCount(event: any): void {
    const value = (event.target as HTMLInputElement).value;
    if (value.length > this.nameMaximumChars) {
      (event.target as HTMLInputElement).value = value.slice(0, this.nameMaximumChars);
    }
    this.nameRemainingChars = this.nameMaximumChars - (event.target as HTMLInputElement).value.length;
  }

  descriptionUpdateCharCount(event: any): void {
    const value = (event.target as HTMLInputElement).value;
    if (value.length > this.descriptionMaximumChars) {
      (event.target as HTMLInputElement).value = value.slice(0, this.descriptionMaximumChars);
    }
    this.descriptionRemainingChars = this.descriptionMaximumChars - (event.target as HTMLInputElement).value.length;
  }

  redirectListaActividades() {
    this.router.navigateByUrl('/dashboard/lista-actividades')
  }

  save() {
    Swal.fire({
      title: "<strong>Buen trabajo!!!</strong>",
      icon: "success",
      html: `
    Actividad creada satisfactoriamente
  `,
      showCloseButton: true,
      showCancelButton: false,
      focusConfirm: false,
      confirmButtonText: `
    Aceptar
  `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      customClass: {
        confirmButton: 'button-primary'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.redirectListaActividades();
      };
    });;
  }
}
