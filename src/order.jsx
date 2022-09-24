


  <div className="cards">
  <div className="card">
    <img src="" alt="" className="card_img"/>
    <div className="card_info">
      <span className="card_category"></span>
      <h4 className="card_title"></h4>
      <a href="" target="_blank"></a>
      <button>watch now</button>
    </div>

  </div>
</div>






import React ,{useState}from "react"
const App =()=>{
    const state=useState();
    const time=new Date().toLocaleTimeString();
    const [count,setCount]=useState(time)



const IncNum =()=>{
  let  time2=new Date().toLocaleTimeString();
    setCount(time2);
}
setInterval(IncNum,1000)


    return(
        <>
        <div className="heading_style">
        <h1>{count}</h1>
        <button className="btn" onClick={IncNum}>click</button>
        </div>
            </>

    );

    
};
export default App