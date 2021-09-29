AFRAME.registerComponent("mangas", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
      
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "aot",
          title: "Attack On Titan",
          url: "assets/thumbnails/cover1.jpg",
        },
        {
          id: "opm",
          title: "One Punch Man",
          url: "assets/thumbnails/cover2.jpg",
        },
  
        {
          id: "black_clover",
          title: "Black Clover",
          url: "assets/thumbnails/cover3.jpg",
        },
        {
          id: "tokyo_ghoul",
          title: "Tokyo Ghoul",
          url: "../assets/thumbnails/cover4.jpg",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position,item.id);
        // Thumbnail Element
       const thumbNail = this.createThumbnail(item);
       borderEl.appendChild(thumbNail);
        // Title Text Element
        const titleEl  = this.createTitle(position,item);
        borderEl.appendChild(titleEl);
        this.placesContainer.appendChild(borderEl);
      }
    },
    
    createBorder : function(pos,id){
      const entity = document.createElement("a-entity");
  
      entity.setAttribute("id",id);
      entity.setAttribute("visible",true);
      entity.setAttribute("geometry",{
      primitive : "ring",
      radiusInner : 9, 
      radiusOuter : 10});
      entity.setAttribute("position",pos);
      entity.setAttribute("material",{
      color:"#B76B30",
      opacity:1});
  
      entity.setAttribute("cursor-listener",{
      
      })  


      return entity;
    },
  
    createThumbnail : function(item){
      const entity = document.createElement("a-entity");
      
      entity.setAttribute("visible",true);
      entity.setAttribute("geometry",{
      primitive : "circle",
      radius : 9 });
      entity.setAttribute("material",{
      src : item.url});
  
      return entity;
    },
  
    createTitle : function(pos,item){
      const entity = document.createElement("a-entity");
      
      entity.setAttribute("text",{
      align : "center",
      color : "#E65100", 
      font : "exo2bold",
      width : 70,
      value : item.title});
      const position = pos;
      position.y = -20;
      entity.setAttribute("visible",true);    
      entity.setAttribute("position",position);
  
      return entity;
    }
  
  });
  