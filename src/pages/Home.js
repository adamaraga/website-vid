import React from 'react'
import Navbar from '../component/navigation/Navbar'
import img from '../images/social-media.png'
import Product from '../component/Product'
import Footer from '../component/Footer'

function Home() {
    return (
        <div className='home'>
            <div className="home-disc-con">
                <Navbar />
                <div className='home-disc'>
                    <h1> simply astonishing </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam sint perferendis mollitia sit delectus accusantium magni sapiente tenetur quae, numquam quos aliquam alias, quaerat ullam reprehenderit, autem est rem.</p>
                </div>
                <div className="home-disc-img-con">
                    <img src={img} alt="" className='home-disc-img'/>
                </div>
            </div>

            

            <Product  />

            <Footer />

        </div>
    )
}

export default Home
