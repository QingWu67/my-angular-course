import { Component, OnInit } from '@angular/core';

import { Album } from "./albums/album.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-angular-album';
  albumsArray: Album[];




  ngOnInit(): void { }
}
