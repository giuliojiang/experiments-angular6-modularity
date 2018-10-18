export class Post {
    title: string;
    body: string;

    toString(): string {
        return "Post ["+ this.title +"] ["+ this.body +"]";
    }
}