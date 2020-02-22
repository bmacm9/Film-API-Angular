import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodasService {
  public todos; //variable que contendrá todos los objetos recogidos de la api
  private auxiliar; //variable auxiliar para acceder al campo Search (propio de la api) para poder acceder posteriormente a los objetos que maquetaremos
  private pagina: number = 1; //numero de la pagina (para hacer diferentes peticiones a la api)
  public busqueda: String; //variable que nos dice cual ha sido la busqueda del usuario
  public detalles;
  
  constructor(public http: HttpClient) { }

  nuevaBusqueda(busqueda) {
    this.busqueda = busqueda; //guardamos la busqueda del usuario para usarlo posteriormente en el todas component
    this.http.get("http://www.omdbapi.com/?s=" + busqueda + "&apikey=70b199e8").subscribe( //peticion a la api
      resultado => {
        this.auxiliar = resultado; //guardamos el resultado en el auxiliar
        this.auxiliar = this.auxiliar.Search; //nos quedamos solo con el campo Search (error si no se hace de esta manera, no se puede acceder objeto resultado.Search directamente)
        this.todos = this.auxiliar;//pasamos el auxiliar a la variable que posteriormente maquetaremos en el componente
        this.pagina = 1;//marcamos que está viendo la primera pagina puesto que acaba de hacer la busqueda
      }
    )
  }

  siguientePagina(busqueda) {
    this.pagina++; //aumentamos la pagina para hacer la peticion
    this.http.get("http://www.omdbapi.com/?s=" + busqueda + "&page=" + this.pagina + "&apikey=70b199e8").subscribe( //peticion a la api
      resultado => { //lo  mismo que en nueva busqueda
        this.auxiliar = resultado;
        this.auxiliar = this.auxiliar.Search;
        for (let a of this.auxiliar) {
          this.todos.push(a);// guardamos uno a uno los objetos de la nueva peticion a la variable que será maquetada en el componente
        }
      }
    )
  }

  getDetalle(id) {
    this.http.get('http://www.omdbapi.com/?i=' + id + '&apikey=70b199e8').subscribe(
      resultado => {
        this.detalles = resultado
      }
    )
  }
}
