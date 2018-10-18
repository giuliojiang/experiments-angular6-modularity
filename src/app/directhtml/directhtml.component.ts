import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-directhtml',
  templateUrl: './directhtml.component.html',
  styleUrls: ['./directhtml.component.css']
})
export class DirecthtmlComponent implements OnInit {

    constructor(
        private element: ElementRef
    ) { }

    @Input() set htmlString(value: string) {
        let nativeElement = this.element.nativeElement;
        nativeElement.innerHTML = value;
    }

    ngOnInit() {
        
    }

}
