import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class App extends Component {
    showMsg = () => 'Hello World!'
  
    render() {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh"
          }}
        >
          <Terminal
            color='green'
            backgroundColor='#373b41'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1.1em", fontFamily: "VT323" }}
            commands={{
              'open-google': () => window.open('https://www.google.com/', '_blank'),
              showmsg: this.showMsg,
              popup: () => alert('Terminal in React')
            }}
            descriptions={{
              'open-google': 'opens google.com',
              showmsg: 'shows a message',
              alert: 'alert', popup: 'alert'
            }}
            msg='Einsoft Microsystems - para ajuda digite: help'
            closedTitle='Terminal Fechado (não tem mais nada para fazer aqui!)'
            closedMessage='Para reabrir, clique no ícone'
            startState='maximised'
            hideTopBar='true'
          />
        </div>
      );
    }
  }

export default App;