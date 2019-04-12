import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Album } from "../album.model";
import { AlbumService } from '../shared/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  titleCounter = 1;
  numbers: number[] = [1, 2, 3];

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    /*const interval = setInterval(() => this.titleCounter++, 2000);

    setTimeout(() => clearInterval(interval), 6000);

    this.albumsArray = this.albumsArray = ALBUMS;
    console.log(this.albumsArray);
    */
   this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums()
    .subscribe(
        albums => this.albums = albums,
        error => console.log("Error: ", error));
}

  parentFunctionHandler(album) {
    alert('Album ' + album.album_name + ' was sent from the album card component');
}

}
