import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-breedimage',
  templateUrl: './breedimage.component.html',
  styleUrls: ['./breedimage.component.css']
})
export class BreedimageComponent implements OnInit {

  @Input() imageSrc = '';
  @Output() deleteEvent = new EventEmitter<string>();
  imgDeleted: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  delete(image: string) {
    this.deleteEvent.emit(image);
    this.imageSrc='';
    this.imgDeleted = true;
  }

}
