import { ToastContainer } from "react-toastify"
import Nav from "./pages/Nav"
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  return (
    <div className="w-[100%] h-[100%] bg-[#222831] text-[#EEEEEE]">
      <Nav />
      <Mainroutes />
      <ToastContainer position="top-right" />
    </div>
  )
}

export default App