// import logo from './logo.svg';
//import './App.css';
 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Feedback from './components/Feedback.js';
import Payment from './components/Payment.js';
import Category from './components/Category.js';
import Product from './components/Product.js';
import Regist from './components/Regist.js';
import Reset from './components/Reset.js';
import Otp from './components/Otp.js';
import Forgotpass from './components/Forgotpass.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Abaut from './components/Abaut.js';
import HomeSlide from './components/HomeSlide.js';
import Contact from './components/Contact.js';
import Footer from './components/Layout/Footer.js';
import NavBar from './components/Layout/NavBar.js';
import Registration from './components/Registration.js';
import Register from './components/Register.js';
import FeedbackView from './components/FeedbackView.js';
import PaymentView from './components/PaymentView.js';
import CategoryView from './components/CategoryView.js';
import ProductView from './components/ProductView.js';
import Loginf from './components/Loginf.js';
import RegistView from './components/RgistView.js';
import Login from './components/Login.js';
import UserHome from './components/UserHome.js';
import AdminHome from './components/AdminHome.js';
import Quantity from './components/Qauntity.js';
import Mycart from './components/Mycart.js';
import Myorder from './components/Myorder.js';
import Paybill_next from './components/Paybill_next.js';
import PayBill from './components/PayBill.js';

import Customerorder from './components/Customerorder.js';
import Todayo from './components/Todayo.js';
import Vieworder from './components/Vieworder.js';


function App() {
  return(
     <Router>
  <div className='App'>
    <NavBar></NavBar>
     <Switch>
       <Route exact path="/" component={HomeSlide}></Route>
       <Route exact path="/about" component={Abaut}></Route>
       <Route exact path="/contact" component={Contact}></Route>
       <Route exact path="/regi" component={Registration}></Route>
       <Route exact path="/ac" component={Register}></Route>
       <Route exact path="/forgotpass" component={Forgotpass}></Route>
       <Route exact path="/otp" component={Otp}></Route>
      <Route exact path="/resetpass" component={Reset}></Route>
      <Route exact path="/feed" component={Feedback}></Route>
      <Route exact path="/cat" component={Category}></Route>
      <Route exact path="/product" component={Product}></Route>
      <Route exact path="/payment" component={Payment}></Route>
      <Route exact path="/rgstr" component={Regist}></Route>
      <Route exact path="/feedview" component={FeedbackView}></Route>
      <Route exact path="/paymentview" component={PaymentView}></Route>   
      <Route exact path="/catview" component={CategoryView}></Route> 
      <Route exact path="/productview" component={ProductView}></Route> 
      <Route exact path="/loginf" component={Loginf}></Route> 
      <Route exact path="/registview" component={RegistView}></Route> 
      <Route exact path="/log" component={Login}></Route> 
      <Route exact path="/userhome" component={UserHome}></Route> 
      <Route exact path="/adminhome" component={AdminHome}></Route> 
      <Route exact path="/buy/:id/" component={Quantity}></Route> 
      <Route exact path="/mycart" component={Mycart}></Route> 
      <Route exact path="/myorder" component={Myorder}></Route> 
      <Route exact path="/Paybill_next/:price/" component={Paybill_next}></Route> 
      <Route exact path="/paybill/:id/:price/" component={PayBill}></Route> 
      <Route exact path="/customerorder" component={Customerorder}></Route> 
      <Route exact path="/today" component={Todayo}></Route> 
      <Route exact path="/vieworder" component={Vieworder}></Route> 
      </Switch>
       <Footer></Footer> 
  
   
    </div>
      </Router>
    
  );
}

export default App;
