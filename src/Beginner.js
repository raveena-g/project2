import Data from "./mock-data.json"
import { React, useState } from "react";
import BackButton from "./BackButton";
import Sidebar from "./Sidebar";
import locale from "./locale_en.json";
const Beginner = () => {
    const data = Data;
    const [sortState, setSortState] = useState("none");
    const sortMethods = {
      none: { method: (a, b) => null },
      ascending: { method: (a, b) => (a.time < b.time ? -1 : 1) },
      descending: { method: (a, b) => (a.time > b.time ? -1 : 1) },
      ascending1: { method: (a, b) => (a.rating < b.rating ? -1 : 1) },
      descending1: { method: (a, b) => (a.rating > b.rating ? -1 : 1) }
    };
    return ( 
    <div className="alllunch">
      <Sidebar/>
        <select defaultValue={'DEFAULT'} onChange={(e) => setSortState(e.target.value)}>
        <option value="DEFAULT" disabled>{locale.order_by}</option>
        <option value="ascending">{locale.time_low}</option>
        <option value="descending">{locale.time_high}</option>
        <option value="ascending1">{locale.rating_low}</option>
        <option value="descending1">{locale.rating_high}</option>
      </select>
        <p1><BackButton/></p1>
    <div className="lunch">
    <h2>{locale.beginner_recipes}</h2>
        <ul>
        {data.sort(sortMethods[sortState].method).filter((recipe) => {if(recipe.experience==locale.beginner){return recipe}}).map((recipe) => (
                          <div className="lunchrecipe">
                          <a href={recipe.link}>{recipe.title}</a>
                          <image><img src={recipe.image} width="450px" height="35%"/></image>
                          <p3>{locale.rating}: {recipe.rating}/5 | {locale.time}: {recipe.time} min</p3>
                          <br/>
                          <br/>
                  </div>
        ))}
      </ul>
    </div> 
    </div>);
}
 
export default Beginner;