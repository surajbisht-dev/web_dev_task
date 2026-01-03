import { useState } from "react";
import { api } from "../api";

const ContactForm = ({ refresh, success }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const isValid =
    form.name.trim() && form.phone.trim() && form.email.includes("@");

  const submitHandler = async (e) => {
    e.preventDefault();
    await api.post("/contacts", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    refresh();
    success();
  };

  return (
    <form className="mb-6 bg-slate-50 p-4 rounded" onSubmit={submitHandler}>
      <div className="grid gap-3 md:grid-cols-2">
        <input
          className="border p-2 rounded"
          placeholder="Name *"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Email *"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Phone *"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <textarea
          className="border p-2 rounded md:col-span-2"
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        disabled={!isValid}
        className={`mt-3 w-full p-2 rounded text-white ${
          isValid ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
