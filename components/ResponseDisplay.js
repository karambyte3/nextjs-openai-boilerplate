// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error: {error.message}</p>;
  } else if (data && data.result) {
    // Assuming data.result contains the itinerary details
    const { destination, placesToVisit, placesToEat, placesToStay } = data.result;
    const wikiLink = "https://en.wikipedia.org/wiki/" + destination;

    content = (
      <>
        <h2>Itinerary for <a href={wikiLink} target="_blank">{destination}</a></h2>
        <div>
          <h3>Places to Visit</h3>
          <ul>
            {placesToVisit.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Places to Eat</h3>
          <ul>
            {placesToEat.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Places to Stay</h3>
          <ul>
            {placesToStay.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    content = <p>No data available! Please submit a destination.</p>;
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
