import { motion } from 'framer-motion';
import {
  Droplets, MapPin, Calendar, Ruler, Users, Landmark,
  ArrowRight, BookOpen, Waves, Mountain
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import './CanalPage.css';

const timelineData = [
  {
    year: '1948',
    title: 'Bikaner Canal Proposal',
    desc: 'Kanwar Sain, then Chairman of the Central Waterways, Irrigation and Navigation Commission (CWINC), proposed harnessing the Ravi-Beas waters to irrigate the Thar Desert region of Rajasthan.',
  },
  {
    year: '1958',
    title: 'Foundation Stone Laid',
    desc: 'The then Home Minister Govind Ballabh Pant laid the foundation stone of the Rajasthan Canal Project on 31 March 1958, marking the formal beginning of construction.',
  },
  {
    year: '1961',
    title: 'Stage I Construction Begins',
    desc: 'Construction of Stage I commenced covering 204 km of the main canal from Harike Barrage in Punjab to Masitawali Head in Rajasthan, along with distribution network.',
  },
  {
    year: '1984',
    title: 'Renamed to Indira Gandhi Canal',
    desc: 'After the assassination of Prime Minister Indira Gandhi, the Rajasthan Canal was renamed the Indira Gandhi Canal Project (IGNP) in her honour, recognizing her commitment to the project.',
  },
  {
    year: '1986',
    title: 'Stage II Completion',
    desc: 'Stage II extended the canal further 256 km, bringing the total length of the main canal to 649 km, making it one of the longest canals in the world.',
  },
  {
    year: '2000s',
    title: 'Continued Expansion',
    desc: 'Distribution networks continued to expand, eventually creating over 9,000 km of canal network covering seven districts: Barmer, Jaisalmer, Bikaner, Jodhpur, Churu, Nagaur, and Hanumangarh.',
  },
];

const statsData = [
  { icon: Ruler, label: 'Main Canal Length', value: '649 km' },
  { icon: Waves, label: 'Total Network', value: '9,060 km' },
  { icon: MapPin, label: 'Districts Served', value: '7 Districts' },
  { icon: Users, label: 'Population Benefited', value: '~2.5 Crore' },
  { icon: Mountain, label: 'Desert Area Irrigated', value: '21 lakh acres' },
  { icon: Landmark, label: 'Water Source', value: 'Harike Barrage' },
];

export default function CanalPage() {
  return (
    <div className="canal-page">
      {/* Hero Section */}
      <section className="canal-hero">
        <div className="canal-hero-bg" />
        <motion.div
          className="canal-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">The Lifeline of the Thar</span>
          <h1>The Indira Gandhi Canal Project</h1>
          <p>
            One of the most ambitious hydraulic engineering projects in modern India —
            transforming the arid Thar Desert into a habitable, cultivable landscape and
            enabling the establishment of institutions like IIT Jodhpur.
          </p>
          <div className="hero-stats">
            {statsData.slice(0, 3).map((stat, i) => (
              <motion.div
                key={stat.label}
                className="hero-stat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.15 }}
              >
                <stat.icon size={20} />
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="canal-section">
        <SectionHeader
          tag="Overview"
          title="About the Indira Gandhi Canal"
          subtitle="A transformative infrastructure project that reshaped the geography, demography, and economy of western Rajasthan."
        />

        <div className="canal-about-grid">
          <motion.div
            className="canal-about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              The <strong>Indira Gandhi Canal Project (IGNP)</strong>, originally known as the
              Rajasthan Canal, is one of the largest canal systems in the world. It originates
              from the <strong>Harike Barrage</strong> at the confluence of the Sutlej and Beas
              rivers in Punjab, carrying water across 649 km through the Thar Desert in Rajasthan.
            </p>
            <p>
              The project was envisioned to address the chronic water scarcity in western Rajasthan,
              a region that receives an average annual rainfall of merely <strong>100–350 mm</strong>.
              Before the canal, this region was largely uninhabitable for large settlements, with
              nomadic pastoralism and sparse rain-fed agriculture as the primary livelihoods.
            </p>
            <p>
              The canal has two main components: the <strong>Rajasthan Feeder Canal</strong> (204 km,
              from Harike to Masitawali in Hanumangarh) and the <strong>Main Canal</strong> (445 km,
              from Masitawali to Mohangarh in Jaisalmer). Combined with its extensive distribution
              network of over 9,000 km, the IGNP irrigates approximately 21 lakh acres (8,50,000
              hectares) of previously desert land.
            </p>
            <p>
              Beyond irrigation, the canal has been instrumental in enabling <strong>urban development,
              industrial growth, and institutional establishment</strong> in the desert region —
              including making feasible the founding of IIT Jodhpur in 2008.
            </p>
          </motion.div>

          <motion.div
            className="canal-stats-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {statsData.map((stat, i) => (
              <div key={stat.label} className="stat-card">
                <stat.icon size={22} className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="canal-section canal-section-alt">
        <SectionHeader
          tag="History"
          title="Timeline of the IGNP"
          subtitle="From vision to reality — tracing the key milestones that brought water to the desert."
        />

        <div className="timeline">
          {timelineData.map((item, i) => (
            <motion.div
              key={item.year}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <Calendar size={16} />
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>
      </section>

      {/* Technical Details */}
      <section className="canal-section">
        <SectionHeader
          tag="Engineering"
          title="Technical & Engineering Aspects"
          subtitle="The engineering marvel that channels water across 649 km of desert terrain."
        />

        <div className="cards-grid">
          <InfoCard icon={Waves} title="Hydraulic Design" delay={0}>
            <p>
              The canal is a lined canal (concrete-lined to reduce seepage losses) with a designed
              discharge capacity of 523 cumecs (18,500 cusecs) at its head. The feeder canal has
              a bed width of 73.1 metres at its head, gradually reducing as water is distributed
              along its course. The total lift of the system is managed through a series of
              regulators, falls, and cross-drainage structures.
            </p>
          </InfoCard>

          <InfoCard icon={Landmark} title="Harike Barrage" delay={0.1}>
            <p>
              The Harike Barrage, constructed in 1952 at the confluence of the Sutlej and Beas
              rivers in Punjab, serves as the headworks of the IGNP. It creates a reservoir
              (Harike Wetland, a Ramsar site) that regulates water flow into both the Rajasthan
              Feeder Canal and the Bikaner Canal. The barrage is 1,673 metres long with 46 gates.
            </p>
          </InfoCard>

          <InfoCard icon={Mountain} title="Desert Terrain Challenges" delay={0.2}>
            <p>
              Building a canal through the Thar Desert posed unique engineering challenges:
              shifting sand dunes, extreme temperatures (reaching 50°C), high evaporation rates,
              and seepage through sandy soil. The canal lining was critical — unlined sections
              experienced seepage losses of up to 50%. Wind-blown sand accumulation in the canal
              requires regular maintenance and desilting operations.
            </p>
          </InfoCard>

          <InfoCard icon={Droplets} title="Water Distribution" delay={0.3}>
            <p>
              The distribution system consists of 3,500 km of lined distribution canals, 5,500 km
              of field channels, and numerous minor canals. Water is allocated through a rotational
              distribution system (warabandi), where each farmer gets water for a fixed duration
              proportional to their landholding. This bureaucratic mediation of water is central
              to understanding how institutions like IIT Jodhpur receive their water supply.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Impact Section */}
      <section className="canal-section canal-section-alt">
        <SectionHeader
          tag="Impact"
          title="Transformative Impact"
          subtitle="How the IGNP reshaped the socio-economic and ecological landscape of western Rajasthan."
        />

        <div className="impact-grid">
          <motion.div
            className="impact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Agricultural Transformation</h3>
            <p>
              The canal transformed barren desert land into productive agricultural zones. Crops
              like wheat, mustard, cotton, and groundnut are now cultivated extensively. The
              command area produces approximately 30 lakh tonnes of food grains annually, contributing
              significantly to Rajasthan's food security.
            </p>
          </motion.div>

          <motion.div
            className="impact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>Demographic Shifts</h3>
            <p>
              The availability of water led to significant migration and settlement in previously
              uninhabitable areas. Towns like Sri Ganganagar, Hanumangarh, and areas around Jodhpur
              saw rapid population growth. The canal enabled the establishment of educational
              institutions, hospitals, and industrial units in the desert region.
            </p>
          </motion.div>

          <motion.div
            className="impact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Ecological Concerns</h3>
            <p>
              While beneficial, the canal has also raised ecological concerns. Waterlogging and
              salinity have affected about 17% of the command area. The introduction of water
              in a desert ecosystem has altered local biodiversity. Rising water tables have led
              to soil salinization in some areas, requiring drainage infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="impact-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Institutional Feasibility</h3>
            <p>
              The IGNP made it feasible to establish large institutions in the desert. IIT Jodhpur,
              founded in 2008 on a 852-acre campus at Karwar, depends on canal-linked water supply
              for its daily operations — from drinking water to landscaping. Without the IGNP,
              such institutions would face severe water constraints.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="canal-section">
        <SectionHeader
          tag="Project"
          title="About This Project"
          subtitle="An academic exploration at the intersection of technology, infrastructure, and institutional development."
        />

        <div className="project-info-box">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="project-meta">
              <div className="project-meta-item">
                <BookOpen size={18} />
                <div>
                  <strong>Course</strong>
                  <span>The Role of Technology in Development</span>
                </div>
              </div>
              <div className="project-meta-item">
                <Landmark size={18} />
                <div>
                  <strong>Institution</strong>
                  <span>Indian Institute of Technology, Jodhpur</span>
                </div>
              </div>
              <div className="project-meta-item">
                <Users size={18} />
                <div>
                  <strong>Cluster</strong>
                  <span>Cluster B — IIT Jodhpur</span>
                </div>
              </div>
            </div>

            <div className="project-rq">
              <h3>Central Research Question</h3>
              <blockquote>
                What role did the Indira Gandhi Canal play in making IIT Jodhpur feasible
                as an institution in this location? And how do students, faculty, and staff
                perceive (or not perceive) canal-linked water?
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Citations */}
      <section className="canal-section canal-section-alt">
        <SectionHeader
          tag="References"
          title="Citations & Sources"
        />

        <div className="citations-box">
          <ol>
            <li>
              Government of Rajasthan, Water Resources Department. "Indira Gandhi Nahar
              Pariyojana." <em>Official Documentation</em>, Government of Rajasthan.
            </li>
            <li>
              Narain, P., Khan, M.A., & Singh, G. (2005). "Potential for Water Conservation
              and Harvesting against Drought in Rajasthan, India."
              <em> Working Paper 104, IWMI</em>.
            </li>
            <li>
              Singh, S. (2003). "Indira Gandhi Nahar Project: An Appraisal."
              <em> Journal of Rural Development</em>, 22(1), 21–38.
            </li>
            <li>
              Central Water Commission, Government of India. "Indira Gandhi Canal Project —
              Technical Report." <em>Ministry of Water Resources</em>.
            </li>
            <li>
              Sharma, K.D. (2001). "Indira Gandhi Nahar Pariyojana — Planning and Performance."
              <em> Central Arid Zone Research Institute, Jodhpur</em>.
            </li>
            <li>
              Rathore, M.S. (2005). "State Level Analysis of Drought Policies and Impacts in
              Rajasthan, India." <em>Working Paper 93, IWMI</em>.
            </li>
            <li>
              IIT Jodhpur Official Website. "About IIT Jodhpur — Campus and Infrastructure."
              <em> Indian Institute of Technology Jodhpur</em>.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
