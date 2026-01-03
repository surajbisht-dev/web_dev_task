import { useEffect, useState } from "react";
import { api } from "./api";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Toast from "./components/Toast";
import SortBar from "./components/SortBar";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [toast, setToast] = useState("");
  const [sortBy, setSortBy] = useState("latest");

  const fetchContacts = async () => {
    const res = await api.get("/contacts");
    setContacts(res.data);
  };

  const deleteContact = async (id) => {
    await api.delete(`/contacts/${id}`);
    setToast("Contact deleted successfully");
    fetchContacts();
  };

  const sortedContacts = [...contacts].sort((a, b) => {
    if (sortBy === "latest")
      return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortBy === "oldest")
      return new Date(a.createdAt) - new Date(b.createdAt);
    if (sortBy === "name") return a.name.localeCompare(b.name);
  });

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-xl shadow">
        <h1 className="text-3xl font-bold text-center mb-6">
          Contact Management App
        </h1>

        {toast && <Toast message={toast} onClose={() => setToast("")} />}

        <ContactForm
          refresh={fetchContacts}
          success={() => setToast("Contact saved successfully")}
        />

        <SortBar sortBy={sortBy} setSortBy={setSortBy} />

        <ContactList contacts={sortedContacts} onDelete={deleteContact} />
      </div>
    </div>
  );
};

export default App;
