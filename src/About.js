import "./about.css";

function About() {
  let array_obj = [
    {
      hobby1: "Html",
      hobby2: "Css",
      hobby3: "Css 3",
      hobby4: "Media Query",
      hobby5: "J Query",
      hobby6: "Boostrap",
      hobby7: "Wordpress",
      hobby8: "Java Script",
      hobby9: "React Js"
    }
  ];
  return (
    <div className='d_flex'>
      <div className='w_70'>
        <h1>Neel Koshiya</h1>
        <h2>Front End</h2>

        <>
          {array_obj.map((e) => {
            return (
              <div className="flex a_c">
                <h3 className="up padr">{e.hobby1}</h3>
                <h3 className="down padr">{e.hobby2}</h3>
                <h3 className="up padr">{e.hobby3}</h3>
                <h3 className="down padr">{e.hobby4}</h3>
                <h3 className="up padr">{e.hobby5}</h3>
                <h3 className="down padr">{e.hobby6}</h3>
                <h3 className="up padr">{e.hobby7}</h3>
                <h3 className="down padr">{e.hobby8}</h3>
                <h3 className="up">{e.hobby9}</h3>
              </div>
            );
          })}
        </>
      </div>
      <div className='w_30'>
        <div className="img"></div>
      </div>
    </div >
  );
}

export default About;
