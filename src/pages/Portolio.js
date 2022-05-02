import { useEffect, useState } from "react"
import Card from "../components/Card"
import Pagination from "../components/Pagination"
import Details from "./Details"

const Portfolio = () => {

    let [page, setPage] = useState(1);

    let [joke, setJoke] = useState('');

    let [gallery, setGallery] = useState([]);
    
    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => {
            setJoke(data.value)
            console.log(data)
        })
    }

    const nextPage = (page) => {
        setPage(page);
    }

    const loadPics = () => {
        fetch("https://picsum.photos/v2/list?page="+page+"&limit=9").then(response => response.json()).then(data => {
            setGallery(data)
            console.log(data)
        })
    }

    useEffect(()=>loadJoke, []);
    useEffect(()=>loadPics, [page]);


    return ( 
    
        <section >
            <div className= "container-fluid" >
                <div className= "row" >
                    <div className="column">
                        <h1> Portfolio </h1> 
                        <button className="btn btn-dark" onClick={loadJoke}>Chuck</button>
                        <p>{ joke }</p>
                    </div>
                </div>
                <div className= "row" >
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>
                </div>
                <div className= "row" >
                        {
                        gallery.map(
                            pic => {
                                let source = `https://picsum.photos/id/${pic.id}/640/380`;
                                let title = `Picture by ${pic.author}`;
                                let id = pic.id;
                                let width = pic.width;
                                let height = pic.height;
                                let dim = {'width': width, 'height': height};

                                return (
                                    <Card key={id} id={id} source={source} title={title} dim={dim} />
                                        )
                                    }

                                )
                        }
                    
                    
                </div> 
                <div className= "row" >
                    <div className="col">
                        <Pagination page={page} nextPage={nextPage} />
                    </div>
                </div>

            </div>
        </section>
    )
    
}

export default Portfolio