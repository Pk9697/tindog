// Create the Dog class here
class Dog{
    constructor(data){
        Object.assign(this,data)
        this.hasBeenRejected=false
    }
    setHasBeenRejected(){
        this.hasBeenRejected=true
    }

    setHasBeenSwiped(){
        this.hasBeenSwiped=true
    }

    setHasBeenLiked(){
        this.hasBeenLiked=true
    }

    getDogBackgroundImage(){
        return this.avatar
    }

    getDogHtml(){

        return `
            <div>
                <h1>${this.name},${this.age}</h1>
                <h2>${this.bio}</h2>
            </div>
        `
    }
}

export default Dog