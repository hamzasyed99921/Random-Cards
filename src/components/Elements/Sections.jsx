import React from "react";
import useFetch from "./data/useFetch";

const Sections = () => {
  const { loading, data } = useFetch('https://jsonplaceholder.typicode.com/users');
  if (loading) return <h1 className='mt-3 text-center'>Loading</h1>;
  return (
    <>
      <div className="container">
        <h1 className='mt-3 text-center'>Fetching Data From Api in Custom Hook</h1>
        <div className="py-5">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Name</th>
            <th scope="col">email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((res, key) => {
            return (
              <tr>
                <th scope="row">{key + 1}</th>
                <td>{res.name}</td>
                <td>{res.email}</td>
                <td>{res.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
    </>
  );
};

export default Sections;
