// import React, { useState, useEffect } from 'react';

// const MyComponent = () => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('http://127.0.0.1:8000/education/')
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setData(data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;

//     return (
//         <div>
//             <h1>{data.message}</h1>
//             <p>Status: {data.status}</p>
//         </div>
//     );
// };

// export default MyComponent;