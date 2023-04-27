import React, { useState } from 'react';
import howToUse from './API/howToUse';

const AboutUs = () => {
    const [aboutData,setAboutData]=useState(howToUse);
  return (
    <>
      <section className='common-section our-services'>
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12 col-lg-5 text-center our-sevice-leftside-img'>
                    <img src='./images/hero3.jpg' alt='aboutUsImg'/>
                </div>
                {/* left side content */}
                <div className='col-12 col-lg-7 our-services-list'>
                    <h3 className='mini-title'>--AVAILABLE @ GOOGLE AND IOS APP STORE ONLY</h3>
                    <h1 className='main-heading'>How to use the App?</h1>
                    {
                        aboutData.map((curElem)=>{
                            const {id,title,info}=curElem;
                            return(
                                <>
                                <div className='row our-services-info' key={id}>
                                <div className='col-1 our-services-number'>{id}</div>
                                <div className='col-10 our-service-data'>
                            <h2>{title}</h2>
                            <p className='main-hero-para'>
                            {info}
                            </p>
                        </div>
                    </div>
                                </>
                            );
                        })
                    }
                    <br/>
                    <button className='btn-style btn-border-style'>Learn more</button>
                </div>
            </div>
        </div>
      </section>

      {/* 2nd part about us section */}

      <section className='common-section our-services our-services-rightside'>
        <div className='container mb-5'>
            <div className='row'>
                {/* right side content */}
                <div className='col-12 col-lg-7 our-services-rightside-content order-lg-first order-last'>
                    <h3 className='mini-title'>--support in any languages</h3>
                    <h1 className='main-heading'>World class support is <br/> available 24/7.</h1>
                    {
                        aboutData.map((curElem)=>{
                            const {id,title,info}=curElem;
                            return(
                                <>
                                <div className='row our-services-info' key={id}>
                                <div className='col-1 our-services-number'>{id}</div>
                                <div className='col-10 our-service-data'>
                            <h2>{title}</h2>
                            <p className='main-hero-para'>
                            {info}
                            </p>
                        </div>
                    </div>
                                </>
                            );
                        })
                    }
                    <br/>
                    <button className='btn-style btn-border-style'>Learn more</button>
                </div>
                {/* right side content */}
                <div className='col-12 col-lg-5 text-center our-sevice-leftside-img order-md-first order-sm-first'>
                    <img src='./images/callcenter.jpg' alt='aboutUsImg'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs;
