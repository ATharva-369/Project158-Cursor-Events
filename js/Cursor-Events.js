AFRAME.registerComponent("cursor-listener",{

    schema:{
        selectedItemId : {default: "",type:"string"} 
    },
    
    init : function(){
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
    },
    
    handlePlacesList : function(){
    const id = this.el.getAttribute("id");
    const placesId = ["aot","opm","black_clover","tokyo_ghoul"];
    
    if(placesId.includes(id)){
    const placesContainer = document.querySelector("#places-container");
    placesContainer.setAttribute("cursor-listener",{
        selectedItemId : id
    });
    
    this.el.setAttribute("material",{
        color:"#0000FF",
        opacity : 1
    });
    }
    
    },
    
    handleMouseEnterEvents : function(){
    this.el.addEventListener("mouseenter",()=>{
        this.handlePlacesList();
    });
    },
    
    handleMouseLeaveEvents : function(){
        this.el.addEventListener("mouseleave",()=>{
            const {selectedItemId} = this.data ;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if(id == selectedItemId){
                    el.setAttribute("material",{
                        color : "#B76B30",
                        opacity : 1});
                }
            }
        });
    },
    
    })