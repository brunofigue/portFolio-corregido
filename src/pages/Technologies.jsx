import React from 'react';

const Technologies = () => {
  return (
    <section id="technologies" className="technologies py-5 bg-dark text-white">
      <div className="container text-center">
        <h3 className="mb-4">Tecnologías que manejo:</h3>
        <div className="row justify-content-center">
          <div className="col-6 col-sm-4 col-md-2">
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png" alt="HTML5" className="img-fluid" />
            <p>HTML5</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <img src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png" alt="CSS3" className="img-fluid" />
            <p>CSS3</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
          <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png" alt="HTML5" className="img-fluid" />
            <p>JavaScript</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png" alt="React" className="img-fluid" />
            <p>React</p>
          </div>
          <div className="col-6 col-sm-4 col-md-2">
            <img src="https://cdn.icon-icons.com/icons2/3245/PNG/512/node_icon_198061.png" alt="Node.js" className="img-fluid" />
            <br />
            <br />
            <p>Node js</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
