import { Component } from '@angular/core';
import { TitleService } from 'src/app/utils/TitleService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent {
  nameRemainingChars: number = 20
  nameMaximumChars: number = 20;
  descriptionRemainingChars: number = 300
  descriptionMaximumChars: number = 300;
  constructor(private titleService: TitleService) {
  }

  ngOnInit() {
    this.sendDataToDashboard();
  }

  sendDataToDashboard() {
    const dataToSend = {
      title: "Editar actividad"
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

  edit() {
    Swal.fire({
      title: "<strong>Buen trabajo!!!</strong>",
      icon: "success",
      html: `
    Actividad actualizada satisfactoriamente
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
    });
  }

}
