import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-breedlist',
  templateUrl: './breedlist.component.html',
  styleUrls: ['./breedlist.component.css'],
})
export class BreedlistComponent implements OnInit {
  list: any;
  imageList: string[] = [];
  imageSrc: string = '';
  imageCount: number = 0;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const path = 'https://dog.ceo/api/breed/hound/images';
    this.httpService.get(path).subscribe((response) => {
      this.list = response;
      this.imageList = this.list['message'];
      this.imageCount = this.imageList.length;
    });
  }

  displayImage(image: string): void {
    this.imageSrc = image;
  }

  delete(imageSrc: string) {
    this.imageList.splice(this.imageList.indexOf(imageSrc), 1);
    this.imageCount--;
  }
}
