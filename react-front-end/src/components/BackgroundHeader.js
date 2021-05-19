import React from 'react'
import './BackgroundHeader.css'

function BackgroundHeader() {
  return (
    <div class="bbbootstrap">
      <div class="container">
  	<h1 id="header" >Let's find UrCasa so that you can say <em>MiCasa!</em></h1>
		<div class="search-box">
			<input type="text" class="search-box-input" placeholder="What are you looking for ?"/>
			    <button class="search-box-btn">
          <a href='./map' class='myButton'><font size="20px" color="#FF7A59"><button>SEARCH</button></font></a></button>
		    </div>     
      </div>
  </div>
  )
}

export default BackgroundHeader