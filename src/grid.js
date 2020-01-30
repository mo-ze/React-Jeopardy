import React from 'react';
import cat1 from "./e.js"
import Category from "./category.js"
function Grid(){
    
    let category=[];
    for (var i=0; i < Object.keys(cat1).length; i++) {
        category.push(<Category key={i} {...cat1[i]} />);
    }
   return(<div>

      {category}
      
    
   
      


   </div>)
}
export default Grid;