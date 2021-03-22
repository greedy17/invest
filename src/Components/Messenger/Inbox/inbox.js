import React, { Component} from 'react';
import Talk from "talkjs";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import '../messenger.css';

class Inbox extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            currentUser: {},
        }
    }

    userApi = "http://localhost:5000/api/user/users/"
    token = localStorage.getItem('jwtToken');

    componentDidMount(){
        if(this.token){
            var decoded = jwt_decode(this.token);
            const newUrl = this.userApi + decoded._id;
            axios.get(newUrl)
            .then( res => {
            this.setState({
                currentUser: {
                    id: res.data._id,
                    name: res.data.name,
                    email: res.data.email,
                    role: res.data.role,
                    bio: res.data.bio
                }
            })
            console.log(this.state.currentUser);
            this.starting()
            })
        };
    }


    starting(){
        Talk.ready
            .then(() => {

                const me = new Talk.User(this.state.currentUser);

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tz3oF2Ef",
                        me: me
                    });
                }
            
                this.inbox = window.talkSession.createInbox();
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }        

    render() {
        return (
            <div className="inbox">
                <div style={{height: '800px', background: '#073f2e'}} className="inbox-container" ref={c => this.container = c}>Loading...</div>
            </div>
        );
    }
  }
  
  export default Inbox;