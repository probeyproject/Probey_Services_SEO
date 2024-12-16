import React from "react";

function NewsLetter() {
  return (
    <div className=" text-dark py-5 mt-5  mb-0" style={{background:"#fff"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h6 className="text-uppercase mb-4">Newsletter</h6>
            <p className="display-4 mt-3">
              We are Top amongst top 1% web designer
            </p>
            <section>
              <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div className="text-success">
                    <i class="fa fa-check pe-2 " aria-hidden="true" ></i>
                  </div>
                  <div className="p-hyphen" style={{fontSize:"14px"}}>Everything Inhouse</div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div className="text-success  ">
                    <i class="fa fa-check pe-2" aria-hidden="true"></i>
                  </div>
                  <div className="p-hyphen" style={{fontSize:"14px"}}>Unlimited Revision</div>
                </div>
                <div className="col-4 d-flex justify-content-center align-items-center">
                  <div className=" text-success">
                    <i class="fa fa-check pe-2" aria-hidden="true"></i>
                  </div>
                  <div className="" style={{fontSize:"14px"}}>Your Extented team</div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <div className="container">
              <div className="border shadow p-md-3 rounded-4">
                <p className="text-center">
                  Suscribe us to find out how are team can change your way to
                  grow
                </p>

                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-light btn-lg w-50">Submit</button>
                </div>

                <div className="d-flex mt-4 justify-content-center">
                  <img
                    src="https://themenectar.com/img/demo-media/unsplash/webp/ff1dfc85f81f.webp"
                    alt="optimized image"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: "50%",
                      marginLeft: "0px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                  <img
                    src="https://themenectar.com/img/demo-media/unsplash/webp/fc2fcf082f87.webp"
                    alt="optimized image"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: "50%",
                      marginLeft: "-14px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                  <img
                    src="https://themenectar.com/img/demo-media/unsplash/webp/c5799533a786.webp"
                    alt="optimized image"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: "50%",
                      marginLeft: "-14px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />{" "}
                  <img
                    src="https://themenectar.com/img/demo-media/unsplash/webp/adf270f4f417.webp"
                    alt="optimized image"
                    width={30}
                    height={30}
                    style={{
                      borderRadius: "50%",
                      marginLeft: "-14px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />
                </div>

                <section className="pt-0 mt-1">
                  <p className="text-center">Vetted Top 1% Design Talent</p>
                </section>
              </div>

              {/* <div className='mb-3'>
                            <input
                                type="email"
                                className='form-control custom-input'
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                        <div className="text-center">
                            <button className='btn btn-light btn-lg w-75'>Submit</button>
                        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;