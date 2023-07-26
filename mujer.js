AFRAME.registerComponent("mujer", {
    init: function () {

          this.flyingBirds();
    
      },
      flyingBirds:() => {
        var id="mujer"
        var all=document.querySelector("#ciudad")
        var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",{x:2000,y:50,z:1200});
      ringEl.setAttribute("gltf-model","./stylized_low_poly_girl_character/scene.gltf");
      ringEl.setAttribute("scale",{x:75.2,y:75.2,z:75.2});  
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