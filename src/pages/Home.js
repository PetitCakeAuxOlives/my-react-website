import Love from "../components/Love";
import Button from "../components/Button"

const Home = () => {
    return ( 
    
        <section >
        <div class = "container-fluid" >
            <div className = "row" >
                <h1> Home </h1> 
            </div> 
            <div className="row" >
                <div className = "col" >
                    <Button start={10} />
                    <Love name="coding"/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit massa ac ullamcorper congue. Duis mollis orci elementum faucibus volutpat. Nullam pellentesque pellentesque tempor. Maecenas maximus euismod aliquet. Etiam eu faucibus mauris, vel tincidunt nisl.
                    </p> 
                </div> 
            </div> 
        </div>"

        </section>
    )
    
}

export default Home