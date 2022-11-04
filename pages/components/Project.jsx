import Image from "next/image";

const Project = () => {
  return (
    <section className="project py-5" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 text-center mx-auto col-12">
            <div className="col-lg-8 mx-auto">
              <h2>Things I have designed for digital media agencies</h2>
            </div>

            <div className="owl-carousel owl-theme">
              <div className="item">
                <div className="project-info">
                  <Image
                    src="/project-image01.png"
                    className="img-fluid"
                    alt="project image"
                    fill="true"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image
                    src="/project-image02.png"
                    className="img-fluid"
                    alt="project image"
                    fill="true"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image
                    src="/project-image03.png"
                    className="img-fluid"
                    alt="project image"
                    fill="true"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image
                    src="/project-image04.png"
                    className="img-fluid"
                    alt="project image"
                    fill="true"
                  />
                </div>
              </div>

              <div className="item">
                <div className="project-info">
                  <Image
                    src="/project-image05.png"
                    className="img-fluid"
                    alt="project image"
                    fill="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
