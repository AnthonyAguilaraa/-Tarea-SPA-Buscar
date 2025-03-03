import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  heroe:any={};

  constructor(private activatedRoute: ActivatedRoute, private _heroeService:HeroesService, private router :Router){
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this._heroeService.getHeroe(params['id']);
      console.log(this.heroe);
      //console.log(params['id']);
    });
   
  }
  volver(){
    this.router.navigate(['/heroes']);
    console.log("funciona");
  }
}
