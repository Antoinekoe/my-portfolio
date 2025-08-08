import { Loader2, SendHorizonal } from "lucide-react";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [input, setInput] = useState({
    lName: "",
    fName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.lName || !input.fName || !input.email || !input.message) {
      setFormMessage("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        {
          from_fName: input.fName.trim(),
          from_lName: input.lName.trim(),
          from_email: input.email.trim(),
          from_phone: input.phone.trim() || "Non renseigné",
          message: input.message.trim(),
          to_email: "antoine.koe@gmail.com",
        },
        import.meta.env.VITE_YOUR_API_KEY
      );

      setFormMessage("Message envoyé avec succès !");

      // Reset du formulaire
      setInput({
        lName: "",
        fName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur:", error);
      setFormMessage("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="px-8 bg-[#F8F9FA] dark:bg-[#0D1116] text-black dark:text-white pb-10"
      id="contact"
    >
      <div className="flex flex-col gap-5 lg:max-w-[2000px] lg:mx-auto">
        <h2 className="text-4xl font-bold">Contactez-moi !</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-7 lg:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label>Nom *</label>
            <input
              type="text"
              onChange={handleChange}
              value={input.lName}
              name="lName"
              className="bg-white text-black rounded h-9 focus:outline-none px-2 border-1 border-gray-400"
              maxLength={40}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Prénom *</label>
            <input
              type="text"
              onChange={handleChange}
              value={input.fName}
              name="fName"
              className="bg-white text-black rounded h-9 focus:outline-none px-2 border-1 border-gray-400"
              maxLength={40}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Votre e-mail *</label>
            <input
              type="email"
              onChange={handleChange}
              value={input.email}
              name="email"
              className="bg-white text-black rounded h-9 focus:outline-none px-2 border-1 border-gray-400"
              maxLength={40}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Votre téléphone</label>
            <input
              type="tel"
              pattern="[0-9+\-\s\(\)]+"
              onChange={handleChange}
              value={input.phone}
              name="phone"
              className="bg-white text-black rounded h-9 focus:outline-none px-2 border-1 border-gray-400"
              maxLength={30}
            />
          </div>
          <div className="flex flex-col gap-2 col-span-2">
            <label>Votre message *</label>
            <textarea
              onChange={handleChange}
              value={input.message}
              name="message"
              className="bg-white text-black rounded focus:outline-none px-2 border-1 border-gray-400"
              rows="5"
              minLength={3}
              required
            />
          </div>
          <div className="flex gap-2 mt-2">
            {formMessage.length > 0 ? <div>{formMessage}</div> : ""}
            <button
              type="submit"
              className="flex justify-center items-center text-[#0D1116] bg-white rounded px-3 py-1 gap-2 border-1 border-gray-400"
            >
              Envoyer{" "}
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <SendHorizonal className="h-[20px]" />
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
