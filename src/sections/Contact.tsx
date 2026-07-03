import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <section className="bg-dark-gray grid grid-cols-2 gap-48 px-30 py-20 min-w-screen">
      <div className="items-center justify-center">
        <div className="col-span-1">
          <h1 className="text-heading-xl font-bold">Contact</h1>
          <p className="text-body-l">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="col-span-1 items-center justify-center">
        <Form />
      </div>
    </section>
  );
};
