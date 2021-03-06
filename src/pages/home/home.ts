import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, ToastController, App } from 'ionic-angular';
import { GenericPage } from '@pages/generic.page';
import { MiscellaneousService } from '@sharedServices/miscellaneous.service';
import { LoginPage } from '@pages/login/login.page';
import { ConnexionTokenService } from 'bdt105angularconnexionservice';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage extends GenericPage {
    @ViewChild(Nav) nav: Nav;

    constructor(public navCtrl: NavController, public miscellaneousService: MiscellaneousService,
        public navController: NavController, public connexionTokenService: ConnexionTokenService, public app: App, public toastCtrl: ToastController) {
        super(miscellaneousService, navController, connexionTokenService, toastCtrl);
    }

}
