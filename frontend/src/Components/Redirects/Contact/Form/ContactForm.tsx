import Button from "@/Components/UI/Button";
import Input from "@/Components/UI/Input";

const ContactForm = () => {
  return (
    <form className="h-full flex flex-col  gap-4 mid:w-[550px] p-3 xl:p-7 midLg:w-[700px] xl:w-[550px] xl:justify-center border-2 border-secondaryText rounded-sm">
      <div className="flex flex-col gap-2">
        <span className="font-medium">Full Name</span>
        <Input className="rounded-sm" name="Name" type="string" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Email</span>
        <Input className="rounded-sm" name="Email" type="string" />
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-medium">Message</span>
        <textarea
          className="bg-transparent border-2 border-secondaryText rounded-sm p-2"
          autoComplete="off"
        />
      </div>

      <div className="mid:flex justify-center items-center">
        <Button className="rounded-sm w-full">Submit</Button>
      </div>
    </form>
  );
};

export default ContactForm;
