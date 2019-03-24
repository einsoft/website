import React, { Component } from 'react';
// https://github.com/nitin42/terminal-in-react
import Terminal from 'terminal-in-react';
// https://github.com/jcgertig/terminal-in-react-pseudo-file-system-plugin
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';
const FileSystemPlugin = pseudoFileSystemPlugin();
class App extends Component {
  /* Crisp chat */
    componentDidMount () {
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "862896c7-d3fb-40d2-89cd-57ac29701882";
  
      (function() {
        var d = document;
        var s = d.createElement("script");
  
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
     };

    showMsg = () => 'Hello World!';
  
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
            plugins={[
              FileSystemPlugin
            ]}
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
            startState='open'
          />
        </div>
      );
    }
  }

export default App;