import React from 'react';

export const Layout = ({img}) => {
   console.log(img)
  return <>
  
  <section className="slider_section ">
            <div className="slider_bg_box">
               <img src={img!=''? img :'./images/pexels-photo-1050244.jpeg'} alt=""/>
            </div>
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
               <div className="carousel-inner">
                  <div className="carousel-item active">
                     <div className="container ">
                        <div className="row">
                           <div className="col-md-7 col-lg-6 ">
                              <div className="detail-box">
                                 <h1>
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <br/>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div className="btn-box">
                                    <a href="" className="btn1">
                                    Shop Now
                                    </a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                 
               
               </div>
             
            </div>
         </section>
  </>
};
