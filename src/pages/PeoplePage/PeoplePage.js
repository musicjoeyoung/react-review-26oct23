import "./PeoplePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);

  const url = "https://64553ad5a74f994b3355af73.mockapi.io/users";

  useEffect(() => {
    //define a function that contains our axios call inside of a TRY block
    const getPeople = async () => {
      try {
        const response = await axios.get(url);
        //console.log(response.data);
        let info = response.data;
        setPeople(info);
      } catch (error) {
        console.log(error);
      }
    };
    getPeople();
  }, []);

  //console.log(people);

  return (
    <main className="peopleContainer">
      <h1 className="peopleContainer__h1">All the People</h1>
      <section className="people">
        {/* map through our people state (array) and produce JSX elements */}
        {people.map((person) => (
          <Link to={`/people/${person.id}`} key={person.id}>
            <article>
              <h2>
                {person.firstName} {person.lastName}
              </h2>
              <img src={person.image} alt={person.firstName} />
            </article>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default PeoplePage;
