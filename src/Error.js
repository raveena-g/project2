import Sidebar from "./Sidebar";
import locale from "./locale_en.json";
import locale_fr from "./locale_fr.json";
const Error = () => {
    return ( <div className="about">
        <h2>{404}</h2>
        <div className="textabout">{locale.pagenotfound} <br/> <a href={locale.navigatehomehref}> {locale.navigatehome}</a></div>
        <br/>
        <hr/>
        <br/>
        <div className="textabout">{locale_fr.pagenotfound} <br/> <a href={locale_fr.navigatehomehref}> {locale_fr.navigatehome}</a></div>
    </div> );
}
 
export default Error;