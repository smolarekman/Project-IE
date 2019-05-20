import React, {Component} from 'react'
import {connect} from "react-redux";
import {showProfile} from "../../actions";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            usertoken: '',
            data: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.setState({
            usertoken: this.props.auth
        })

    }

    handleSubmit(e) {
        e.preventDefault();

        const ttoken = {
            token: this.state.usertoken
        };

        showProfile(ttoken).then(res => {
            if (res) {
                console.log(res)
                this.setState({
                    data:res
                })
            }
        })
    }

    render() {
        var token = this.props.auth;
        var arr, arr2, arr3, arr4;
        if (token != null) {
            arr4 = token.toString().length;
            arr = token.toString().slice(0, arr4 / 3);
            arr2 = token.toString().slice((arr4 / 3) + 1, 2 * (arr4 / 3));
            arr3 = token.toString().slice(2 * (arr4 / 3) + 1);

        }

        return (

            <div>
                <center>
                    <h4>Your token: <br/></h4>
                    <p>{arr}<br/>{arr2}<br/>{arr3}<br/></p>
                </center>
                <br/><br/>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <h6>Your token:</h6>
                            <input type="text" name={'usertoken'} value={this.state.usertoken}
                                   onChange={this.handleChange}/>
                        </label>
                        <button>Submit</button>
                    </form>
                </div>


            </div>
        );
    }

}

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(Profile);