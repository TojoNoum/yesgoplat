import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  buttonCoverContent!: string;

  constructor() { }

  ngOnInit(): void {
    this.buttonCoverContent = "Continuer d'explorer";
  }
 

  
  onRemoveWelcome(){

    if(this.buttonCoverContent === "Continuer d'explorer"){

      setTimeout(()=>{this.buttonCoverContent = "Fermer"},1000)
      document.querySelector('.card-cover')!.classList.toggle('card-cover--open');
      document.querySelector('.card-cover')!.classList.remove('card-cover--close');

    }else{

      setTimeout(()=>{this.buttonCoverContent = "Continuer d'explorer"},1000);
      document.querySelector('.card-cover')!.classList.toggle('card-cover--open');
      document.querySelector('.card-cover')!.classList.add('card-cover--close');

    }
    
    
    

    


  }

}
