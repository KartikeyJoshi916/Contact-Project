import React from "react";

import CreateContact from "components/CreateContact";
import { ContactList } from "components";

const ContactsPage = () => {
  return (
    <div className="w-full h-full">
      <CreateContact />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
