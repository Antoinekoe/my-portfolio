import { SendHorizonal } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState({
    lName: "",
    fName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {};

  return (
    <div className="flex flex-col px-8 gap-5 bg-[#0D1116] text-white pb-10">
      <h2 className="text-4xl font-bold">Contactez</h2>
      <form action="" method="post" className="flex flex-col gap-2">
        <label>Nom</label>
        <input
          type="text"
          onChange={() => handleChange()}
          value={input.lName}
          className="bg-white rounded"
        />
        <label>Prénom</label>
        <input
          type="text"
          onChange={() => handleChange()}
          value={input.fName}
          className="bg-white rounded"
        />
        <label>Votre e-mail</label>
        <input
          type="email"
          onChange={() => handleChange()}
          value={input.email}
          className="bg-white rounded"
        />
        <label>Votre message</label>
        <textarea
          onChange={() => handleChange()}
          value={input.message}
          className="bg-white rounded"
        />
        <button
          type="submit"
          className="self-end flex justify-center items-center text-[#0D1116] bg-white rounded px-2 gap-2"
        >
          Envoyer <SendHorizonal className="h-[20px]" />
        </button>
      </form>
    </div>
  );
};

export default Form;
