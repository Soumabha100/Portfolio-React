import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  return (
    <section className="relative" id="work">
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;