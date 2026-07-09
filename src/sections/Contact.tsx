import { socialLinks } from "../constants/socialLinks";
import { Form } from "../components/Form";

export const Contact = () => {
  return (
    <div className="min-h-screen bg-dark-gray min-w-screen">
      <section className="relative grid grid-cols-2 gap-48 px-30 pt-16 pb-22 min-w-screen">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col col-span-1 gap-7">
            <h1>Contact</h1>
            <p className="tracking-normal leading-6.5 line-clamp-3">
              I would love to hear about your project and how I <br /> could
              help. Please fill in the form, and I'll get back <br /> to you as
              soon as possible.
            </p>
          </div>

          <div className="absolute left-0 bottom-8">
            <img
              src="src/assets/images/pattern-rings.svg"
              alt="ring"
              className="w-67.5 h-32.5 object-none object-right"
            />
          </div>
        </div>

        <div className="col-span-1">
          <Form />
          <div className="flex w-full justify-end">
            <button>SEND MESSAGE</button>
          </div>
        </div>
      </section>
      <footer className="min-w-screen px-30 py-8">
        <div className="border-t">
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
    </div>
  );
};
