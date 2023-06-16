import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Conductor = () => {
  return (
    <div>
    <Header />

    <section>
    
        <p>Affordable, metal die-cast, to-scale model train toys.</p>
        <br/>
        <div className="grid">
        <div>
            <ul>
                <b>Scale Models</b>
                <li><a>Locomotives, Cars and Boogies</a></li>
                <li><a>Stations</a></li>
                <li><a>Control Centers</a></li>
                <li><a>Train Yards</a></li>
                <li><a>Vehicals and People</a></li>
                <li><a>Tracks and Tracksets</a></li>
                <li><a>Special Editions</a></li>
                <li><a>Train Sets</a></li>
            </ul>
        </div>
        </div>
    </section>

    <Footer />
  </div>
  )
}

export default Conductor