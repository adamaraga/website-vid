import React from 'react';
import {BsFillPlayFill} from 'react-icons/bs';
import { useState} from 'react';
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import ModalVideo from 'react-modal-video';
import productImg1 from '../images/productImage/productimg1.jpg';
import productImg2 from '../images/productImage/productimg2.jpg';
import productImg3 from '../images/productImage/productimg3.jpg';




function Product() {

    const [isOpenShoes, setIsOpenShoes] = useState(false);
    const [isOpenClothes, setIsOpenClothes] = useState(false);
    const [isOpenBags, setIsOpenBags] = useState(false);

    const handleClickShoes = () => {
        setIsOpenShoes(true);
    }

    const handleClickClothes = () => {
        setIsOpenClothes(true);
    }

    const handleClickBags = () => {
        setIsOpenBags(true);
    }



    const [state] = useState([
        {
            id: 1,
            productName: "shoes",
            productDisc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et repellendus praesentium, laudantium corrupti earum excepturi, amet inventore, cupiditate necessitatibus sequi sint omnis? Quod culpa maxime consequuntur, nulla rem tenetur.',
            // productImg: 'url(https://connect.qodeinteractive.com/wp-content/uploads/2016/11/h8-img-1.jpg)',
            productImg: productImg1,
            productVideo: handleClickShoes,
        },
        {
            id: 2,
            productName: "clothes",
            productDisc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et repellendus praesentium, laudantium corrupti earum excepturi, amet inventore, cupiditate necessitatibus sequi sint omnis? Quod culpa maxime consequuntur, nulla rem tenetur.',
            // productImg: 'url("https://connect.qodeinteractive.com/wp-content/uploads/2016/09/blog-post-16.jpg")',
            productImg: productImg2,
            productVideo: handleClickClothes,
            
        },
        {
            id: 3,
            productName: "bags",
            productDisc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime et repellendus praesentium, laudantium corrupti earum excepturi, amet inventore, cupiditate necessitatibus sequi sint omnis? Quod culpa maxime consequuntur, nulla rem tenetur.',
            // productImg: 'url("https://connect.qodeinteractive.com/wp-content/uploads/2016/07/blog-post-1.jpg")',
            productImg: productImg3,
            productVideo: handleClickBags,
        },

    ]);

    

    

    return (
        <>
        {
            state.map((product) => {
                const {id, productName, productDisc, productImg, productVideo } = product;
               
                return(
                    <div className="product-con" key={id}>
                        <div style={{backgroundImage:`url(${productImg})` }} className="product-img" >
                            <button className='play-btn'  onClick={productVideo} >
                                <BsFillPlayFill className='play-icon' />
                            </button>
                            
                        </div>
                        
                        <div className="product-disc-con">
                            <div className="product-name">
                            <span>{productName}</span>
                            </div>
                            <div className="product-disc">
                                <p>
                                    {productDisc}
                                </p>
                            </div>
                            

                        </div>
                    </div>
                )
            })
        }
        <ModalVideo channel='youtube' autoplay isOpen={isOpenShoes} videoId='W6D3FXYtcGA' onClose={() => setIsOpenShoes(false)} />
        <ModalVideo channel='youtube' autoplay isOpen={isOpenClothes} videoId='SNjRgyYrIVA' onClose={() => setIsOpenClothes(false)} />
        <ModalVideo channel='youtube' autoplay isOpen={isOpenBags} videoId='Law7wfdg_ls' onClose={() => setIsOpenBags(false)} />
        
        
        </>


    )
}



export default Product;

