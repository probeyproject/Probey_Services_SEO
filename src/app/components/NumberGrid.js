import React from "react";
import CounterComponent from "./CounterComponent";

function NumberGrid() {
  return (
    <div className=" mt-4 pt-2">
      <div className="container mt-4 pt-3">
        <div>
          <div className="row">
            <div className="col-md-6 border-right mb-3 mb-md-0">
              <div className="position-sticky top-0">
                
                <hr />

                <span className=" display-4">
                Partners Make The Amazing Possible
                </span>

                <span className="mt-2 w-75">
                 <p className="p-hyphen">Not We, Our Numbers Says</p>
                </span>
              </div>
            </div>
            <div className="col-md-6">
  <div className="row">
    {/* First Item */}
    <div className="col-md-4 col-6 ">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={50} duration={3} suffix={"M+"} />
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li">Lines of Code Written With Care (and a Little Caffeine)</p>
          
          </span>
          
        </div>
      </div>
    </div>

    {/* Second Item */}
    <div className="col-md-4 col-6 ">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={100} end={0} duration={3} suffix={"%"} />
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
          <p className="reached-li"> Distractions<br></br>Because We Only Focus on Your Success</p>
          </span>
        </div>
      </div>
    </div>

    {/* Third Item */}
    <div className="col-md-4 col-6">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={98} duration={3} suffix={"%"}/>
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li">Clients <br></br>Recommend Us Without Being Asked</p>
          
          </span>
        </div>
      </div>
    </div>

    {/* Fourth Item */}
    <div className="col-md-4 col-6 mt-1">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={5} duration={3} suffix={"K+"} />
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
          <p className="reached-li">Brainstorms <br></br> Held and counting</p>
          </span>
        </div>
      </div>
    </div>

    {/* Fifth Item */}
    <div className="col-md-4 col-6 mt-1">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={23} duration={3} suffix={"M+"}/>
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li">Raised <br></br> through Successful Projects</p>
          
          </span>
        </div>
      </div>
    </div>

    {/* Sixth Item */}
    <div className="col-md-4 col-6 mt-1">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={120} duration={3} />
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li">Satisfied <br></br> Clients and Growing</p>
          
          </span>
        </div>
      </div>
    </div>

    {/* Seventh Item */}
    <div className="col-md-4 col-6 mt-1">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={8} duration={3} suffix={"M+"} />
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li">Benefiting from our products</p>
          
          </span>
        </div>
      </div>
    </div>

    {/* Eighth Item */}
    <div className="col-md-4 col-6 mt-1">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={6} duration={3} suffix={"+"}/>
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li">Countries represented by our talent</p>
          
          </span>
        </div>
      </div>
    </div>

    {/* Ninth Item */}
    <div className="col-md-4 col-6 mt-1">
      <div className="grid-item">
        <div className="text-center">
          <hr />
          <CounterComponent start={0} end={8} duration={3} suffix={"k+"}/>
          <span className="text-capitalize text-wrap mb-4 text-center p-hyphen">
            <p className="reached-li"> Hours of dedication and counting</p>
         
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default NumberGrid;