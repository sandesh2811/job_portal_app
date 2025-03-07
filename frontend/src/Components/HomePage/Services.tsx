import Card from "@/Components/UI/Card";
import MainContainer from "@/Components/MainContainer";

const ServicesList = [
  {
    title: "Easy To Apply",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nemo adipisci exercitationem delectus fugiat maiores vitae aperiam eumpraesentium quisquam vero, aspernatur natus, ducimusculpa rerum incidunt tenetur.",
  },
  {
    title: "Easy To Hire",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nemo adipisci exercitationem delectus fugiat maiores vitae aperiam eumpraesentium quisquam vero, aspernatur natus, ducimusculpa rerum incidunt tenetur.",
  },
  {
    title: "Easy To View Applications",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nemo adipisci exercitationem delectus fugiat maiores vitae aperiam eumpraesentium quisquam vero, aspernatur natus, ducimusculpa rerum incidunt tenetur.",
  },
];

const Services = () => {
  return (
    <MainContainer className="mb-36 min-h-[60vh]">
      <h2 className="text-4xl font-semibold">Our Services</h2>
      <div className="flex grid-cols-2 grid-rows-2 flex-col place-content-center place-items-center gap-6 mid:items-center md:grid">
        {ServicesList.map((service, idx) => (
          <Card CardStyle="Services" key={idx}>
            <h2 className="text-2xl leading-7">{service.title}</h2>
            <p className="text-[15px]">{service.description}</p>
          </Card>
        ))}
      </div>
    </MainContainer>
  );
};

export default Services;
