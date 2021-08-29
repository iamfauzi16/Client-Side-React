import React, { Component } from 'react'
import './foods.css'

export class FoodsComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            err: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        fetch("http://kasir-warkop.test/api/foods")
        .then(res => res.json()) .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    data: result.data
                });
            },
        )
    }

    render() {
        const {err, isLoaded, data} = 
        this.state;

        if(err) {
            return (
                <div>
                    Error: {err.message}
                </div>
            )
        } else if(!isLoaded) {
            return <div><h2>Loading...</h2></div>
        }else {
            return(
                <div className="wrap">
                    <div className="header">
                        <h1>Menu Makanan </h1>
                    </div>
                    <div className="content">
                        {data.map(data=> (
                            <div key={data.id}>
                                <img src={data.images} class="image-foods"/>
                                <p>Nama : {data.name}</p>
                                <p>Deskripsi : {data.description}</p>
                                <p>Harga : {data.price}</p>
                            </div>

                            
                        ))}
                    </div>

                    
                </div>
            )
        }
       
    }
}

export default FoodsComponents
