import React from "react"

class Contact extends React.Component{


    constructor(){
        super()
    }

    componentWillMount(){
        console.log("componentWillMount !!!")
    }

    componentDidMount() {
        console.log("componentDidMount !!!")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount !!!!")
    }

    render(){

    return ( 
        <section >
            <div class = "container-fluid" >
                <div class = "row" >
                    <h1> Contact </h1> 
                </div> 
                <div class = "row" >
                    <div className = "col" >
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. {this.props.name}
                        </p> 
                    </div> 
                </div> 
            </div>
        </section>
    )
    
}
}

export default Contact