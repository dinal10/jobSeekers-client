import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jobListing } from "../fetching/job_listing";
import image from "../assets/landingpage.jpg"

export default function Home() {
  const [jobCard, setJobCard] = useState([]);

  const navigate = useNavigate();

  function handleButton(path) {
    navigate(path);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobListing();
        setJobCard(data.job_listing.slice(0, 6));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      {/* Heading */}
      <div className="background-home bg-[#001C30] bg-opacity-25 max-w-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 w-full h-[40%] shadow-md flex justify-center items-center flex-row">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:items-center lg:gap-x-16 min-h-[500px]">
          <div className="landing-text mx-auto max-w-2lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-7xl text-[#001C30]">
              Find your career path
            </h2>

            <p className="mt-4 text-gray-600">
              Initiate your journey towards your dream job by uncovering your
              talents through BakatLacak. Exceptional companies, esteemed and
              well-established, actively seek your presence, offering an
              integrated platform for your success.
            </p>

            <button
              onClick={() => handleButton("/job")}
              className="mt-8 inline-block rounded bg-[#001C30] px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </button>
          </div>
          
          {/* <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-[#176B87] p-4 shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white"
              href="/job"
            >
              <span className="inline-block rounded-lg bg-[#001C30] text-white p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Full Time</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-[#176B87] p-4 shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-[#001C30] text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Range Salary 6 - 8</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-[#176B87] p-4 shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-[#001C30] text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21 13.2422V20H22V22H2V20H3V13.2422C1.79401 12.435 1 11.0602 1 9.5C1 8.67286 1.22443 7.87621 1.63322 7.19746L4.3453 2.5C4.52393 2.1906 4.85406 2 5.21132 2H18.7887C19.1459 2 19.4761 2.1906 19.6547 2.5L22.3575 7.18172C22.7756 7.87621 23 8.67286 23 9.5C23 11.0602 22.206 12.435 21 13.2422ZM19 13.9725C18.8358 13.9907 18.669 14 18.5 14C17.2409 14 16.0789 13.478 15.25 12.6132C14.4211 13.478 13.2591 14 12 14C10.7409 14 9.5789 13.478 8.75 12.6132C7.9211 13.478 6.75911 14 5.5 14C5.331 14 5.16417 13.9907 5 13.9725V20H19V13.9725ZM5.78865 4L3.35598 8.21321C3.12409 8.59843 3 9.0389 3 9.5C3 10.8807 4.11929 12 5.5 12C6.53096 12 7.44467 11.3703 7.82179 10.4295C8.1574 9.59223 9.3426 9.59223 9.67821 10.4295C10.0553 11.3703 10.969 12 12 12C13.031 12 13.9447 11.3703 14.3218 10.4295C14.6574 9.59223 15.8426 9.59223 16.1782 10.4295C16.5553 11.3703 17.469 12 18.5 12C19.8807 12 21 10.8807 21 9.5C21 9.0389 20.8759 8.59843 20.6347 8.19746L18.2113 4H5.78865Z"></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Part Time</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
            <a
              className="block rounded-xl border border-[#176B87] p-4 shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-[#001C30] text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                  />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Fresh Graduate</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-[#176B87] p-4 shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-[#001C30] text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  fill="white"
                >
                  <path d="M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z"></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Developer</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
            <a
              className="block rounded-xl border border-[#176B87] p-4 shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white"
              href="/accountant"
            >
              <span className="inline-block rounded-lg bg-[#001C30] text-white p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Analyst</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
          </div> */}
        </div>
      </div>
      {/* Heading End */}

      {/* Flow */}
      <div className="min-h-screen w-full flex flex-col justify-center items-center py-10 bg-black">
        <h1 className="text-3xl font-bold sm:text-4xl text-white mb-[50px]">
          How exactly you apply for the job
        </h1>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="flex flex-col p-5 justify-center items-center rounded-md border border-[#176B87]  shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white ">
            <svg
              className="h-[100px] w-[100px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="resume"
            >
              <path d="M4.5 32h23a.5.5 0 0 0 .5-.5v-27a.5.5 0 0 0-.5-.5H21v-.5a.5.5 0 0 0-.5-.5H18c0-1.103-.897-2-2-2s-2 .897-2 2h-2.5a.5.5 0 0 0-.5.5V4H4.5a.5.5 0 0 0-.5.5v27a.5.5 0 0 0 .5.5zM14.592 4a.501.501 0 0 0 .471-.667A1.004 1.004 0 0 1 15 3c0-.551.449-1 1-1s1 .449 1 1c0 .104-.021.213-.063.333a.501.501 0 0 0 .471.667H20v2h-8V4h2.592zM5 5h6v1.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V5h6v26H5V5z"></path>
              <path d="M25.5 6h-3a.5.5 0 0 0 0 1H25v22H7V7h2.5a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-23a.5.5 0 0 0-.5-.5z"></path>
              <path d="m9.544 10.153.286 1.046c.011.042.048.066.069.102v.555c0 .586.245 1.115.636 1.495v.519l-1.392.522a1.779 1.779 0 0 0-1.148 1.658v1.45a.5.5 0 0 0 1 0v-1.45c0-.319.201-.609.5-.721l.534-.2a2.71 2.71 0 0 0 1.959.858c.752 0 1.452-.325 1.962-.863l.545.204c.299.112.5.402.5.721v1.45a.5.5 0 0 0 1 0v-1.45c0-.733-.461-1.4-1.148-1.658l-1.407-.528v-.513c.39-.379.634-.908.634-1.494v-.52a.508.508 0 0 0 .068-.164l.297-1.379c.062-.336-.013-.676-.21-.956s-.491-.465-.829-.521l-1.81-.302a1.249 1.249 0 0 0-1.394.843 1.13 1.13 0 0 0-.652 1.296zm3.53 1.703c0 .397-.224.73-.543.92-.058.034-.114.07-.176.093a1.113 1.113 0 0 1-.272.055 1.058 1.058 0 0 1-.195 0 1.088 1.088 0 0 1-.27-.055c-.061-.022-.117-.058-.174-.092a1.073 1.073 0 0 1-.545-.921v-.289h2.175v.289zm-1.955 2.864.092-.035a.5.5 0 0 0 .324-.468v-.323l.01.001c.143.031.29.049.442.049h.001l.014-.001c.147-.001.29-.018.429-.048l.01-.001v.324c0 .219.142.399.338.467l.002.001.083.031a1.867 1.867 0 0 1-1.745.003zm-.579-4.905a.115.115 0 0 1 .094-.045c.276 0 .5-.244.5-.52 0-.102.056-.164.089-.192a.243.243 0 0 1 .205-.057l1.81.302c.096.016.15.076.174.11a.26.26 0 0 1 .048.186l-.209.968h-2.556l-.179-.651a.116.116 0 0 1 .024-.101zM17.5 12h6a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5zm.5-2h5v1h-5v-1zm6 9.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-2zM23 21H9v-1h14v1zm.5-8h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-6 1h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm3 9h-10a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm-11.65.149a.503.503 0 0 0-.7 0A.473.473 0 0 0 8 23.5c0 .069.01.13.04.189.02.061.06.12.11.16.04.05.1.09.16.11.06.031.12.041.19.041s.13-.01.19-.04a.372.372 0 0 0 .16-.11c.05-.04.09-.1.11-.16.03-.06.04-.121.04-.19 0-.13-.05-.26-.15-.351zM20.5 25h-10a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm-11.65.149a.503.503 0 0 0-.7 0A.473.473 0 0 0 8 25.5c0 .14.05.26.15.35.09.1.22.15.35.15.07 0 .13-.01.19-.04a.372.372 0 0 0 .16-.11c.05-.04.09-.1.11-.16.03-.06.04-.121.04-.19 0-.13-.05-.26-.15-.351zM20.5 27h-10a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1zm3-4h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm0 2h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-15.19.04c-.06.02-.12.06-.16.109-.1.091-.15.221-.15.351s.05.26.15.35c.09.1.22.15.35.15.13 0 .26-.05.35-.15.1-.09.15-.22.15-.35s-.05-.26-.15-.351a.479.479 0 0 0-.54-.109zM17.5 16h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zm0 2h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z"></path>
            </svg>
            <h2 className="font-bold py-2 text-2xl ">1. Drop Your CV</h2>
          </div>

          <div className="flex flex-col p-5 justify-center items-center rounded-md border border-[#176B87]  shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-[100px] w-[100px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h2 className="font-bold py-2 text-2xl ">
              2. Wait for response
            </h2>
          </div>

          <div className="flex flex-col p-5 justify-center items-center rounded-md border border-[#176B87]  shadow-md hover:border-[#001C30] hover:ring-1 hover:ring-blue-200 focus:outline-none focus:ring hover:shadow-[#001c3094] bg-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-[100px] w-[100px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>

            <h2 className="font-bold py-2 text-2xl ">3. Get Accepted</h2>
          </div>
        </div>
        <div className="flex justify-center">
        <button
          onClick={() => handleButton("/job")}
          className="mt-20 inline-block uppercase rounded-full bg-white px-8 py-4 text-xl text-black transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          find your next job
        </button>
      </div>

      </div>
      {/* Flow End */}

      {/* Job Overview */}
      <h1 className="bg-mint flex justify-center text-3xl font-bold sm:text-4xl text-black pt-10 pb-4">
          Available Jobs
      </h1>
      <div className="bg-mint pb-20 pt-10 flex flex-wrap flex-row justify-center shadow-md">
        
        {jobCard.map((jobCard) => (
          <div
            className="w-[30%] h-[60%] my-4 flex flex-col items-center job-card"
            key={jobCard.id}
          >
            <div className="w-[90%] group bg-black p-4 rounded-xl">
              <div className="flex items-center gap-x-2">
                <img
                  className="aspect-[2/2] w-16"
                  src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {jobCard.CompanyProfile?.name}
                  </h3>
                  <span className="text-xs text-white">{jobCard.location}</span>
                </div>
              </div>
              <div className="my-4">
                <h3 className="text-2xl font-medium text-white">
                  {jobCard.title}
                </h3>

                <div className="mt-2 text-sm text-white">
                  {jobCard.salary_start} - {jobCard.salary_end}
                </div>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => handleButton("/job")}
          className="outline mt-10 inline-block uppercase rounded-full bg-black px-8 py-4 text-xl text-white border-solid-white transition hover:bg-white hover:text-black hover:outline-black"
        >
          more jobs
        </button>
      </div>
    </section>
  );
}
