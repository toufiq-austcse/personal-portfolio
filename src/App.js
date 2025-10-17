

import portfolioData from './data/portfolio.json';

function App() {
  const { personal, navigation, about, workExperience } = portfolioData;

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Header Navigation */}
      <header className="border-b border-gray-700 p-4 md:p-6">
        <nav className="flex flex-col lg:flex-row justify-between items-start lg:items-center max-w-6xl mx-auto gap-4 lg:gap-0">
          <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="text-left lg:text-right text-xs md:text-sm order-1 lg:order-2 w-full lg:w-auto">
            <div className="mb-1">{personal.contact.website}</div>
            <div className="mb-1 break-all">{personal.contact.email}</div>

            <div>{personal.contact.location}</div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 mb-12 md:mb-16">
          {/* <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="w-full h-full object-cover grayscale"
            />
          </div> */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 break-words">
              &lt;{personal.name}&gt;
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              //{personal.title}
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-12 md:mb-16">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-400">
            {about.title}
          </h2>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base max-w-full ">
            {about.content}
          </p>
        </section>

        {/* Work Experience Section */}
        <section>
          <h2 className="text-lg md:text-xl font-bold mb-6 text-gray-400">
            {workExperience.title}
          </h2>

          <div className="space-y-6 md:space-y-8">
            {workExperience.jobs.map((job) => (
              <div key={job.id} className="border border-gray-700  p-4 md:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-4 mb-4">
                  <span className="text-gray-400 text-sm md:text-base order-2 sm:order-1">
                    {job.period}
                  </span>
                  <span className="border border-gray-600 px-3 py-1  text-xs md:text-sm order-1 sm:order-2 self-start">
                    {job.company} //{job.position} //{job.location}
                  </span>
                </div>

                <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">
                  {job.description}
                </p>

                <div className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base mb-4">
                  {job.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <span className="text-white  flex-shrink-0">●</span>
                      <p className="leading-relaxed">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="text-xs md:text-sm text-gray-500">
                   {job.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
