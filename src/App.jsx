import './App.css'
import DashBoard from './components/DashBoard/DashBoard'
import Header from './components/Header/Header'
import PhoneBar from './components/PhoneBar/PhoneBar'
import PriceList from './components/PriceList/PriceList'

function App() {

  return (
    <div>
        <Header></Header>
        <PriceList></PriceList>
        <DashBoard></DashBoard>
        <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
