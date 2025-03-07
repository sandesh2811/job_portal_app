import MainContainer from "@/Components/MainContainer";

const Contact = ["New Baneshwor, Kathmandu", "abc@gmail.com", "9876543210"];
export const Socials = ["Facebook", "LinkedIn", "Twitter"];
const Others = ["Privacy Policy", "Terms of use", "FAQs"];

const Footer = () => {
  return (
    <MainContainer className="mb-8 min-h-[10vh]">
      <div className="flex flex-wrap justify-between gap-8">
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <ContactUI />
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-2">
          <SocialsUI />
        </div>
        {/* Others */}
        <div className="flex flex-col gap-2">
          <OthersUI />
        </div>
      </div>
    </MainContainer>
  );
};

export default Footer;

const ContactUI = () => {
  return (
    <>
      <h3 className="text-xl font-semibold uppercase">Contact</h3>
      <div className="flex flex-col gap-1">
        {Contact.map((contact, idx) => (
          <span className="text-base" key={idx}>
            {contact}
          </span>
        ))}
      </div>
    </>
  );
};

const SocialsUI = () => {
  return (
    <>
      <h3 className="text-xl font-semibold uppercase">Socials</h3>
      <div className="flex flex-col gap-1">
        {Socials.map((social, idx) => (
          <span className="text-base" key={idx}>
            {social}
          </span>
        ))}
      </div>
    </>
  );
};

const OthersUI = () => {
  return (
    <>
      <h3 className="text-xl font-semibold uppercase">Others</h3>
      <div className="flex flex-col gap-1">
        {Others.map((others, idx) => (
          <span className="text-base" key={idx}>
            {others}
          </span>
        ))}
      </div>
    </>
  );
};
