import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

const Experiences = () => {
  // Transform the experiences data to match the Timeline component's expected format
  const timelineData = experiences.map((exp) => ({
    date: exp.date,
    title: exp.title,
    job: exp.job,
    contents: exp.contents,
  }));

  return (
    <section className="relative">
      <Timeline data={timelineData} />
    </section>
  );
};

export default Experiences;
