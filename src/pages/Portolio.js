import { useEffect, useState } from "react"

const Portfolio = () => {

    let [joke, setJoke] = useState('');
    
    const loadJoke = () => {
        fetch("https://api.chucknorris.io/jokes/random").then(response => response.json()).then(data => {
            setJoke(data.value)
            console.log(data)
        })
    }

    useEffect(()=>loadJoke(),[]);


    return ( 
    
        <section >
        <div class = "container-fluid" >
            <div class = "row" >
                <h1> Portfolio </h1> 
                <button class="btn text-white bg-dark" onClick={loadJoke}>Chuck</button>
                <p>{ joke }</p>
            </div> 
            <div class = "row" >
                <div className = "col" >
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit massa ac ullamcorper congue. Duis mollis orci elementum faucibus volutpat. Nullam pellentesque pellentesque tempor. Maecenas maximus euismod aliquet. Etiam eu faucibus mauris, vel tincidunt nisl.
                    </p> 
                </div> 
            </div> 
        </div>"

        </section>
    )
    
}

export default Portfolio