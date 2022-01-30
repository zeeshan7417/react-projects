import Axios from 'axios'

export default async function topnews(){


    try
    {
         let url = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=13c294f454354756ad354003cd96b030'
       // const topStoriesIds = await Axios.get(`${publicRuntimeConfig.apiUrl}ser_worldcup_priority_2021`)
       const topStoriesIds = await Axios.get(url)    
       .then(({ data }) => data && data !== '' ? data : [])
       .catch(() => []);
      
    //    const storiesPromises = topStoriesIds.map(story => Axios.get(`${publicRuntimeConfig.nodeApiUrl}article/${story.headline}`)
    //    .then(handleHomeResponse)
    //    .catch((err) => {console.log('Error in getWorldCupTopStoriesData2.....', err); return [];}));
   
       const stories = await Promise.all(topStoriesIds);
       console.log(stories)
       return topStoriesIds;
    }catch(err){
      console.log('Error in getWorldCupTopStoriesData1.....', err);
      return [];
    }
     
  }