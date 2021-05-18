import React from 'react'
import './BackgroundHeader.css'

function BackgroundHeader() {
  return (
    <div class="bbbootstrap">
  <div class="container">
  	<h1>ANIMATED SEARCH BOX</h1>
		<div class="search-box">
			<input type="text" class="search-box-input" placeholder="What are you looking for ?"/>
			<button class="search-box-btn">
				<i class="search-box-icon material-icons">search</i>
			</button>
		</div>
  </div>

  </div>
  )
}

export default BackgroundHeader