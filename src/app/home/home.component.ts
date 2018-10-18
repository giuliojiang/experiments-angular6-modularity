import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    posts: Post[];

    constructor() { }

    ngOnInit() {

        this.posts = [];

        for (let i = 0; i < 20; i++) {
            let x = new Post();
            x.title = "Post number " + i;
            x.body = "faserfaserfaser";
            this.posts.push(x);
        }

    }

}
