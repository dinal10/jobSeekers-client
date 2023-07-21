/* eslint-disable react/prop-types */


export default function ApplyCard({ applications }) {
  return (
    <div className="w-full h-full max-w-xs shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="w-full h-full group bg-black p-4 rounded-sm job-card rounded-xl">
        <div className="flex items-center gap-x-2">
          <img
            className="aspect-[2/2] w-16"
            src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
            alt="Company Logo"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              {applications.CompanyProfile?.name}
            </h3>
            <span className="text-xs text-white">{applications.location}</span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-medium text-white">
            {applications.title}
          </h3>
          <div className="mt-2 text-sm text-white">
            {applications.salary_start} - {applications.salary_end}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-white">
          {applications.JobApplications.map((application) => (
          <div className="flex items-center uppercase" key={application.id}>
            {application.status === 'applied' && (
              <div className="text-green-500 mr-1">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 16.17l-4.17-4.17-1.41 1.41 5.58 5.59 12-12-1.41-1.42z" />
                </svg>
              </div>
            )}
            {application.status === 'accepted' && (
              <div className="text-white mr-1">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M9 16.17l-4.17-4.17-1.41 1.41 5.58 5.59 12-12-1.41-1.42z" />
                </svg>
              </div>
            )}
            {application.status === 'review' && (
              <div className="text-yellow-500 mr-1">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 17c0 .55-.45 1-1 1s-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v5zm0-8c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1zm0-4c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1z" />
                </svg>
              </div>
            )}
            {application.status === 'rejected' && (
              <div className="text-red-500 mr-1">
                <svg
                  className="w-5 h-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.06l-2.47-2.47 1.41-1.41L11 12.25l2.47-2.47 1.41 1.41L12.41 11l2.47 2.47-1.41 1.41L11 13.75l-2.47 2.47-1.41-1.41L9.59 12l-2.47-2.47 1.41-1.41L11 10.25l2.47-2.47 1.41 1.41L12.41 9l2.47 2.47-1.41 1.41L11 11.75z" />
                </svg>
              </div>
            )}
            {application.status}
          </div>
        ))}
          </div>
        </div>
      </div>
    </div>
  );
}
