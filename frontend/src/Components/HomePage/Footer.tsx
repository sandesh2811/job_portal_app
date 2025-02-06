const Contact = ["New Baneshwor, Kathmandu", "abc@gmail.com", "9876543210"];
export const Socials = ["Facebook", "LinkedIn", "Twitter"];
const Others = ["Privacy Policy", "Terms of use", "FAQs"];

const Footer = () => {
  return (
    <div className="min-h-[10vh] midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col tracking-wide">
      <div className="flex flex-wrap justify-between gap-4">
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
    </div>
  );
};

export default Footer;

const ContactUI = () => {
  return (
    <>
      <h3 className="text-lg font-medium">Contact</h3>
      <div className="flex flex-col gap-1">
        {Contact.map((contact, idx) => (
          <span className="text-sm" key={idx}>
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
      <h3 className="text-lg font-medium">Socials</h3>
      <div className="flex flex-col gap-1">
        {Socials.map((social, idx) => (
          <span className="text-sm" key={idx}>
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
      <h3 className="text-lg font-medium">Others</h3>
      <div className="flex flex-col gap-1">
        {Others.map((others, idx) => (
          <span className="text-sm" key={idx}>
            {others}
          </span>
        ))}
      </div>
    </>
  );
};
