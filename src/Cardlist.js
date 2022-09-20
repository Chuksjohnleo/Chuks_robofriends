import React from 'react';
import Card from './Card';

const Cardlist = ({robots})=>{
  //throw error
  if(false){
   throw new Error('Noooooo')
  }
  return(
    <div className='bu' >
    {
      robots.map((user)=>{
        return(
          <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        )
      })
    }
    </div>
  )
}


export default Cardlist;