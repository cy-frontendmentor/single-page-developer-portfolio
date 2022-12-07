const Form = () => {
  return (
    <div className=" form-grid w-full max-w-[1110px] items-center xl:gap-x-[220px]  ">
      <div className=" mb-12 grid items-center gap-y-[20px] text-center lg:gap-y-9  lg:text-left">
        <h2 className="text-[72px] font-bold leading-[72px] -tracking-[2.05px]">
          Contact
        </h2>
        <p className="  text-grey">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form className="grid gap-y-8">
        <input
          type="text"
          placeholder="NAME"
          className=" border-b bg-dark-grey pl-6 pb-4 focus:outline-none  "
        />
        <input
          type="text"
          placeholder="EMAIL"
          className=" border-b bg-dark-grey pl-6 pb-4 focus:outline-none "
        />
        <textarea
          name=""
          placeholder="MESSAGE"
          id=""
          className=" border-b bg-dark-grey pl-6 pb-[81px] focus:outline-none "
        ></textarea>
        <button className=" self-center justify-self-end border-b-2 border-green pb-[10px] text-base  font-bold leading-[26px] tracking-[2.29px] transition-all hover:text-green ">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
