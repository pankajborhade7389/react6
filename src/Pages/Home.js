import { Header } from '../component/Header';
import '../App.css';
import poster from '../Image/Home.jpg';
export function Home(){
   return(
       <div className="Home">
        <Header/>
        <h1 style={{ fontSize: "65px" }}>Home Page</h1>
           <img src={poster} alt='img' width="50%" />
       </div>
   )
}