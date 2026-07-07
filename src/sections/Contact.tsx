import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <section className="relative bg-dark-gray grid grid-cols-2 gap-48 px-30 pt-18 min-w-screen">
      <div className="flex flex-col overflow-hidden ">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-8 mb-4">
            <h1 className="text-heading-xl">Contact</h1>
            <p className="text-gray">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 w-[350px] h-[150px] object-none object-right"
          alt="rings"
          src="src/assets/images/pattern-rings.svg"
        />
      </div>

      <div className="col-span-1">
        <Form />
        <div className="flex w-full justify-end">
          <button className="border-b-2 border-green pb-1 mt-5 text-heading-s hover:text-green">
            SEND MESSAGE
          </button>
        </div>
      </div>
    </section>
  );
};
