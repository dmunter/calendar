
import { useState, useEffect } from "react"
import './newstyles.css'

var axios = require("axios").default;


function FetchNews(){
    const [articles, setArticles] = useState()
    const [numberOfArticles, setNumberOfArticles] = useState([1,1,1])

    
    //newapi.org requires subscriptiong to work in development
    // var url = 'https://newsapi.org/v2/top-headlines?' +
    // 'country=us&' +
    // 'apiKey=' +
    //  process.env.REACT_APP_NEWS_APIV2;

     var options = {
        method: 'GET',
        url: 'https://api.newscatcherapi.com/v2/search',
        params: {q: 'World', lang: 'en', sort_by: 'relevancy', page: '1'},
        headers: {
            'x-api-key': process.env.REACT_APP_NEWS_APIV2
        }
     }

  
//var req = new Request(url);

    console.log(typeof articles)
    useEffect(()=> {
        axios.request(options)
        .then(function(response){
            setArticles(response.data.articles)
        }).catch(function(error){
            console.log(error)
        })
            

        // fetch(url)
        // .then(response => response.json())
        // .then(results => {
        //     console.log(results.articles)
        //     setArticles(results.articles)
        // })



    }, [] )
    
    const loadingAPI = ()=>{


        return(
        <>
        <div className="empty-box"> <div></div><div></div><div></div>
        </div>  
        <div className="empty-box"> <div></div><div></div><div></div>
        </div> 
        <div className="empty-box"> <div></div><div></div><div></div>
        </div> 
        </>
            
        )
    }
    const addArticle = ()=>{
        setNumberOfArticles(
            (numberOfArticles)=> {
                if(numberOfArticles.length <17) return [...numberOfArticles, 1,1,1]                
                else return [...numberOfArticles]              
            }
        )
        console.log(numberOfArticles)
 
    }
    const newsArticles =()=>{
        return(
            <>   

            {
                numberOfArticles.map((item, i)=>{
                    return (
                   
                        <div className="news-box" >
                            <a target="_blank" className = "article-link" href = {articles[i].rights}>
                            <h1>
                                {articles[i].title}
                             </h1>
                             <div><img className="img" src= {articles[i].media}  /></div>
                            </a>
                        </div>
                   
                    )
                })

            }
            </>

        )
    }
   
    return(
        <div>
        <div className='intro' >
                <div className='intro'><h2>Today In The news</h2>
                <div></div>
                </div>
            </div>
            <div className="news-container">

          
                {typeof articles == 'undefined' ?  loadingAPI(): newsArticles()}    
            </div>
            
            {typeof articles == 'undefined' ?  <div></div> : 
            <button className="btn" onClick= {addArticle}>
                <p>Load more...</p>
           </button>}   
           
           
        </div>
    )
}

export default FetchNews
