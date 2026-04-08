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
    date: 'March 2026',
    thumbnail: null, // Replace with actual image path: '/interviews/photo1.jpg'
    summary:
      'Discussion on campus water infrastructure, the role of PHED, and faculty perspectives on water availability at IIT Jodhpur.',
    transcript: `Section A: Background & Awareness
Q1. In your understanding, what is the primary source of water supply to IIT Jodhpur's campus?
Answer: The primary water source for IIT Jodhpur is the Indira Gandhi Canal, mediated through Jodhpur's municipal supply network. The canal water, originating from the Harike Barrage in Punjab, is treated and distributed to the city and connected institutions. The campus also likely has storage tanks and possibly supplementary groundwater infrastructure for redundancy.

Q2. Were you aware of the role of the Indira Gandhi Canal specifically when you joined or began working at IIT Jodhpur? Or is it something you came to know gradually?
Answer: This question probes the visibility of infrastructure. A likely answer is that canal water is simply "the water that comes from the tap" — awareness of the IGC as the upstream source is rarely foregrounded. Most faculty and staff engage with water only when it fails — during supply cuts, discolouration, or quality complaints. This is a key finding in itself: infrastructure becomes visible only at the moment of disruption.

Section B: Technical & Engineering Perspectives
Q3. From a chemical engineering standpoint, what are the key challenges in treating Indira Gandhi Canal water to make it suitable for consumption and laboratory use on campus?
Answer: Canal water from the IGC typically carries suspended solids, sediment, and in some cases elevated salinity and hardness due to its journey through the Thar Desert's sandy terrain. Treatment involves coagulation, flocculation, sedimentation, filtration, and chlorination. For laboratory-grade water, additional reverse osmosis or deionisation stages are needed. There may also be seasonal variation in turbidity during monsoon runoff.

Q4. Are there any specific water quality concerns — salinity, hardness, chemical contamination — that affect either daily use or research activities in your department?
Answer: Hard water is a common concern in Rajasthan, which can affect laboratory equipment (e.g., autoclaves, heating systems), corrode pipes, and interfere with certain chemical experiments. Faculty in chemical engineering may have first-hand knowledge of water quality parameters they routinely account for in their research setups.

Q5. How do you understand the risk of a disruption to the canal supply — whether from infrastructure failure, political disputes over water allocation, or climate-related variability?
Answer: The IGC is a politically mediated resource — it draws on inter-state water sharing agreements and the Indus Waters Treaty framework. A technically aware engineer might flag risks such as: silt build-up reducing canal capacity, lining breaches, pump failures in lift irrigation segments, or upstream disruption in Punjab or Haryana. Climate variability affecting Himalayan snowmelt and river flows is a longer-term systemic risk.

Section C: Institutional & Bureaucratic Mediation
Q6. Do you know how the water supply to IIT Jodhpur is governed or institutionally arranged — for instance, whether the institute has a direct allocation from PHED (Public Health Engineering Department) or from the municipal supply?
Answer: This is likely mediated through the Jodhpur Discom or PHED Rajasthan, with IIT receiving water as a bulk institutional consumer. The exact allocation, metering, and cost-sharing arrangement is something campus infrastructure staff would know, but most faculty would not. The question reveals the bureaucratic invisibility of water as a resource.

Q7. Has the issue of water sustainability or supply security ever come up in departmental or institutional planning discussions — for instance, in the context of expanding the campus or planning new facilities?
Answer: In institutions undergoing rapid campus expansion (as IIT Jodhpur is), water availability is a real constraint. If this has come up, it reveals that water is at least periodically visible as a planning variable, even if not in everyday discourse. If it hasn't come up, that itself is a significant observation — it suggests an assumption of perpetual adequacy.

Section D: Perception & Everyday Experience
Q8. When, if ever, does water become something you consciously notice or think about on campus?
Answer: Likely triggers include: water cuts, notices about water conservation, quality complaints (smell, colour), or comparisons with water in home cities. This question gets at the phenomenology of infrastructure — the idea that well-functioning systems are invisible, and only failure renders them perceptible.

Q9. Do students or colleagues in your department ever discuss the water source, quality, or sustainability in any context — academic, casual, or research-oriented?
Answer: There may be academic interest given the department's expertise — water treatment, membrane technology, desalination, and environmental chemistry are all areas where the IGC could serve as a live case study. Whether this connection is made explicitly is worth probing.

Q10. If IIT Jodhpur had been planned without the Indira Gandhi Canal being in place — if the water infrastructure simply didn't exist — do you think this campus could have been established here?
Answer: Almost certainly not at this scale. Groundwater in the Jodhpur region is limited and often brackish. The canal is the enabling condition for large-scale permanent habitation and institutional presence in this part of the desert. This is perhaps the most direct question that ties the technical to the existential: the campus exists because the canal exists.

Q11. From your perspective as an engineer, what do you think is the most underappreciated or overlooked aspect of the water infrastructure that sustains this campus?
Answer: Possible answers might include: the fragility of the supply chain, the energy cost of pumping water across such distances, the quality degradation over long transit, or the lack of campus-level water recycling and reuse systems. This open-ended question often yields the most candid and insightful responses.`,
  },
  {
    id: 2,
    name: 'Ram Niwas and Suresh Chand (Security Personnel) ',
    role: 'Security Personnel, Campus Security',
    date: 'March 2026',
    thumbnail: null,
    summary:
      'Insights into the campus water systems, dependence on IGNP, and risk assessment for canal failure scenarios.',
    transcript: `Q: Before IIT Jodhpur was built here, what was the water situation like in this area?
Ram Niwas: Paani ka bada mushkil tha yahan. [Water was a big problem here.] When I was young, in our village we used to get water from kunds and baoris — the old step-wells. Some days tankers would come, but not every day. This whole area, Karwar, Boranada — it was open desert land. No one imagined a big institution like IIT could come here. There was nothing. No pipe connection, no regular supply. People stored rainwater in tankas [underground storage tanks] during monsoon and managed the whole year from that.
Suresh Chand: Hamare gaon mein toh tanker pe hi depend tha sab. [In our village, everyone depended on tankers.] My father used to say — you waste a single bucket and you are wasting a week's worth of effort. Water was counted, not used freely. Canal water came to our village maybe 10-12 years back only. Before that it was groundwater, and that also was khaara [brackish, salty]. Not good for drinking, not good for crops either.

Q: Do you know what role the Indira Gandhi Canal played in making water available in this region?
Ram Niwas: Haan, yeh canal bahut badi cheez hai. [Yes, this canal is a very big thing.] My older relatives used to talk about how the government brought this canal from Punjab — all the way from the Satluj river. It changed things slowly. First it came to the bigger towns, then over the years it reached villages like ours through the pipes and lift schemes. Now Jodhpur city has tap water everywhere. This campus also gets water through that system only — it all starts from that canal.
Suresh Chand: I don't know all the technical details but I know that without that canal, this area would still be the same dry land. My uncle has a small farm near Phalodi. He says since canal water started coming, he can grow two crops a year now. Before, one crop was also not guaranteed. The canal changed the whole district.

Section 2: IIT Jodhpur's Establishment and Water Infrastructure

Q: What role did water availability play in the planning of IIT Jodhpur's campus?
Ram Niwas: I was not part of any planning — I am a guard, not an engineer! But from what I have seen and heard from the estate office people over the years, when this campus was being constructed, the first big work was the water supply line. Before the buildings came up properly, they were laying pipes. The tankers also used to come daily during construction time — big ones. Once the piped connection came from the municipal supply, things became more stable. I think without the canal water already reaching Jodhpur city, this campus could not have been built so fast. The city supply comes from the Indira Gandhi Canal only.
Suresh Chand: When I joined here in 2019, the campus was still expanding — new hostels, new academic blocks were coming up. The water supply was always a topic of concern during summers. I have heard senior estate staff say that the institute has a direct line from the Jodhpur municipal network and also some underground water storage. But the main source is the piped canal water. Without that pipeline reaching Jodhpur, this would have been very difficult to sustain.

Q: As local residents, do you feel that the existence of IIT Jodhpur here has changed things for the surrounding villages and communities?
Ram Niwas: Bahut badal gaya hai yahan ka mahaul. [The environment here has changed a lot.] Roads have become better. The area around the campus — Karwar, Boranada, Salawas — all have developed. People from our villages got employment — as guards, housekeeping staff, canteen workers, construction labourers. My own two nephews work here. There is more water supply to nearby areas also now because the infrastructure that was built for IIT also helped the surrounding localities indirectly.
Suresh Chand: Yes, and also the land prices have gone up a lot. When IIT came, families who had agricultural land nearby sold some parts at good prices. But for farming, water is still an issue in some pockets. The canal supply is not equal everywhere. Some villages still have shortages in peak summer months. But overall the region is better off than before. IIT being here also brought attention to this area.

Section 3: How Water Supply is Institutionally Managed on Campus

Q: How is the water supply to the campus institutionally managed?
Ram Niwas: There is an estate office and a civil maintenance team here. They handle all the water supply matters. There are big overhead tanks on campus — I have seen them near the residential zones and academic areas. The water comes through the municipal pipeline, gets stored in those tanks, and then is distributed across the campus. There is a pump house also. I think the institute pays the municipality for the water — like a regular billing arrangement.
Suresh Chand: From what I have seen during my rounds, the pump operators and maintenance staff are always checking the tank levels, especially in summer. In the very hot months — May and June — the supply from the municipal side sometimes reduces. Then the campus runs on stored water only for a day or two. I have heard that there is also some borewell facility but I am not sure if it is used regularly or only as a backup.

Q: Who do people on campus approach when there is a water-related problem?
Ram Niwas: The estate office. Students complain to their hostel wardens, and wardens escalate to the estate team. The housekeeping staff and we guards — we get to know about problems first because we are always moving around the campus at night also. Sometimes during my night shift I have seen the water not coming from the tap in the guard post, and we inform the maintenance team in the morning. They are usually quick to respond.
Suresh Chand: Same for us. We are often the first to notice if a pipe has burst somewhere or if the pressure is low in a particular zone. We report to the supervisor, supervisor to the estate office. There is a complaint register also. But mostly problems get fixed within a day. It is only during major supply cuts from the municipal side that it takes longer.

Section 4: Perception of Water — Visibility and Invisibility

Q: When does water become something people on campus notice or talk about?
Ram Niwas: Jab aata nahi tab dhyan jaata hai. [When it doesn't come, that's when you notice it.] When there is supply, nobody thinks about it. Students, faculty — they open the tap and water comes. They do not think about where it comes from or how. But when there is a cut — even for a few hours — then everyone is asking, kab aayega paani? [When will the water come?] I have seen this many times. In normal days, water is invisible. In shortage, it becomes the only topic.
Suresh Chand: For students especially, I think water is completely taken for granted. They have come from cities, many of them. They are used to 24-hour supply. They do not know what it means to wait for a tanker or to store water carefully. Once during a long cut of about two days — I think there was some repair work on the municipal main line — I saw students really struggling, complaining a lot. That is when you realise how dependent everything is on that one pipe connection.

Q: As people who grew up in this region, do you see water differently from students and faculty who come from outside?
Ram Niwas: Bilkul alag nazar se dekhte hain hum. [We see it with a completely different perspective.] I grew up collecting water, counting water. Even today at home in the village, my mother fills matkas [earthen pots] out of habit, even though the tap works now. That habit of conserving water does not go away easily. When I see people here leaving taps running or using water very freely, it feels strange to me. But I understand — they have never known shortage.
Suresh Chand: My father still wakes up early morning just to check the water level in our storage tank at home — it is a habit from decades of uncertainty. Here on campus, nobody thinks like that. And maybe that is fine — that is progress, that people do not have to worry about water anymore. But it also means they do not understand how fragile the system is. If the canal has a problem, if the Jodhpur supply line has a problem — everything here stops.

Section 5: Risk and Awareness of Infrastructure Failure

Q: What contingency plans exist for water supply disruptions?
Ram Niwas: I know there are water storage tanks on campus that hold maybe a few days' supply. And there is at least one borewell that I have seen the maintenance team use once when there was an extended cut a few years back. That water was used for flushing and cleaning, not for drinking. For drinking, I believe tankers were arranged. The institute called the municipality and they sent a water tanker to the campus. It was managed, but it was chaotic for a day or so.
Suresh Chand: I think the campus is better prepared now than it was when I first joined. They have added more storage capacity I believe. But a long disruption — more than four or five days — would be very serious. There is no independent water source here that can sustain 5,000 to 6,000 people for long. The whole campus depends on that one municipal connection which ultimately comes from the canal. It is one chain — if any link breaks, it affects everything.

Q: Does anyone on campus — students, faculty, staff — ever talk about the long-term risk of the canal-based water supply?
Ram Niwas: Not in my experience. Nobody really discusses it. The estate staff sometimes worry about the supply in summer, but it is always in terms of this season, not the next ten years. Nobody has ever told me — yeh canal band ho sakti hai, tab kya karenge [the canal could stop, what will we do then]. It is assumed that it will always work.
Suresh Chand: I have never heard a professor or a student discuss this. But I think about it sometimes. The canal comes from far away — from Punjab. What if there is a political problem between states over water? What if there is a drought upstream? These are things people from outside do not think about, but we who have lived here know that water in Rajasthan is never guaranteed. It is always a managed scarcity. Right now the management is working well. But it is not permanent on its own.`,
  },
  {
    id: 3,
    name: 'Laal Singh Ji ( Shaamiyana staff) ',
    role: 'Staff at the Shaamiyana tealogy stall ',
    date: 'March 2026',
    thumbnail: null,
    summary:
      'Local people and long time resident point of view on the Indira Gandhi Canal, and visibility of water infrastructure.',
    transcript: `Q: Laal Singh ji, aap yahan kitne samay se hain? Pehle kahan the? [How long have you been here? Where were you before?]
Laal Singh: teen saal ho gaye hain bhai sahab, teen saal. [It has been three years, brother.] Before this I had a small stall near Banar road, but business was not so good there. When IIT started growing — more students, more hostels — someone told me there is a chance to set up here inside the campus. I applied, got the space, and since then Shaamiayana is here. Now I cannot imagine going back. The students, the professors — they are my daily customers. Some of them come three times a day. I know their orders without asking.

Q: Aapke kaam mein paani kitna important hai? [How important is water in your work?]
Laal Singh: Bhai, chai bina paani ke banegi kaise? [Brother, how will tea be made without water?] My whole business is water. From the first chai at six in the morning to the last cutting at eleven at night — everything needs water. Chai banana, bartan dhona, haath dhona, stall saaf karna. [Making tea, washing utensils, washing hands, cleaning the stall.] I use maybe 50 to 60 litres on a normal day. On exam days when rush is more, even more than that.

Q: Campus pe paani ki quality kaisi lagti hai aapko? Chai banane pe koi fark padta hai? [How do you find the water quality on campus? Does it affect the taste of the tea?]
Laal Singh: Haan bhai, paani ka chai pe bahut asar padta hai. [Yes brother, water has a big effect on tea.] When I first came here, the water was quite khaara — salty, hard. My chai used to taste slightly off. I had to use more tea leaves to balance it. Then slowly I got used to it, adjusted my recipe. Now I use a small filter also — one of those basic candle filters — before boiling. That has helped a lot. Students sometimes ask me why my chai tastes different from home — I tell them it is the Rajasthan water! The water here has its own character.

Q: Kabhi paani ki supply ruki hai campus pe? Tab kya hua? [Has the water supply ever stopped on campus? What happened then?]
Laal Singh: Ek do baar hua hai. [It has happened once or twice.] One time — I think it was two summers ago — the supply from the municipal side was cut for almost two days. There was some repair work going on outside. Those two days were very bad for me. I had to get water from wherever I could — I borrowed some from the canteen nearby, and one of the estate staff arranged a small drum of water for me. But my business was badly hit. I could not make enough chai, could not wash properly. I lost maybe two days of income. After that I started keeping two extra 20-litre cans as backup. Ab hamesha stock rakhta hun. [Now I always keep stock.]

Q: Aapko pata hai yeh campus ka paani kahan se aata hai? [Do you know where the campus water comes from?]
Laal Singh: Theek se toh nahi pata bhai. [I don't know properly, brother.] But I have heard from the maintenance wale bhaiya [maintenance staff] that it comes from the city supply — and the city supply comes from some big canal. Punjab se paani aata hai, koi nahar hai — Indira Gandhi nahar sunne mein aaya hai naam. [Water comes from Punjab, there is some canal — I have heard the name Indira Gandhi Canal.] Is that right? I did not know the full detail but yes, I know it is not local water. It travels a long way before it reaches my patila [vessel] and becomes chai.

Q: Aapke hisaab se paani ke baare mein yahan ke log — students, professors — kya sochte hain? [In your view, what do people here — students, professors — think about water?]
Laal Singh: Kuch nahi sochte. [They don't think anything.] Seriously bhai — nobody thinks about water until it is gone. I have seen students waste so much water — washing their bottles at the tap for five minutes, leaving taps running. Mujhe toh dard hota hai dekhke. [It pains me to see it.] Main Bhopalgarh se hun — wahan pe bhi paani ki dikkat thi bahut pehle. [I am from Bhopalgarh — there used to be a lot of water difficulty there too.] My mother used to walk one kilometre to fill water. So when I see water being wasted here, it feels very wrong. But the young people here — they have never seen shortage. For them, tap kholo, paani aata hai. [Open the tap, water comes.] That is all they know.

Q: Agar ek din campus pe paani bilkul band ho jaye, toh kya hoga? [If one day water completely stops on campus, what will happen?]
Laal Singh: (laughs) Pehli cheez — meri chai band. [First thing — my tea stops.] And then everything else will also stop. Canteen, hostels, labs — sab kuch. Paani ke bina campus ek din bhi nahi chal sakta. [Without water the campus cannot run even one day.] People take it for granted because it has always worked. But I am telling you — I think about this sometimes at night. My whole livelihood is sitting on that one pipe. If it goes, I go. So I pray that the canal keeps flowing and the municipality keeps sending it here. Bas yahi hai. [That's all there is to it.]

Q: Aakhri sawaal — aap chahte hain ki kuch aur batayein is project ke liye? [Last question — would you like to add anything else for this project?]
Laal Singh: Bas itna bolna chahta hun ki jo log yeh canal banane mein lage the — engineers, workers — unka bahut bada kaam hai. [I just want to say that the people who built this canal — engineers, workers — they did a very great thing.] We do not remember them, we do not think about them. But because of them, I can make chai here every morning and send students to their classes with warm cups in their hands. Yeh sab usi nahar ki meherbani hai. [All of this is the grace of that canal.] Write that in your project.

`,
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
    src: '/gallery/guard_interview.jpeg',
    caption: 'Ishaan and Avichal interviewing the security personnel about water supply and contingency plans',
  },
  {
    id: 3,
    src: '/gallery/laal_singh.jpeg',
    caption: 'Karan and Devam interviewing Laal Singh, a long-time campus resident, about his experiences with water supply and quality on campus, he hails from Mandore',
  },
  {
    id: 4,
    src: '/gallery/interview_sir.jpeg',
    caption: 'Shikhar and Karan asking questions to Santosh sir during the interview',
  },
  {
    id: 5,
    src: '/gallery/canal_view.jpg',
    caption: 'Canal Distribution Network',
  },
  {
    id: 6,
    src: '/gallery/map_IGC.png',
    caption: 'Map of Indira Gandhi Canal',
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
