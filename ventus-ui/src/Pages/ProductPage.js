import logo from "./logo.png";
import styled from "styled-components";

const Para = styled.p`
  text-align: center;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  width: 60%;
  margin: auto;
`;

function ProductPage() {
  return (
    <div className="App">
      <Para>
        <strong>Ventus Robotics</strong> is a leading environmental monitoring
        company."Ventus", Latin for "wind", conveys the company's specialization
        in monitoring air quality and illustrates the elegant yet dynamic nature
        of their robotic solutions.
        <br></br>
        <br></br>
        Core competencies include:
        <list>
          <li>
            Design and iterative development of agile robotic solutions for
            condition monitoring using modern frameworks
          </li>
          <li>
            Integration of easy-access web-based responsive user interfaces
            which communicate with our systems
          </li>
          <li>Collection of requirements for complex consulting solutions</li>
          <li>Engineering communications and project documentation</li>
        </list>
        <div>
          <img src={logo}></img>
          <p>Ventus Robotics, 2023</p>
        </div>
      </Para>
    </div>
  );
}

export default ProductPage;
