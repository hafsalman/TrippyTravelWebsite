import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>

      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indonesia"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
        />
        <TripData
          image={Trip2}
          heading="Trip in Malaysia"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
        />
        <TripData
          image={Trip3}
          heading="Trip in France"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets."
        />
      </div>
    </div>
  );
}

export default Trip;
