// Centralized mock content for ONE MORE.
//
// Every image URL below is a placeholder from a stock-photo placeholder
// service, not real ONE MORE photography, and every name, quote and
// biography is illustrative sample content for demonstrating the site —
// none of it depicts real members. Replace both before launch.

const img = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const images = {
  hero: img('onemore-hero', 1600, 1000),
  about: img('onemore-about', 1400, 900),
  programs: {
    'youth-leadership': img('onemore-leadership', 900, 700),
    'skills-enterprise': img('onemore-enterprise', 900, 700),
    'community-action': img('onemore-community', 900, 700),
    'innovation-media': img('onemore-innovation', 900, 700),
  },
}

export const programs = [
  {
    id: 'youth-leadership',
    number: '01',
    icon: 'Users',
    title: 'Youth Leadership',
    tagline: 'Develop confident young leaders who can organize, collaborate and create change.',
    description:
      "We equip young people with the skills, confidence and networks to lead — in their schools, their neighborhoods and their communities. Leadership here isn't a title, it's a practice: showing up, organizing others and following through.",
    objectives: [
      'Build practical organizing and facilitation skills',
      'Grow confidence in public speaking and decision-making',
      'Connect emerging leaders with mentors and peer networks',
      'Create pipelines into community and civic leadership roles',
    ],
    activities: [
      'Leadership bootcamps and workshops',
      'Peer mentorship circles',
      'Community organizing labs',
      'Leadership exchange trips',
    ],
    whoItsFor:
      'Young people aged 15–29 who want to grow as organizers, facilitators or community leaders — whether they are just starting out or already leading something.',
  },
  {
    id: 'skills-enterprise',
    number: '02',
    icon: 'Briefcase',
    title: 'Skills & Enterprise',
    tagline: 'Connect young people to practical skills, mentors and economic opportunities.',
    description:
      'From first jobs to first businesses, we help young people build practical, marketable skills and connect them to mentors, markets and capital — closing the gap between ambition and opportunity.',
    objectives: [
      'Build job-ready technical and soft skills',
      'Support youth-led businesses from idea to launch',
      'Match young people with mentors in their field',
      'Open pathways to funding, markets and formal employment',
    ],
    activities: [
      'Skills training cohorts',
      'Business mentorship and incubation',
      'Enterprise pitch days',
      'Employer and market linkages',
    ],
    whoItsFor:
      'Young job-seekers, freelancers and entrepreneurs looking to sharpen their skills, launch a venture or find their next opportunity.',
  },
  {
    id: 'community-action',
    number: '03',
    icon: 'HeartHandshake',
    title: 'Community Action',
    tagline: 'Turn local ideas into practical projects that respond to real community needs.',
    description:
      'Every neighborhood has young people with ideas for making it better. We give those ideas a path to reality — small grants, project support and a community of other young organizers doing the same.',
    objectives: [
      'Fund and support youth-led community projects',
      'Strengthen local organizing and civic participation',
      'Build partnerships between youth groups and local institutions',
      'Document and share what works across communities',
    ],
    activities: [
      'Community project micro-grants',
      'Local action labs',
      'Volunteer days and clean-ups',
      'Civic participation campaigns',
    ],
    whoItsFor:
      'Young organizers and community groups with an idea for a local project — big or small — who need support to make it happen.',
  },
  {
    id: 'innovation-media',
    number: '04',
    icon: 'Sparkles',
    title: 'Innovation & Media',
    tagline: 'Support young creators, innovators, developers and storytellers.',
    description:
      'We back the builders and storytellers — young developers, designers, filmmakers and writers using their craft to solve problems and tell the stories of their generation.',
    objectives: [
      'Support early-stage tech and creative projects',
      'Build technical and creative production skills',
      'Amplify youth-led media and storytelling',
      'Connect creators and innovators to real audiences and users',
    ],
    activities: [
      'Innovation labs and hackathons',
      'Media and storytelling workshops',
      'Creator support grants',
      'Showcases and screenings',
    ],
    whoItsFor:
      'Developers, designers, filmmakers, writers and other young creators building something and looking for community, skills and support.',
  },
]

export const opportunities = [
  {
    id: 'youth-leadership-bootcamp',
    title: 'Youth Leadership Bootcamp',
    category: 'Training',
    location: 'Malindi, Kenya',
    deadline: '2026-10-24',
    description: 'A 3-day intensive bootcamp on organizing, facilitation and community leadership.',
    fullDescription:
      'This 3-day intensive bootcamp brings together young organizers from across the coast region to build practical leadership and facilitation skills. Expect hands-on workshops, peer coaching sessions and a community organizing simulation. Meals and materials are provided, and a limited number of travel stipends are available for participants travelling from outside Malindi.',
    programId: 'youth-leadership',
  },
  {
    id: 'community-media-fellowship',
    title: 'Community Media Fellowship',
    category: 'Training',
    location: 'Remote / Nairobi, Kenya',
    deadline: '2026-11-05',
    description: 'A 6-week fellowship for young storytellers producing local community journalism.',
    fullDescription:
      'The Community Media Fellowship supports six young storytellers to produce a body of work covering issues in their own communities, with mentorship from working journalists and access to basic production equipment. The fellowship runs part-time over 6 weeks and closes with a public showcase of published work.',
    programId: 'innovation-media',
  },
  {
    id: 'micro-grant-community-projects',
    title: 'Community Action Micro-Grants',
    category: 'Funding',
    location: 'Nationwide, Kenya',
    deadline: '2026-10-15',
    description: 'Grants of up to KES 50,000 for youth-led community projects.',
    fullDescription:
      "We're opening applications for our quarterly round of community action micro-grants. Grants of up to KES 50,000 are available for youth-led groups with a concrete plan to address a need in their community — from clean-up campaigns to peer education projects. Applications are reviewed by a panel that includes past grantees.",
    programId: 'community-action',
  },
  {
    id: 'junior-developer-internship',
    title: 'Junior Developer Internship',
    category: 'Jobs',
    location: 'Nairobi, Kenya',
    deadline: '2026-09-30',
    description: 'A 3-month paid internship with a partner tech company for early-career developers.',
    fullDescription:
      "Through our Innovation & Media partners, we're matching three young developers with a 3-month paid internship at a Nairobi-based tech company. You'll work on real production code alongside a senior engineering mentor. Open to developers who have completed at least one bootcamp, course or self-taught project.",
    programId: 'innovation-media',
  },
  {
    id: 'enterprise-pitch-day',
    title: 'Enterprise Pitch Day',
    category: 'Events',
    location: 'Mombasa, Kenya',
    deadline: '2026-10-10',
    description: 'Pitch your youth-led business idea to mentors and potential funders.',
    fullDescription:
      'Enterprise Pitch Day brings together 15 young entrepreneurs to pitch their businesses to a room of mentors, past founders and potential funders. Selected pitchers receive structured feedback, and the top three ideas receive seed grants and three months of mentorship.',
    programId: 'skills-enterprise',
  },
  {
    id: 'volunteer-cleanup-crew',
    title: 'Beach & Estuary Clean-Up Crew',
    category: 'Volunteer',
    location: 'Malindi, Kenya',
    deadline: 'Ongoing',
    description: 'Join our monthly clean-up crew working along the Malindi coastline.',
    fullDescription:
      'Our clean-up crew meets on the last Saturday of every month to clean sections of the Malindi coastline and estuary, and to run short environmental education sessions with local schools. No experience needed, just a willingness to get a little sandy.',
    programId: 'community-action',
  },
  {
    id: 'scholarship-vocational-training',
    title: 'Vocational Training Scholarship',
    category: 'Scholarships',
    location: 'Kilifi County, Kenya',
    deadline: '2026-11-20',
    description: 'Full scholarships covering a 6-month vocational course of your choice.',
    fullDescription:
      "In partnership with a local vocational college, we're offering ten full scholarships covering tuition and materials for a 6-month course, from electrical installation to hospitality to tailoring. Priority is given to applicants who are out of school and not currently in formal employment.",
    programId: 'skills-enterprise',
  },
  {
    id: 'peer-mentor-volunteer',
    title: 'Peer Mentor Volunteer',
    category: 'Volunteer',
    location: 'Malindi, Kenya',
    deadline: 'Ongoing',
    description: 'Become a peer mentor supporting younger members of the movement.',
    fullDescription:
      'Peer mentors meet with 2–3 younger ONE MORE members over a school term, offering informal guidance on school, work or personal goals. We provide a short onboarding session and ongoing check-ins — this is a light but meaningful commitment of a few hours a month.',
    programId: 'youth-leadership',
  },
  {
    id: 'innovation-lab-cohort',
    title: 'Innovation Lab — Cohort 4',
    category: 'Training',
    location: 'Nairobi, Kenya',
    deadline: '2026-11-30',
    description: 'An 8-week program for young people building early-stage tech or creative projects.',
    fullDescription:
      "Cohort 4 of the Innovation Lab is an 8-week part-time program for young people with an early-stage tech, design or creative project. You'll get structured product feedback, technical mentorship and a small budget to build a working prototype, ending with a demo day in front of a wider ONE MORE audience.",
    programId: 'innovation-media',
  },
]

export const events = [
  {
    id: 'youth-forum-2026',
    title: 'ONE MORE Youth Forum',
    date: '2026-10-24',
    time: '9:00 AM – 4:00 PM',
    location: 'Malindi, Kenya',
    description: 'Our flagship gathering: youth leadership, ideas, networking and community action.',
    fullDescription:
      'The ONE MORE Youth Forum is our biggest gathering of the year — a full day of panels, workshops and open-floor sessions on youth leadership, enterprise, community organizing and innovation. Expect honest conversation, practical skills sessions and a lot of new connections.',
    speakers: [
      { name: 'Amina W.', role: 'Founder, Youth Innovation Lab' },
      { name: 'Brian O.', role: 'Community Organizer, Malindi' },
      { name: 'Faith K.', role: 'Enterprise Mentor' },
    ],
    image: img('onemore-forum', 1200, 700),
    isPast: false,
  },
  {
    id: 'enterprise-pitch-night',
    title: 'Enterprise Pitch Night',
    date: '2026-10-10',
    time: '5:00 PM – 8:00 PM',
    location: 'Mombasa, Kenya',
    description: 'Fifteen young founders pitch their businesses live to mentors and funders.',
    fullDescription:
      'An evening of live pitches from fifteen young entrepreneurs in our Skills & Enterprise program, followed by structured feedback and networking. Open to the public — come support the founders and meet the ONE MORE community in Mombasa.',
    speakers: [{ name: 'Faith K.', role: 'Enterprise Mentor' }],
    image: img('onemore-enterprise', 900, 700),
    isPast: false,
  },
  {
    id: 'community-cleanup-day',
    title: 'Community Clean-Up Day',
    date: '2026-09-27',
    time: '8:00 AM – 12:00 PM',
    location: 'Malindi, Kenya',
    description: 'Monthly clean-up along the Malindi coastline, open to all volunteers.',
    fullDescription:
      'Join the monthly clean-up crew for a morning of coastal clean-up and a short environmental session with a local school. Gloves and bags provided — just bring closed shoes and sun protection.',
    speakers: [],
    image: img('onemore-community', 900, 700),
    isPast: false,
  },
  {
    id: 'innovation-demo-day-2026',
    title: 'Innovation Lab Demo Day',
    date: '2026-05-16',
    time: '2:00 PM – 5:00 PM',
    location: 'Nairobi, Kenya',
    description: 'Cohort 3 of the Innovation Lab showcased their projects to the community.',
    fullDescription:
      'Twelve young builders from Innovation Lab Cohort 3 demoed their projects — from a farmer SMS pricing tool to a short film on youth mental health — to an audience of mentors, funders and peers.',
    speakers: [{ name: 'Kevin M.', role: 'Innovation Lab Lead' }],
    image: img('onemore-innovation', 900, 700),
    isPast: true,
  },
  {
    id: 'youth-forum-2025',
    title: 'ONE MORE Youth Forum 2025',
    date: '2025-10-18',
    time: '9:00 AM – 4:00 PM',
    location: 'Malindi, Kenya',
    description: 'Our first-ever Youth Forum brought together 300 young people from across the coast.',
    fullDescription:
      'The very first ONE MORE Youth Forum brought together 300 young people for a day of workshops, panels and open conversation — the gathering that helped shape the programs we run today.',
    speakers: [],
    image: img('onemore-forum', 1200, 700),
    isPast: true,
  },
]

export const stories = [
  {
    id: 'amina-idea',
    category: 'Enterprise',
    headline: "I used to think my idea wasn't big enough.",
    excerpt:
      "Amina started with a small tailoring business run from her living room. A year into the Skills & Enterprise program, she runs a workshop that trains other young women.",
    body: [
      'Amina joined ONE MORE\'s Skills & Enterprise program with a sewing machine, a small living-room workshop, and a lot of doubt about whether her business was "real" enough to deserve support.',
      'Her mentor helped her see it differently: a small, working business is exactly where support makes the most difference. Over eight months, Amina formalized her pricing, took on her first two employees, and moved into a proper workshop space.',
      'Today, Amina runs training sessions for other young women in her neighborhood who are starting where she started. "I used to think my idea wasn\'t big enough," she says. "Now I know it just needed room to grow."',
    ],
    name: 'Amina',
    role: 'Skills & Enterprise Program',
    image: img('onemore-amina', 800, 1000),
  },
  {
    id: 'brian-organizing',
    category: 'Leadership',
    headline: "Nobody taught us how to organize. So we taught ourselves.",
    excerpt:
      'Brian led a youth group that struggled to get anyone to show up to meetings. Through the Youth Leadership program, he learned to build something people wanted to be part of.',
    body: [
      'Before ONE MORE, Brian was part of a youth group that met sporadically and struggled to keep people engaged. "We had energy but no structure," he says.',
      "Through the Youth Leadership program's organizing labs, Brian learned practical facilitation skills: how to run a meeting people actually want to attend, how to delegate, how to follow up.",
      'His group now runs weekly sessions with consistent attendance and has taken on its first community project: a peer-tutoring program for local primary school students. "Nobody taught us how to organize," Brian says. "So we taught ourselves, with a lot of help."',
    ],
    name: 'Brian',
    role: 'Youth Leadership Program',
    image: img('onemore-brian', 800, 1000),
  },
  {
    id: 'faith-mentorship',
    category: 'Community',
    headline: 'Being mentored changed how I show up for others.',
    excerpt:
      'Faith joined as a mentee looking for direction after finishing school. Two years later, she mentors five other young people herself.',
    body: [
      'Faith joined ONE MORE right after finishing secondary school, unsure what came next. Her mentor helped her map out a realistic plan: first a short course, then an internship, then her current role coordinating community projects.',
      'That experience shaped how Faith now shows up for the five young people she mentors herself. "Someone gave me their time without expecting anything back," she says. "That\'s the whole model: you get help, then you give it."',
      "Faith now helps coordinate the Community Action program's micro-grant projects, working directly with the same kind of first-time organizers she once was.",
    ],
    name: 'Faith',
    role: 'Community Action Program',
    image: img('onemore-faith', 800, 1000),
  },
  {
    id: 'kevin-code',
    category: 'Innovation',
    headline: 'I built my first real product in the Innovation Lab.',
    excerpt:
      'Kevin taught himself to code from YouTube tutorials. The Innovation Lab gave him the structure and feedback to turn that into a working product.',
    body: [
      "Kevin had been teaching himself to code for two years, mostly from YouTube tutorials and trial and error, before joining the Innovation & Media program's Innovation Lab.",
      'The structured feedback made the biggest difference. "I had built things before, but I\'d never had anyone tell me honestly what wasn\'t working," he says.',
      'Over eight weeks, Kevin built a working prototype of an SMS-based pricing tool for smallholder farmers, which he demoed at the program\'s Demo Day. He now leads technical mentorship for the following cohort.',
    ],
    name: 'Kevin',
    role: 'Innovation & Media Program',
    image: img('onemore-kevin', 800, 1000),
  },
]

export const impactStats = [
  { id: 'people', value: 1000, suffix: '+', label: 'Young people' },
  { id: 'projects', value: 24, suffix: '', label: 'Community projects' },
  { id: 'leaders', value: 18, suffix: '', label: 'Leaders trained' },
  { id: 'initiatives', value: 12, suffix: '', label: 'Active initiatives' },
]

export const findYourPlace = {
  identities: ['Student', 'Entrepreneur', 'Creator', 'Developer', 'Community Organizer', 'Volunteer', 'Mentor'],
  interests: ['Leadership', 'Business', 'Technology', 'Media', 'Community', 'Arts'],
}

// Maps an interest to the opportunities most relevant to it.
export const interestRecommendations = {
  Leadership: { programId: 'youth-leadership', picks: ['Youth Leadership Bootcamp', 'Peer Mentor Volunteer'] },
  Business: { programId: 'skills-enterprise', picks: ['Enterprise Pitch Day', 'Vocational Training Scholarship'] },
  Technology: { programId: 'innovation-media', picks: ['Innovation Lab — Cohort 4', 'Junior Developer Internship'] },
  Media: { programId: 'innovation-media', picks: ['Community Media Fellowship', 'Innovation Lab — Cohort 4'] },
  Community: { programId: 'community-action', picks: ['Community Action Micro-Grants', 'Beach & Estuary Clean-Up Crew'] },
  Arts: { programId: 'innovation-media', picks: ['Community Media Fellowship', 'Innovation Lab — Cohort 4'] },
}

export const aboutContent = {
  story:
    "ONE MORE started with a simple observation: young people weren't short on ideas or energy, they were short on rooms that took them seriously. What began as informal meet-ups between a handful of young organizers has grown into a movement connecting over a thousand young people to leadership training, enterprise support, community projects and creative opportunity.",
  mission:
    'To bring young people together to discover their collective potential, challenge barriers and create meaningful opportunities for themselves and their communities.',
  vision: 'A future where young people are active leaders, creators and builders of thriving communities.',
  values: [
    { title: 'Youth-led', description: 'Young people design and run what we build, not just participate in it.' },
    { title: 'Community-first', description: 'We start with what communities actually need, not what looks good on paper.' },
    { title: 'Open door', description: "Wherever you're starting from, there's a place for you here." },
    { title: 'Action over talk', description: 'We measure ourselves by what gets built, not just what gets discussed.' },
  ],
  approach:
    'We work through four connected programs — Youth Leadership, Skills & Enterprise, Community Action, and Innovation & Media — and treat every participant as capable of contributing, not just receiving. Most of what we run is designed, led or co-led by young people who came through the movement themselves.',
  leadership: [
    { name: 'Wanjiru A.', role: 'Executive Director' },
    { name: 'David M.', role: 'Programs Lead' },
    { name: 'Zainab H.', role: 'Community & Partnerships Lead' },
    { name: 'Samuel K.', role: 'Innovation & Media Lead' },
  ],
}
