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

    getLikeHtml(){
       return `<img class="badge-like" src="./images/badge-like.png" alt="" srcset=""></img>`
    }
    getNopeHtml(){
        return `<img class="badge-nope" src="./images/badge-nope.png" alt="" srcset="">`
    }

    getDogHtml(){

        return `
            <div id="badge">     
                ${this.hasBeenLiked?this.getLikeHtml():this.hasBeenRejected?this.getNopeHtml():''}
            </div>
            <div>
                <h1>${this.name},${this.age}</h1>
                <h2>${this.bio}</h2>
            </div>
        `
    }
}

export default Dog