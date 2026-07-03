import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <section className="bg-dark-gray grid grid-cols-2 gap-48 px-30 py-16 min-w-screen">
      <div className="items-center justify-center">
        <div className="flex flex-col col-span-1 gap-7">
          <h1 className="text-heading-xl font-bold">Contact</h1>
          <p className="text-body-l text-gray tracking-normal leading-6.5">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div>
          <img src="src/assets/images/pattern-rings.svg" alt="ring" />
        </div>
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
