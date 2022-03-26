import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu!: boolean;
  buttonContent!: string;

  constructor() { }

  ngOnInit(): void {
    this.menu=false;
    this.buttonContent = "Menu";
    this.onScroll();
  }
  onScroll(){
    window.addEventListener("scroll", function() {
      if(window.scrollY > 50) {
        document.querySelector(".first-header")?.classList.add('tm-top-bar');
        document.querySelector(".nav-style")?.classList.remove("mt-5");
      } else {                    
        document.querySelector(".first-header")?.classList.remove('tm-top-bar');
        document.querySelector(".nav-style")?.classList.add("mt-5");
      }
    });
  }

  onMenuActive(){

    if(this.buttonContent === "Menu"){
      this.menu = true;
      this.buttonContent = "Me contacter";
    }else{
      this.menu = false;
      this.buttonContent = "Menu";
    }
    
  }
  

}
