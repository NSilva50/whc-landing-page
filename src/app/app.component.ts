import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItem: object = [
    {
      name: 'Download'
    },
    {
      name: 'Features'
    },
    {
      name: 'Contact'
    }
  ]

  featureInfo: object = [
    {
      class: 'fas fa-mobile',
      title: 'Device Mockups',
      content: 'Ready to use HTML/CSS device mockups, no Photoshop required!'
    },
    {
      class: 'fas fa-camera',
      title: 'Flexible Use',
      content: 'Put an image, video, animation, or anything else in the screen!'
    },
    {
      class: 'fas fa-gift',
      title: 'Free to Use',
      content: 'As always, this theme is free to download and use for any purpose!'
    },
    {
      class: 'fas fa-lock-open',
      title: 'Open Source',
      content: 'Since this theme is MIT licensed, you can use it commercially!'
    }
  ]

  socialImg: object = [
    {
      class: 'fa fa-twitter'
    },
    {
      class: 'fa fa-facebook'
    },
    {
      class: 'fa fa-google-plus'
    }
  ]
}