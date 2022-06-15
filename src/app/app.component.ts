import { Component, OnInit } from '@angular/core';
import { Auth, getAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import Web3 from 'web3';
import Web3Obj from './models/web3Obj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crypto-wallet-ganache';

  constructor(private auth:Auth,private router:Router){
    new Web3Obj().initWeb3().then((web3)=>{
      console.log(web3.eth.accounts.privateKeyToAccount("4f61674ce217ebbcac38e55b435bbe97475f710822f5b0e415615230fac747c1"))
    });
  }
  ngOnInit(): void {
    /* this.auth = getAuth();
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        this.router.navigateByUrl("panel");
      } else {
        // User is signed out
        this.router.navigateByUrl("login");
      }
    }); */
  }
}
