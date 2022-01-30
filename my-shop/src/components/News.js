import React from 'react';

import moment from 'moment'
import InfiniteScroll from "react-infinite-scroll-component";
export const News = ({business, headline, getbussinessNews}) => {
     
    console.log('all', business.length)
    const style = {
        height: 30,
        border: "1px solid green",
        margin: 6,
        padding: 8
      };
  return <>
  
 
  <section class="latest spad">
        <div class="container">
            <div class="row">
                
            </div>
            <div class="row">
              
            
                 {  business.map((item, index)=>{

                      return (
                        <div class="col-lg-4 col-md-6 col-sm-3" key = {index}>
                        <div class="blog__item">
                           
                            <div class="blog__item__text">
                                <span><img src={item.urlToImage} alt="" style={{maxWidth: "100%"
    ,height: "auto"}}/> {moment(item.publishedAt).fromNow()}</span>
     <span class="color1">{item.source.name}</span>
                                <h5>{item.title}</h5>
                                <a href={item.url}>Read More</a>
                            </div>
                        </div>
                    </div>
                      )
                 })}
               
             
            </div>
        </div>
    </section>


           
  </>
};
