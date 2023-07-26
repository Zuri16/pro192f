AFRAME.registerComponent("drive",{
    init(){
        this.control()
    },
    control(){
        var rotacion = 0
        var velocidad =10
        window.addEventListener("keydown",function(e){
            var volan=document.querySelector("#volante1")
            if(e.code == "ArrowRight" && rotacion>-40){
                rotacion-=5
                volan.setAttribute("rotation", {x:0, y:0, z:rotacion})
            }
            if(e.code == "ArrowLeft" && rotacion<40){
                rotacion+=5
                volan.setAttribute("rotation", {x:0, y:0, z:rotacion})
            }
            var mapa=document.querySelector("#ciudad")
            var camara=document.querySelector("#camera-rig")
            var rotacionc=camara.getAttribute("rotation")
            var posicionc=camara.getAttribute("position")
            var movimiento=camara.getAttribute("movement-controls")
            camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.005})
            //console.log(posicionc)
            var vectorCam=new THREE.Vector3()
            camara.object3D.getWorldDirection(vectorCam)
            if(e.code == "ArrowRight"){
                rotacionc.y-=3
                camara.setAttribute("rotation", {x:0, y:rotacionc.y, z:0})
                //mapa.setAttribute("rotation", {x:0, y:190, z:0})
                camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.005})
                //console.log(posicionc)
            }
            if(e.code == "ArrowLeft"){
                rotacionc.y+=3
                camara.setAttribute("rotation", {x:0, y:rotacionc.y, z:0})
                //mapa.setAttribute("rotation", {x:0, y:-190, z:0})
                camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.005})
            }
            if(e.code == "ArrowUp"){
                velocidad+=0.02
                if(velocidad <= 100 && posicionc.z > -500){
                    camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.003})
                    var acelera = this.document.querySelector("#acelerar")
                    acelera.setAttribute("material", "color", "green")
                    var pedalAce=this.document.querySelector("#pedalAcelerar")
                    pedalAce.setAttribute("rotation", {x:0, y:0, z:0.2})
                }
            }
            if(e.code == "ArrowDown"){
                velocidad-=0.05
                if(velocidad <= 1 && posicionc.z > -5){
                    camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.005})
                    //var frenar = this.document.querySelector("#freno")
                    //frenar.setAttribute("material", "color", "green")
                    //var pedalFre=this.document.querySelector("#pedalFrenar")
                    //pedalFre.setAttribute("rotation", {x:0, y:0, z:0.2})       
                }
            }
            if(e.code == "Space"){
          
                camara.setAttribute("movement-controls", {"speed":0})
                var frenar = this.document.querySelector("#freno")
                frenar.setAttribute("material", "color", "green")
                var pedalFre=this.document.querySelector("#pedalFrenar")
                pedalFre.setAttribute("rotation", {x:0, y:0, z:0.2})       
            }
        })
        window.addEventListener("keyup", function(e){
            var camara=document.querySelector("#camera-rig")
            var vectorCam=new THREE.Vector3()
            camara.object3D.getWorldDirection(vectorCam)
            var movimiento=camara.getAttribute("movement-controls")
            if(e.code == "ArrowDown"){
                var frenar = this.document.querySelector("#freno")
                frenar.setAttribute("material", "color", "red")
            }
            if(e.code == "ArrowUp"){
                if(velocidad > 10){
                    velocidad -= 0.05
                    camara.setAttribute("movement-controls", {"speed":movimiento.speed+0.005})
                }
                var acelera = this.document.querySelector("#acelerar")
                acelera.setAttribute("material", "color", "red")
            }
        })
    }
    
})



































