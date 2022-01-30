import React from 'react';

export const WhySection = () => {
     const obj = [{title:'Fast Delivery', desc:'variations of passages of Lorem Ipsum available'},
     {title:'Free Shiping', desc:'variations of passages of Lorem Ipsum available'},{title:'Best Quality', desc:'variations of passages of Lorem Ipsum available'}]
  return <>
  
  <section className="why_section layout_padding">
         <div className="container">
            <div className="heading_container heading_center">
               <h2>
                  Why Shop With Us
               </h2>
            </div>
            <div className="row">
                 {
                     obj.map((item,i)=>{
                          return (
<div className="col-md-4" key={i+1}>
                  <div className="box ">
                     <div className="img-box">
                      
                     </div>
                     <div className="detail-box">
                        <h5>
                         {item.title}
                        </h5>
                        <p>
                        {item.desc}
                        </p>
                     </div>
                  </div>
               </div>
                          )
                     })
                 }

            
            
            </div>
         </div>
      </section>
  </>
};
