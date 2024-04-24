import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Profile Name : {data.name}{" "}
      <br/>
      Github followers: {data.followers}
      <img src={data.avatar_url} width={300} alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ACS-lessgo");
  return response.json();
};
