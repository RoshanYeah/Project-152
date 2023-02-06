// Registering component in log-component.js

//DRY --> Don't Repeat Yourself 
//JSON ---> Java Script Object Notation ---> {key1:value, key2:value}
//SYNTAX --> AFRAME.registerComponent(name, definition)
//definition: It contains the definition of the componenets. The schema and the lifecycle functions can be mentioned here 
AFRAME.registerComponent("base",{
  schema:{
    radius: {type:"number", default: 150},
    height: {type:"number", default: 3}
  },
  init: function(){
    this.el.setAttribute("geometry",{
      primitive:"cylinder",
      radius: this.data.radius,
      height: this.data.height
    });
    this.el.setAttribute("material",{color: "#1769aa"});
  }
});