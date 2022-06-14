import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,getAuth,signOut } from "@angular/fire/auth";
import EUserAction from "../utils/enums/EUserActions";
import IFormError from "../utils/interfaces/iformError";
import IUser from "../utils/interfaces/iuser";

export default class User{
  private email:string = "";
  private password:string = "";
  private confirm:string = "";
  private _formError:IFormError[] = [];
  private auth:Auth;

  private static readonly regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private formData:IUser,private action=EUserAction.login){
    this.auth = getAuth();

    if(this.checkFormData()){
      this.email = formData.email;
      this.password = formData.password;

      if(this.action===EUserAction.signup) this.confirm = formData.confirm!

      this.validate();
    }else{
      this._formError.push({
        formControl: "email",
        errorFeedback: "dados invalido",
        currentValue: this.email
      });
    }
  }

  signUp(){
    return new Promise((resolve,reject)=>{
      createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("userCredential(signUp)",user);
        if(user) resolve(user);
        else reject(
          {
            formControl: "email",
            errorFeedback: "erro ao registar novo usuario",
            currentValue: this.email
          }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        reject({
          formControl: "email",
          errorFeedback: errorMessage,
          currentValue: this.email
        });
      });
    });
  }

  login(){
    return new Promise((resolve,reject)=>{
      signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if(user) resolve(user);
        else reject(
          {
            formControl: "email",
            errorFeedback: "Email ou Password invalidos",
            currentValue: this.email
          }
        );
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        let newError = (errorCode=="auth/user-not-found"?"Utilizador não registrado":errorCode)
        reject(
          {
            formControl: "email",
            errorFeedback: newError,
            currentValue: this.email
          }
        );
      });
    });
  }

  static logout(cb:Function,errCb?:Function){
    signOut(getAuth()).then(() => {
      cb();
    }).catch((error) => {
      if(errCb) errCb(error);
    });
  }

  get formError(){
    return this._formError;
  }

  private validate(){
    if(!this.email){
      this._formError.push({
        formControl: "email",
        errorFeedback: "email é obrigatorio",
        currentValue: this.email
      });
    }else if(!User.regexEmail.test(this.email)){
      this._formError.push({
        formControl: "email",
        errorFeedback: "email inválido",
        currentValue: this.email
      });
    }

    if(!this.password){
      this._formError.push({
        formControl: "password",
        errorFeedback: "password é obrigatorio",
        currentValue: this.password
      });
    }

    if(this.action==EUserAction.signup){
      //variable regex validate email
      if(!this.confirm){
        this._formError.push({
          formControl: "confirm",
          errorFeedback: "confirme o password primeiro",
          currentValue: this.confirm
        });
      }else if(this.confirm.length && this.password.length){
        if(this.confirm!==this.password){
          this._formError.push({
            formControl: "confirm",
            errorFeedback: "confirme o password primeiro",
            currentValue: this.confirm
          });
        }
      }
    }
  }

  static isLogged(){
    const user = getAuth().currentUser;

    if (user) return true;
    return false;
  }

  private checkFormData(): boolean{
    if(
      this.action===EUserAction.signup &&
      ("email" in this.formData && "password" in this.formData && "confirm" in this.formData)
    ){
      return true;
    }else if(
      this.action===EUserAction.login &&
      ("email" in this.formData && "password" in this.formData)
    ){
      return true;
    }

    return false;

  }
}
