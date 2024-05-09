import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  public terminodebusqueda: string = '';

  constructor(private router: Router, private heroService: HeroesService, private searchService: SearchServiceService) { }

  BuscarHeroe(terminodebusqueda: string): void { 
    const heroesFiltrados = this.heroService.filtrarHeroesPorNombre(terminodebusqueda);
    this.searchService.establecerResultadosBusqueda(heroesFiltrados); 
    this.router.navigate(['/home']);
  }
  
}
