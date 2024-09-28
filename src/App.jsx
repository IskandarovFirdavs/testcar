import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Comment from "./Comments/Comment";
import Travel from "./Pages/Travel/Travel";
import Yonalish from "./Pages/Yonalish/Yonalish";
import Connect from "./Pages/BizBog'lanish/Connect";
import Ariza from "./Pages/Ariza/Ariza";
import { ContactUs } from "./Pages/ContactUs/ContactUs";
import Andijon from "./data/Andijon";
import Buxoro from "./data/Buxoro";
import Fargona from "./data/Fargona";
import Jizzax from "./data/Jizzax";
import Namangan from "./data/Namangan";
import Navoiy from "./data/Navoiy";
import Qarshi from "./data/Qarshi";
import Samarqand from "./data/Samarqand";
import Sirdaryo from "./data/Sirdaryo";
import Surxandaryo from "./data/Surxandaryo";
import Toshkent from "./data/Toshkent";
import Xorazm from "./data/Xorazm";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sharhlar" element={<Comment />}></Route>
        <Route path="/takliflar" element={<ContactUs />}></Route>
        <Route path="/bog'lanish" element={<Connect />}></Route>
        <Route path="/yo'nalishlar" element={<Yonalish />}></Route>
        <Route path="/ariza" element={<Ariza />}></Route>

        <Route path="/qashqadaryo" element={<Qarshi />}></Route>
        <Route path="/andijon" element={<Andijon />}></Route>
        <Route path="/surxondaryo" element={<Surxandaryo />}></Route>
        <Route path="/jizzax" element={<Jizzax />}></Route>
        <Route path="/samarqand" element={<Samarqand />}></Route>
        <Route path="/toshkent" element={<Toshkent />}></Route>
        <Route path="/namangan" element={<Namangan />}></Route>
        <Route path="/fargona" element={<Fargona />}></Route>
        <Route path="/xorazm" element={<Xorazm />}></Route>
        <Route path="/sirdaryo" element={<Sirdaryo />}></Route>
        <Route path="/navoiy" element={<Navoiy />}></Route>
        <Route path="/buxoro" element={<Buxoro />}></Route>
      </Routes>
      <Travel />
    </div>
  );
}

export default App;
