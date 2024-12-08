function books(title, author, pages, read){
    this.title = title;
    this.author = author;
    this. pages = pages;
    this.read = read;

    this.info = function(){
        return this.title + " by " + this.author + ", " + this.pages + " Pages" + ", " + this.read;
    }
}
let theHobbit = new books("The Hobbit", "J.R.R Tolkin", 295, "not read yet");
console.log(theHobbit.info());
console.log(Object.getPrototypeOf(theHobbit));
