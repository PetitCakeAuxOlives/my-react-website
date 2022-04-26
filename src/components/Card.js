const Card = ({source,title,dim}) =>{
    return (
        
            <div className="col-12 col-md-4" >
                <div className="card mb-2">
                    <img src={source} className="card-img-top" alt={title}/>
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