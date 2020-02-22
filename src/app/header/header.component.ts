import { Component, OnInit, Input } from '@angular/core';
import { TodasService } from '../todas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public busqueda: String = ""

  constructor(public serv: TodasService, private router: Router) { }

  ngOnInit(): void {

  }


  vaciar(): void {
    this.busqueda = ""
    this.buscar();
  }

  buscar(): void {
    this.router.navigate(['/'])
    this.serv.nuevaBusqueda(this.busqueda)
  }

}
