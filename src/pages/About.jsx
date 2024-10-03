// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

// import { CTA } from "../components";
// import { experiences, skills } from "../constants";

// import "react-vertical-timeline-component/style.min.css";

// const About = () => {
//   return (
//     <section className='max-container'>
//       <h1 className='head-text'>
//         Hello, I'm{" "}
//         <span className='blue-gradient_text font-semibold drop-shadow'>
//           {" "}
//           Rasim
//         </span>{" "}
//         👋
//       </h1>

//       <div className='mt-5 flex flex-col gap-3 text-slate-500'>
//         <p>
//           Web Developer based in Azerbaijan, specializing in technical
//           education through hands-on learning and building applications.
//         </p>
//       </div>

//       <div className='py-10 flex flex-col'>
//         <h3 className='subhead-text'>My Skills</h3>

//         <div className='mt-16 flex flex-wrap gap-12'>
//           {skills.map((skill) => (
//             <div className='block-container w-20 h-20' key={skill.name}>
//               <div className='btn-back rounded-xl' />
//               <div className='btn-front rounded-xl flex justify-center items-center'>
//                 <img
//                   src={skill.imageUrl}
//                   alt={skill.name}
//                   className='w-1/2 h-1/2 object-contain'
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className='py-16'>
//         <h3 className='subhead-text'>Work Experience.</h3>
//         <div className='mt-5 flex flex-col gap-3 text-slate-500'>
//           <p>
//             I've worked with all sorts of companies, leveling up my skills and
//             teaming up with smart people. Here's the rundown:
//           </p>
//         </div>

//         <div className='mt-12 flex'>
//           <VerticalTimeline>
//             {experiences.map((experience, index) => (
//               <VerticalTimelineElement
//                 key={experience.company_name}
//                 date={experience.date}
//                 iconStyle={{ background: experience.iconBg }}
//                 icon={
//                   <div className='flex justify-center items-center w-full h-full'>
//                     <img
//                       src={experience.icon}
//                       alt={experience.company_name}
//                       className='w-[60%] h-[60%] object-contain'
//                     />
//                   </div>
//                 }
//                 contentStyle={{
//                   borderBottom: "8px",
//                   borderStyle: "solid",
//                   borderBottomColor: experience.iconBg,
//                   boxShadow: "none",
//                 }}
//               >
//                 <div>
//                   <h3 className='text-black text-xl font-poppins font-semibold'>
//                     {experience.title}
//                   </h3>
//                   <p
//                     className='text-black-500 font-medium text-base'
//                     style={{ margin: 0 }}
//                   >
//                     {experience.company_name}
//                   </p>
//                 </div>

//                 <ul className='my-5 list-disc ml-5 space-y-2'>
//                   {experience.points.map((point, index) => (
//                     <li
//                       key={`experience-point-${index}`}
//                       className='text-black-500/50 font-normal pl-1 text-sm'
//                     >
//                       {point}
//                     </li>
//                   ))}
//                 </ul>
//               </VerticalTimelineElement>
//             ))}
//           </VerticalTimeline>
//         </div>
//       </div>

//       <hr className='border-slate-200' />

//       <CTA />
//     </section>
//   );
// };

// export default About;

// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import { CTA } from "../components";
// import { experiences, skills } from "../constants";
// import "react-vertical-timeline-component/style.min.css";

// const About = () => {
//   const [rating, setRating] = useState(0);
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleRating = (newRating) => {
//     setRating(newRating);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
  //     // from_name: "Anonymous",
  //     // from_email: "no-reply@example.com",
  //     to_name: "Rasim Abiyev",
  //     to_email: "abiyev.rasim@gmail.com",
  //     rating: rating,
  //   };

  //   emailjs
  //     .send(
  //       import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
  //       templateParams,
  //       import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setLoading(false);
  //         setSubmitted(true);
  //         setRating(0);
  //       },
  //       (error) => {
  //         setLoading(false);
  //         setError(
  //           "An error occurred while sending your feedback. Please try again."
  //         );
  //       }
  //     );
  // };

  // return (
  //   <section className="max-container">
  //     <h1 className="head-text">
  //       Hello, I'm{" "}
  //       <span className="blue-gradient_text font-semibold drop-shadow">
  //         Rasim
  //       </span>{" "}
  //       👋
  //     </h1>

  //     <div className="mt-5 flex flex-col gap-3 text-slate-500">
  //       <p>
  //         Web Developer based in Azerbaijan, specializing in technical education
  //         through hands-on learning and building applications.
  //       </p>
  //     </div>

  //     <div className="py-10 flex flex-col">
  //       <h3 className="subhead-text">My Skills</h3>

  //       <div className="mt-16 flex flex-wrap gap-12">
  //         {skills.map((skill) => (
  //           <div className="block-container w-20 h-20" key={skill.name}>
  //             <div className="btn-back rounded-xl" />
  //             <div className="btn-front rounded-xl flex justify-center items-center">
  //               <img
  //                 src={skill.imageUrl}
  //                 alt={skill.name}
  //                 className="w-1/2 h-1/2 object-contain"
  //               />
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>

  //     <div className="py-16">
  //       <h3 className="subhead-text">Work Experience.</h3>
  //       <div className="mt-5 flex flex-col gap-3 text-slate-500">
  //         <p>
  //           I've worked with all sorts of companies, leveling up my skills and
  //           teaming up with smart people. Here's the rundown:
  //         </p>
  //       </div>

  //       <div className="mt-12 flex">
  //         <VerticalTimeline>
  //           {experiences.map((experience) => (
  //             <VerticalTimelineElement
  //               key={experience.company_name}
  //               date={experience.date}
  //               iconStyle={{ background: experience.iconBg }}
  //               icon={
  //                 <div className="flex justify-center items-center w-full h-full">
  //                   <img
  //                     src={experience.icon}
  //                     alt={experience.company_name}
  //                     className="w-[60%] h-[60%] object-contain"
  //                   />
  //                 </div>
  //               }
  //               contentStyle={{
  //                 borderBottom: "8px",
  //                 borderStyle: "solid",
  //                 borderBottomColor: experience.iconBg,
  //                 boxShadow: "none",
  //               }}
  //             >
  //               <div>
  //                 <h3 className="text-black text-xl font-poppins font-semibold">
  //                   {experience.title}
  //                 </h3>
  //                 <p
  //                   className="text-black-500 font-medium text-base"
  //                   style={{ margin: 0 }}
  //                 >
  //                   {experience.company_name}
  //                 </p>
  //               </div>

  //               <ul className="my-5 list-disc ml-5 space-y-2">
  //                 {experience.points.map((point, index) => (
  //                   <li
  //                     key={`experience-point-${index}`}
  //                     className="text-black-500/50 font-normal pl-1 text-sm"
  //                   >
  //                     {point}
  //                   </li>
  //                 ))}
  //               </ul>
  //             </VerticalTimelineElement>
  //           ))}
  //         </VerticalTimeline>
  //       </div>
  //     </div>

  //     <div className="py-10">
  //       <h3 className="subhead-text">Rate My Portfolio</h3>
  //       {submitted ? (
  //         <div className="text-green-500">Thank you for your feedback!</div>
  //       ) : (
          // <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-4">
          //   <div className="flex gap-4 mt-4">
          //     {[...Array(5)].map((_, index) => (
          //       <Star
          //         key={index}
          //         filled={index < rating}
          //         onClick={() => handleRating(index + 1)}
          //       />
          //     ))}
          //   </div>

          //   {error && <p className="text-red-500">{error}</p>}

          //   <button
          //     type="submit"
          //     disabled={loading}
          //     className={`relative flex items-center justify-center py-3 px-6 font-semibold text-white rounded-lg shadow-lg transition-transform transform ${
          //       loading
          //         ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait"
          //         : "bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 active:scale-95"
          //     }`}
          //   >
          //     {loading ? (
          //       <>
          //         <svg
          //           className="w-5 h-5 mr-3 animate-spin"
          //           xmlns="http://www.w3.org/2000/svg"
          //           fill="none"
          //           viewBox="0 0 24 24"
          //           stroke="currentColor"
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             strokeWidth={1.5}
          //             d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
          //           />
          //         </svg>
          //         Sending...
          //       </>
          //     ) : (
          //       "Submit"
          //     )}
          //   </button>
          // </form>
//           <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-4">
//   <div className="flex gap-4 mt-4">
//     {[...Array(5)].map((_, index) => (
//       <Star
//         key={index}
//         filled={index < rating}
//         onClick={() => handleRating(index + 1)}
//       />
//     ))}
//   </div>

//   {error && <p className="text-red-500">{error}</p>}

//   <button
//     type="submit"
//     disabled={loading}
//     className={`relative flex items-center justify-center py-3 px-6 font-semibold text-white rounded-lg shadow-lg transition-transform transform ${
//       loading
//         ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait"
//         : "bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 active:scale-95"  
//     } w-auto max-w-xs`}
//   >
//     {loading ? (
//       <>
//         <svg
//           className="w-5 h-5 mr-3 animate-spin"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={1.5}
//             d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
//           />
//         </svg>
//         Sending...
//       </>
//     ) : (
//       "Submit"
//     )}
//   </button>
// </form>

//         )}
//       </div>

//       <hr className="border-slate-200" />

//       <CTA />
//     </section>
//   );
// };

// const Star = ({ filled, onClick }) => (
//   <svg
//     onClick={onClick}
//     xmlns="http://www.w3.org/2000/svg"
//     fill={filled ? "gold" : "none"}
//     viewBox="0 0 24 24"
//     strokeWidth={1.5}
//     stroke="currentColor"
//     className="w-8 h-8 cursor-pointer"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.074 6.368a1 1 0 00.95.69h6.684c.969 0 1.372 1.24.588 1.81l-5.41 3.937a1 1 0 00-.364 1.118l2.073 6.368c.3.921-.755 1.688-1.54 1.118l-5.41-3.937a1 1 0 00-1.176 0l-5.41 3.937c-.784.57-1.839-.197-1.54-1.118l2.073-6.368a1 1 0 00-.364-1.118l-5.41-3.937c-.784-.57-.38-1.81.588-1.81h6.684a1 1 0 00.95-.69l2.074-6.368z"
//     />
//   </svg>
// );

// export default About;

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { CTA } from "../components";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      to_name: "Rasim Abiyev",
      to_email: "abiyev.rasim@gmail.com",
      rating: rating,
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setRating(0);
        },
        (error) => {
          setLoading(false);
          setError(
            "An error occurred while sending your feedback. Please try again."
          );
        }
      );
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Rasim
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Web Developer based in Azerbaijan, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      {/* Multiple Download CV Buttons */}
      <div className="py-6 space-y-4">
        <a
          href="/Rasim_Abiyev_CV_EN.pdf"
          download
          className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Download CV - English language
        </a>
        <a
          href="/Rasim_Abiyev_CV_AZ.pdf"
          download
          className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-transform"
        >
          Download CV - Azerbaijani language
        </a>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">Rate My Portfolio</h3>
        {submitted ? (
          <div className="text-green-500">Thank you for your feedback!</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col mt-4 gap-4">
            <div className="flex gap-4 mt-4">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  filled={index < rating}
                  onClick={() => handleRating(index + 1)}
                />
              ))}
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`relative flex items-center justify-center py-3 px-6 font-semibold text-white rounded-lg shadow-lg transition-transform transform ${
                loading
                  ? "bg-gradient-to-r from-gray-500 to-gray-700 cursor-wait"
                  : "bg-gradient-to-r from-blue-400 to-blue-600 hover:scale-105 active:scale-95"
              } w-auto max-w-xs`}
            >
              {loading ? (
                <>
                  <svg
                    className="w-5 h-5 mr-3 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 12a8 8 0 0116 0 8 8 0 01-16 0z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        )}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

const Star = ({ filled, onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "gold" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 cursor-pointer"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.074 6.368a1 1 0 00.95.69h6.684c.969 0 1.372 1.24.588 1.81l-5.41 3.937a1 1 0 00-.364 1.118l2.073 6.368c.3.921-.755 1.688-1.54 1.118l-5.41-3.936a1 1 0 00-1.176 0l-5.41 3.936c-.785.57-1.84-.197-1.54-1.118l2.074-6.368a1 1 0 00-.364-1.118l-5.41-3.937c-.784-.57-.381-1.81.588-1.81h6.684a1 1 0 00.95-.69l2.074-6.368z"
    />
  </svg>
);

export default About;