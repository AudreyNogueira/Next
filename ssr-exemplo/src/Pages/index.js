import Jumbotron from './Components/Jumbotron'
import Button from './Components/Button'
import Image from './Components/Image'
import Slogan from './Components/Slogan'
import Footer from './Components/Footer'

// import default Button function './Components/Button'

// import gif from '../src/carrega.gif';
// import cupom from '../../src/cupom.gif';
// import { lazy, Suspense } from 'react';

// const Button = lazy(()=> import('./Components/Button'));
// const Image = lazy(()=> import('./code-splitting/Image'));
// const Slogan = lazy(()=> import('./code-splitting/slogan'));
// const Footer = lazy(()=> import('./Components/Footer'));
// const Jumbotron = lazy(()=> import('./Components/Jumbotron'));


function HomePage() {
   return(
     <div>
       <Jumbotron />
       <Button />
       {/* <Image /> */}
       <Slogan />
       <Footer />
       
     </div>
   )
 }
    
export default HomePage