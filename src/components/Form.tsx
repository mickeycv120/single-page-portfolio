export const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      <input
        className="border-b border-white text-body-l placeholder:text-[16px] placeholder:text-gray p-3"
        type="text"
        id="name"
        placeholder="NAME"
      />
      <input
        className="border-b border-white text-body-l placeholder:text-[16px] placeholder:text-gray p-3"
        type="email"
        id="email"
        placeholder="EMAIL"
      />
    </form>
  );
};
