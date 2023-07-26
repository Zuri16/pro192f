AFRAME.registerComponent("choque", {
  schema: {
    elementId: { type: "string", default: "#niño1" },
  },

  update: function () {
    this.isCollided(this.data.elementId);
  },

  isCollided: function (elementId) {
      console.log(elementId)
    const element = document.querySelector(elementId);
    console.log(element)
    element.addEventListener("collide", (e) => {
      if (elementId.includes("#niño")) {
        var gameOver=document.querySelector("#gameover")
        gameOver.setAttribute("visible", true)
        console.log("Atropellaste al niño");
      } 
      else if (elementId.includes("#gato")) {
        var gameOver=document.querySelector("#gameover")
        gameOver.setAttribute("visible", true)
        console.log("Y también al gato");
      } 
      else if (elementId.includes("#mujer")) {
        var gameOver=document.querySelector("#gameover")
        gameOver.setAttribute("visible", true)
        console.log("Y también a la chica");
      }
    });
  },
});