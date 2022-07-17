import Sidebar from "./Sidebar";
import locale from "./locale_en.json";
const About = () => {
    const current = locale;
    return ( <div className="about">
        <Sidebar/>
        <h2>{current.about}</h2>
        <div className="textabout">{current.about_text1} <br/> <br/> {current.about_text2} <br/> <br/> {current.about_text3}</div>
    </div> );
}
 
export default About;