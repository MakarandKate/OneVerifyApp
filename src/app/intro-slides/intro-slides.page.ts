import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-intro-slides',
  templateUrl: './intro-slides.page.html',
  styleUrls: ['./intro-slides.page.scss'],
})
export class IntroSlidesPage implements OnInit{
  @ViewChild('slides') slides: IonSlides;
  slidesData = [];

  constructor() { }

  ngOnInit(): void {
    this.slidesData = [
      {
        title: 'Welcome to ICA',
        image: 'ica-slidebox-img-1',
        description: 'The ionic conference app is a practical preview of the ionic framework in action, and a demonstration of proper code use.'
      },
      {
        title: 'What is Ionic?',
        image: 'ica-slidebox-img-2',
        description: 'Ionic Framework is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.'
      },
      {
        title: 'What is Ionic Appflow ?',
        image: 'ica-slidebox-img-3',
        description: 'Ionic Appflow is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.'
      }
    ];
  }

  onSlideChangeStart(event) {
  }
}
