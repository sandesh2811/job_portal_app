const Contact = ["New Baneshwor, Kathmandu", "abc@gmail.com", "9876543210"];
const Socials = ["Facebook", "LinkedIn", "Twitter"];
const Others = ["Privacy Policy", "Terms of use", "FAQs"];

const Footer = () => {
  return (
    <div className="mb-2 min-h-[10vh] bg-blue-600 midLg:max-w-[850px] xl:max-w-[1050px] mx-auto p-4 gap-4 flex flex-col tracking-wide">
      <div className="flex flex-wrap justify-between gap-4">
        {/* Contact */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Contact</h3>
          <div className="flex flex-col gap-1">
            {Contact.map((contact, idx) => (
              <span className="text-sm" key={idx}>
                {contact}
              </span>
            ))}
          </div>
        </div>
        {/* Socials */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Socials</h3>
          <div className="flex flex-col gap-1">
            {Socials.map((social, idx) => (
              <span className="text-sm" key={idx}>
                {social}
              </span>
            ))}
          </div>
        </div>
        {/* Others */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Others</h3>
          <div className="flex flex-col gap-1">
            {Others.map((others, idx) => (
              <span className="text-sm" key={idx}>
                {others}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
