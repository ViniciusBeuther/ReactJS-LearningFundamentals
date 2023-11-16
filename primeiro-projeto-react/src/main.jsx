import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageComponent from '../components/ImageComponent.jsx'
import ReactSection from '../components/ReactComponent.jsx'
import CreateInterfaceComponent from '../components/CreateInterfaceComponent.jsx'
import ProximosPassos from '../components/ProximosPassos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImageComponent />
    <ReactSection />
    <CreateInterfaceComponent />
    <ProximosPassos />
  </React.StrictMode>,
)
