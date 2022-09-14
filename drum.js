window.addEventListener('load', (event) => {
	
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 360
canvas.height = 360

let w = canvas.width
let h = canvas.height

let dw = 120
let dh = 120

ctx.lineWidth = 1
ctx.strokeStyle = "#1B2430"

// deafults blocks & text

// block a
ctx.fillStyle = "#EB1D36"
ctx.fillRect(0,0,dw,dh)
ctx.strokeRect(0,0,dw,dh)


// block b
ctx.fillStyle = "#3b82f6"
ctx.fillRect(120,0,dw,dh)
ctx.strokeRect(120,0,dw,dh)


// block c
ctx.fillStyle = "#28DF99"
ctx.fillRect(240,0,dw,dh)
ctx.strokeRect(240,0,dw,dh)

// block d
ctx.fillStyle = "#FBFF00"
ctx.fillRect(0,120,dw,dh)
ctx.strokeRect(0,120,dw,dh)


// block e
ctx.fillStyle = "#C70A80"
ctx.fillRect(120,120,dw,dh)
ctx.strokeRect(120,120,dw,dh)


// block f
ctx.fillStyle = "#3DB2FF"
ctx.fillRect(240,120,dw,dh)
ctx.strokeRect(240,120,dw,dh)


// block g
ctx.fillStyle = "#4700D8"
ctx.fillRect(0,240,w/2,dh)
ctx.strokeRect(0,240,w/2,dh)


// block h
ctx.fillStyle = "#06FF00"
ctx.fillRect(180,240,w/2,dh)
ctx.strokeRect(180,240,w/2,dh)



let keys = document.querySelectorAll(".btn").length

for(var i=0; i < keys; i++){

    document.querySelectorAll('.btn')[i].addEventListener('click', function () {
        
        let btn = this.innerHTML

        makeSound(btn)
        buttonAnimation(btn)
    })
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){

    switch(key){

            case 'a':

                let a = new Audio("sounds/a.wav")
                a.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(0,0,dw,dh)
                ctx.strokeRect(0,0,dw,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#EB1D36"
                    ctx.fillRect(0,0,dw,dh)
                    ctx.strokeRect(0,0,dw,dh)
                },300)
                break

            case 'b':

                let b = new Audio("sounds/b.wav")
                b.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(120,0,dw,dh)
                ctx.strokeRect(120,0,dw,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#3b82f6"
                    ctx.fillRect(120,0,dw,dh)
                    ctx.strokeRect(120,0,dw,dh)
                },300)
                break

            case 'c':

                let c = new Audio("sounds/c.wav")
                c.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(240,0,dw,dh)
                ctx.strokeRect(240,0,dw,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#28DF99"
                    ctx.fillRect(240,0,dw,dh)
                    ctx.strokeRect(240,0,dw,dh)
                },300)
                break

            case 'd':

                let d = new Audio("sounds/d.wav")
                d.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(0,120,dw,dh)
                ctx.strokeRect(0,120,dw,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#FBFF00"
                    ctx.fillRect(0,120,dw,dh)
                    ctx.strokeRect(0,120,dw,dh)
                },300)
                break

            case 'e':

                let e = new Audio("sounds/e.wav")
                e.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(120,120,dw,dh)
                ctx.strokeRect(120,120,dw,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#C70A80"
                    ctx.fillRect(120,120,dw,dh)
                    ctx.strokeRect(120,120,dw,dh)
                },300)
                break

            case 'f':

                let f = new Audio("sounds/f.wav")
                f.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(240,120,dw,dh)
                ctx.strokeRect(240,120,dw,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#3DB2FF"
                    ctx.fillRect(240,120,dw,dh)
                    ctx.strokeRect(240,120,dw,dh)
                },300)
                break

            case 'g':

                let g = new Audio("sounds/g.wav")
                g.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(0,240,w/2,dh)
                ctx.strokeRect(0,240,w/2,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#4700D8"
                    ctx.fillRect(0,240,w/2,dh)
                    ctx.strokeRect(0,240,w/2,dh)
                },300)
                break

            case 'h':

                let h = new Audio("sounds/h.wav")
                h.play()

                ctx.fillStyle = "rgba(255%, 255%, 255%, 0.5)"
                ctx.fillRect(180,240,w/2,dh)
                ctx.strokeRect(180,240,w/2,dh)

                setTimeout(function(){
                    ctx.fillStyle = "#06FF00"
                    ctx.fillRect(180,240,w/2,dh)
                    ctx.strokeRect(180,240,w/2,dh)
                },300)
                break
            default:
                console.log('error')
                alert("Please use keyboard keys")
        }
}

function buttonAnimation(currentKey) {

    let active = document.querySelector("." + currentKey)

    active.classList.add("pressed")

    setTimeout(function(){

        active.classList.remove("pressed")

    }, 300)

}



});
