import { Component } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes:Heroe[]=[];

  constructor(private _heroeService:HeroesService, private router :Router){
    
  }
  ngOnInit():void{
    this.heroes=this._heroeService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
    console.log(idx);
  }
  
}