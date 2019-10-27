import { Component } from "@angular/core";
import { favoriteEventArgs } from './favorite/favorite.component';



@Component({
    selector: 'courses',
    template: `<h3>Courses</h3>
                <!-- one way Binding through templates -->
                    E-Mail: <input #emailFromScreen (keyup.enter)="emailTemplate(emailFromScreen.value)"/>                  <br/>
                    E-Mail: <input [value]="emailFromClassOneWay" (keyup.enter)="emailProcess()"/>
                <br/>
                <br/>
                <!-- Two way Binding through ngModule of FormsModule -->
                    <input [(ngModel)]="email2Way" (keyup.enter)="twoWayBinding()"/>

                <!-- testing class binding ... adds actice if isActive is true -->
                    <button class="btn btn-primary" [class.active]="isActive">
                        Save
                    </button>

                    <br>

                    {{ topic | summary:60:'click to see'}}
                    <br> 
                    
                    <favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChanged($event)"></favorite>

                    <h3> Nice Work!</h3>

                    <zippy title="shipping Details">
                        Shipping Detail Content.......................
                    </zippy>
               `  
})

export class CoursesComponent {
    isActive = true;
    emailFromClassOneWay = "email.com";
    email2Way = "email.com";
    topic = 'lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom lorem epsom ';
    post = {
        isFavorite: true
      }
    emailTemplate(val) {
        console.log(val);
    }
    emailProcess(email) {
        console.log(this.emailFromClassOneWay);
    } 

    twoWayBinding() {
        console.log(this.email2Way);
    }

    onFavoriteChanged(favoriteReturned: favoriteEventArgs) {
        console.log('Favorite changed!' , favoriteReturned )
    }
}