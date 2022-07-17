import Card from './Cards_fr';
import Button from 'react-bootstrap/Button';
import Recipes from './Recipes';
import Sidebar from './Sidebar_fr';
import Data from "./mock-data_fr.json";
import locale from "./locale_fr.json";
const Home_fr = () => {
    return ( 
        <div className="home">
            <Sidebar/>
            <div className='button1'>
                <a className="recipeButton" href={locale.recipes_href}><Button> <h2>{locale.find}</h2> </Button></a></div>
        <div className='heading'><h1>{locale.featured}</h1></div>
        <div className='wrapper'>
        <Card img = {Data[0].image}
              title = {Data[0].title}
              link = {Data[0].link}
              rating = {Data[0].rating}
              time = {Data[0].time}/>
        <Card img = {Data[1].image}
              title = {Data[1].title}
              link = {Data[1].link}
              rating = {Data[1].rating}
              time = {Data[1].time}/>
        <Card img = {Data[2].image}
              title = {Data[2].title}
              link = {Data[2].link}
              rating = {Data[2].rating}
              time = {Data[2].time}/>
        </div>
        </div>
     );
}
 
export default Home_fr;