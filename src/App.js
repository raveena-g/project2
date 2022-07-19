import './App.css';
import React from 'react';
import Home from './Home';
import Recipes from './Recipes';
import Lunch from './Lunch';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ChickenCutletSandwich from './Chicken-Cutlet-Sandwich';
import BroccoliPestoPasta from './Broccoli-Pesto-Pasta';
import About from './About';
import RicottaToast from './Ricotta-Toast';
import Recipes_fr from './Recipes_fr';
import Home_fr from './Home_fr';
import About_fr from './About_fr';
import RicottaToast_fr from './Ricotta-Toast_fr';
import BroccoliPestoPasta_fr from './Broccoli-Pesto-Pasta_fr';
import ChickenCutletSandwich_fr from './Chicken-Cutlet-Sandwhich_fr';
import Lunch_fr from './Lunch_fr';
import Breakfast from './Breakfast';
import Breakfast_fr from './Breakfast_fr';
import Dinner from './Dinner';
import Dinner_fr from './Dinner_fr';
import Dessert from './Dessert';
import Dessert_fr from './Dessert_fr';
import Vegetarian from './Vegetarian';
import Vegetarian_fr from './Vegetarian_fr';
import English from "./locale_en.json";
import French from "./locale_fr.json";
import Vegan from './Vegan';
import Vegan_fr from './Vegan_fr';
import GlutenFree from './GlutenFree';
import GlutenFree_fr from './Glutenfree_fr';
import Beginner from './Beginner';
import Beginner_fr from './Beginner_fr';
import Intermediate from './Intermediate';
import Intermediate_fr from './Intermediate_fr';
import Expert from './Expert';
import ChocolateCookies from './Chocolate-Cookies';
import ChocolateCookies_fr from './ChocolateCookies_fr';
import GrilledPeaches from './Grilled-Peaches';
import GrilledPeaches_fr from './Grilled-Peaches_fr';
import VeganBrownies from './Vegan-Brownies';
import VeganBrownies_fr from './Vegan-Brownies_fr';
import Expert_fr from './Expert_fr';
import OatmealPancakes from './Oatmeal-Pancakes';
import OatmealPancakes_fr from './Oatmeal-Pancakes_fr';
import StLuciaBuns from './St-Lucia-Buns';
import StLuciaBuns_fr from './St-Lucia-Buns_fr';
import EggsBenedict from './Eggs-Benedict';
import EggsBenedict_fr from './Eggs-Benedict_fr';
import All from './All';
import All_fr from './All_fr';
import BeefWellington_fr from './Beef-Wellington_fr';
import BeefWellington from './Beef-Wellington';
import SeafoodPaella from './Seafood-Paella';
import SeafoodPaella_fr from './Seafood-Paella_fr';
import VegetarianLasagna from './Vegetarian-Lasagna';
import VegetarianLasagna_fr from './Vegetarian-Lasagna_fr';
import Error from './Error';
function App() {
  return (
    <Router>
    <div className="App">
    
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/_fr/" element={<Home_fr/>}></Route>
          <Route path={English.recipes_href} element={<Recipes/>}></Route>
          <Route path={French.recipes_href} element={<Recipes_fr/>}></Route>
          <Route path={English.breakfast_href} element={<Breakfast/>}></Route>
          <Route path={French.breakfast_href} element={<Breakfast_fr/>}></Route>
          <Route path={English.lunch_href} element={<Lunch/>}></Route>
          <Route path={French.lunch_href} element={<Lunch_fr/>}></Route>
          <Route path={English.dinner_href} element={<Dinner/>}></Route>
          <Route path={French.dinner_href} element={<Dinner_fr/>}></Route>
          <Route path={English.dessert_href} element={<Dessert/>}></Route>
          <Route path={French.dessert_href} element={<Dessert_fr/>}></Route>
          <Route path={English.vegetarian_href} element={<Vegetarian/>}></Route>
          <Route path={French.vegetarian_href} element={<Vegetarian_fr/>}></Route>
          <Route path={English.vegan_href} element={<Vegan/>}></Route>
          <Route path={French.vegan_href} element={<Vegan_fr/>}></Route>
          <Route path={English.glutenfree_href} element={<GlutenFree/>}></Route>
          <Route path={French.glutenfree_href} element={<GlutenFree_fr/>}></Route>
          <Route path={English.beginner_href} element={<Beginner/>}></Route>
          <Route path={French.beginner_href} element={<Beginner_fr/>}></Route>
          <Route path={English.intermediate_href} element={<Intermediate/>}></Route>
          <Route path={French.intermediate_href} element={<Intermediate_fr/>}></Route>
          <Route path={English.expert_href} element={<Expert/>}></Route>
          <Route path={French.expert_href} element={<Expert_fr/>}></Route>
          <Route path={English.all_href} element={<All/>}></Route>
          <Route path={French.all_href} element={<All_fr/>}></Route>
          <Route path="/recipes/chicken-cutlet-sandwich/" element={<ChickenCutletSandwich/>}></Route>
          <Route path="/recipes/chicken-cutlet-sandwich_fr/" element={<ChickenCutletSandwich_fr/>}></Route>
          <Route path="/recipes/broccoli-pesto-pasta/" element={<BroccoliPestoPasta/>}></Route>
          <Route path="/recipes/broccoli-pesto-pasta_fr/" element={<BroccoliPestoPasta_fr/>}></Route>
          <Route path="/recipes/ricotta-toast/" element={<RicottaToast/>}></Route>
          <Route path="/recipes/ricotta-toast_fr/" element={<RicottaToast_fr/>}></Route>
          <Route path="/recipes/chocolate-cookies/" element={<ChocolateCookies/>}></Route>
          <Route path="/recipes/chocolate-cookies_fr/" element={<ChocolateCookies_fr/>}></Route>
          <Route path="/recipes/grilled-peaches/" element={<GrilledPeaches/>}></Route>
          <Route path="/recipes/grilled-peaches_fr/" element={<GrilledPeaches_fr/>}></Route>
          <Route path="/recipes/vegan-brownies/" element={<VeganBrownies/>}></Route>
          <Route path="/recipes/vegan-brownies_fr/" element={<VeganBrownies_fr/>}></Route>
          <Route path="/recipes/oatmeal-pancakes/" element={<OatmealPancakes/>}></Route>
          <Route path="/recipes/oatmeal-pancakes_fr/" element={<OatmealPancakes_fr/>}></Route>
          <Route path="/Recipes/st-lucia-buns/" element={<StLuciaBuns/>}></Route>
          <Route path="/recipes/st-lucia-buns_fr/" element={<StLuciaBuns_fr/>}></Route>
          <Route path="/Recipes/eggs-benedict/" element={<EggsBenedict/>}></Route>
          <Route path="/recipes/eggs-benedict_fr/" element={<EggsBenedict_fr/>}></Route>
          <Route path="/Recipes/beef-wellington/" element={<BeefWellington/>}></Route>
          <Route path="/recipes/beef-wellington_fr/" element={<BeefWellington_fr/>}></Route>
          <Route path="/Recipes/seafood-paella/" element={<SeafoodPaella/>}></Route>
          <Route path="/recipes/seafood-paella_fr/" element={<SeafoodPaella_fr/>}></Route>
          <Route path="/Recipes/vegetarian-lasagna/" element={<VegetarianLasagna/>}></Route>
          <Route path="/recipes/vegetarian-lasagna_fr/" element={<VegetarianLasagna_fr/>}></Route>
          <Route path="/about/" element={<About/>}></Route>
          <Route path="/About_fr/" element={<About_fr/>}></Route>
          <Route path="*" element={<Error/>}></Route>
        </Routes>
    </div>
    </div>
    </Router>
  );
}

export default App;
