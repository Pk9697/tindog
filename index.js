import dogsData from './data.js'
import Dog from './Dog.js'
let isWaiting=false


function getNewDog(){
    const newDogData=dogsData.shift()
    // console.log(newDogData)
    return newDogData? new Dog(newDogData):{}
}

function renderEndGame(){
    document.getElementById('main').innerHTML=`
        <h1>No more dogs in your area! Check Back later</h1>
    `

    // document.getElementById('main').style.backgroundImage=`none`
    document.getElementById('main').style.background=`linear-gradient(270deg, #FA695A 0%, #F83375 100%)`
    document.getElementById('main').classList.add('main-flex-end')
}

function likeCurrentDog(){
    if(!isWaiting){
        // document.getElementById('badge').innerHTML=newDog.getLikeHtml()
        isWaiting=true
        newDog.setHasBeenSwiped()
        newDog.setHasBeenLiked()
        console.log(newDog)
        // render()
        document.getElementById('badge-like').style.display='block'
        if(dogsData.length>0){
            setTimeout(()=>{
                newDog=getNewDog()
                render()
                isWaiting=false
                document.getElementById('badge-like').style.display='none'
            },1500)
        }else{
            setTimeout(()=>{
                renderEndGame()
            },1000)
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
        // render()
        document.getElementById('badge-nope').style.display='block'

        if(dogsData.length>0){
            setTimeout(()=>{
                newDog=getNewDog()
                render()
                isWaiting=false
                document.getElementById('badge-nope').style.display='none'
            },1500)
        }else{
            setTimeout(()=>{
                renderEndGame()
            },1000)
        }
    }
}


function render(){
    document.getElementById('card').innerHTML=newDog.getDogHtml()
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


