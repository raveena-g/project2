import Data from "./mock-data.json";
import StarRating from "./StarRating";
import BackButton from "./BackButton";
import Sidebar from "./Sidebar";
import locale from "./locale_en.json";
import PrintButton from "./PrintButton";
const OatmealPancakes = () => {
    const current = Data[6];
    const checkList = current.ingredients;
    return ( 
    <div className="recipepage">
        <Sidebar/>
    <div className="individualrecipe">
        <p1><BackButton/></p1>
        <h1>{current.title}</h1>
        <div class="row1">
        <div class="column1"><img src={current.image} width="80%" height="50%"/></div>
        <div class="column2"><h3>{current.time} {locale.minutes}</h3>{locale.time}</div>
        <div class="column3"><h3>{current.rating}/5</h3>{locale.rating}</div>
        <div class="column4"><h3>{current.author}</h3>{locale.author}</div>
        <div class="column5"><h3>{current.experience}</h3>{locale.experience}</div>
        <div class="column6">{current.description}</div>
    </div>
    <br/>
    <hr/>
    <div class="row2">
        <div className="ingredients">
            <h3>{locale.ingredients}</h3>
            <div className="checklist">
            {checkList.map((item, index) => (
   <div key={index}>
    <br/>
   <input value={item} type="checkbox" />
   <span>{item}</span>
 </div>
))}
            </div>
            <form>
  <label>
  <textarea id="subject" name="subject" placeholder={locale.extra_notes}></textarea>
  </label>
</form>
            </div>
        <div className="steps">
        {current.steps.map((name,index) => (
        <li>
          <h3>{locale.step} {index+1}</h3>
          <p1>{name}</p1>
        </li>
      ))}
        </div>
    </div>
    <br/>
    <br/>
    <div className="MakeReview"><h2>{locale.rate}</h2></div>
    <StarRating/>
    <p2><PrintButton/></p2>
</div>
</div>);
}
 
export default OatmealPancakes;