import ContactForm from "./Form/ContactForm";

const Contact = () => {
  return (
    <div className="h-[76vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto tracking-wide flex items-center">
      <div className="w-full h-full bg-primaryText text-background p-4 flex flex-col  gap-4">
        <div>
          <h3 className="text-xl font-semibold leading-5 mid:text-2xl">
            Contact us
          </h3>
          <span className="text-sm leading-5 text-secondaryText">
            Have any queries regarding hiring process or applying for a job?
            Feel free to contact us through the given form.
          </span>
        </div>
        <div className="mid:flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
