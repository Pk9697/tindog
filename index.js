import dogsData from './data.js'
import Dog from './Dog.js'
let isWaiting=false


function getNewDog(){
    const newDogData=dogsData.shift()
    // console.log(newDogData)
    return newDogData? new Dog(newDogData):{}
}

function likeCurrentDog(){
    if(!isWaiting){
        // document.getElementById('badge').innerHTML=newDog.getLikeHtml()
        isWaiting=true
        newDog.setHasBeenSwiped()
        newDog.setHasBeenLiked()
        console.log(newDog)
        render()
        if(dogsData.length>0){
            setTimeout(()=>{
                newDog=getNewDog()
                render()
                isWaiting=false
            },1500)
        }
    }
}

function rejectCurrentDog(){

    if(!isWaiting){
        // document.getElementById('badge').innerHTML=newDog.getNopeHtml()
        isWaiting=true
        newDog.setHasBeenSwiped()
        newDog.setHasBeenRejected()
        console.log(newDog)
        render()
        if(dogsData.length>0){
            setTimeout(()=>{
                newDog=getNewDog()
                render()
                isWaiting=false
            },1500)
        }
    }
}


function render(){
    document.getElementById('main').innerHTML=newDog.getDogHtml()
    // document.getElementById('main').style.backgroundImage=`url(${newDog.getDogBackgroundImage()})`;
    document.getElementById('main').style.background=`linear-gradient(0deg, rgba(0, 0, 0, 0.9) -11.44%, rgba(0, 0, 0, 0) 39.97%),url(${newDog.getDogBackgroundImage()}) no-repeat center center/cover`;
}
// console.log(dogsData)
// getNewDog()
// console.log(dogsData)
// getNewDog()



document.getElementById('btn-heart').addEventListener('click',likeCurrentDog)
document.getElementById('btn-cross').addEventListener('click',rejectCurrentDog)

let newDog=getNewDog()
render()


