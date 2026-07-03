export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="border-b border-white text-heading-s placeholder:text-white/50 py-3 px-4"
        type="text"
        id="name"
        placeholder="NAME"
      />
      <input
        className="border-b border-white text-heading-s placeholder:text-white/50 py-3 px-4"
        type="email"
        id="email"
        placeholder="EMAIL"
      />
      <textarea
        className="border-b border-white text-heading-s placeholder:text-white/50 px-4 py-3 h-26 resize-none"
        id="message"
        placeholder="MESSAGE"
      />
    </form>
  );
};
