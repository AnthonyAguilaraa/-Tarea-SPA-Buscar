import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent { 

  public heroes: any[] = []; 
  constructor(private heroService: HeroesService, private serviciobusqueda: SearchServiceService, private router :Router) { }

  ngOnInit(): void {
    
    this.heroes = this.serviciobusqueda.obtenerResultadosBusqueda();
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
    console.log(idx);
  }
 
}
