import { Component, OnInit } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pasta = 'assets/images/pasta.jpg';

  constructor(private swUpdate: SwUpdate) {
    // swUpdate.available.subscribe((event)=>{
    //   swUpdate.activateUpdate().then(()=>document.location.reload())
    // })
  }
  // we also create a method that will inform the browser about the update
  reloadCache() {
    if (this.swUpdate.isEnabled) {
      // we will subscribe to the available observable
      this.swUpdate.available.subscribe(() => {
        if (confirm("Une mise à jour est disponible. Souhaitez-vous recharger la page ?")) {
          document.location.reload()
        }
      })
    }
  }

  ngOnInit() {
    this.reloadCache()
  }
}
