import Link from "next/link";

function Topstrip() {
  return (
    <div className="container-fluid bg-dark text-white">
      <div className="row align-items-center d-flex justify-content-center">
        <div className="col-md-8" style={{fontSize:"small"}}>
          Discover every thing we lauched at Probey Conf 2024
        </div>
        <div className="col-md-4 text-end">
          <Link
          href="#"
         
            className="btn btn-animation btn-sm btn-dark" style={{fontSize:"small"}}
          >
            Visit <i className="fa-solid fa-arrow-right icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topstrip;