import { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Register from './Register'
import Complain from './Complain'
// import Payment from './Payment'

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const initialState = {
    register: false,
    complain: false,
    // payment: false,
  }
  const [isClicked, setIsClicked] = useState(initialState);
  const handleClick = (clicked) => {
    setIsClicked({...initialState, [clicked]:true});
  }
  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar handleClick={handleClick} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {isClicked.register && <Register />}
      {isClicked.complain && <Complain />}
      {/* {isClicked.payment && <Payment />} */}
    </div>
  )
}

export default Dashboard;