import React, { Component } from 'react'
import Login from '../Login';
import Search from '../Search/Search'

export default class Header extends Component {
    constructor(){
        super();
        this.state = {
            userName: '',
            password: '',
            isLoggedIn: sessionStorage.getItem('isLoggedIn')==='true'? true:false
        }
    }

    componentDidMount(){
        //Show Home page If Login session active
        if(sessionStorage.getItem('isLoggedIn')==='true'){
            document.getElementById('homeContainer').style.display = 'block';
        }else{
            document.getElementById('homeContainer').style.display = 'none'; 
        }
    }

    handleUsername = (event) =>{
        this.setState({userName: event.target.value})
    }

    handlePassword = (event) =>{
        this.setState({password: event.target.value})
    }

    handleLogin = (event) => {
        if(this.state.userName === 'Gopal' && this.state.password === 'pass'){
            this.setState({isLoggedIn: true})
            //Uses sessionStorage to mentain Login session
            sessionStorage.isLoggedIn = true;
            document.getElementById('loginError').style.display = 'none';
            document.getElementById('homeContainer').style.display = 'block';
        }else{
            document.getElementById('loginError').style.display = 'block';
            this.setState({isLoggedIn: false, userName: '', password: ''})
        }
    }

    handleLogOut = (event) => {
        this.setState({isLoggedIn: false, userName: '', password: ''})
        document.getElementById('homeContainer').style.display = 'none';
        sessionStorage.isLoggedIn = false;
    }
    
    render() {
        if(!this.state.isLoggedIn){
        return (
            <div id="LoginContainer">
                <Login
                    isLoggedIn={this.state.isLoggedIn}
                    userName={this.state.userName}
                    password={this.state.password}
                    handleUsername={this.handleUsername}
                    handlePassword={this.handlePassword}
                    handleLogin={this.handleLogin}
                />
            </div>
        )
        }else{
            return(  
                <header id="HeaderContainer" className="row p-4">
                    <div className="col-sm-3">
                        <p>AutoZone Logo</p>
                        <Search options={this.props.categories} handleSearch={this.props.handleSearch}/>
                    </div>
                    <div className="col-sm-7">
                        <div className="float-right">
                            <h5>My Store</h5>
                            <p>SUMMER AVE</p>
                            <p>MEMPHIS, TN 88888</p>
                            <p>(901) 4444-777</p>
                        </div>
                    </div>
                    <div className="col-sm-2">
                        <p className="float-right">Platinum User</p>
                        <button className="btn btn-danger float-right" onClick={this.handleLogOut}>Log Out</button>
                    </div>
                </header>
            )
        }
    }    
}
