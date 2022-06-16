import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Profile from 'src/app/models/profile';
import User from 'src/app/models/user';
import { addFormFeedback, closeLoader, openLoader } from 'src/app/utils/functions';
import IProfile from 'src/app/utils/interfaces/iProfile';
import swal from 'sweetalert';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {
  @Input("isOpen") isOpen = false;
  @Output("closeModal") closeModal = new EventEmitter();
  emailUser?:string;
  constructor() { }

  ngOnInit(): void {
    this.emailUser = User.userLogged()?.email!;
  }

  close(){
    this.isOpen = false;
    this.closeModal.emit();
  }

  submit(formObj:any,formElement:HTMLFormElement){
    let formData = formObj.value as IProfile;

    let profile = new Profile(formData);

    if(profile.formError.length){
      addFormFeedback(formElement,profile.formError);
    }else{
      swal({
        title: "estas preste a atualizar seu password",
        text: "",
        icon: "warning",
        buttons: ["cancelar","continuar"],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          openLoader();
          profile.update()
          .then((resp)=>{
            if(Array.isArray(resp)){
              addFormFeedback(formElement,resp);
            }else{
              formElement.reset();
              swal({
                title: "Pronto",
                text: "Password atualizado",
                icon: "success"
              });
            }
          }).finally(closeLoader);
        }
      });
    }
  }

}
