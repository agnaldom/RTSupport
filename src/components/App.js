import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      channels: []
    };
  }
  addChannel(name){
    let {channels} = this.state;
    channels.push({id: channels.length, name});
    this.setState({channels});
    // TODO: Send to server
  }
  setChannel(activeChannel){
    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }
  setUserName(name){
    let {users} = this.state;
    users.push({id: users.length, name});
    this.setState({users});
    // TODO: Sendo to Server
  }
  render() {
    return (
      <div className='app'>
         <div className='div'>
         <ChannelSection
          {...this.state}
          addChannel={this.addChannel.bind(this)}
          setChannel={this.setChannel.bind(this)}
        />
        <UserSection 
          {...this.state}
          setUserName={this.setUserName.bind(this)}
        />
        </div>
      </div>
   
    );
  }
}

export default App;
