import React from 'react';
import './App.css';
function App() {
  return (
  
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="clip-path"></div>
        <div className="imageDiv mt-5">
          <div className="bg-img m-2"></div>
        </div>
      </div>
      <div className=" row justify-content-center" style={{marginTop:"-190px"}}>
       <h1 className="font-weight-bold text-muted">Apoorva Krishna</h1>
      </div>
      <div className=" row justify-content-center">
       <h3 className="font-weight-bold text-muted">Full Stack Developer</h3>
      </div>
      <div className=" row justify-content-center">
        <i className="fas h2 mr-2 fa-map-marker-alt" style={{color:"rgb(107, 168, 199)"}}></i>
       <h3 className=" ml-3font-weight-bold text-muted">Patna,India</h3>
      </div>
      <div className=" row justify-content-center mt-2">
        <i className=" h4 mr-2 fas fa-phone-alt" style={{color:"rgb(107, 168, 199)"}}></i>
       <h4 className=" ml-3font-weight-bold text-muted">7691091297</h4>
      </div>
      <div className=" row justify-content-center mt-2">
        <i className=" h4 mr-2 fas fa-envelope" style={{color:"rgb(107, 168, 199)"}}></i>
        <a href="mailto:apoorva15997@gmail.com" className=" ml-3font-weight-bold text-muted"><h4>apoorva15997@gmail.com</h4></a>
      </div>
      <div className=" row justify-content-center mt-4">
        <a href="https://www.linkedin.com/in/apoorva-krishna-078a5112b/" target="blank"><i class="fab h1 fa-linkedin"></i></a>
        <a className="ml-3 text-dark" href="https://github.com/krsnaapoorv" target="blank"><i class="fab h1 fa-github"></i></a>
        <a className="ml-3" href="https://twitter.com/Krsna_apoorv" target="blank"><i class="fab h1 fa-twitter"></i></a>
        <a className="ml-3" style={{color:"green"}} href="https://www.hackerrank.com/krsnaapoorv" target="blank"><i class="fab h1 fa-hackerrank"></i></a>
      </div>
      <div className=" row justify-content-center mt-4">
        <div className="col-md-2 col-sm-0">

        </div>
        <div className="row col-md-8 col-sm-12 justify-content-center">
          <h5 className="text-center text-muted">Looking forward towards establishing a professional career in such an organisation where I may be able to apply the knowledge, I have acquired, to contribute to the organisational goals and learn new technologies in order to upgrade myself further.</h5>
          <button className="btn btn-lg btn-outline-info"> Download Resume</button>
        </div>
        <div className="col-md-2 col-sm-0">

        </div>
      </div>
      <hr></hr>
      <div className="row justify-content-center">
        <h1 className="text-muted mb-5  display-4">Tech Stack</h1>
      </div>
      <div className="row ml-5  justify-content-center">
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/git-icon.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-5 mt-3">GIT</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 ">
            <img  src="/html-5.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4">HTML5</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
            <img  src="/css-3.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4">CSS</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/bootstrap.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-1 mt-3">BOOTSTRAP</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/javascript.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-2 mt-3">JAVASCRIPT</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/react.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4 mt-4">REACT</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/redux.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4 mt-4">REDUX</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/python.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4 mt-4">PYTHON</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-4">
            <img  src="/flask.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4 mt-4">FLASK</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3 mt-5">
            <img  src="/mysql.svg" style={{width: "111px"}} />
            <p className="mt-2 ml-4 mt-4">MYSQL</p>
        </div>
      </div>
      <hr></hr>
      <div className="row justify-content-center">
        <h1 className="text-muted  display-4">Proficiencies</h1>
      </div>
      <div className=" row container-fluid text-center">
        <div className="col-md-3 mt-4">
            <img  src="/react.svg" style={{width: "111px"}} />
            <h5 className="mt-2 ml-4 mt-4 text-muted font-weight-bold">REACT APP</h5>
        </div>
        <div className="col-md-3 mt-3">
            <img  src="/database.png" style={{width: "111px"}} />
            <h5 className="mt-2 ml-4 mt-4 text-muted font-weight-bold">BACKEND</h5>
        </div>
        <div className="col-md-3 mt-3">
            <img  src="/frontend.png" style={{width: "111px"}} />
            <h5 className="mt-2 ml-4 mt-4 text-muted font-weight-bold">FRONTEND</h5>
        </div>
        <div className="col-md-3 mt-3">
            <img  src="/datastructure.png" style={{width: "111px"}} />
            <h5 className="mt-2 ml-4 mt-4 text-muted font-weight-bold">DATA STRUCTURES</h5>
        </div>
      </div>
      <div>
      <hr></hr>
      <div className="row justify-content-center">
        <h1 className="text-muted  display-4">PROJECTS</h1>

        <div className="container-fluid text-center mt-4 mb-5">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
                  <div className="card  shadow-lg">
                    <div className="card-body ">
                      <img className="img-fluid mb-3" src="/expense.png" />
                      <hr></hr>
                      <h2 class="card-title font-weight-bold">Expense Manager</h2>
                      <h5 class="card-text">
                        It is a expense manager which have different categories.You can add any expense with current date and time.It shows you the balance.
                      </h5>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-github"></i><strong>Github</strong>
                      </a>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-external-link-square-alt"></i><strong>Demo Link</strong>
                      </a>
                    </div>
                    <div className="row justify-content-center pb-3 float-left">
                        <img style={{width: "40px"}} src="/html-5.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/css-3.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/javascript.svg" alt="" />
                    </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
                  <div className="card  shadow-lg">
                    <div className="card-body ">
                      <img className="img-fluid mb-3" src="/currency.png" />
                      <hr></hr>
                      <h2 class="card-title font-weight-bold">Currency Converter</h2>
                      <h5 class="card-text">
                        It is a Currency Converter where you can check the current value of your currency with 160 different currencies.
                      </h5>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-github"></i><strong>Github</strong>
                      </a>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-external-link-square-alt"></i><strong>Demo Link</strong>
                      </a>
                    </div>
                    <div className="row justify-content-center pb-3 float-left">
                        <img style={{width: "40px"}} src="/html-5.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/bootstrap.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/javascript.svg" alt="" />
                        <img style={{width: "50px"}} className="ml-2" src="/jquery.svg" alt="" />
                    </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
                  <div className="card  shadow-lg">
                    <div className="card-body ">
                      <img className="img-fluid mb-3" src="/gitfinder.png" />
                      <hr></hr>
                      <h2 class="card-title font-weight-bold">Github Finder</h2>
                      <h5 class="card-text">
                        Here You can find different git users as well as the repositories.You can also check the scores of each git repository.
                      </h5>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-github"></i><strong>Github</strong>
                      </a>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-external-link-square-alt"></i><strong>Demo Link</strong>
                      </a>
                    </div>
                    <div className="row justify-content-center pb-3 float-left">
                        <img style={{width: "40px"}} src="/html-5.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/bootstrap.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/react.svg" alt="" />
                    </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
                  <div className="card  shadow-lg">
                    <div className="card-body ">
                      <img className="img-fluid mb-3" src="/todo.png" />
                      <hr></hr>
                      <h2 class="card-title font-weight-bold">Todo App</h2>
                      <h5 class="card-text">
                        A simple todo app where you can create, add , update , delete todo.
                      </h5>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-github"></i><strong>Github</strong>
                      </a>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-external-link-square-alt"></i><strong>Demo Link</strong>
                      </a>
                    </div>
                    <div className="row justify-content-center pb-3 mt-5 mt-4 float-left">
                        <img style={{width: "40px"}} src="/html-5.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/bootstrap.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/react.svg" alt="" />
                        <img style={{width: "50px"}} className="ml-2" src="/redux.svg" alt="" />
                    </div>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
                  <div className="card  shadow-lg">
                    <div className="card-body ">
                      <img className="img-fluid mb-3" src="/stopwatch.png" />
                      <hr></hr>
                      <h2 class="card-title font-weight-bold">StopWatch And Timer</h2>
                      <h5 class="card-text">
                        A simple StopWatch and Timer.
                      </h5>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-github"></i><strong>Github</strong>
                      </a>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-external-link-square-alt"></i><strong>Demo Link</strong>
                      </a>
                    </div>
                    <div className="row justify-content-center pb-3 mt-5 mb-4 float-left">
                        <img style={{width: "40px"}} src="/html-5.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/bootstrap.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/react.svg" alt="" />
                        <img style={{width: "50px"}} className="ml-2" src="/redux.svg" alt="" />
                    </div>
                    <br></br>
                  </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-1">
                  <div className="card  shadow-lg">
                    <div className="card-body ">
                      <img className="img-fluid mb-3" src="/microsoft.png" />
                      <hr></hr>
                      <h2 class="card-title font-weight-bold">Microsoft Clone</h2>
                      <h5 class="card-text">
                        A clone of microsoft website where you can see different listed products and add it to your cart.
                      </h5>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-github"></i><strong>Github</strong>
                      </a>
                      <a class="card-link text-muted mt-5" href="#" target="blank">
                        <i class="fab fa-external-link-square-alt"></i><strong>Demo Link</strong>
                      </a>
                    </div>
                    <div className="row justify-content-center pb-3 float-left">
                        <img style={{width: "40px"}} src="/html-5.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/bootstrap.svg" alt="" />
                        <img style={{width: "40px"}} className="ml-2" src="/react.svg" alt="" />
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <hr></hr>
      </div>
      <div className="row justify-content-center">
        <div>
          <div className="circleDiv ml-5 mt-sm-2 d-flex justify-content-center ">
            <h2 className=" text-center m-auto font-weight-bold">1200</h2>
          </div>
          <h4 className="text-center text-muted m-auto font-weight-bold p-4">Hours Of Coding</h4>
        </div>
        
        <div>
          <div className="circleDiv ml-5 mt-sm-2 d-flex justify-content-center ">
            <h2 className="text-center m-auto font-weight-bold">200+</h2>
          </div>
          <h4 className="text-center text-muted m-auto font-weight-bold p-4">Hackerrank Problems</h4>
        </div>
        
        <div>
          <div className="circleDiv ml-5 mt-sm-2 d-flex justify-content-center ">
            <h2 className="text-center m-auto font-weight-bold">200</h2>
          </div>
          <h4 className="text-center text-muted m-auto font-weight-bold ml-5 p-4">Hours Of Soft Skill</h4>
        </div>
        

        <div>
          <div className="circleDiv ml-5 mt-sm-2 d-flex justify-content-center ">
            <h2 className="text-center m-auto font-weight-bold">245+</h2>
          </div>
          <h4 className="ml-4 text-center text-muted m-auto font-weight-bold p-4">Git Commits</h4>
        </div>
        
      </div>

      <br></br>
      <hr></hr>
      <div className="row">
          <div className="col mt-5 d-flex justify-content-center">
            <a href="https://github.com/krsnaapoorv" target="blank">
              <img src="/githubcalender.png" alt="" className="img-fluid" />
            </a>
          </div>
      </div>
      <br></br>
      <hr></hr>
      <div>

      </div>
    </div>
 
    
  )
}

export default App;
