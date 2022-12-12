import React from 'react'
import useFetch from './data/useFetch'
const Roadmap = () => {
    const { loading, data } = useFetch( `https://hn.algolia.com/api/v1/search?query=JavaScript`);
    // console.log(data);
    if(loading) return <h1 className='mt-3 text-center'>Loading</h1>
  return (
    <>

    <div className="container">
    <h1 className='mt-3 text-center'>Fetching Data From Api in Custom Hook</h1>
        <div className="py-5">
        <table class="table">
        <thead>
          <tr>
            <th scope="col">SNo</th>
            <th scope="col">Title</th>
            <th scope="col">Url</th>
            <th scope="col">Author</th>
          </tr>
        </thead>
        <tbody>
          {data.hits.map((res, key) => {
            return (
              <tr>
                <th scope="row">{key + 1}</th>
                <td>{res.title}</td>
                <td>{res.url}</td>
                <td>{res.author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
      </div>
    </>
  )
}

export default Roadmap