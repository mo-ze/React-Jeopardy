import React from 'react';
import Modal from "./modal.js"
function Category(prop){
    var Style={
  }
    // console.log(prop)

    let mod=[];
    for (var i=0; i < Object.keys(prop).length; i++){
        mod.push(<Modal key={i} {...prop[i]} />)
    }
    return(
     <div style={Style} >
          <h4 style={{textAlign:"center"}}> {prop[0].cat} </h4>

        {mod}


     </div>
    );

}
export default Category;
