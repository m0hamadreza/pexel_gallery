
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Images from './Routes/Image/Images'
import ImageOverview from './Routes/Image/ImageOverview'
import Provider from './Provider'
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Provider />}>
      <Route path='' element={<Images/>}/>
      <Route path='/:imageId' element={<ImageOverview/>}/>
      </Route>

    </Routes>
      
    </>
  )
}

export default App
