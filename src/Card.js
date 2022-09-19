import React from "react";

const Card = ({name,email,id})=>{
    return(
        <div className="tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/anythingest/${id}`} height={50} width={90} alt=""/>
            <div>
               <h1>{name}</h1>
               <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;