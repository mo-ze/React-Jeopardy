import React from "react";
import $ from "jquery";
import btnstyle from "./Style";
function Modal(prop) {
    var name = prop.cat + prop.point;

    return (<div>
        <button type="button" style={btnstyle} id={"btn" + name} className="btn btn-primary"
            onClick={function () {
                $("#btn" + name).removeClass('btn-primary')
                // btn btn-light
                $("#btn" + name).addClass('btn-light')
            }}
            data-toggle="modal" data-target={"#" + name}>
            {prop.point}
        </button>

        <div className="modal fade" id={name} tabIndex="-1" >
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{prop.cat + " " + prop.point}</h5>
                    </div>
                    <div className="modal-body">

                        <div id="question" style={{margin: "2rem"}}>{prop.q} </div>

                            
                        <p id={"ans" + name} style={{ display: 'none', margin: "2rem" }}>{prop.ans} </p>
                        <div class="modal-footer">  
                        <button onClick={function (Event) {
                            $("#ans" + name).toggle()
                            // Event.stopPropagation();
                        }
                        } className="btn btn-primary" >reveal ans</button>
                       </div> 
                    </div>

                </div>
            </div>
        </div>

    </div>
    );
}
export default Modal;
