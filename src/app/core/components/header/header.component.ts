import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  

}
