"use client";

import { useRef, useState } from "react";

const Form = () => {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [emailInputStatus, setEmailInputStatus] = useState("");
  const [nameInputStatus, setNameInputStatus] = useState("");
  const [emailInputErrorMsg, setEmailInputErrorMsg] = useState<string | null>(
    null
  );
  const [nameInputErrorMsg, setNameInputErrorMsg] = useState<string | null>(
    null
  );
  const [messageInputStatus, setMessageInputStatus] = useState("");
  const [messageInputErrorMsg, setMessageInputErrorMsg] = useState<
    string | null
  >(null);

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (
      nameInputRef.current?.value.trim() === "" ||
      !nameInputRef.current?.value
    ) {
      setNameInputStatus("error");
      setNameInputErrorMsg("Name cannot be empty");
    } else {
      setNameInputStatus("success");
    }

    if (
      emailInputRef.current?.value.trim() === "" ||
      !emailInputRef.current?.value
    ) {
      setEmailInputStatus("error");
      setEmailInputErrorMsg("Email Address cannot be empty");
    } else if (!emailInputRef.current?.value.includes("@")) {
      setEmailInputStatus("error");
      setEmailInputErrorMsg("Sorry, invalid format here");
    } else {
      setEmailInputStatus("success");
    }

    if (
      messageInputRef.current?.value.trim() === "" ||
      !messageInputRef.current?.value
    ) {
      setMessageInputStatus("error");
      setMessageInputErrorMsg("Message cannot be empty");
    } else {
      setMessageInputStatus("success");
    }
  };

  return (
    <div className=" flex w-full flex-col flex-wrap items-center sl:flex-row  sl:items-start  sl:justify-between   ">
      <div className=" mb-12 grid max-w-[445px]  content-start gap-y-[20px] text-center  sl:gap-y-9 sl:text-left">
        <h2 className="text-[72px] font-bold leading-[72px] -tracking-[2.05px]">
          Contact
        </h2>
        <p className="  text-grey">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form
        className="grid w-full  max-w-[445px] gap-y-8 self-auto sl:w-auto sl:grow  "
        onSubmit={submitHandler}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="NAME"
            className={` w-full border-b bg-dark-grey pl-6 pb-4 focus:outline-none ${
              nameInputStatus === "error" ? " border-red" : ""
            }  ${nameInputStatus === "success" ? " border-green" : ""} `}
            ref={nameInputRef}
          />
          {nameInputErrorMsg && nameInputStatus === "error" ? (
            <>
              <p className=" absolute -bottom-[5px] right-0 translate-y-full bg-transparent text-right text-xs leading-4 text-red ">
                {nameInputErrorMsg}
              </p>
              <div className=" absolute right-0 top-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                  <rect
                    x="11"
                    y="6"
                    width="2"
                    height="9"
                    rx="1"
                    fill="#FF6F5B"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#FF6F5B"
                  />
                </svg>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="EMAIL"
            className={` w-full border-b bg-dark-grey bg-transparent pl-6 pb-4 focus:outline-none ${
              emailInputStatus === "error" ? " border-red" : ""
            }  ${emailInputStatus === "success" ? " border-green" : ""} `}
            ref={emailInputRef}
          />
          {emailInputErrorMsg && emailInputStatus === "error" ? (
            <>
              <p className=" absolute -bottom-[5px] right-0 translate-y-full text-right text-xs leading-4 text-red ">
                {emailInputErrorMsg}
              </p>
              <div className=" absolute right-0 top-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                  <rect
                    x="11"
                    y="6"
                    width="2"
                    height="9"
                    rx="1"
                    fill="#FF6F5B"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#FF6F5B"
                  />
                </svg>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="relative">
          <textarea
            name=""
            placeholder="MESSAGE"
            id=""
            className={` w-full border-b bg-dark-grey  bg-transparent pl-6 pb-[80px] focus:outline-none ${
              messageInputStatus === "error" ? " border-red" : ""
            }  ${messageInputStatus === "success" ? " border-green" : ""} `}
            ref={messageInputRef}
          />
          {messageInputErrorMsg && messageInputStatus === "error" ? (
            <>
              <p className=" absolute -bottom-[5px] right-0 translate-y-full text-right text-xs leading-4 text-red ">
                {messageInputErrorMsg}
              </p>
              <div className=" absolute right-0 top-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="#FF6F5B" />
                  <rect
                    x="11"
                    y="6"
                    width="2"
                    height="9"
                    rx="1"
                    fill="#FF6F5B"
                  />
                  <rect
                    x="11"
                    y="17"
                    width="2"
                    height="2"
                    rx="1"
                    fill="#FF6F5B"
                  />
                </svg>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <button
          type="submit"
          className=" self-center justify-self-end border-b-2 border-green pb-[10px] text-base  font-bold leading-[26px] tracking-[2.29px] transition-all hover:text-green "
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Form;
