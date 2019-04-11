import { Component, OnInit } from '@angular/core';

import { Album } from "../album.model";
import { ALBUMS } from "../albums.data";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albumsArray: Album[];
  titleCounter = 1;
  numbers: number[] = [1, 2, 3];

  constructor() { }

  ngOnInit() {
    const interval = setInterval(() => this.titleCounter++, 2000);

    setTimeout(() => clearInterval(interval), 6000);

    this.albumsArray = this.albumsArray = ALBUMS;
    console.log(this.albumsArray);

  }

  parentFunctionHandler(album) {
    alert('Album ' + album.album_name + ' was sent from the album card component');
}

}
