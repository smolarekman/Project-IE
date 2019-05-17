import React, {Component} from "react"
import {deleteProd} from "./ProdActions";


class DeleteProd extends Component {
    constructor() {
        super();
        this.state = {
            productId: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const prod = {
            productId: this.state.productId
        };
        deleteProd(prod).then(
            res => {
                if (res) {
                    this.props.history.push(`/homepage`)
                }
            }
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Product ID:
                        <input type="text" name={'productId'} value={this.state.productId}
                               onChange={this.handleChange}/>
                    </label>
                    <button >Delete</button>
                </form>
            </div>

        );
    }
}

export default DeleteProd;