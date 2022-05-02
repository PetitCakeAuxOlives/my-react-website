import { NavLink } from "react-router-dom"

const Card = ({id, source,title,dim}) =>{
    return (
        
            <div className="col-12 col-md-4" >
                <div className="card mb-2">
                <NavLink to={"/portfolio/details/"+id}>
                    <img  className="img-fluid mb-2 card-img-top" src={source} alt={title}/>
                </NavLink>

                    
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">Width: {dim.width}px</p>
                        <p className="card-text">Height: {dim.height}px</p>
                        <a to="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> 
        
    )
}

export default Card