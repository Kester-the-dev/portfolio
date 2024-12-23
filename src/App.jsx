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
        <div className="sec">
          <div>
            <br />
            <br />
            <br />
            <br />
          <h1 class='word'>Hello, <br />I am <span>{name}</span>, <br />Front End Developer
          </h1>

          <p>Currently Located in Nigeria, i love building things that is attractive, <br /> intresting to solve problem, likewise i love challenges.....</p>

          <button>Let's get in touch</button>
          </div>
          <div>
            <img src="nysc3.jpg" alt="" />
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
                <br />
              </div>
              
            </div>

            <div className="show">
              <div id='pic'>
                <img src="Screenshot (2).png" alt="" />
              </div>
              <div class='dh'>
                <h3>Reasonable and flexible prices for clients</h3>
                <p>this is part of my work you will love just click and view it</p>

                <h3>Elaborating ideas in a discussion</h3>
                <p>i will definately give you the best knowing fully what you want</p>

                <h3>Full of range design and motion services</h3>
                <p>put your trust in me you will not be dissapointed</p>
              </div>
            </div>


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


             <div class='fcard-1'>
              <div className="fcard">
              <h1>Tailwind Css</h1>
              <img src="images (13).png" alt="" />
              </div>

             <div class='fcard'>
              <h1>Figma</h1>
              <img src="images (14).png" alt="" />
             </div>

             <div class='fcard'>
              <h1>Bootstrap</h1>
              <img src="images (24).jpeg" alt="" />
             </div>

             </div>

            </div>
        <footer>
          <h1>Let"s talk about your projects</h1>
          <button>Contact us</button>
          <h1>&copy; 2024 kester-the-dev</h1>
        </footer>
      </div>
    </> 
  )
}

export default App



