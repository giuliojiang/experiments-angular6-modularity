import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-posteditor',
    templateUrl: './posteditor.component.html',
    styleUrls: ['./posteditor.component.css']
})
export class PosteditorComponent implements OnInit {

    @Input() post: Post;
    @Output() titleChanged = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onTitleChange(event) {
        console.info("onTitleChange, got ["+ event.target.value +"]");
        this.titleChanged.emit(event.target.value);
    }

}
