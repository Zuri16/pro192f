AFRAME.registerComponent("gato", {
    init: function () {

          this.flyingBirds();
    
      },
      flyingBirds:() => {
        var id="gato1"
        var all=document.querySelector("#ciudad")
        var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",{x:1100,y:70,z:-2800});
      ringEl.setAttribute("gltf-model","./toon_cat_free/scene.gltf");
      ringEl.setAttribute("scale",{x:0.2,y:0.2,z:0.2});  
      ringEl.setAttribute("rotation",{x:0,y:-90,z:0}); 
  
      // Establecer el atributo del cuerpo estático del sistema físico
      ringEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 1
      });
  
        ringEl.setAttribute("choque",{elementId:`#${id}`})
        all.appendChild(ringEl)
        
      },
});