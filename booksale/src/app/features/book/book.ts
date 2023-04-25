export class Book {
    public title: string
    public img: string
    public description: string
    public link: string

    constructor(title: string, img: string, description: string, link: string) {
        this.title = title
        this.img = img
        this.description = description
        this.link = link
    }
}