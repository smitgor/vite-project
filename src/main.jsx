import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { Realtime } from 'ably';
import { AblyProvider } from 'ably/react';

const client = new Realtime({
  key: "wUARoQ.XPGFtw:nPMKzrv2yfaVGYjMuhqogEfSNgDhf7_5xUv713k5zsU",
  clientId: "ajsbhjahbfjhaiunihu",  
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AblyProvider client={client}>
      <App />
    </AblyProvider>
  </React.StrictMode>,
)
