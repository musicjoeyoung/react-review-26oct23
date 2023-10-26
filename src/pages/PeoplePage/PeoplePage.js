import "./PeoplePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PersonDetails from "../PersonDetails/PersonDetails";

const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState(null);

  const url = "https://64553ad5a74f994b3355af73.mockapi.io/users";

  const { peopleId } = useParams();

  //axios call to get ALL people
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

  //axios call to get a SINGLE person
  useEffect(() => {
    const getPerson = async (peopleId) => {
      try {
        const response = await axios.get(`${url}/${peopleId}`);
        //console.log(response);
        const info = response.data;
        setPerson(info);
      } catch (error) {
        console.log(error);
      }
    };
    getPerson(peopleId || 3);
  }, [peopleId]);

  console.log(person);

  return (
    <main className="peopleContainer">
      <h1 className="peopleContainer__h1">All the People</h1>
      <PersonDetails person={person} />
      <section className="people">
        {/* map through our people state (array) and produce JSX elements */}
        {people.map((person) => (
          <Link
            to={`/people/${person.id}`}
            key={person.id}
            className={`people__person ${
              peopleId === person.id ? "people__hidden" : ""
            }`}
          >
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
