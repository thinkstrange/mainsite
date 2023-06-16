import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const VMS = () => {
  return (
    <div>
    <Header />

    <section>
        <p>Virtual Media Studios</p>
        <br/>
        <div class="grid">
        <div>
            <ul>
                <b>Movies</b>
                <li><a>Blindman</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <b>TV Shows</b>
                <li><a>Reflection</a></li>
            </ul>
        </div>
        </div>
    </section>

    <Footer />
  </div>
  )
}

export default VMS