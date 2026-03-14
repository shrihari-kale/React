//mport {useState} from "react";
import "./panel.css"
export default function Panel({title, children, showContent, onShow}){
    //const [showContent, setShowContent] = useState(false);
   // function onShowClick(){
   //     setShowContent(true);
    
    return (
      <section className="panel">
        <h1 className="panel-title">{title}</h1>
        {showContent ? <section className="panel-content">{children}</section>: null}
        <footer className="panel-footer">{!showContent ? <button onClick={onShow}>Show</button> : null} </footer>
      </section>
    );
}