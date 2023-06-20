import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed mb-12 text-white pt-2'>
            <SectionTitle
                subHeading={'--- Check it out ---'}
                heading={'Featured Item'}
            ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-600 bg-opacity-70 gap-10 px-36 py-28'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>March 20, 2023</p>
                    <h3>WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;