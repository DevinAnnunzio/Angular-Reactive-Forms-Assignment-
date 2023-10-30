import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment';
  theForm: FormGroup;
  forbiddenProjectNames = ['Test', 'test']

  ngOnInit(): void {
    this.theForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.ForbiddenProjectNameValidator.bind(this)]),
    })
  }

  ForbiddenProjectNameValidator(control: FormControl){
    const value = control.value as string
    for(let i = 0; i < this.forbiddenProjectNames.length; i++){
      if(value === this.forbiddenProjectNames[i]){
        return {'forbiddenProjectNames': true};
      }
    }
    return null;
  }

      //Async custom validator - HAS PROBLEM
      // ForbiddenProjectNameValidator(control: FormControl){
      //   const value = control.value as string
      //   const promise = new Promise<any>((resolve,reject) => {
      //     setTimeout(() => {
      //       for(let i = 0; i < this.forbiddenProjectNames.length; i++){
      //         if(value === this.forbiddenProjectNames[i]){
      //           resolve({'forbiddenProjectNames': true});
      //         } else {
      //           resolve(null)
      //         }
      //       }
      //     },1500)
      //   })
  
      //   return promise;
      // }

  onSubmit(){
    console.log(this.theForm)
  }
}
