import React, { useEffect, useState } from 'react';

import {Layout} from '../components/Layout'
import {WhySection} from '../components/WhySection'
import {Arival} from '../components/Arival';
import { Product } from '../components/Product';
import{Brand} from '../components/Brand'
import {BestProduct} from '../components/BestProduct'
import {News} from '../components/News'
import axios from 'axios';
import  topnews from '../Api/Common'

export const Home = () => {

     const [business, setbussiness] = useState([])
     const [health, sethealth] = useState([])
     const [all, setall] = useState([])
     const [tech, settech] = useState([])
     const [loader, setloader] = useState(false)

    const getbussinessNews  = async()=>{
        setloader(true);
             
        let URL1 = `https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=13c294f454354756ad354003cd96b030`
        let URL2 = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=13c294f454354756ad354003cd96b030"
        let URL3 = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=13c294f454354756ad354003cd96b030"
        let URL4 = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=13c294f454354756ad354003cd96b030"
        const promise1 = await axios.get(URL1);
        const promise2 = await axios.get(URL2);
        const promise3 =  await axios.get(URL3);
        const promise4 =  await axios.get(URL4);
        
        Promise.all([promise1, promise2, promise3, promise4]).then(function(values) {
        console.log( values);
        setbussiness(values[0].data.articles)
        sethealth(values[1].data.articles)
        setall(values[2].data.articles)
        settech(values[3].data.articles)
        });


    }

    

     useEffect(()=>{
          
        getbussinessNews();

      
      
     }, [])

     console.log(business);
  let img = './images/slider-bg.jpg'
  return <>
  <Layout img={img} />
  <WhySection/>
  <Arival/>
  <Brand/>
  <Product/>
  <div class="col-lg-12">
                    <div class="section-title">
                        <span>Latest News</span>
                        <h2></h2>
                    </div>
                </div>
 <News  business = {business}  headline={['tech', 'bussiness', 'sports']} getbussinessNews={getbussinessNews}/>
 <News  business = {health} getbussinessNews={getbussinessNews}/>
 <News  business = {all} getbussinessNews={getbussinessNews}/>
 <News  business = {tech} getbussinessNews={getbussinessNews}/>
 


 
  </>
};
