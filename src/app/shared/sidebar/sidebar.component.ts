import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get historial() { 
    
    return this.giftService.historial; 
  }


  constructor(private giftService: GifsService){}

  buscar(termino: string){
    this.giftService.buscarGifs(termino);
  }
}
