export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="border-b border-white text-heading-s placeholder:text-white/50 py-3 px-4 focus:outline-0 focus:border-b focus:border-green"
        type="text"
        id="name"
        placeholder="NAME"
      />
      <input
        className="border-b border-white text-heading-s placeholder:text-white/50 py-3 px-4 focus:outline-0 focus:border-b focus:border-green"
        type="email"
        id="email"
        placeholder="EMAIL"
      />
      <textarea
        className="border-b border-white text-heading-s placeholder:text-white/50 px-4 py-3 h-26 resize-none focus:outline-0 focus:border-b focus:border-green"
        id="message"
        placeholder="MESSAGE"
      />
    </form>
  );
};
