import IFormError from "./interfaces/iformError";

export function addFormFeedback(form:HTMLFormElement,errorsFeedback:IFormError[]){
  errorsFeedback.forEach(error=>{
    let elementControl = form.querySelector(`[name="${error.formControl}"]`);

    if(elementControl){
      let elementFeedback = elementControl.nextElementSibling as HTMLDivElement;
      elementFeedback.innerHTML = error.errorFeedback;
      setTimeout(()=>{
        elementFeedback!.innerHTML = "";
      },2000)
    }
  });
}

export function openLoader(){
  document.documentElement.querySelector(".container-loader")?.classList.remove("d-none");
}

export function closeLoader(){
  document.documentElement.querySelector(".container-loader")?.classList.add("d-none");
}
