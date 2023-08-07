import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Homepage</h1>

        <p style={{ fontSize : '50px', backgroundColor: 'lightblue' }}>Inline CSS in JSX</p>

        <p className='myclass'>We use className here in JSX</p>

        <input type="text" />
        <br />
        <hr />
    </div>
  )
}

export default Home;

