import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Northstage = () => {
  return (
    <div>
    <Header />

    <section>
        
        <p>AAA Title, Game studio</p>
        <br/>

        <div className="grid">

            <div>
                <ul>
                    <b>Games</b>
                    <li><a>Whiteshadow</a></li>
                    <li><a>Blackcrow</a></li>
                    <li><a>Blad: Legacy</a></li>
                </ul>
            </div>

        </div>

    </section>

    <Footer />
  </div>
  )
}

export default Northstage