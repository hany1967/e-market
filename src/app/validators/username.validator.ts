import { AbstractControl} from '@angular/forms';



export class UserNameValidator  {

      static mustNotContainSpaces(control: AbstractControl)  {
        if (control.value == null) return null;
         if ((control.value as string).indexOf(' ') >= 0) {
             return { mustNotContainSpaces : true}
         }
         return null;
    }
 
      static passwordsDontMatch(control: AbstractControl) {
          let pass = control.get('password');
          let confPass = control.get('confirmPassword');

          if (pass.value !== confPass.value) {
              return { passwordsDontMatch: true}
          }
          return null;
      }

} 