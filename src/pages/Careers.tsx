import '../styles/Careers.css';

export default function Careers() {
  /*
    HOW TO ADD A CAREERS POST (step-by-step):
    1) Add a new object inside the `jobs` array below.
    2) Give it a unique `id` (number).
    3) Provide `title`, `location`, and `description`.
    4) Save the file. The new card will render automatically.

    Example:
    {
      id: 5,
      title: 'Control Room Operator',
      location: 'Boitumelo Corporate House, 25 President Brand St, Bloemfontein, Free State, 9301',
      description: 'Monitor alarms, dispatch responses, and log incident reports.'
    }
  */
  // Open role listings rendered as cards.
  const jobs = [
    {
      id: 1,
      title: 'Security Guard',
      description: 'We are hiring experienced security guards for various locations.',
    },
    {
      id: 2,
      title: 'CCTV Technician',
      description: 'Install and maintain CCTV systems across our client locations.',
    },
    {
      id: 3,
      title: 'Security Supervisor',
      description: 'Lead and manage security teams with this supervisory role.',
    },
    {
      id: 4,
      title: 'Operations Manager',
      description: 'Manage day-to-day operations and coordinate with teams.',
    },
  ];

  return (
    <div className="careers">
      {/* Hero intro */}
      <section className="page-hero radar-hero">
        <div className="page-hero__content radar-hero__content">
          <p className="page-hero__eyebrow">Careers</p>
          <h1>Careers at Gubis85 Security Service</h1>
          <p className="page-hero__subtext">
            Join a mission-driven team delivering trusted protection and innovative security solutions.
          </p>
        </div>
      </section>

      {/* Benefits overview */}
      <section className="why-join">
        <h2>Why Join Our Team?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h3>Competitive Pay</h3>
            <p>We offer competitive salaries and benefits packages</p>
          </div>
          <div className="benefit">
            <h3>Professional Growth</h3>
            <p>Opportunities for training and career advancement</p>
          </div>
          <div className="benefit">
            <h3>Great Team</h3>
            <p>Work with dedicated professionals in a supportive environment</p>
          </div>
          <div className="benefit">
            <h3>Benefits</h3>
            <p>Health insurance, retirement plans, and more</p>
          </div>
        </div>
      </section>

      {/* Current vacancies */}
      <section className="open-positions">
        <h2>Open Positions</h2>
        <div className="jobs-list">
          {jobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
              </div>
              <p>{job.description}</p>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="join-us">
        <h2>Interested in Joining Us?</h2>
        <p>Send your resume to careers@gubis85security.com</p>
      </section>
    </div>
  );
}
