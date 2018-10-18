import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    posts: Post[];
    testnativestring: string;
    numberChanges: number = 0;

    constructor() { }

    ngOnInit() {

        this.posts = [];

        for (let i = 0; i < 20; i++) {
            let x = new Post();
            x.title = "Post number " + i;
            x.body = "faserfaserfaser";
            this.posts.push(x);
        }

        this.testnativestring = "<h1>This is a simple test</h1>"

    }

    onTitleChanged(newTitle) {
        console.info("Got a new title " + newTitle);
    }

    changeText() {
        this.numberChanges++;
        this.testnativestring = "<h2>This is change number ["+ this.numberChanges +"]</h2>"
    }

}
