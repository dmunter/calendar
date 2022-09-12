
import { useState, useEffect } from "react"
import './newstyles.css'

function FetchNews(){
    const [articles, setArticles] = useState()
    const [numberOfArticles, setNumberOfArticles] = useState([1,1,1])

    var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=1211d61484c94a829cd633cc5b180327';

var req = new Request(url);
    console.log(typeof articles)
    useEffect(()=> {
        fetch(req)
        .then(response => response.json())
        .then(results => {
            console.log(results.articles)
            setArticles(results.articles)
        })

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
                            <a target="_blank" className = "article-link" href = {articles[i].url}>
                            <h1>
                                {articles[i].title}
                             </h1>
                             <div><img className="img" src= {articles[i].urlToImage}  /></div>
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
            <div className="news-container">
                {typeof articles === 'undefined' ?  loadingAPI(): newsArticles()}    
            </div>
            
            {typeof articles === 'undefined' ?  <div></div> : 
            <button className="btn" onClick= {addArticle}>
                <p>Load more...</p>
           </button>}   
           
           
        </div>
    )
}

export default FetchNews
