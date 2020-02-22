import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodasService } from '../todas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
})
export class PeliculaComponent implements OnInit {
  public id: string; 
  public detalles;

  constructor(public route: ActivatedRoute, public serv: TodasService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.serv.getDetalle(this.id)
  }
}
