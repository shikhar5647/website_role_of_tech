import { motion } from 'framer-motion';
import { User, GraduationCap, Mail, BookOpen } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './TeamPage.css';

// Replace with your actual team member details
const teamMembers = [
  {
    name: 'Shikhar Dave',
    role: 'Research , Interviews and website coding ',
    branch: 'B.Tech, Department of Chemical Engineering',
    email: 'b22ch032@iitj.ac.in',
    photo: '/photos/profile_pic.jpeg', // Replace with: '/team/member1.jpg'
  },
  {
    name: 'Karan Pratap Singh Rathore',
    role: 'Interviews & Documentation',
    branch: 'B.Tech, Department of Chemical Engineering',
    email: 'b22ch013@iitj.ac.in',
    photo: null,
  },
  {
    name: 'Devam Patel',
    role: 'Web Development & Design',
    branch: 'B.Tech, Department of Chemical Engineering',
    email: 'b22ch021@iitj.ac.in',
    photo: null,
  },
  {
    name: 'Dhruv Kumar Singh',
    role: 'Field Research & Photography',
    branch: 'B.Tech, Department of Chemical Engineering ',
    email: 'b22ch010@iitj.ac.in',
    photo: null,
  },
  {
    name: 'Avichal Sinha',
    role: 'Data Analysis & Writing',
    branch: 'B.Tech, Department of Chemical Engineering',
    email: 'b22ch004@iitj.ac.in',
    photo: null,
  },
  {
    name: 'Ishaan Pandey',
    role: 'Literature Review & Citations',
    branch: 'B.Tech, Department of Civil and Infrastructure Engineering',
    email: 'b22ci017@iitj.ac.in',
    photo: null,
  },
];

const faculty = {
  name: 'Prof. Rachel Philip',
  designation: 'Course Instructor',
  department: 'School of Liberal Arts',
  institution: 'Indian Institute of Technology, Jodhpur',
  photo: null, // Replace with actual photo path
};

export default function TeamPage() {
  return (
    <div className="team-page">
      {/* Hero */}
      <section className="team-hero">
        <div className="team-hero-bg" />
        <motion.div
          className="team-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">The People Behind the Project</span>
          <h1>Our Team</h1>
          <p>
            A group of six students from IIT Jodhpur, working under faculty guidance
            to explore the invisible infrastructure that sustains our campus.
          </p>
        </motion.div>
      </section>

      {/* Faculty Advisor */}
      <section className="team-section">
        <SectionHeader
          tag="Faculty Advisor"
          title="Course Instructor"
          subtitle="Under whose guidance this research project was undertaken."
        />

        <motion.div
          className="faculty-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="faculty-avatar">
            {faculty.photo ? (
              <img src={faculty.photo} alt={faculty.name} />
            ) : (
              <GraduationCap size={40} />
            )}
          </div>
          <div className="faculty-info">
            <h2>{faculty.name}</h2>
            <p className="faculty-designation">{faculty.designation}</p>
            <p className="faculty-dept">{faculty.department}</p>
            <p className="faculty-inst">{faculty.institution}</p>
          </div>
        </motion.div>
      </section>

      {/* Team Members */}
      <section className="team-section team-section-alt">
        <SectionHeader
          tag="Team"
          title="Student Researchers"
          subtitle="Cluster B — IIT Jodhpur team exploring the canal-campus nexus."
        />

        <div className="team-grid">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="team-card-avatar">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} />
                ) : (
                  <User size={32} />
                )}
              </div>
              <h3>{member.name}</h3>
              <p className="team-card-role">{member.role}</p>
              <p className="team-card-branch">
                <BookOpen size={14} />
                {member.branch}
              </p>
              <p className="team-card-email">
                <Mail size={14} />
                {member.email}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Acknowledgements */}
      <section className="team-section">
        <SectionHeader
          tag="Acknowledgements"
          title="With Gratitude"
        />

        <motion.div
          className="acknowledgements-box"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p>
            We extend our sincere gratitude to our course instructor for their guidance
            throughout this project. We also thank the faculty members, staff, and fellow
            students of IIT Jodhpur who participated in our interviews and shared their
            valuable perspectives.
          </p>
          <p>
            Special thanks to the infrastructure and estate section of IIT Jodhpur for their
            cooperation in helping us understand the campus water supply system, and to the
            PHED officials who provided insights into the broader water distribution network.
          </p>
          <p>
            This project is part of the course <strong>"The Role of Technology in Development"</strong>,
            offered by the Department of Humanities and Social Sciences at IIT Jodhpur.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
