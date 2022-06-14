import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import swal from 'sweetalert';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('openModalProfile') openModalProfile = new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout(){

    User.logout(()=>{
      this.router.navigateByUrl('login');
    },(err:any)=>{
      swal({
        title: "Error",
        text: "Erro ao realizar logout",
        icon: "error"
      });
      console.log(err)
    })
  }

  openModal(){
    this.openModalProfile.emit();
  }

}
