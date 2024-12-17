import Card from "@/Components/UI/Card";

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
    <div className="min-h-[60vh] bg-orange-400 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col tracking-wide">
      <h2 className="text-2xl font-semibold">Our Services</h2>
      <div className="flex flex-col gap-6 mid:items-center md:grid grid-cols-2 grid-rows-2 place-content-center place-items-center">
        {ServicesList.map((service, idx) => (
          <Card CardStyle="Services" key={idx}>
            <h2 className="text-2xl leading-7">{service.title}</h2>
            <p className="text-[15px]">{service.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;
