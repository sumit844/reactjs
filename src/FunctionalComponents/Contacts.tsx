import React, { useEffect, useState } from "react";
import AddContacts from "./AddContacts";
import EditContact from "./EditContact";

const Contacts = () => {
  let initailArra: any[] = [];
  const [contactList, setContactList] = useState(initailArra);
  const [rowData, setRowData] = useState();
  const [openEditForm, setEditForm] = useState(false);
  const fetchData = () => {
    fetch("http://localhost:3006/constacts")
      .then((res) => {
        return res.json();
      })
      .then((data: any) => {
        setContactList(data);
      });
  };

  const deleteRowData = (id: any) => {
    console.log("welcome id", id);
    console.log("delete url", `http://localhost:3006/constacts/${id}`);
    fetch(`http://localhost:3006/constacts/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        fetchData();
      }
      console.log(res);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const editRowData = (item: any) => {
    setEditForm(!openEditForm);
    setRowData(item);
  };
  return (
    <>
      <h1>Contact List</h1>
      <p>here is the list of the contacts</p>
      <table className="table">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Button</th>
        </tr>
        {contactList?.map((item: any, index: number) => {
          return (
            <tr key={index} style={{ border: "2px black solid", marginBottom: "8px", padding: "5px" }}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.Email}</td>
              <td>{item.Mobile}</td>
              <button
                className="button"
                onClick={() => {
                  editRowData(item);
                }}
              >
                Edit
              </button>
              <button
                className="button"
                onClick={() => {
                  deleteRowData(item.id);
                }}
              >
                Delete
              </button>
            </tr>
          );
        })}
      </table>
      {openEditForm && <EditContact item={rowData} updateData={fetchData} />}
      <AddContacts updateData={fetchData} />
    </>
  );
};

export default Contacts;
