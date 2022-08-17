import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController, public router:Router) {}

  nombre:string;
  saludar(){
    //enviar un saludo en el Toast
    this.presentToast("Hola "+ this.nombre);
  }

  siguiente(){
    let navigationExtras: NavigationExtras={
      state:{nombre:this.nombre}
    };
    this.router.navigate(['/pagina2'],navigationExtras);
  }

  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2500
    });
    toast.present();
  }
}
