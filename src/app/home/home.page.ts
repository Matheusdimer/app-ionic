import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {}
  
  login() {
    this.navCtrl.navigateRoot('/categorias');
  }
  
  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  
  ngOnDestroy(): void {
    this.menuCtrl.enable(true);
  }
}
