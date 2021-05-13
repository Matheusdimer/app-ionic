import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController) { }

  public login() {
    this.navCtrl.navigateRoot('/categorias');
  }
}
