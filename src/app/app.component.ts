import { Component } from '@angular/core';
import Swal from 'sweetalert2';

class Tarea{
  descripcion:string;
  isDone: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';
  public tareas: Tarea[]= [];
  public descripcion: string;

Agregar(){


    if(!this.descripcion){
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: false,
        timer: 3000
      })

      Toast.fire({
        title: 'Debes de escribir una tarea',
        background: 'rgba(6, 147, 172, 0.678)',
        icon:'error'
      });
    }else{
      this.tareas.push({
        descripcion: this.descripcion,
        isDone: false
      });
      this.descripcion = null;

    }


  }

  borrartodo(){
    this.tareas.length = 0;

  }

  borraritem(index){
    this.tareas.splice(index,1);
  }


}

