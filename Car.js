//Registering the component
AFRAME.registerComponent("carRed",{
    schema:{
        image:{type:"string",default:"./mclaren_spider/scene.gltf"},
        clickCounter:{type:"number", default:1},
    },
    tick: function(){
        this.el.setAttribute("gltf-model",this.data.image)
        const position = {x:5, y:0, z:2.4}
        const rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
    },
    update: function(){
        window.addEventListener("click", (e)=>{
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1){
                const rotation = {x: 0, y:20, z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.clickCounter === 2){
                const rotation = {x:0, y:100, z:0};
                this.el.setAttribute("rotation",rotation)
            }
            else if(this.data.clickCounter === 3){
                const rotation = {x: 0, y:-200, z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.clickCounter === 4){
                const rotation = {x:0, y:-100, z:0};
                this.el.setAttribute("rotation",rotation)
                const cameraChoice = document.querySelector("#camera")
                const position = {x:0, y:200, z:450}
                cameraChoice.setAttribute("position", position)
            }
            else{
                const rotation = {x: 0, y:-100, z:0};
                this.el.setAttribute("rotation",rotation)
                const cameraChoice = document.querySelector("#camera")
                const position = {x:0, y:50, z:250}
                cameraChoice.setAttribute("position", position)

                this.data.clickCounter = 0
            }
        })
    }
})
AFRAME.registerComponent("carYellow",{
    schema:{
        image:{type:"string",default:"./ac_-_audi_r8_lms_2016/scene.gltf"},
        clickCounter:{type:"number", default:1},
    },
    tick: function(){
        this.el.setAttribute("gltf-model",this.data.image)
        const position = {x:10, y:0, z:2.4}
        const rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
    },
    update: function(){
        window.addEventListener("click", (e)=>{
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1){
                const rotation = {x: 0, y:20, z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.clickCounter === 2){
                const rotation = {x:0, y:100, z:0};
                this.el.setAttribute("rotation",rotation)
            }
            else if(this.data.clickCounter === 3){
                const rotation = {x: 0, y:-200, z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.clickCounter === 4){
                const rotation = {x:0, y:-100, z:0};
                this.el.setAttribute("rotation",rotation)
                const cameraChoice = document.querySelector("#camera")
                const position = {x:0, y:200, z:450}
                cameraChoice.setAttribute("position", position)
            }
            else{
                const rotation = {x: 0, y:-100, z:0};
                this.el.setAttribute("rotation",rotation);
            }
        })
    }
})
AFRAME.registerComponent("carBlue",{
    schema:{
        image:{type:"string",default:"./ford_mustang_shelby_gt500/scene.gltf"},
        clickCounter:{type:"number", default:1},
    },
    tick: function(){
        this.el.setAttribute("gltf-model",this.data.image)
        const position = {x:0, y:0, z:0}
        const rotation = {x:0, y:0, z:0}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
    },
    update: function(){
        window.addEventListener("click", (e)=>{
            this.data.clickCounter = this.data.clickCounter + 1;
            if(this.data.clickCounter === 1){
                const rotation = {x: 0, y:20, z:0};
                this.el.setAttribute("rotation",rotation);
            }else if(this.data.clickCounter === 2){
                const rotation = {x:0, y:100, z:0};
                this.el.setAttribute("rotation",rotation)
            }
        })
    }
})