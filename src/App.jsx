import Header from "./component/Header"




function App() {
const name = 'Kester'

// const text = document.querySelector('.text')
// text.innerHTML = text.innerText.split('').map(
//   (char, i) =>
//     `<span style="transform:rotate(${i = 8.3}deg)">${char}</span>`
// ).join('')


  return (
    <>
      <div className="">
        <Header></Header>
        <div className="sec" id='Home'>
          <div>
            <br />
            <br />
          <h1 class='word'>Hello, <br />I am <span>{name}</span>, <br />Front End Developer
          </h1>

          <p>Currently Located in Nigeria, i love building things that is attractive, <br /> intresting to solve problem, likewise i love challenges.....</p>

          <div className="folow">
            <p>catch me up via the link below</p>          
          </div>
          <div class='button'>
          <button>Let's get in touch</button>
          <button>Use the link below</button>
          </div>
          <div class='cont'>
              <a href="https://github.com/Kester-the-dev" target="_blank"><img src="images (19).png" alt="" /></a>
              <a href="https://github.com/Kester-the-dev" target="_blank"><img src="images (18).png" alt="" /></a>
              <br />
              <a href="https://github.com/Kester-the-dev" target="_blank"><img src="images (17).png" alt="" /></a>
              <a href="https://wa.me/08163015850" target="_blank"><img src="images (16).png" alt="" /></a>
          </div>
          </div>
          <hr />
          <div>
            <img src="nysc3.jpg" alt="" />
            </div>
        </div>

        {/* ----------------ABOUT-Me---------------- */}

        <div id='About'>

          <h1>About</h1>
        <h3>I am a web Developer with a strong determination of becoming the best among all, i am open to learning more about developing programs and design to solve problems and provide a lasting solutions. Devoted to a forward looking firms and technologies with facilitating early adoption of innovation. In my leisure time i love to work on projects that will update me. also, i keep up with the latest web development trends. Do you wish to know me? i am always availiable for your service, do well to reach me. <br />I am KESTER-THE-DEV.....................</h3>

        </div>

        {/* ----------------MY_SKILLS--------------- */}




        <div id='my-skills'>
          <h1>MY SKILLS  + TOOLS</h1>
        <div class='show2'>
             <div class='fcard-1'>
              <div className="fcard">
              <h1>HTML:5</h1>
              <img src="images (10).png" alt="" />
              </div>

             <div class='fcard'>
              <h1>React</h1>
              <img src="images (11).png" alt="" />
             </div>

             <div class='fcard'>
              <h1>Javascripts</h1>
              <img src="images (12).png" alt="" />
             </div>
             
             </div>


             <div class='fcard-2'>
              <div className="fcard">
              <h1>Tailwind</h1>
              <img src="images (13).png" alt="" />
              </div>

             <div class='fcardf'>
              <img src="images (14).png" alt="" />
             </div>

             <div class='fcardb'>
              <h1>Bootstrap</h1>
              <img src="images (24).jpeg" alt="" />
             </div>

             </div>

             <div className="fcard-3">
                <div class='fcardb'>
                  <h1>Python</h1>
                  <img src="images (25).jpeg" alt="" />
                </div>
                <div class='fcardb'>
                  <h1>SQL</h1>
                  <img src="images (15).png" alt="" />
                </div>
               <div class='fcardb'>
                <h1>CSS</h1>
                <img src="images (26).jpeg" alt="" />
               </div>
                
              </div>

            



             <div class='sec2'>
              <div className="two">
                <br />
                <br />
              <h1>skills and tools</h1>
              <p>for a more detailed overview , please feel free to check the tools that were used</p>
              <p>the sides listed is well understood  you can also check my Gitup for more project review</p>
              </div>
              <div class='test'>
                <br />
                <br />
                <h4 class='text'>HTML:5 -- CSS  </h4>
                <h4>JAVASCRIPTS --  REACT</h4>
                <h4>BOOSTSRAP --  TAILWIND</h4>
                <h4>FIGMA --  UI/UX</h4>
                <h4>PYTHON --  SQL</h4>
                <br />
              </div>
              
            </div>

            </div>


            

        </div>
 

            <div className="show">
              <div id='pic'>
                <img src="images (2).jpeg" alt="" />
              </div>
              <div class='dh'>
                <h3>Reasonable and flexible prices for clients</h3>
                <p>this is part of my work you will love just click and view it</p>

                <h3>Elaborating ideas in a discussion</h3>
                <p>i will definately give you the best knowing fully what you want</p>

                <h3>Full of range design and motion services</h3>
                <p>put your trust in me you will not be dissapointed</p>

                <h3>Competitive advantages</h3>
                <p>Stay ahead of the competition with a cutting-edge websites </p>

                <h3>Expert team</h3>
                <p>Our team of experienced developer, designers, and project-managers etc</p>
              </div>
            </div>

            

            <div id="project">
              
              <h1>MY PROJECTS</h1>
            <div id='projects'>
            
              <div className="pro">
                <img src="weather-app-1.png" alt="" />
                <h4>A user friendly weather forcasting application, <br /> providing real weather updates and forcasting location. <br />ensuring accurate and secure user input. <br />visit my github below</h4>
                <a href="https://kester-the-dev.github.io/weather-App/"><img src="images (19).png" alt="" /></a>
              </div>
              <div className="pro">
                <img  src="form-validation.png" alt="" />    
                <h4>A javascripts-based form validation system  <br />ensuring accurate and secure user input. <br /> it's a user friendly form application <br /> to view it, visit my github below</h4>
                <a href="https://kester-the-dev.github.io/form-validation/"><img src="images (19).png" alt="" /></a>
              </div>
              <div className="pro">
                <img src="todo-list.png" alt="" />
              <h4>A javascripts-based Todo-list system  <br />ensuring accurate and secure user input. <br /> it's a user friendly application <br /> to view it, visit my github below</h4>
                <a href="https://kester-the-dev.github.io/Todo-list/"><img src="images (19).png" alt="" /></a>
              </div>
              <div className="pro">
                <img src="calculator.png" alt="" />
              <h4>A javascripts-based calculator system  <br />ensuring accurate and trust calculation. <br /> it's a user friendly form application <br /> to view it, visit my github below</h4>
                <a href="https://kester-the-dev.github.io/calculator/"><img src="images (19).png" alt="" /></a>
              </div>
              <div className="pro">
                <img src="bootstrap.png" alt="" />
              <h4>A javascripts-based with bootstrap system  <br />ensuring accurate and secure user input. <br /> it's a user friendly application <br /> to view it, visit my github below</h4>
                <a href="https://kester-the-dev.github.io/bootstrap/"><img src="images (19).png" alt="" /></a>
              </div>
              <div className="pro">
                <img src="full-website.png" alt="" />
              <h4>A website of CSS-based system only <br />ensuring accurate and functioning. <br /> it's a user friendly website application <br /> to view it, visit my github below</h4>
                <a href="https://kester-the-dev.github.io/full-website /"><img src="images (19).png" alt="" /></a>
              </div>

            </div>
              </div>

      
      <footer>
        <div class='foot'>
            <h2>Let"s talk about your projects</h2>
            <h2>Contact us via the link below</h2>
          </div>

          <div class='con'>
            <a href="https://github.com/Kester-the-dev" target="_blank"><img src="images (19).png" alt="" /></a>
            <a href="https://github.com/Kester-the-dev" target="_blank"><img src="images (18).png" alt="" /></a>
            <a href="https://github.com/Kester-the-dev" target="_blank"><img src="images (17).png" alt="" /></a>
            <a href="https://wa.me/08163015850" target="_blank"><img src="images (16).png" alt="" /></a>
            <a href="https://wa.me/08163015850" target="_blank"><img src="images (27).jpeg" alt="" /></a>
          </div>
        
          <h4>&copy; 2024 kester-the-dev</h4>
        </footer>
      </div>
    </> 
  )
}

export default App



