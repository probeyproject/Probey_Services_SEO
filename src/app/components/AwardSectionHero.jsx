import React from "react";

function AwardSectionHero({link,title}) {
  return (
    <div>
      <div className="rounded-circle">
        <div className="ps-3">
          <img
            src={link}
            style={{filter:"invert(1)",width:"50",height:"50"}}
          />
        </div>
        <section className="text-wrap text-center pt-0 ps-2" style={{fontSize:"10px"}}>
          {title}
        </section>
      </div>
    </div>
  );
}

export default AwardSectionHero;