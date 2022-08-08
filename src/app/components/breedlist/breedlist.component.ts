import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-breedlist',
  templateUrl: './breedlist.component.html',
  styleUrls: ['./breedlist.component.css'],
})
export class BreedlistComponent implements OnInit, OnDestroy {
  list: any;
  imageList: string[] = [];
  imageSrc: string = '';
  imageCount: number = 0;
  subscription!: Subscription;
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    const path = 'https://dog.ceo/api/breed/hound/images';
    this.subscription = this.httpService.get(path).subscribe((response) => {
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
