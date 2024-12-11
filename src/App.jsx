// import './App.css'
import Header from './componet/Header/Header';
import Hero from './componet/Hero/Hero';
import Feature from './componet/Feature/Feature';
import FeedBack from './componet/FeedBack/FeedBack';
import Progress from './componet/Progress/Progress';
import Testimonial from './componet/Testimonial/Testimonial';
import Partner from './componet/Partner/Partner';
import CTA from './componet/CTA/CTA';
// import Content from './componet/Content/Content';
import Footer from './componet/Footer/Footer';
import Brand from './componet/Brand/Brand';
function App() {
  return (
    <>
      <Header />
      <Hero />
    <Brand/>
      <Feature />
      <FeedBack/>
      <Progress/>
      <Testimonial/>
      <Partner/>
      <CTA/>
      {/* <Content/> */}
      <Footer/>
    </>
  );
}

export default App;
