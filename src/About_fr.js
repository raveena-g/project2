import Sidebar from "./Sidebar_fr";
import locale from "./locale_fr.json";
const About = () => {
    return ( <div className="about">
        <Sidebar/>
        <h2>{locale.about}</h2>
        <div className="textabout">{locale.about_text1} <br/> <br/> {locale.about_text2} <br/> <br/> {locale.about_text3}</div>
    </div> );
}
 
export default About;