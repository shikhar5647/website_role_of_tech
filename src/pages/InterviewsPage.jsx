import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mic, Camera, ChevronRight, X, MessageSquare, User,
  Quote, ImageIcon
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import './InterviewsPage.css';

// Placeholder interviews — replace with your actual interview data
const interviews = [
  {
    id: 1,
    name: 'Dr . Santosh Kumar Varanasi ',
    role: 'Faculty Member, Department of Chemical engineering ',
    date: 'March 2025',
    thumbnail: null, // Replace with actual image path: '/interviews/photo1.jpg'
    summary:
      'Discussion on campus water infrastructure, the role of PHED, and faculty perspectives on water availability at IIT Jodhpur.',
    transcript: `[Replace this with your actual interview transcript]

Q: How do you perceive the water supply situation at IIT Jodhpur?

A: [Interviewee response]

Q: Are you aware of where the campus water comes from?

A: [Interviewee response]

Q: Have you experienced any water-related disruptions on campus?

A: [Interviewee response]

Q: What do you think about the long-term sustainability of water supply here?

A: [Interviewee response]`,
  },
  {
    id: 2,
    name: 'Interview Subject 2',
    role: 'Infrastructure Engineer / Campus Planner',
    date: 'March 2025',
    thumbnail: null,
    summary:
      'Insights into the planning of campus water systems, dependence on IGNP, and risk assessment for canal failure scenarios.',
    transcript: `[Replace this with your actual interview transcript]

Q: What role did water availability play in the planning of IIT Jodhpur's campus?

A: [Interviewee response]

Q: How is the water supply to the campus institutionally managed?

A: [Interviewee response]

Q: What contingency plans exist for water supply disruptions?

A: [Interviewee response]`,
  },
  {
    id: 3,
    name: 'Interview Subject 3',
    role: 'Student, B.Tech / M.Tech',
    date: 'March 2025',
    thumbnail: null,
    summary:
      'Student perspectives on daily water usage, awareness of the Indira Gandhi Canal, and visibility of water infrastructure.',
    transcript: `[Replace this with your actual interview transcript]

Q: Do you ever think about where the water on campus comes from?

A: [Interviewee response]

Q: Have you experienced water scarcity or disruptions on campus?

A: [Interviewee response]

Q: Were you aware of the Indira Gandhi Canal before this conversation?

A: [Interviewee response]`,
  },
  {
    id: 4,
    name: 'Interview Subject 4',
    role: 'Staff Member, Estate Section',
    date: 'March 2025',
    thumbnail: null,
    summary:
      'Behind-the-scenes management of water distribution, daily challenges, and interactions with PHED and external agencies.',
    transcript: `[Replace this with your actual interview transcript]

Q: Can you walk us through how water reaches the campus daily?

A: [Interviewee response]

Q: What are the main challenges in managing water supply on campus?

A: [Interviewee response]

Q: How do you coordinate with PHED and other agencies?

A: [Interviewee response]`,
  },
];

// Placeholder gallery — replace with your actual photos
const gallery = [
  {
    id: 1,
    src: '/gallery/meeting_sir.jpeg', 
    caption: 'Meet with Santosh sir',
  },
  {
    id: 2,
    src: null,
    caption: 'IIT Jodhpur Campus Aerial View — Add your photo here',
  },
  {
    id: 3,
    src: null,
    caption: 'Water Storage Infrastructure on Campus — Add your photo here',
  },
  {
    id: 4,
    src: null,
    caption: 'Interview in Progress — Add your photo here',
  },
  {
    id: 5,
    src: null,
    caption: 'Canal Distribution Network — Add your photo here',
  },
  {
    id: 6,
    src: null,
    caption: 'Campus Landscaping & Water Usage — Add your photo here',
  },
];

export default function InterviewsPage() {
  const [selectedInterview, setSelectedInterview] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="interviews-page">
      {/* Hero */}
      <section className="interviews-hero">
        <div className="interviews-hero-bg" />
        <motion.div
          className="interviews-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">Field Research</span>
          <h1>Interviews & Documentation</h1>
          <p>
            Primary research conducted through interviews with faculty, students, staff,
            and infrastructure planners at IIT Jodhpur — exploring perceptions and
            dependencies on canal-linked water.
          </p>
        </motion.div>
      </section>

      {/* Interview Cards */}
      <section className="interviews-section">
        <SectionHeader
          tag="Interviews"
          title="Conversations & Perspectives"
          subtitle="Click on any interview to read the full transcript."
        />

        <div className="interview-grid">
          {interviews.map((interview, i) => (
            <motion.div
              key={interview.id}
              className="interview-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedInterview(interview)}
            >
              <div className="interview-card-avatar">
                {interview.thumbnail ? (
                  <img src={interview.thumbnail} alt={interview.name} />
                ) : (
                  <User size={32} />
                )}
              </div>
              <div className="interview-card-body">
                <h3>{interview.name}</h3>
                <p className="interview-role">{interview.role}</p>
                <p className="interview-date">{interview.date}</p>
                <p className="interview-summary">{interview.summary}</p>
                <span className="interview-read-more">
                  Read Transcript <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Transcript Modal */}
      <AnimatePresence>
        {selectedInterview && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedInterview(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedInterview(null)}
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <div className="modal-avatar">
                  {selectedInterview.thumbnail ? (
                    <img
                      src={selectedInterview.thumbnail}
                      alt={selectedInterview.name}
                    />
                  ) : (
                    <User size={28} />
                  )}
                </div>
                <div>
                  <h2>{selectedInterview.name}</h2>
                  <p className="modal-role">{selectedInterview.role}</p>
                  <p className="modal-date">{selectedInterview.date}</p>
                </div>
              </div>

              <div className="modal-summary">
                <Quote size={16} />
                <p>{selectedInterview.summary}</p>
              </div>

              <div className="modal-transcript">
                <h3>
                  <MessageSquare size={16} /> Full Transcript
                </h3>
                <pre>{selectedInterview.transcript}</pre>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Gallery */}
      <section className="interviews-section interviews-section-alt">
        <SectionHeader
          tag="Gallery"
          title="Photo Documentation"
          subtitle="Visual documentation from our field research and campus observations."
        />

        <div className="gallery-grid">
          {gallery.map((photo, i) => (
            <motion.div
              key={photo.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => photo.src && setLightboxImage(photo)}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.caption} />
              ) : (
                <div className="gallery-placeholder">
                  <ImageIcon size={40} />
                  <span>Add Photo</span>
                </div>
              )}
              <div className="gallery-caption">
                <Camera size={12} />
                <span>{photo.caption}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="gallery-instruction">
          <p>
            <strong>To add your photos:</strong> Place your images in the{' '}
            <code>public/gallery/</code> folder and update the <code>gallery</code> array
            in <code>src/pages/InterviewsPage.jsx</code> with the correct file paths and
            captions. Similarly, update the <code>interviews</code> array with your actual
            interview transcripts and subject details.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <img src={lightboxImage.src} alt={lightboxImage.caption} />
              <p>{lightboxImage.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Methodology Note */}
      <section className="interviews-section">
        <SectionHeader
          tag="Methodology"
          title="Research Methodology"
          subtitle="How we conducted our field research."
        />

        <div className="methodology-box">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="methodology-grid">
              <div className="methodology-item">
                <Mic size={20} />
                <h4>Semi-Structured Interviews</h4>
                <p>
                  We conducted semi-structured interviews with faculty members, students,
                  campus staff (especially those involved in infrastructure management), and
                  administrative personnel. This format allowed for both guided inquiry around
                  our research questions and the flexibility to follow emergent themes.
                </p>
              </div>
              <div className="methodology-item">
                <Camera size={20} />
                <h4>Visual Documentation</h4>
                <p>
                  Photographs were taken of campus water infrastructure (overhead tanks, pipelines,
                  water treatment areas), landscaping, and the broader desert environment surrounding
                  the campus. These images serve as visual evidence of the infrastructure that
                  sustains institutional life.
                </p>
              </div>
              <div className="methodology-item">
                <MessageSquare size={20} />
                <h4>Thematic Analysis</h4>
                <p>
                  Interview responses were analysed using thematic coding, identifying recurring
                  themes around visibility/invisibility of water, assumptions about supply,
                  and awareness of the IGNP. Responses were interpreted through the STS
                  theoretical framework outlined on the Campus page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
