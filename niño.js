AFRAME.registerComponent("niño", {
    init: function () {

          this.flyingBirds();
    
      },
      flyingBirds:() => {
        var id="niño1"
        var all=document.querySelector("#ciudad")
        var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",{x:900,y:50,z:-3900});
      ringEl.setAttribute("gltf-model","./running_boy/scene.gltf");
      ringEl.setAttribute("scale",{x:29,y:29,z:29});  
      ringEl.setAttribute("rotation",{x:0,y:90,z:0}); 
  
      // Establecer el atributo del cuerpo estático del sistema físico
      ringEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 1
      });
  
        ringEl.setAttribute("choque",{elementId:`#${id}`})
        all.appendChild(ringEl)
        
      },
});