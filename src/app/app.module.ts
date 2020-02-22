import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodasComponent } from './todas/todas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDialogModule } from '@angular/material/dialog/';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { ContactoComponent } from './contacto/contacto.component';

const rutas: Routes = [
  { path: '', component: TodasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: 'contacto', component: ContactoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TodasComponent,
    PeliculaComponent,
    ContactoComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule,
    MatDialogModule,
  ],
  exports: [RouterModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }