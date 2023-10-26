import "./AboutPage.scss";
import img1 from "../../assets/images/appRoutes1.png";
import img2 from "../../assets/images/appRoutes2.png";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <h1>About Page</h1>
      <p>This demo utilizes:</p>
      <ol>
        <li>useState & useEffect from React</li>
        <li>
          BrowserRouter, Routes, Route, Link & useParams from react-router-dom
        </li>
        <li>Axios calls inside of useEffect</li>
      </ol>
      <h4>Important Note:</h4>
      <p className="aboutPage__p">
        In the future, if you run this demo and it doesn't work it's possible
        that I have changed the API structure you're calling. If that's the
        case, this is all still valid logic and something you can reference.
      </p>
      <h4>Considerations/Refactoring:</h4>
      <p>
        We could have changed the element that is rendered in our routes so that
        "/people" & "/people/peopleId" both render our HomePage. THEN we could
        have called "PeoplePage" inside of HomePage and then get rid of the
        "People" Link in the Header altogether.
      </p>
      <img src={img1} />
      <img src={img2} />
    </div>
  );
};

export default AboutPage;
