import { Component, OnInit, AfterContentChecked, Input } from '@angular/core';
import { TodasService } from '../todas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-todas',
  templateUrl: './todas.component.html',
  styleUrls: ['./todas.component.css']
})


export class TodasComponent implements OnInit, AfterContentChecked {

  public noticias: [];

  constructor(public serv: TodasService, public route: Router) { }

  ngOnInit(): void { }

  ngAfterContentChecked(): void {
    this.noticias = this.serv.todos
  }

  onScroll(): void {
    this.serv.siguientePagina(this.serv.busqueda)
    this.noticias += this.serv.todos
  }

  modal(id): void {
    this.serv.getDetalle(id)
    this.route.navigate(['pelicula', id])
  }
}
