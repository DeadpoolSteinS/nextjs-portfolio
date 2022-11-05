import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="container-fluid pt-5 pb-3" id="portfolio">
      <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
          <h1 className="display-1 text-uppercase text-white">Gallery</h1>
          <h1 className="position-absolute text-uppercase text-primary">
            My Portfolio
          </h1>
        </div>
        <ul className="flex justify-center gap-2 mb-4 [&>li]:cursor-pointer [&>li]:inline-block [&>li]:font-bold [&>li]:rounded-full [&>li]:px-7 [&>li]:py-3 [&>li]:text-sm [&>li]:transition-colors">
          <li
            className="bg-gray-600 text-white hover:bg-[#ffc200]"
            data-filter="*"
          >
            All
          </li>
          <li
            className="bg-gray-200 text-gray-600 hover:text-[#ffc200]"
            data-filter=".first"
          >
            Design
          </li>
          <li
            className="bg-gray-200 text-gray-600 hover:text-[#ffc200]"
            data-filter=".second"
          >
            Development
          </li>
          <li
            className="bg-gray-200 text-gray-600 hover:text-[#ffc200]"
            data-filter=".third"
          >
            Marketing
          </li>
        </ul>
        <div className="row portfolio-container">
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <Image
                className="img-fluid rounded w-100"
                src="/img/portfolio-1.jpg"
                alt=""
                width="400"
                height="300"
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <Image
                className="img-fluid rounded w-100"
                src="/img/portfolio-2.jpg"
                alt=""
                width="400"
                height="300"
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <Image
                className="img-fluid rounded w-100"
                src="/img/portfolio-3.jpg"
                alt=""
                width="400"
                height="300"
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
            <div className="position-relative overflow-hidden mb-2">
              <Image
                className="img-fluid rounded w-100"
                src="/img/portfolio-4.jpg"
                alt=""
                width="400"
                height="300"
              />
              <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                  <i className="fa fa-plus text-white"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
