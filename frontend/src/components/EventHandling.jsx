import React from 'react'

const EventHandling = () => {

  

  return (
    <div className='container'>
        <h1 className='text-center fw-bold'>Event Handling</h1>
        <hr />

        <h3>Click Event Handling</h3>
        <button className='btn btn-primary' onClick={ () => { alert('button clicked') } } >Click Event</button>

        <h3>Change Event Handling</h3>
        <input type="text" onChange={ (e) => { console.log(e.target.value) } } />

        <h3>Change page background</h3>
        <input type="color" onChange={ (e) => { document.body.style.backgroundColor = e.target.value } }  />

    </div>
  )
}

export default EventHandling;