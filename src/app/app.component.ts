import { Component } from '@angular/core';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private firebaseDynamicLinks: FirebaseDynamicLinks) {
    this.firebaseDynamicLinks.onDynamicLink()
  .subscribe((res: any) => {console.log(res),alert(res)}, (error:any) => console.log(error));
  }
}
