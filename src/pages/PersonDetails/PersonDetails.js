import NotFound from "../NotFound/NotFound";
import "./PersonDetails.scss";

const PersonDetails = ({ person }) => {
  console.log(person);
  return (
    <div className="personDetailsContainer">
      {person ? (
        <main>
          <h2>
            {person.firstName} {person.lastName}
          </h2>
          <h3>Job: {person.job}</h3>
          <img
            src={person.image}
            alt={person.firstName}
            className="personDetailsContainer__img"
          />
          <div>
            <h3>Bio: </h3>
            <p>{person.bio}</p>
            <h3>Thoughts: </h3>
            <ul>
              {person.thoughts.map((thought) => (
                <li>{thought.thought}</li>
              ))}
            </ul>
          </div>
        </main>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PersonDetails;
