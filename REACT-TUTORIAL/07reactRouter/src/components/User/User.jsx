import React from "react";
import { useParams } from "react-router-dom";

function Contact() {
  const { userId } = useParams();
  return (
    <div className="bg-orange-500 py-3 text-3xl text-center">
      {" "}
      User : {userId}{" "}
    </div>
  );
}

export default Contact;
