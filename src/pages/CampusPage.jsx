import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Droplets, AlertTriangle, Eye, EyeOff,
  HelpCircle, Wrench, Shield, ChevronDown, ChevronUp,
  GraduationCap, Users, Landmark, Pipette
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import InfoCard from '../components/InfoCard';
import './CampusPage.css';

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`accordion-item ${openIndex === i ? 'open' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          <button
            className="accordion-header"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="accordion-header-left">
              {item.icon && <item.icon size={20} />}
              <span>{item.title}</span>
            </div>
            {openIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                className="accordion-body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="accordion-content">{item.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

const researchQ1Items = [
  {
    icon: Building2,
    title: 'Infrastructural Dependencies Taken for Granted',
    content: (
      <>
        <p>
          When IIT Jodhpur was established in 2008, its initial operations began from a temporary
          campus at MBM Engineering College. The permanent campus at Karwar, spread over 852 acres,
          was planned with the assumption that adequate water supply would be available — an
          assumption fundamentally enabled by the IGNP.
        </p>
        <p>
          The campus infrastructure — including hostels housing 3000+ students, faculty residences,
          academic buildings, laboratories, a central library, sports facilities, and extensive
          landscaping — all depend on a reliable water supply. <strong>Water scarcity was not a
          central concern during planning</strong> precisely because the IGNP had already
          transformed the region's water availability. The canal had become such a naturalised
          part of the infrastructure that its role was largely invisible in institutional planning
          documents.
        </p>
        <p>
          This "taken-for-grantedness" of water infrastructure reflects what scholars in Science
          and Technology Studies (STS) call <strong>infrastructural inversion</strong> — the way
          functioning infrastructure disappears from consciousness until it breaks down (Bowker
          & Star, 1999). The IGNP, despite being the foundational enabler of the campus, operates
          largely below the threshold of attention.
        </p>
      </>
    ),
  },
  {
    icon: Pipette,
    title: 'Institutionalization of Water Supply',
    content: (
      <>
        <p>
          The water supply to IIT Jodhpur is <strong>bureaucratically mediated</strong> through
          a multi-layered institutional framework:
        </p>
        <ul>
          <li>
            <strong>Primary Source:</strong> The IGNP brings water from the Harike Barrage in
            Punjab to Rajasthan. A portion of this water is allocated to the Jodhpur city supply
            system.
          </li>
          <li>
            <strong>PHED (Public Health Engineering Department):</strong> The Rajasthan PHED is
            responsible for urban water supply. It manages the treatment and distribution of
            canal water to various consumers, including IIT Jodhpur.
          </li>
          <li>
            <strong>Jodhpur City Water Supply:</strong> Water reaches Jodhpur through the
            Rajiv Gandhi Lift Canal (a branch of the IGNP system) and is stored in reservoirs
            like the Kaylana Lake, which supplements the canal water.
          </li>
          <li>
            <strong>Campus Distribution:</strong> IIT Jodhpur has its own internal water
            distribution system with overhead tanks, underground sumps, and pumping stations
            managed by the estate section.
          </li>
        </ul>
        <p>
          This chain — from river confluence in Punjab to taps in IIT Jodhpur hostels — spans
          over 800 km and involves coordination between central and state water agencies,
          municipal bodies, and institutional estate management. Any disruption at any point
          in this chain affects the campus.
        </p>
      </>
    ),
  },
  {
    icon: AlertTriangle,
    title: 'Engineers and the Risk of Canal Failure',
    content: (
      <>
        <p>
          Infrastructure engineers and campus planners understand the risks of canal failure
          at multiple levels:
        </p>
        <ul>
          <li>
            <strong>Seasonal Variability:</strong> The canal's water flow is dependent on river
            water availability in Punjab. During lean seasons or drought years, water allocation
            to Rajasthan can be reduced, directly impacting downstream users.
          </li>
          <li>
            <strong>Infrastructure Aging:</strong> The IGNP is over 60 years old in its oldest
            sections. Canal lining deterioration, siltation, and structural damage from seismic
            activity or sand dune encroachment pose ongoing risks.
          </li>
          <li>
            <strong>Inter-State Water Disputes:</strong> As an inter-state project drawing
            water from Punjab's rivers, the IGNP is subject to political negotiations and
            legal disputes. Changes in water-sharing agreements could reduce allocations.
          </li>
          <li>
            <strong>Climate Change:</strong> Changing precipitation patterns, glacial melt
            affecting river flows, and increasing temperatures raising evaporation losses
            all threaten the long-term viability of the canal system.
          </li>
        </ul>
        <p>
          Despite these risks, there are <strong>limited contingency plans</strong> at the
          institutional level. IIT Jodhpur has groundwater borewells as backup, but groundwater
          in the Thar Desert is often saline and limited in quantity. This vulnerability
          highlights the critical dependence on the IGNP infrastructure.
        </p>
      </>
    ),
  },
];

const researchQ2Items = [
  {
    icon: Eye,
    title: 'When Does Water Become Visible?',
    content: (
      <>
        <p>
          Water becomes <strong>visible</strong> to the campus community primarily during
          moments of disruption or scarcity:
        </p>
        <ul>
          <li>
            <strong>Supply Cuts:</strong> When PHED reduces water supply or canal maintenance
            leads to temporary shutdowns, students and staff suddenly become aware of their
            dependence on external water infrastructure.
          </li>
          <li>
            <strong>Summer Months:</strong> During peak summer (April–June), when temperatures
            exceed 45°C and water demand spikes, supply-demand mismatches make water a topic
            of active conversation and complaint.
          </li>
          <li>
            <strong>Quality Issues:</strong> When water quality deteriorates — discoloration,
            unusual taste, or contamination alerts — water moves from invisible background to
            visible foreground of daily life.
          </li>
          <li>
            <strong>Construction and Expansion:</strong> As the campus continues to expand,
            water requirements for construction and new facilities make the resource allocation
            question visible to planners and administrators.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: EyeOff,
    title: 'When Does Water Disappear from Attention?',
    content: (
      <>
        <p>
          Water <strong>disappears from attention</strong> when the supply system functions
          smoothly — which is, interestingly, most of the time:
        </p>
        <ul>
          <li>
            <strong>Reliable Supply:</strong> When taps flow, water coolers work, and
            landscaping is maintained, the complex infrastructure behind this supply becomes
            invisible. Students walk past irrigated lawns without considering that this water
            travelled over 800 km from Punjab.
          </li>
          <li>
            <strong>Institutional Mediation:</strong> The estate section and administration
            handle water procurement and distribution, creating an institutional buffer that
            shields end-users from supply chain complexities.
          </li>
          <li>
            <strong>Urban Assumption:</strong> Many students and faculty come from urban
            backgrounds where piped water is normalised. They carry this assumption to the
            desert campus, rarely questioning the extraordinary infrastructure that makes
            it possible.
          </li>
        </ul>
        <p>
          This pattern reflects what scholars describe as the <strong>"paradox of
          infrastructure"</strong> — the better it works, the more invisible it becomes
          (Edwards, 2003). The IGNP's success in transforming the desert has, paradoxically,
          made its own contribution invisible.
        </p>
      </>
    ),
  },
  {
    icon: HelpCircle,
    title: 'Assumptions About Water Supply',
    content: (
      <>
        <p>
          The campus community operates with several <strong>implicit assumptions</strong>
          about water:
        </p>
        <ul>
          <li>
            <strong>"Water will always be available":</strong> Most students and faculty assume
            continuous water supply without understanding the fragility of the supply chain
            from Punjab to the campus.
          </li>
          <li>
            <strong>"It comes from the ground or the government":</strong> Many are unaware
            that their water originates from rivers in Punjab, not from local sources. The
            IGNP is often absent from campus discourse about water.
          </li>
          <li>
            <strong>"Water scarcity is a rural problem":</strong> The campus, with its modern
            amenities, creates a perception of water abundance that contrasts sharply with
            the reality of its desert location.
          </li>
          <li>
            <strong>"Technology can solve any shortage":</strong> There is a general faith
            in engineering solutions (desalination, rainwater harvesting, recycling) without
            recognising that these are supplements, not substitutes, for the canal infrastructure.
          </li>
        </ul>
        <p>
          These assumptions are not simply errors of knowledge but reflect deeper patterns of
          how <strong>modern infrastructure shapes perception</strong>. The very success of
          the IGNP in making the desert habitable has created conditions where its users can
          afford to ignore it (Star, 1999).
        </p>
      </>
    ),
  },
];

export default function CampusPage() {
  return (
    <div className="campus-page">
      {/* Hero */}
      <section className="campus-hero">
        <div className="campus-hero-bg" />
        <motion.div
          className="campus-hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">Cluster B Research</span>
          <h1>IIT Jodhpur & the Question of Water</h1>
          <p>
            Exploring how a massive hydraulic infrastructure project made a premier
            technological institution possible in the heart of the Thar Desert — and how
            that dependence remains largely invisible.
          </p>
        </motion.div>
      </section>

      {/* Campus Overview */}
      <section className="campus-section">
        <SectionHeader
          tag="Campus"
          title="IIT Jodhpur: An Institution in the Desert"
          subtitle="A premier technological institution built on the assumed availability of canal-linked water."
        />

        <div className="campus-overview-grid">
          <InfoCard icon={GraduationCap} title="Establishment" delay={0}>
            <p>
              IIT Jodhpur was established in 2008 as one of the eight new IITs created by the
              Government of India. It initially operated from a temporary campus at MBM Engineering
              College before moving to its permanent 852-acre campus at Karwar, approximately
              18 km from Jodhpur city.
            </p>
          </InfoCard>
          <InfoCard icon={Building2} title="Campus Infrastructure" delay={0.1}>
            <p>
              The permanent campus features state-of-the-art academic buildings, research
              laboratories, hostels, faculty housing, sports facilities, and extensive
              landscaping — all requiring significant water resources in a region that receives
              barely 300 mm of annual rainfall.
            </p>
          </InfoCard>
          <InfoCard icon={Droplets} title="Water Dependence" delay={0.2}>
            <p>
              The campus consumes an estimated 8–10 lakh litres of water daily for drinking,
              sanitation, laboratories, cooling systems, construction, and landscape maintenance.
              The primary source is PHED supply linked to the IGNP network and supplementary
              borewells.
            </p>
          </InfoCard>
          <InfoCard icon={Shield} title="Desert Context" delay={0.3}>
            <p>
              Jodhpur lies in the Thar Desert, one of the most arid regions in India. Without the
              IGNP, the city's growth — and by extension the feasibility of a large institution
              like IIT — would have been severely constrained by natural water limitations.
            </p>
          </InfoCard>
        </div>
      </section>

      {/* Research Question 1 */}
      <section className="campus-section campus-section-alt">
        <SectionHeader
          tag="Research Question 1"
          title="The Canal's Role in Making IIT Jodhpur Feasible"
          subtitle="What role did the Indira Gandhi Canal play in making IIT Jodhpur feasible as an institution in this location?"
        />

        <Accordion items={researchQ1Items} />
      </section>

      {/* Research Question 2 */}
      <section className="campus-section">
        <SectionHeader
          tag="Research Question 2"
          title="Perceptions of Canal-Linked Water"
          subtitle="How do students, faculty, and staff perceive (or not perceive) canal-linked water?"
        />

        <Accordion items={researchQ2Items} />
      </section>

      {/* Additional Analysis */}
      <section className="campus-section campus-section-alt">
        <SectionHeader
          tag="Analysis"
          title="Theoretical Framework"
          subtitle="Understanding infrastructure invisibility through the lens of Science and Technology Studies (STS)."
        />

        <div className="theory-grid">
          <motion.div
            className="theory-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Infrastructural Inversion</h3>
            <p className="theory-author">Bowker & Star, 1999</p>
            <p>
              The concept of "infrastructural inversion" suggests that to understand the importance
              of infrastructure, we must deliberately foreground what is normally in the background.
              The IGNP, functioning silently beneath the campus's daily operations, exemplifies this
              phenomenon. Only by inverting our attention — making the canal visible — can we
              appreciate its role in enabling institutional life in the desert.
            </p>
          </motion.div>

          <motion.div
            className="theory-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>The Politics of Artifacts</h3>
            <p className="theory-author">Winner, 1980</p>
            <p>
              Langdon Winner argued that technological artifacts have politics — they embody and
              enforce particular arrangements of power and authority. The IGNP is not merely a
              neutral conduit for water; it encodes decisions about who gets water, how much,
              and on what terms. The bureaucratic mediation of water supply to IIT Jodhpur reflects
              these embedded politics of infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="theory-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Technological Momentum</h3>
            <p className="theory-author">Hughes, 1994</p>
            <p>
              Thomas Hughes's concept of "technological momentum" describes how large technological
              systems, once established, develop a momentum that shapes the development of
              surrounding society. The IGNP has developed such momentum — it has not merely
              enabled development in the Thar Desert but has shaped the kind of development
              possible, including the feasibility of establishing technical institutions.
            </p>
          </motion.div>

          <motion.div
            className="theory-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Hydrosocial Cycle</h3>
            <p className="theory-author">Linton & Budds, 2014</p>
            <p>
              The "hydrosocial cycle" framework moves beyond seeing water as a purely natural
              resource, instead examining how water and society co-constitute each other. At IIT
              Jodhpur, the canal-linked water supply creates specific social relations — between
              the institution and the state, between urban and rural users, between those who
              manage infrastructure and those who consume its output.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Research Dimensions */}
      <section className="campus-section">
        <SectionHeader
          tag="Further Exploration"
          title="Additional Research Dimensions"
          subtitle="Beyond the core questions — other lenses through which to examine the IIT-Canal nexus."
        />

        <div className="cards-grid">
          <InfoCard icon={Users} title="Equity & Access" delay={0}>
            <p>
              The allocation of canal water to a premier institution like IIT raises questions
              about equity. While the campus enjoys reliable supply, surrounding villages and
              communities often face water scarcity. How does institutional privilege interact
              with broader water justice concerns in the region?
            </p>
          </InfoCard>

          <InfoCard icon={Wrench} title="Maintenance & Labour" delay={0.1}>
            <p>
              The invisible labour of maintaining water infrastructure — from canal maintenance
              workers to campus plumbers — is crucial but often unrecognised. Who maintains
              the infrastructure, and how do they perceive their role in sustaining institutional
              life?
            </p>
          </InfoCard>

          <InfoCard icon={Landmark} title="Institutional Memory" delay={0.2}>
            <p>
              As IIT Jodhpur grows and its founding generation moves on, how will institutional
              memory of the campus's water dependence be preserved? What happens when the taken-for-granted
              infrastructure is forgotten entirely?
            </p>
          </InfoCard>

          <InfoCard icon={AlertTriangle} title="Future Resilience" delay={0.3}>
            <p>
              With climate change threatening water availability and the campus's continued
              expansion, what resilience strategies are being considered? How might the institution
              prepare for a future where canal water may be less reliable?
            </p>
          </InfoCard>
        </div>
      </section>

      {/* References */}
      <section className="campus-section campus-section-alt">
        <SectionHeader tag="References" title="Citations & Sources" />

        <div className="citations-box">
          <ol>
            <li>
              Bowker, G.C. & Star, S.L. (1999). <em>Sorting Things Out: Classification and
              Its Consequences</em>. MIT Press.
            </li>
            <li>
              Winner, L. (1980). "Do Artifacts Have Politics?"
              <em> Daedalus</em>, 109(1), 121–136.
            </li>
            <li>
              Hughes, T.P. (1994). "Technological Momentum." In M.R. Smith & L. Marx (Eds.),
              <em> Does Technology Drive History?</em> MIT Press.
            </li>
            <li>
              Linton, J. & Budds, J. (2014). "The Hydrosocial Cycle: Defining and Mobilizing
              a Relational-Dialectical Approach to Water."
              <em> Geoforum</em>, 57, 170–180.
            </li>
            <li>
              Edwards, P.N. (2003). "Infrastructure and Modernity: Force, Time, and Social
              Organization." In T.J. Misa, P. Brey & A. Feenberg (Eds.),
              <em> Modernity and Technology</em>. MIT Press.
            </li>
            <li>
              Star, S.L. (1999). "The Ethnography of Infrastructure."
              <em> American Behavioral Scientist</em>, 43(3), 377–391.
            </li>
            <li>
              IIT Jodhpur (2023). "Campus Infrastructure."
              <em> Official Website, IIT Jodhpur</em>.
            </li>
            <li>
              Government of Rajasthan. "Public Health Engineering Department — Water Supply
              Schemes." <em>PHED Rajasthan</em>.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
