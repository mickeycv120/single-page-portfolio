import { socialLinks } from "../constants/socialLinks";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <>
      <section className="relative bg-dark-gray pt-18 pb-7">
        <div className="max-w-277.5 grid grid-cols-2 gap-55 mx-auto">

          <div className="flex flex-col col-span-1 gap-7">
            <div>
              <h2 className="text-heading-xl">Contact</h2>
              <p className="tracking-normal leading-6.5 line-clamp-3">
                I would love to hear about your project and how I <br /> could
                help. Please fill in the form, and I'll get back <br /> to you as
                soon as possible.
              </p>
            </div>
          </div>

          <div className="absolute left-0 bottom-0 ">
            <img
              src="src/assets/images/pattern-rings.svg"
              alt="ring"
              className="w-67.5 h-32.5 object-none object-right"
            />
          </div>

        <div className="col-span-1">
          <Form />
          <div className="flex w-full justify-end">
            <button>SEND MESSAGE</button>
          </div>
        </div>
        </div>
      </section>

      <footer className="bg-dark-gray pb-20 pt-10">
        <div className="border-t mx-auto max-w-277.5">
          <div className="flex justify-between mt-10">
            <a href="#" className="leading-8 text-[32px]">
              adamkeyes
            </a>
            <ul className="flex gap-5">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link} aria-label={link.name}>
                    {link.icon}
                  </a>
                </li>
              )
              )}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
