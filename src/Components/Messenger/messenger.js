import React, { Component } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Talk from "talkjs";
import {Link} from 'react-router-dom';
//import profile from '../../assets/images/profile.png';
import {Button} from 'react-bootstrap';
import placeholder from '../../assets/images/placeholder.jpeg';
import './messenger.css';


class MyNetwork extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            currentUser: {},
            users: []
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
                currentUser: res.data
            })
            console.log(this.state.currentUser);
            })
        };

        axios.get(this.userApi)
        .then( res => {
            this.setState({users: res.data})
            console.log(this.state.users)
        })
    }

    handleClick(userId) {

        /* Retrieve the two users that will participate in the conversation */
        const currentUser  = 
        {
            id: this.state.currentUser._id,
            name: this.state.currentUser.name,
            email: this.state.currentUser.email,
            role: this.state.currentUser.role,
            bio: this.state.currentUser.bio
        };
        
        const user = this.state.users.find(user => user._id === userId);

        function changeId(obj,oldKey,newKey){
            if (oldKey !== newKey) {
                obj[newKey] = obj[oldKey];
            }
        }

        changeId(user,'_id','id');

        /* Session initialization code */
        Talk.ready
        .then(() => {
            /* Create the two users that will participate in the conversation */
            const me = new Talk.User(currentUser);
            const other = new Talk.User(user)
    
            /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
            if (!window.talkSession) {
                window.talkSession = new Talk.Session({
                    appId: "tz3oF2Ef",
                    me: me
                });
            } 
            
            /* Get a conversation ID or create one */
            const conversationId = Talk.oneOnOneId(me, other);
            const conversation = window.talkSession.getOrCreateConversation(conversationId);
            
            /* Set participants of the conversations */
            conversation.setParticipant(me);
            conversation.setParticipant(other);

            /* Create and mount chatbox in container */
            this.chatbox = window.talkSession.createChatbox(conversation);
            this.chatbox.mount(this.container);
        })            
        .catch(e => console.error(e));
    }
    render() {
        const { currentUser } = this.state;

        return (
            <div className="users">
                <div className="current-user-container">
                    {currentUser &&
                        <div>
                            <picture className="current-user-picture">
                                <img alt={currentUser.name} src={placeholder} />
                            </picture>
                            <div className="current-user-info">
                                <h3>{currentUser.name}</h3>
                                <p>{currentUser.bio}</p>
                                <Link to="/inbox"><Button className="start" variant="muted">Inbox</Button></Link>
                            </div>
                        </div>
                    }
                </div>

                <div className="users-container"> 
                    <ul>
                        { this.state.users.map(user => 
                            <li key={user._id} className="user">
                                <picture className="user-picture">
                                    <img src={placeholder} alt={`${user.name}`} />
                                </picture>
                                <div className="user-info-container">
                                    <div className="user-info">
                                        <h4>{user.name}</h4>
                                        <p>{user.role}</p>
                                    </div>
                                    <div className="user-action">

                                        <button onClick={(userId) => this.handleClick(user._id)}>Message</button>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>

                    <div className="chatbox-container" ref={c => this.container = c}>
                        <div id="talkjs-container" style={{height: "300px"}}><i></i></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyNetwork;