const ContactRow = ({ contact, onDelete }) => {
  return (
    <tr>
      <td className="p-2 border">{contact.name}</td>
      <td className="p-2 border">{contact.email}</td>
      <td className="p-2 border">{contact.phone}</td>
      <td className="p-2 border text-center">
        <button
          onClick={() => onDelete(contact._id)}
          className="text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
