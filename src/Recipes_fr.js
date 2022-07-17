import React from "react";
import Data from "./mock-data_fr.json"
import { useState } from "react";
import Sidebar from "./Sidebar_fr";
import locale from "./locale_fr.json";
export default function Recipes_fr (){
    const[searchTerm, setSearchTerm] = useState('')
    return (
        <div className="Search">
            <Sidebar/>
            <h2>{locale.find}</h2>
            <div className="Search1">
                <div className="Searchwrapper"><img src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-grise.png" className="image"/><input type="text" placeholder={locale.search} onChange={event=>{setSearchTerm(event.target.value)}}/></div>
            <p2>{locale.error}</p2>
            
            {Data.filter((val)=>{
                if(searchTerm==""){
                        }
                else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){

                    return val.title;
                }
            }).map((val,key)=>{
                return (
                <div className="recipe">
                        <p1>
                        <p2><a href={val.link}>{val.title}</a></p2>
                        <br/>
                        <img src={val.image} width="300px" height="50%"/>
                        <br/>
                        {locale.rating}: {val.rating}/5 | {locale.time}: {val.time} {locale.minutes}</p1>
                        <br/>
                </div>
                );
            }
            )
            }
            </div>
            <br/>
            <hr/>
            <div className="allrecipes"><h3><a href={locale.all_href}>{locale.all}</a></h3></div>
            <div class="row">
                <div class="column">
                    <h1>{locale.meal}</h1>
                    <p3><a href={locale.breakfast_href}>{locale.breakfast}</a>
                    <br/>
                    <br/>
                    <a href={locale.lunch_href}>{locale.lunch}</a>
                    <br/>
                    <br/>
                    <a href={locale.dinner_href}>{locale.dinner}</a>
                    <br/>
                    <br/>
                    <a href={locale.dessert_href}>{locale.dessert}</a></p3></div>
                <div class="column">
                    <h1>{locale.diet}</h1>
                    <p3><a href={locale.vegetarian_href}>{locale.vegetarian}</a>
                    <br/>
                    <br/>
                    <a href={locale.vegan_href}>{locale.vegan}</a>
                    <br/>
                    <br/>
                    <a href={locale.glutenfree_href}>{locale.glutenfree}</a></p3></div>
                <div class="column"><h1>{locale.experience}</h1>
                <p3><a href={locale.beginner_href}>{locale.beginner}</a>
                    <br/>
                    <br/>
                    <a href={locale.intermediate_href}>{locale.intermediate}</a>
                    <br/>
                    <br/>
                    <a href={locale.expert_href}>{locale.expert}</a>
                    <br/>
                    <br/>
                    </p3></div>
            </div>
        </div>
    );}