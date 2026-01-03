import ContactRow from "./ContactRow";
import { FaUser, FaEnvelope, FaPhone, FaTrash } from "react-icons/fa";

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) {
    return <p className="text-gray-500 mt-4">No contacts found</p>;
  }

  return (
    <>
      {/* For desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border rounded">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <ContactRow key={c._id} contact={c} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>

      {/* for mobile */}
      <div className="md:hidden space-y-4 mt-4">
        {contacts.map((c) => (
          <div key={c._id} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FaUser className="text-gray-500" />
              <span className="font-semibold">{c.name}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <FaEnvelope />
              <span>{c.email}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
              <FaPhone />
              <span>{c.phone}</span>
            </div>

            <button
              onClick={() => onDelete(c._id)}
              className="mt-3 flex items-center gap-2 text-red-600 text-sm"
            >
              <FaTrash />
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContactList;
