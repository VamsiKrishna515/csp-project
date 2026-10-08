/* ============================================================
   CYBER SPROUTS — STUDENT SHIELD
   Single-file frontend prototype logic
   ============================================================ */
 
/* ---------- SPLASH SCREEN ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash').classList.add('fade-out');
  }, 3000);
  buildParticles();
});
 
/* ---------- DARK MODE ---------- */
function toggleDark(){
  document.body.classList.toggle('dark');
  const on = document.body.classList.contains('dark');
  localStorage.setItem('cs_dark', on ? '1':'0');
  document.getElementById('darkIcon').className = on ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
}
if(localStorage.getItem('cs_dark')==='1'){
  document.body.classList.add('dark');
  window.addEventListener('DOMContentLoaded',()=>{document.getElementById('darkIcon').className='fa-solid fa-sun';});
}
 
/* ---------- HERO PARTICLES ---------- */
function buildParticles(){
  const wrap=document.querySelector('.hero-particles');
  if(!wrap) return;
  wrap.innerHTML='';
  const colors=['#66A6FF','#B292FF','#FF9A5A','#4FD69C'];
  for(let i=0;i<36;i++){
    const d=document.createElement('div');
    d.className='p-dot';
    const size=2+Math.random()*4;
    d.style.width=size+'px'; d.style.height=size+'px';
    d.style.left=Math.random()*100+'%';
    d.style.top=(60+Math.random()*40)+'%';
    d.style.background=colors[i%colors.length];
    d.style.animationDuration=(8+Math.random()*14)+'s';
    d.style.animationDelay=(Math.random()*10)+'s';
    wrap.appendChild(d);
  }
}
 
/* ---------- REVEAL ON SCROLL ---------- */
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in'); });
},{threshold:.12});
function initReveals(){
  document.querySelectorAll('[data-reveal]').forEach(el=>revealObserver.observe(el));
}
 
/* ============================================================
   CONTENT DATA
   ============================================================ */
const CYBER = {
  key:'cyber', theme:'topic-blue', icon:'fa-shield-halved', title:'Cyber Threat Awareness',
  stat1:['91%','of students use unsecured public Wi-Fi'], stat2:['1 in 3','teens has faced online scams'], stat3:['₹0','cost to protect yourself with good habits'],
  quote:'“The strongest firewall is a well-informed mind.”',
  intro:"Every scroll, click and login leaves a trace. Hackers, scammers and cyberbullies increasingly target students because they're active online but rarely trained to spot digital traps. Cyber Threat Awareness is about learning the basic instincts that keep your accounts, identity and money safe.",
  why:"A single leaked password or careless click can drain a bank account, leak private photos, or hand a stranger control of your identity. Because students bank, study, game and socialise almost entirely online, cyber-hygiene is now as essential as locking your front door.",
  types:[
    ['fa-fish','Phishing & Fake Links','Emails, texts or DMs that impersonate trusted brands to steal your login or card details.'],
    ['fa-qrcode','QR & OTP Scams','Malicious QR codes or fake OTP requests trick you into authorising a payment or handing over access.'],
    ['fa-user-secret','Identity Theft','Criminals piece together your personal details from social media to open accounts in your name.'],
    ['fa-comments','Cyberbullying','Repeated online harassment, trolling or humiliation aimed at a person through chats or social apps.'],
    ['fa-robot','AI Voice & Deepfake Scams','Cloned voices or fake videos of people you trust, used to pressure you into urgent action.'],
    ['fa-cart-shopping','Online Shopping Fraud','Fake stores or too-good-to-be-true deals that take payment and never deliver.']
  ],
  warning:[
    ['Unexpected login alerts','You receive OTPs or login notifications you never requested.'],
    ['Urgent, emotional messages','A message pressures you to act "right now or lose access".'],
    ['Mismatched links','A link\'s visible text says one thing but the URL underneath goes elsewhere.'],
    ['Requests for OTP/PIN','Anyone — even "bank support" — asks you to share a one-time password.'],
    ['Too-good-to-be-true offers','Huge prizes or discounts asking for personal details upfront.']
  ],
  causes:['Reusing the same weak password everywhere','Clicking links without checking the sender','Oversharing personal details publicly','Ignoring app privacy settings','Trusting unknown Wi-Fi networks blindly'],
  risks:{Academic:'Compromised accounts can lock you out of exam portals and assignments.',
    Mental:'Harassment and blackmail cause anxiety, shame and loss of confidence.',
    Physical:'Doxxing (leaked address/location) can lead to real-world stalking risk.',
    Financial:'Direct monetary loss through fraud, fake investments or account takeovers.',
    Social:'Leaked private chats or photos damage friendships and reputation.',
    Legal:'Victims can get entangled in disputes if their hacked account is misused for crime.'},
  shortTerm:['Panic and stress after a breach','Temporary loss of account access','Small unauthorised transactions','Spam and phishing follow-up attempts'],
  longTerm:['Permanent identity misuse','Long-term credit/financial damage','Erosion of trust in digital tools','Repeated targeting once data is leaked'],
  story:"A 12th-grade student in Hyderabad received an SMS claiming her exam-fee refund had failed and needed re-verification. The link led to a cloned bank page. She paused, noticed the URL had an extra letter, and reported it instead of entering her PIN — saving her scholarship fund.",
  dos:['Use a unique, strong password for every account','Enable two-factor authentication everywhere possible','Verify sender addresses before clicking links','Cover your camera when not in use','Report suspicious messages to platforms & cybercrime.gov.in'],
  donts:["Don't share OTPs or passwords with anyone","Don't scan random QR codes for \"cashback\"","Don't connect to unknown public Wi-Fi for banking","Don't overshare your location in real time","Don't install apps outside official stores"],
  myths:[['Only "techie" people get hacked.','Anyone with an online account is a potential target — scammers automate attacks at scale.'],
    ['A strong password alone keeps you 100% safe.','Two-factor authentication and safe browsing habits matter just as much as password strength.'],
    ['Private accounts can\'t be tracked.','Even "private" profiles leak data through friends, tags and metadata.'],
    ['Antivirus software blocks every scam.','Most modern scams rely on tricking the human, not breaking the software.']],
  faqs:[['What should I do if I clicked a phishing link?','Immediately change the linked account\'s password, enable 2FA, and monitor your bank statements for a few weeks.'],
    ['Is it safe to save passwords in the browser?','It\'s convenient but use a dedicated password manager with a master password for better security.'],
    ['How do I report cyberbullying?','Use the platform\'s report tool, save evidence (screenshots), and inform a trusted adult or the Cyber Crime portal.'],
    ['Can deleting an app remove my data from the internet?','No — deleting the app removes it from your phone, not from the company\'s servers. Request data deletion separately.'],
    ['Are QR codes always risky?','Not always, but always preview the link a QR code opens before proceeding, especially for payments.']],
  quiz:[
    ['A message asks for your OTP to "verify" a prize you never entered. You should:',['Share the OTP quickly','Ignore and report it','Reply asking for more prizes'],1],
    ['The safest way to create passwords is to:',['Use your birthday','Use one password everywhere','Use a unique long passphrase per account'],2],
    ['A link says "yourbank.com" but the actual URL is "yourbank-verify.ru". This is:',['Normal bank behaviour','A phishing red flag','A discount offer'],1],
    ['Two-factor authentication (2FA) helps because:',['It adds a second security check beyond your password','It deletes viruses','It speeds up your Wi-Fi'],0],
    ['If your friend\'s account sends you a weird urgent money request:',['Send money immediately','Call/verify with your friend directly first','Ignore your friend forever'],1],
    ['Public Wi-Fi at a café is safest for:',['Online banking','Browsing news, avoiding logins','Sharing your Aadhaar number'],1],
    ['A QR code in a "cashback" poster on the street is:',['Always trustworthy','Worth checking cautiously before scanning','Illegal to use'],1],
    ['Oversharing your live location publicly can lead to:',['Better friendships','Stalking or safety risk','Faster internet'],1],
    ['The first step after any account breach is to:',['Ignore it','Change the password & enable 2FA','Delete your phone'],1],
    ['Deepfake voice scams typically try to:',['Teach you a new skill','Create urgency to send money/info fast','Improve your grades'],1]
  ],
  resources:[
    ['Cyber Safety Poster','https://www.cybercrime.gov.in/' ],
    ['Stay Safe Online','https://staysafeonline.org/' ],
    ['Password Hygiene Guide','https://www.security.org/resources/best-practices-for-passwords/' ],
    ['Report Cyber Harassment','https://www.cybercrime.gov.in/' ]
  ],
  helplines:[['Cyber Crime Portal','cybercrime.gov.in','fa-shield-halved'],['National Cyber Helpline','1930','fa-phone'],['Child Helpline','1098','fa-child-reaching']]
};
 
const DRUG = {
  key:'drug', theme:'topic-pink', icon:'fa-hand-holding-medical', title:'Narcotic Addiction Awareness',
  stat1:['13%','of Indian students report peer pressure to try substances'], stat2:['3–5 yrs','average delay before someone seeks help'], stat3:['24x7','free confidential helpline support available'],
  quote:'“One conversation can change the direction of a life.”',
  intro:"Drug and substance abuse rarely begins with a dramatic decision — it usually starts quietly, through curiosity or peer pressure. Understanding how addiction develops, and recognising the earliest warning signs, is the strongest form of prevention available to students and their friends.",
  why:"Addiction affects the still-developing adolescent brain more severely than an adult's, disrupting memory, decision-making and emotional control. The earlier the awareness, the easier it is to protect yourself and support a friend before a habit becomes a dependency.",
  types:[
    ['fa-cannabis','Cannabis / Marijuana','Often seen as "harmless," but impairs memory, motivation and academic performance.'],
    ['fa-pills','Prescription Drug Misuse','Using medicines like painkillers or sedatives without a prescription or beyond dosage.'],
    ['fa-wine-bottle','Alcohol Abuse','Early or heavy drinking damages liver, brain development and judgement.'],
    ['fa-smoking','Tobacco & Vaping','Nicotine in cigarettes and e-cigarettes is highly addictive and harms lung development.'],
    ['fa-flask','Inhalants','Household chemicals misused for a quick high; carry high risk of sudden cardiac events.'],
    ['fa-syringe','Synthetic / Party Drugs','Unregulated substances with unpredictable, often severe, health effects.']
  ],
  warning:[
    ['Sudden new friend group','Abrupt shift away from old friends toward a secretive new circle.'],
    ['Falling grades & attendance','Unexplained drop in academic performance or frequent absences.'],
    ['Mood swings','Unusual irritability, anxiety or withdrawal from family.'],
    ['Physical changes','Bloodshot eyes, changes in appetite, sleep or hygiene.'],
    ['Secrecy about money','Unexplained requests for money or missing valuables.']
  ],
  causes:['Peer pressure and desire to "fit in"','Curiosity without awareness of risk','Coping with stress, trauma or academic pressure','Easy access and low perceived risk','Lack of open conversation at home or school'],
  risks:{Academic:'Concentration and memory decline, leading to falling grades.',
    Mental:'Higher risk of anxiety, depression and dependency-related mood disorders.',
    Physical:'Organ damage, impaired brain development, overdose risk.',
    Financial:'Spending on substances strains personal or family finances.',
    Social:'Strained family relationships and loss of trust among friends.',
    Legal:'Possession or use of banned substances can carry serious legal consequences.'},
  shortTerm:['Impaired judgement and coordination','Mood swings and irritability','Poor sleep and appetite changes','Risk-taking behaviour'],
  longTerm:['Chronic dependency','Long-term cognitive and organ damage','Breakdown of relationships','Reduced life and career opportunities'],
  story:"A college fresher who felt pressured to try substances at a party spoke to his mentor the next day instead of staying silent. With early counselling support, he built new friendships around sport and never faced the escalation many peers around him did.",
  dos:['Talk openly with a trusted adult if you feel pressured','Choose friend groups that respect your choices','Learn to say no confidently and without guilt','Seek counselling early if you\'re struggling','Support, don\'t judge, a friend who is struggling'],
  donts:["Don't experiment \"just once\" to fit in","Don't assume prescription drugs are automatically safe unsupervised","Don't hide a friend\'s substance use out of loyalty","Don't try to handle addiction alone","Don't shame someone seeking help"],
  myths:[['Trying it once is harmless.','Even a single use can trigger dependency in a developing brain, and normalises future risk-taking.'],
    ['Only "troubled" students get addicted.','Addiction can affect anyone regardless of background, grades or family situation.'],
    ['Vaping is a safe alternative to smoking.','Vapes still deliver addictive nicotine and expose developing lungs to harmful chemicals.'],
    ['Addiction is a choice, not a health issue.','Addiction is a recognised medical condition that affects brain chemistry and needs proper treatment.']],
  faqs:[['How do I help a friend without pushing them away?','Listen without judgement, express concern using "I" statements, and gently encourage them to speak to a counsellor.'],
    ['Is recovery from addiction really possible?','Yes — with the right support, counselling and sometimes medical treatment, long-term recovery is achievable.'],
    ['What if I\'m scared to tell my parents?','Consider approaching a school counsellor or helpline first; they can guide the next steps confidentially.'],
    ['Are all addictive substances illegal?','No — alcohol, tobacco and some medicines are legal but still addictive and harmful if misused.'],
    ['Can stress alone lead to substance use?','Unmanaged stress is a major risk factor, which is why healthy coping strategies matter as prevention.']],
  quiz:[
    ['Addiction most strongly affects which part of a developing student?',['Height','Brain development & decision-making','Handwriting'],1],
    ['A "harmless one-time try" of a substance is:',['Actually risk-free','Still a risk factor for future dependency','Recommended by doctors'],1],
    ['A sudden, secretive new friend group can be a:',['Guaranteed sign of addiction','Possible early warning sign worth noticing','Irrelevant detail'],1],
    ['The best first step if you feel peer-pressured is to:',['Give in to avoid conflict','Say no and talk to a trusted adult','Isolate yourself completely'],1],
    ['Vaping is best described as:',['Completely safe','Still nicotine-addictive and harmful to lungs','A proven quitting aid for teens'],1],
    ['Which is a legal but still addictive substance?',['Alcohol','Water','Multivitamins'],0],
    ['Addiction recovery is:',['Impossible','Achievable with the right support','Only for adults'],1],
    ['If a friend confides they\'re struggling, you should:',['Judge them','Listen and encourage professional help','Tell everyone at school'],1],
    ['A major cause of substance use among students is:',['Balanced sleep','Peer pressure & stress','Regular exercise'],1],
    ['Prescription medicine misuse means:',['Taking it exactly as prescribed','Using it without prescription or beyond dosage','Reading the label carefully'],1]
  ],
  resources:[
    ['Nasha Mukt Bharat','https://nashamuktbharat.unodc.org/' ],
    ['NIMHANS Mental Health','https://nimhans.ac.in/' ],
    ['Teen Substance Abuse Guide','https://www.ncbi.nlm.nih.gov/books/NBK560560/' ],
    ['Healthy Coping Toolkit','https://www.verywellmind.com/healthy-coping-skills-4586828' ]
  ],
  helplines:[['Drug Abuse Helpline','1800-11-0031','fa-hand-holding-medical'],['NIMHANS Tele-MANAS','14416','fa-brain'],['Child Helpline','1098','fa-child-reaching']]
};
 
const SOCIAL = {
  key:'social', theme:'topic-green', icon:'fa-mobile-screen', title:'Social Media & Junk Food Awareness',
  stat1:['7 hrs','average daily screen time among students'], stat2:['60%','of teens skip meals for ultra-processed snacks'], stat3:['30 min','of movement a day meaningfully improves focus'],
  quote:'“Your habits today are the health of your future self.”',
  intro:"Endless scrolling and convenient junk food both hijack the same reward pathways in the brain, quietly reshaping attention, sleep and eating patterns. Awareness plus small, consistent swaps can restore balance without demanding a complete lifestyle overhaul.",
  why:"Excess screen time is linked to poorer sleep, lower attention span and higher anxiety, while diets high in processed food are linked to fatigue, poor concentration and long-term health risks — exactly the resources students need most for academic performance.",
  types:[
    ['fa-hourglass-half','Doomscrolling','Compulsively scrolling feeds long past the point of enjoyment or usefulness.'],
    ['fa-bell','Notification Overload','Constant pings train the brain to crave interruption over deep focus.'],
    ['fa-burger','Ultra-Processed Snacking','Frequent reliance on packaged, high-sugar, high-salt convenience food.'],
    ['fa-moon','Late-Night Screen Use','Blue light and stimulating content delaying sleep onset.'],
    ['fa-users','Social Comparison','Curated feeds fuelling unrealistic comparisons and self-esteem dips.'],
    ['fa-gamepad','Compulsive Gaming','Gaming sessions that consistently crowd out study, sleep or exercise.']
  ],
  warning:[
    ['Checking phone first & last thing daily','Reaching for your phone within minutes of waking or before sleeping.'],
    ['Anxious without your phone','Feeling restless or anxious when separated from your device briefly.'],
    ['Skipping meals for screen time','Choosing to keep scrolling instead of eating a proper meal.'],
    ['Declining sleep quality','Struggling to fall asleep or waking up tired despite enough hours in bed.'],
    ['Reduced in-person interaction','Preferring texting over face-to-face conversations with friends and family.']
  ],
  causes:['Algorithm-driven infinite scroll design','Easy access to cheap processed snacks','Using screens to escape stress or boredom','Lack of a structured daily routine','Social pressure to stay "always online"'],
  risks:{Academic:'Shortened attention span reduces study efficiency and retention.',
    Mental:'Increased anxiety, comparison-driven low self-esteem, and sleep-linked mood dips.',
    Physical:'Eye strain, poor posture, weight gain and reduced fitness.',
    Financial:'Impulse spending on in-app purchases, subscriptions or delivery snacking.',
    Social:'Weaker real-world social skills and reduced quality family time.',
    Legal:'Oversharing online can expose you to privacy or safety complications.'},
  shortTerm:['Eye strain and headaches','Restlessness without a device nearby','Sluggishness after sugar/salt-heavy snacks','Delayed, poorer-quality sleep'],
  longTerm:['Chronic sleep disruption','Long-term attention and focus difficulties','Diet-linked health risks (weight, energy, immunity)','Reduced real-world social confidence'],
  story:"A second-year student noticed she was reaching for her phone over 100 times a day and skipping breakfast for extra scroll time. A two-week digital detox challenge with scheduled meals and a phone curfew restored her sleep and noticeably improved her focus in class.",
  dos:['Set specific screen-free times (meals, first hour after waking)','Choose whole foods and balanced meals over packaged snacks','Keep a consistent sleep schedule','Turn off non-essential notifications','Schedule offline hobbies and movement daily'],
  donts:["Don't use screens right before bed","Don't skip meals for extra scroll time","Don't rely on sugary drinks for energy","Don't compare your life to curated feeds","Don't multitask study with constant notifications"],
  myths:[['Multitasking with your phone while studying is efficient.','Task-switching lowers retention and can take up to 20 minutes to regain full focus.'],
    ['"Diet" or "zero" snacks are automatically healthy.','Many are still ultra-processed and offer little nutritional value.'],
    ['You need hours of screen time to be "addicted."','Compulsive checking patterns matter more than raw hours — quality of use counts.'],
    ['Skipping breakfast helps you focus better.','Skipping meals typically reduces concentration and energy levels by mid-morning.']],
  faqs:[['How much screen time is considered healthy for students?','There\'s no single number, but prioritising quality use, breaks, and protecting sleep matters more than a strict hour count.'],
    ['What\'s a simple way to start eating healthier?','Start by swapping one processed snack a day for a fruit, nuts, or a home-made alternative.'],
    ['Why do I feel anxious without my phone nearby?','This can reflect a learned dependency on constant stimulation — gradual, scheduled breaks help rebuild comfort with downtime.'],
    ['Does junk food really affect academic performance?','Yes — blood-sugar spikes and crashes from processed food affect concentration and energy consistency.'],
    ['Is a "digital detox" realistic for a student?','Even short, scheduled detox windows (like phone-free study blocks) produce measurable focus benefits.']],
  quiz:[
    ['Checking your phone within minutes of waking is a sign of:',['Great time management','A habit worth noticing and adjusting','Nothing important'],1],
    ['Ultra-processed snacks are best described as:',['Always nutritious','Convenient but often low in real nutrition','Required for energy'],1],
    ['Screens before bed can:',['Improve sleep quality','Delay and disrupt sleep','Have no effect'],1],
    ['A healthy response to social comparison online is:',['Curating your feed & taking breaks','Comparing constantly','Posting more to compete'],0],
    ['Multitasking phone use while studying tends to:',['Boost focus','Reduce retention and focus','Save time overall'],1],
    ['A balanced approach to screen time focuses on:',['Total elimination','Mindful, scheduled use','Ignoring the issue'],1],
    ['Skipping meals for scrolling typically leads to:',['Better focus','Lower energy and concentration','No change'],1],
    ['Which is a good screen-free habit?',['Phone-free meals','Phone under pillow at night','Checking phone every 2 minutes'],0],
    ['Regular movement/exercise helps students by:',['Reducing focus','Improving mood and concentration','Increasing screen cravings'],1],
    ['A sustainable habit change usually starts with:',['One small consistent swap','A drastic total overhaul overnight','Ignoring the pattern'],0]
  ],
  resources:[
    ['WHO Healthy Lifestyle','https://www.who.int/news-room/fact-sheets/detail/healthy-lifestyle' ],
    ['Sleep Hygiene Guide','https://www.cdc.gov/sleep/about/index.html' ],
    ['Digital Wellbeing Advice','https://www.mind.org.uk/for-young-people/your-mind/' ],
    ['Healthy Eating Basics','https://www.nutrition.gov/topics/basic-nutrition' ]
  ],
  helplines:[['Food Safety Complaint (FSSAI)','1800-112-100','fa-utensils'],['NIMHANS Tele-MANAS','14416','fa-brain'],['Student Wellness Helpline','1800-599-0019','fa-heart-pulse']]
};
 
const CAREER = {
  key:'career', theme:'topic-purple', icon:'fa-graduation-cap', title:'Career Guidance',
  stat1:['250+','emerging career paths across tech & core fields'], stat2:['₹50k+ Cr','in scholarships disbursed to Indian students yearly'], stat3:['1000s','of free certified online courses available'],
  quote:'“A clear plan turns confusion about the future into confidence.”',
  intro:"Choosing a career doesn't need to feel like guesswork. With the right information about streams, skills and opportunities, students can make confident, informed decisions instead of following pressure or trends blindly.",
  why:"The job market is evolving faster than ever, with AI, data and sustainability reshaping nearly every field. Early exposure to real career paths, entrance exams and skill-building resources helps students plan a future aligned with their strengths.",
  types:[
    ['fa-microchip','Engineering & Technology','Software, AI/ML, cybersecurity, cloud computing and core engineering branches.'],
    ['fa-user-doctor','Medicine & Healthcare','MBBS, nursing, allied health sciences and biotechnology research paths.'],
    ['fa-scale-balanced','Law & Governance','Legal practice, civil services, public policy and administration.'],
    ['fa-chart-line','Commerce & Finance','CA, CS, banking, financial analysis and entrepreneurship.'],
    ['fa-palette','Arts, Design & Media','Design, journalism, film, content creation and the creative economy.'],
    ['fa-seedling','Agriculture & Sciences','Agri-tech, environmental science and research-driven careers.']
  ],
  warning:[
    ['Choosing a stream only due to peer pressure','Picking a subject because friends chose it, not because it fits your interest.'],
    ['No exposure to real work environments','Never having explored internships, mentors or job-shadowing.'],
    ['Ignoring entrance exam timelines','Missing early registration or preparation windows for key exams.'],
    ['Overlooking skill-building outside academics','Focusing only on marks with no portfolio, projects or certifications.'],
    ['Avoiding career conversations','Delaying planning until the final year of school or college.']
  ],
  causes:['Limited exposure to diverse career options','Family or peer pressure toward "traditional" paths','Lack of structured career counselling in schools','Fear of failure or judgement','Information overload without proper guidance'],
  risks:{Academic:'Mismatched stream choice can reduce motivation and performance.',
    Mental:'Career confusion and pressure contribute significantly to student stress.',
    Physical:'Chronic stress from uncertainty can affect sleep and health.',
    Financial:'Poor planning can mean wasted fees on unsuitable courses.',
    Social:'Family expectations mismatched with personal interest strain relationships.',
    Legal:'Missing verified sources can expose students to fraudulent "guaranteed job" scams.'},
  shortTerm:['Confusion when choosing subjects/streams','Anxiety around exams and applications','Comparison with peers\' choices','Procrastination on planning'],
  longTerm:['Mismatched career satisfaction','Delayed skill development','Missed scholarship or exam windows','Reduced long-term earning potential'],
  story:"A student unsure between engineering and design used a free aptitude assessment and spoke with two working professionals before deciding. Two years in, she\'s combining both interests in a UX design role — a path she wouldn\'t have found without early exploration.",
  dos:['Explore multiple streams before deciding','Talk to professionals already working in fields you\'re curious about','Track scholarship and entrance exam deadlines early','Build a portfolio of projects, not just marks','Reassess your plan yearly — it\'s okay to pivot'],
  donts:["Don't choose a stream only to please others","Don't ignore free skill-building resources","Don't wait until the last year to start planning","Don't fall for \"guaranteed placement\" scams","Don't compare your timeline to everyone else's"],
  myths:[['There\'s only one "right" career path for everyone.','Most people build fulfilling careers across two or more fields over their lifetime.'],
    ['Marks alone decide your career success.','Skills, adaptability and real-world experience matter as much as academic scores.'],
    ['Arts and commerce students have fewer opportunities than science students.','Every stream has thriving, well-paying, in-demand career paths today.'],
    ['Once chosen, a career path can never change.','Career pivots are increasingly common and often lead to stronger, more fulfilling paths.']],
  faqs:[['How early should I start career planning?','Ideally from Class 9–10 onward, through casual exploration — but it\'s never too late to start.'],
    ['Are free online courses actually valuable to employers?','Yes, especially from recognised platforms — they demonstrate initiative and up-to-date skills.'],
    ['What if my interests don\'t match my family\'s expectations?','Have an open conversation backed by research and, if possible, involve a school counsellor to mediate.'],
    ['How do I know if a scholarship or job offer is genuine?','Verify through official government or institutional websites — never pay upfront fees for a "guaranteed" offer.'],
    ['Is it normal to change career direction in college?','Very common — many students refine or pivot their direction as they gain more exposure.']],
  quiz:[
    ['A healthy way to choose a stream is to:',['Copy your friend\'s choice','Explore your own interests & strengths','Pick randomly'],1],
    ['Free certified online courses are:',['Worthless to employers','A valuable way to build real skills','Only for college graduates'],1],
    ['The best time to start career exploration is:',['Only in final year','Gradually from early school years','Never necessary'],1],
    ['A "guaranteed job" offer asking for upfront payment is likely:',['Completely safe','A potential scam — verify officially first','Always legitimate'],1],
    ['Career satisfaction depends most on:',['Marks alone','A mix of skills, interest and experience','Luck only'],1],
    ['Changing your career direction in college is:',['Rare and wrong','A common and often positive step','Impossible'],1],
    ['Talking to working professionals about their field is:',['A waste of time','A great way to get real insight','Unnecessary'],1],
    ['Arts and commerce careers compared to science careers are:',['Less valuable','Equally full of strong opportunities','Not real careers'],1],
    ['Missing entrance exam deadlines can be avoided by:',['Tracking timelines early','Ignoring dates','Waiting for reminders only'],0],
    ['A strong portfolio alongside good grades helps because:',['It shows real applied skills','It replaces the need to study','It has no real benefit'],0]
  ],
  resources:[
    ['National Career Service','https://www.ncs.gov.in/' ],
    ['Scholarship Portal','https://scholarships.gov.in/' ],
    ['Career Guidance Toolkit','https://www.britannica.com/topic/careers' ],
    ['Resume Starter Template','https://www.canva.com/resumes/templates/' ]
  ],
  helplines:[['National Career Service','1800-425-1514','fa-briefcase'],['Scholarship Helpdesk','helpline.nsp@gov.in','fa-award'],['Student Wellness Helpline','1800-599-0019','fa-heart-pulse']]
};
 
const TOPICS={cyber:CYBER, drug:DRUG, social:SOCIAL, career:CAREER};

function renderResourceLinks(resources){
  return '';
}

function renderQuickActions(d){
  const actions = {
    cyber: [
      {
        title: 'Check Suspicious Link',
        desc: 'Scan URLs for malware & phishing with Google Safe Browsing',
        url: 'https://transparencyreport.google.com/safe-browsing/search',
        icon: 'fa-magnifying-glass-shield'
      },
      {
        title: 'Generate Strong Password',
        desc: 'Create secure, high-entropy passphrases via Bitwarden',
        url: 'https://bitwarden.com/password-generator/',
        icon: 'fa-key'
      },
      {
        title: 'Report Cyber Harassment',
        desc: 'Official National Cyber Crime Reporting Portal (Govt of India)',
        url: 'https://cybercrime.gov.in/',
        icon: 'fa-shield-halved'
      },
      {
        title: 'Verify Telecom Safety',
        desc: 'Check fraud alerts & blocked devices on Sanchar Saathi',
        url: 'https://sancharsaathi.gov.in/',
        icon: 'fa-mobile-screen-button'
      }
    ],
    drug: [
      {
        title: 'UNODC Youth Prevention',
        desc: 'Official UN guidance on youth substance abuse prevention',
        url: 'https://www.unodc.org/unodc/en/prevention/youth-initiative.html',
        icon: 'fa-hand-holding-medical'
      },
      {
        title: 'WHO Substance Health Facts',
        desc: 'Evidence-based health facts on drugs & psychoactive risks',
        url: 'https://www.who.int/health-topics/drugs-psychoactive',
        icon: 'fa-book-medical'
      },
      {
        title: 'NIH Youth Guidance & Prevention',
        desc: 'Science-backed coping tools from National Institute on Drug Abuse',
        url: 'https://nida.nih.gov/research-topics/parents-educators',
        icon: 'fa-brain'
      },
      {
        title: 'National Toll-Free Helpline',
        desc: 'Call 1800-11-0031 for free confidential support & counselling',
        url: 'tel:1800110031',
        icon: 'fa-phone-volume'
      }
    ],
    social: [
      {
        title: 'Healthy Digital Habits',
        desc: 'Practical strategies to overcome social media stress & addiction',
        url: 'https://www.helpguide.org/mental-health/wellbeing/social-media-and-mental-health',
        icon: 'fa-mobile-screen'
      },
      {
        title: 'Sleep Hygiene Checklist',
        desc: 'Sleep Foundation recommendations for deep, restorative rest',
        url: 'https://www.sleepfoundation.org/sleep-hygiene',
        icon: 'fa-moon'
      },
      {
        title: 'Harvard Nutrition Source',
        desc: 'Healthy eating plate & science-backed nutrition guidance',
        url: 'https://nutritionsource.hsph.harvard.edu/',
        icon: 'fa-apple-whole'
      },
      {
        title: 'WHO BeHealthy Youth Guide',
        desc: 'Daily physical activity and student wellness recommendations',
        url: 'https://www.who.int/initiatives/behealthy',
        icon: 'fa-heart-pulse'
      }
    ],
    career: [
      {
        title: 'National Career Service',
        desc: 'Official Govt portal for career paths, counseling & jobs',
        url: 'https://ncs.gov.in',
        icon: 'fa-compass'
      },
      {
        title: 'SWAYAM Free Online Courses',
        desc: 'Govt platform for free certified university & skill courses',
        url: 'https://swayam.gov.in/',
        icon: 'fa-graduation-cap'
      },
      {
        title: 'Explore In-Demand Skills',
        desc: 'Top certified industry courses on tech, AI & design (Coursera)',
        url: 'https://www.coursera.org/',
        icon: 'fa-laptop-code'
      },
      {
        title: 'Student Wellness Helpline',
        desc: 'Call Tele-MANAS (14416) for academic & career guidance support',
        url: 'tel:14416',
        icon: 'fa-headset'
      }
    ]
  };

  const list = actions[d.key] || actions.cyber;
  return `
    <section class="section" style="background:var(--surface);">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow accent-text ${d.theme}">Quick Actions</span>
          <h2>What should I do now?</h2>
          <p>Verified portals, live tools, and immediate support links.</p>
        </div>
        <div class="qa-grid" data-reveal>
          ${list.map(item => {
            const isTel = item.url.startsWith('tel:');
            return `
              <a class="qa-card ${d.theme}" href="${item.url}" ${isTel ? '' : 'target="_blank" rel="noopener noreferrer"'}>
                <div class="qa-icon"><i class="fa-solid ${item.icon}"></i></div>
                <div class="qa-info">
                  <span class="qa-title">${item.title}</span>
                  <span class="qa-desc">${item.desc}</span>
                </div>
                <div class="qa-arrow"><i class="fa-solid ${isTel ? 'fa-phone' : 'fa-arrow-up-right-from-square'}"></i></div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}


function renderSources(d){
  const sources = {
    cyber: [
      'Cybercrime portal and cyber safety resources',
      'Internet safety and password guidance resources',
      'Public education materials on digital hygiene and online threats'
    ],
    drug: [
      'Substance abuse awareness guidance and public health resources',
      'Mental-health support and coping frameworks',
      'Addiction awareness material from public institutions'
    ],
    social: [
      'Healthy lifestyle guidance from public health bodies',
      'Digital wellbeing and sleep education materials',
      'Nutrition basics and healthy habits resources'
    ],
    career: [
      'National career guidance resources',
      'Scholarship information portals',
      'Career and resume guidance resources'
    ]
  };

  return `
    <section class="section">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow accent-text ${d.theme}">Sources</span>
          <h2>References and guidance</h2>
        </div>
        <div class="glass-card" data-reveal>
          <ul style="margin:0;padding-left:20px;color:var(--text-soft);font-size:.92rem;line-height:1.8;">
            ${sources[d.key].map(s=>`<li>${s}</li>`).join('')}
          </ul>
        </div>
      </div>
    </section>
  `;
}
 
/* ============================================================
   PAGE ROUTER
   ============================================================ */
function showPage(id){
  document.getElementById('app').innerHTML = id==='home' ? renderHome()
    : id==='about' ? renderAbout()
    : id==='contact' ? renderContact()
    : renderTopic(TOPICS[id]);
  window.scrollTo({top:0,behavior:'smooth'});
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.toggle('active', a.dataset.nav===id));
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('backHomeBtn').classList.toggle('hidden', id==='home');
  if(id==='home') setTimeout(buildParticles,50);
  setTimeout(()=>{ initReveals(); initPageWidgets(id); },30);
}
function showTeam(){
  showPage('about');
  setTimeout(()=>document.getElementById('team').scrollIntoView({behavior:'smooth'}),80);
}
 
/* ============================================================
   HOME PAGE
   ============================================================ */
function renderHome(){
  return `
  <section class="hero">
    <div class="hero-particles"></div>
    <div class="hero-grid container">
      <div class="hero-content">
        <span class="eyebrow hero-kicker"><i class="fa-solid fa-seedling"></i> Student community service initiative</span>
        <h1>Build a <span class="accent">safer, healthier</span> future—one informed choice at a time.</h1>
        <p>Cyber Sprouts helps students recognise cyber threats, resist harmful pressures, strengthen healthy habits, and make confident career decisions.</p>
        <div class="hero-actions">
          <button class="btn btn-primary" onclick="document.getElementById('categories').scrollIntoView({behavior:'smooth'})"><i class="fa-solid fa-compass"></i> Explore the four tracks</button>
          <button class="btn btn-ghost" onclick="showPage('cyber')"><i class="fa-solid fa-shield-halved"></i> Start with cyber safety</button>
        </div>
        <div class="hero-badges">
          <span><i class="fa-solid fa-shield-halved"></i>&nbsp; Cyber Safety</span>
          <span><i class="fa-solid fa-hand-holding-medical"></i>&nbsp; Drug Awareness</span>
          <span><i class="fa-solid fa-mobile-screen"></i>&nbsp; Healthy Habits</span>
          <span><i class="fa-solid fa-graduation-cap"></i>&nbsp; Career Guidance</span>
        </div>
      </div>
      <div class="hero-visual" aria-hidden="true">
        <div class="hero-orbit hero-orbit-one"></div>
        <div class="hero-orbit hero-orbit-two"></div>
        <div class="hero-card security-card">
          <span class="mini-label"><i class="fa-solid fa-shield-heart"></i> Digital protection</span>
          <strong>Spot threats early</strong>
          <small>Fraud, scams, identity theft and online pressure.</small>
        </div>
        <div class="hero-card growth-card">
          <span class="mini-label"><i class="fa-solid fa-arrow-trend-up"></i> Healthy growth</span>
          <strong>Small habits, big impact</strong>
          <small>Better focus, sleep, confidence and career clarity.</small>
        </div>
        <div class="signal-panel">
          <span class="status-dot"></span>
          <span>Awareness in progress</span>
          <strong>4 tracks · 1 safer future</strong>
        </div>
      </div>
    </div>
  </section>
 
  <section class="section" id="categories">
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="eyebrow">Awareness Categories</span>
        <h2>Four pillars of a safer student life</h2>
        <p>Pick a topic to explore statistics, warning signs, prevention tips, quizzes and a take-home pledge certificate.</p>
      </div>
      <div class="cat-grid">
        <div class="cat-card blue" data-reveal onclick="showPage('cyber')">
          <div class="cat-icon"><i class="fa-solid fa-lock"></i></div>
          <h3>Cyber Threat Awareness</h3>
          <p>Protect yourself from hackers, scams, phishing, cyberbullying, identity theft, AI scams and online fraud.</p>
          <span class="cat-link">Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
        <div class="cat-card pink" data-reveal onclick="showPage('drug')">
          <div class="cat-icon"><i class="fa-solid fa-hand-holding-medical"></i></div>
          <h3>Narcotic Addiction Awareness</h3>
          <p>Understand the dangers of drug abuse, recognise warning signs and learn to protect yourself and your friends.</p>
          <span class="cat-link">Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
        <div class="cat-card green" data-reveal onclick="showPage('social')">
          <div class="cat-icon"><i class="fa-solid fa-mobile-screen"></i></div>
          <h3>Social Media &amp; Junk Food Awareness</h3>
          <p>Learn how excessive screen time and unhealthy eating affect your body, mind and academic performance.</p>
          <span class="cat-link">Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
        <div class="cat-card purple" data-reveal onclick="showPage('career')">
          <div class="cat-icon"><i class="fa-solid fa-graduation-cap"></i></div>
          <h3>Career Guidance</h3>
          <p>Discover career opportunities, future technologies, scholarships and the skills needed for success.</p>
          <span class="cat-link">Explore <i class="fa-solid fa-arrow-right"></i></span>
        </div>
      </div>
    </div>
  </section>
 
  <section class="section trust-section" style="padding-top:0;">
    <div class="container trust-grid">
      <div class="trust-panel" data-reveal>
        <span class="eyebrow">Why students use it</span>
        <h2>Practical awareness that fits real student life.</h2>
        <p>Each track turns complex risks into clear actions, useful tools, and guidance you can apply immediately.</p>
        <ul class="trust-list">
          <li><i class="fa-solid fa-circle-check"></i> Action-focused prevention tips</li>
          <li><i class="fa-solid fa-circle-check"></i> Clear warning signs and trusted resources</li>
          <li><i class="fa-solid fa-circle-check"></i> Interactive learning with measurable progress</li>
        </ul>
      </div>
      <div class="trust-metrics" data-reveal>
        <div class="metric-card"><strong>4</strong><span>Awareness tracks</span></div>
        <div class="metric-card"><strong>10</strong><span>Questions per quiz</span></div>
        <div class="metric-card"><strong>1</strong><span>Personal pledge</span></div>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="glass-card pledge-banner" data-reveal>
        <div style="max-width:520px;">
          <span class="eyebrow">Take the Pledge</span>
          <h2>Commit to safer, healthier choices</h2>
          <p style="margin-top:10px;">Visit any awareness page to take the student pledge and download your personalised awareness certificate.</p>
        </div>
        <button class="btn btn-primary" onclick="showPage('cyber')">Get Started <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="container">
      <div class="glass-card" data-reveal style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between;">
        <div style="max-width:620px;">
          <span class="eyebrow">Start Here</span>
          <h2 style="font-size:1.4rem;">Begin with the biggest student priorities</h2>
          <p style="margin-top:8px;">Cyber safety, healthier habits, and clearer future planning are the three fastest ways to build confidence and reduce risk.</p>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          <button class="btn btn-outline" onclick="showPage('cyber')">Cyber Safety</button>
          <button class="btn btn-outline" onclick="showPage('social')">Healthy Habits</button>
          <button class="btn btn-outline" onclick="showPage('career')">Career Plan</button>
        </div>
      </div>
    </div>
  </section>
  `;
}
 
/* ============================================================
   TOPIC PAGE RENDER
   ============================================================ */
function renderTopic(d){
  return `
  <div class="${d.theme}">
    <section class="topic-hero">
      <div class="container">
        <span class="pill accent-bg"><i class="fa-solid ${d.icon}"></i>&nbsp; Awareness Track</span>
        <h1 style="margin-top:16px;">${d.title}</h1>
        <p class="lead">${d.intro}</p>
        <div class="stat-row">
          <div class="stat"><b>${d.stat1[0]}</b><span>${d.stat1[1]}</span></div>
          <div class="stat"><b>${d.stat2[0]}</b><span>${d.stat2[1]}</span></div>
          <div class="stat"><b>${d.stat3[0]}</b><span>${d.stat3[1]}</span></div>
        </div>
        <div class="quote">${d.quote}</div>
      </div>
    </section>
  </div>
 
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Why This Matters</span><h2>${d.title}: the bigger picture</h2><p>${d.why}</p></div>
 
      <div class="section-head" data-reveal style="margin-bottom:26px;"><span class="eyebrow accent-text ${d.theme}">Types</span><h2>Common forms to recognise</h2></div>
      <div class="grid-3" data-reveal>
        ${d.types.map(t=>`<div class="type-card"><i class="fa-solid ${t[0]} accent-text ${d.theme}"></i><h4>${t[1]}</h4><p>${t[2]}</p></div>`).join('')}
      </div>
    </div>
  </section>
 
  <section class="section" style="background:var(--surface);">
    <div class="container grid-2" style="align-items:start;">
      <div data-reveal>
        <span class="eyebrow accent-text ${d.theme}">Warning Signs</span><h2 style="margin-bottom:24px;font-size:1.5rem;">Spot the early signals</h2>
        <div class="timeline">
          ${d.warning.map((w,i)=>`<div class="tl-item"><div class="tl-dot accent-bg ${d.theme}">${i+1}</div><h4>${w[0]}</h4><p>${w[1]}</p></div>`).join('')}
        </div>
      </div>
      <div data-reveal>
        <span class="eyebrow accent-text ${d.theme}">Causes</span><h2 style="margin-bottom:24px;font-size:1.5rem;">Why it happens</h2>
        <div class="glass-card">
          <ul style="margin:0;padding-left:20px;color:var(--text-soft);font-size:.92rem;">
            ${d.causes.map(c=>`<li style="margin-bottom:12px;">${c}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </section>
 
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Risks</span><h2>Six areas of impact</h2></div>
      <div class="risk-grid" data-reveal>
        ${Object.entries(d.risks).map(([k,v])=>`<div class="risk-card"><i class="fa-solid fa-triangle-exclamation accent-text ${d.theme}"></i><h4>${k} Risk</h4><p>${v}</p></div>`).join('')}
      </div>
    </div>
  </section>
 
  <section class="section" style="background:var(--surface);">
    <div class="container grid-2">
      <div data-reveal><h3 style="margin-bottom:16px;font-size:1.2rem;">Short-Term Effects</h3>
        <div class="grid-2">${d.shortTerm.map(s=>`<div class="type-card" style="padding:16px;"><i class="fa-solid fa-clock accent-text ${d.theme}"></i><p style="margin-top:8px;">${s}</p></div>`).join('')}</div>
      </div>
      <div data-reveal><h3 style="margin-bottom:16px;font-size:1.2rem;">Long-Term Effects</h3>
        <div class="grid-2">${d.longTerm.map(s=>`<div class="type-card" style="padding:16px;"><i class="fa-solid fa-hourglass-end accent-text ${d.theme}"></i><p style="margin-top:8px;">${s}</p></div>`).join('')}</div>
      </div>
    </div>
  </section>
 
  <section class="section">
    <div class="container">
      <div class="glass-card" data-reveal style="max-width:760px;margin:0 auto;">
        <span class="eyebrow accent-text ${d.theme}"><i class="fa-solid fa-book-open"></i> Real-Life Story</span>
        <p style="font-size:1rem;color:var(--text);font-style:italic;margin-top:10px;">"${d.story}"</p>
      </div>
    </div>
  </section>
 
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Prevention</span><h2>Do's and Don'ts</h2></div>
      <div class="dodont" data-reveal>
        <div class="do-col"><h4><i class="fa-solid fa-circle-check"></i> Do</h4><ul>${d.dos.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div class="dont-col"><h4><i class="fa-solid fa-circle-xmark"></i> Don't</h4><ul>${d.donts.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
      <div id="dailyTip" class="glass-card" data-reveal style="margin-top:24px;display:flex;gap:14px;align-items:center;"></div>
    </div>
  </section>
 
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Awareness Video</span><h2>Watch &amp; learn</h2></div>
      <div class="glass-card" data-reveal style="padding:0;overflow:hidden;aspect-ratio:16/9;max-width:800px;margin:0 auto;">
        <iframe width="100%" height="100%" style="display:block;border:0;" src="${({cyber:'https://www.youtube.com/embed/nVEyG3C-Mqw',drug:'https://www.youtube.com/embed/shtRXgefI9U',social:'https://www.youtube.com/embed/kvlWTI672sk',career:'https://www.youtube.com/embed/12ass4FSCcg'})[d.key]}" title="Awareness video" allowfullscreen loading="lazy"></iframe>
      </div>
    </div>
  </section>
 
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Myth vs Fact</span><h2>Flip each card to reveal the truth</h2></div>
      <div class="flip-grid" data-reveal>
        ${d.myths.map((m,i)=>`
        <div class="flip-card" onclick="this.classList.toggle('flipped')">
          <div class="flip-inner">
            <div class="flip-face flip-front"><span class="tag">Myth</span><p>${m[0]}</p></div>
            <div class="flip-face flip-back"><span class="tag">Fact</span><p>${m[1]}</p></div>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>
 
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">FAQ</span><h2>Frequently asked questions</h2></div>
      <div style="max-width:720px;margin:0 auto;" data-reveal>
        ${d.faqs.map((f,i)=>`
        <div class="faq-item" onclick="this.classList.toggle('open')">
          <div class="faq-q">${f[0]} <i class="fa-solid fa-plus"></i></div>
          <div class="faq-a"><p>${f[1]}</p></div>
        </div>`).join('')}
      </div>
    </div>
  </section>
 
  ${renderQuickActions(d)}
  ${renderSources(d)}
  ${d.key==='cyber' ? renderCyberTool() : d.key==='social' ? renderSocialTools() : d.key==='career' ? renderCareerTool() : ''}
 
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Test Yourself</span><h2>Awareness Quiz</h2><p>10 quick questions — track your score at the end.</p></div>
      <div id="quizContainer" data-quiz-key="${d.key}" data-reveal></div>
    </div>
  </section>
 
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Student Pledge</span><h2>Make it official</h2></div>
      <div class="pledge-box" data-reveal>
        <i class="fa-solid fa-quote-left accent-text ${d.theme}" style="font-size:1.4rem;"></i>
        <p>"I pledge to stay safe online, avoid drugs, maintain healthy habits, and make responsible choices for a better future."</p>
        <button class="btn btn-primary" onclick="openPledgeModal('${d.key}')"><i class="fa-solid fa-signature"></i> Take the Pledge</button>
      </div>
    </div>
  </section>
 
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text ${d.theme}">Raise a Concern</span><h2>Report or seek help</h2></div>
      <div class="helpline-grid" data-reveal>
        ${d.helplines.map(h=>`<div class="helpline-card"><i class="fa-solid ${h[2]} accent-text ${d.theme}"></i><small>${h[0]}</small><b>${h[1]}</b></div>`).join('')}
      </div>
    </div>
  </section>
 
  `;
}
 
/* ---------- Cyber tool: password checker/generator ---------- */
function renderCyberTool(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text topic-blue">Interactive Tool</span><h2>Password Strength Checker &amp; Generator</h2></div>
      <div class="grid-2" data-reveal>
        <div class="tool-box">
          <label>Type a password to test its strength</label>
          <input type="text" id="pwInput" oninput="checkPwStrength(this.value)" placeholder="Try a password...">
          <div class="strength-bar"><div class="strength-fill" id="strengthFill"></div></div>
          <p id="strengthLabel" style="font-size:.85rem;">Start typing to see feedback.</p>
        </div>
        <div class="tool-box">
          <label>Generate a strong random password</label>
          <div style="display:flex;gap:10px;">
            <input type="text" id="pwOutput" readonly placeholder="Click generate →" style="margin-bottom:0;">
            <button class="btn btn-outline" onclick="generatePassword()" style="white-space:nowrap;"><i class="fa-solid fa-arrows-rotate"></i> Generate</button>
          </div>
          <p style="font-size:.8rem;margin-top:12px;">16 characters · upper/lowercase · numbers · symbols</p>
        </div>
      </div>
    </div>
  </section>`;
}
function checkPwStrength(pw){
  let score=0;
  if(pw.length>=8) score++;
  if(pw.length>=12) score++;
  if(/[A-Z]/.test(pw)) score++;
  if(/[0-9]/.test(pw)) score++;
  if(/[^A-Za-z0-9]/.test(pw)) score++;
  const fill=document.getElementById('strengthFill');
  const label=document.getElementById('strengthLabel');
  if(!fill) return;
  const pct=[0,20,40,60,80,100][score];
  const colors=['#E0361E','#E0361E','#FF7A29','#F5C518','#8BC34A','#0FA968'];
  fill.style.width=pct+'%'; fill.style.background=colors[score];
  const labels=['Empty','Very Weak','Weak','Fair','Strong','Very Strong'];
  label.textContent = pw ? `${labels[score]} — ${score<=2?'add length, symbols & numbers':'nice, this looks solid'}` : 'Start typing to see feedback.';
}
function generatePassword(){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%^&*';
  let out=''; for(let i=0;i<16;i++) out+=chars[Math.floor(Math.random()*chars.length)];
  document.getElementById('pwOutput').value=out;
}
 
/* ---------- Social tools: BMI / water / screen time ---------- */
function renderSocialTools(){
  return `
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text topic-green">Interactive Tools</span><h2>Check your daily wellness numbers</h2></div>
      <div class="grid-3" data-reveal>
        <div class="tool-box">
          <label>Height (cm)</label><input type="number" id="bmiH" placeholder="160">
          <label>Weight (kg)</label><input type="number" id="bmiW" placeholder="55">
          <button class="btn btn-outline" onclick="calcBMI()" style="width:100%;justify-content:center;">Calculate BMI</button>
          <p id="bmiResult" style="margin-top:14px;font-size:.88rem;"></p>
        </div>
        <div class="tool-box">
          <label>Weight (kg) for water intake</label><input type="number" id="waterW" placeholder="55">
          <button class="btn btn-outline" onclick="calcWater()" style="width:100%;justify-content:center;">Calculate Water Intake</button>
          <p id="waterResult" style="margin-top:14px;font-size:.88rem;"></p>
        </div>
        <div class="tool-box">
          <label>Average daily screen time (hours)</label><input type="number" id="screenH" placeholder="6">
          <button class="btn btn-outline" onclick="calcScreen()" style="width:100%;justify-content:center;">Check Screen Time</button>
          <p id="screenResult" style="margin-top:14px;font-size:.88rem;"></p>
        </div>
      </div>
    </div>
  </section>`;
}
function calcBMI(){
  const h=parseFloat(document.getElementById('bmiH').value)/100;
  const w=parseFloat(document.getElementById('bmiW').value);
  const out=document.getElementById('bmiResult');
  if(!h||!w){out.textContent='Enter valid height and weight.';return;}
  const bmi=(w/(h*h)).toFixed(1);
  let cat = bmi<18.5?'Underweight':bmi<25?'Healthy range':bmi<30?'Overweight':'High range';
  out.innerHTML=`Your BMI is <b>${bmi}</b> — <span class="accent-text topic-green">${cat}</span>. This is a general indicator, not a medical diagnosis.`;
}
function calcWater(){
  const w=parseFloat(document.getElementById('waterW').value);
  const out=document.getElementById('waterResult');
  if(!w){out.textContent='Enter a valid weight.';return;}
  const liters=(w*0.033).toFixed(1);
  out.innerHTML=`Aim for about <b>${liters} litres</b> of water daily, adjusted for activity and climate.`;
}
function calcScreen(){
  const h=parseFloat(document.getElementById('screenH').value);
  const out=document.getElementById('screenResult');
  if(isNaN(h)){out.textContent='Enter valid hours.';return;}
  let msg = h<=2?'Great balance — keep it up!': h<=5?'Moderate — try scheduling short breaks.':'High — consider a digital detox challenge.';
  out.innerHTML=`${h} hrs/day — <b>${msg}</b>`;
}
 
/* ---------- Career roadmap tabs ---------- */
function renderCareerTool(){
  const roadmap={
    'Engineering & Tech':['Class 11–12: PCM','JEE/State CET','B.Tech / B.E.','Internships & certifications','Placement or higher studies'],
    'Medicine':['Class 11–12: PCB','NEET','MBBS/BDS/Allied Health','Internship (MBBS)','Specialisation (MD/MS) or practice'],
    'Commerce & Finance':['Class 11–12: Commerce','CA/CS foundation or B.Com','Articleship / internships','Professional certification','Career in finance, audit or business'],
    'Arts & Design':['Class 11–12: Any stream','Portfolio building','Design/Arts degree or diploma','Freelance / internship experience','Studio, agency or independent career']
  };
  const keys=Object.keys(roadmap);
  return `
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow accent-text topic-purple">Interactive Tool</span><h2>Career Roadmap Explorer</h2></div>
      <div class="glass-card" data-reveal>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px;" id="roadmapTabs">
          ${keys.map((k,i)=>`<button class="btn ${i===0?'btn-primary':'btn-outline'}" data-tab="${k}" onclick="setRoadmapTab('${k}')">${k}</button>`).join('')}
        </div>
        <div class="timeline" id="roadmapContent"></div>
      </div>
    </div>
  </section>`;
}
const ROADMAP_DATA={
  'Engineering & Tech':['Class 11–12: PCM','JEE/State CET','B.Tech / B.E.','Internships & certifications','Placement or higher studies'],
  'Medicine':['Class 11–12: PCB','NEET','MBBS/BDS/Allied Health','Internship (MBBS)','Specialisation (MD/MS) or practice'],
  'Commerce & Finance':['Class 11–12: Commerce','CA/CS foundation or B.Com','Articleship / internships','Professional certification','Career in finance, audit or business'],
  'Arts & Design':['Class 11–12: Any stream','Portfolio building','Design/Arts degree or diploma','Freelance / internship experience','Studio, agency or independent career']
};
function setRoadmapTab(key){
  document.querySelectorAll('#roadmapTabs button').forEach(b=>{
    b.className = 'btn ' + (b.dataset.tab===key?'btn-primary':'btn-outline');
  });
  const steps=ROADMAP_DATA[key];
  document.getElementById('roadmapContent').innerHTML = steps.map((s,i)=>`<div class="tl-item"><div class="tl-dot accent-bg topic-purple">${i+1}</div><h4>${s}</h4></div>`).join('');
}
 
/* ============================================================
   PAGE-SPECIFIC WIDGET INIT (quiz, tips, faq default state)
   ============================================================ */
const DAILY_TIPS={
  cyber:['Never share your OTP, even with "bank support".','Use a different password for every important account.','Check the padlock and URL before entering card details.','Think before you click — hover to preview a link first.'],
  drug:['It\'s okay to say no, even to a close friend.','A tough day is better handled by talking, not substances.','Support a struggling friend by listening, not judging.','Small daily routines build long-term resilience.'],
  social:['Try a phone-free first hour after waking up tomorrow.','Swap one packaged snack today for a piece of fruit.','Put your phone outside the bedroom while sleeping.','Take a 5-minute movement break every hour of study.'],
  career:['Talk to one professional this month in a field you like.','Explore one free online course outside your syllabus.','Revisit your career plan every year — it\'s okay to pivot.','Start a small project; it teaches more than marks alone.']
};
function initPageWidgets(id){
  if(TOPICS[id]){
    const tipBox=document.getElementById('dailyTip');
    if(tipBox){
      const tips=DAILY_TIPS[id];
      const tip=tips[Math.floor(Math.random()*tips.length)];
      tipBox.innerHTML=`<i class="fa-solid fa-lightbulb accent-text ${TOPICS[id].theme}" style="font-size:1.3rem;"></i><div><b style="font-family:var(--font-display);display:block;margin-bottom:4px;">Today's Tip</b><span style="font-size:.9rem;color:var(--text-soft);">${tip}</span></div>`;
    }
    buildQuiz(id);
    if(id==='career') setRoadmapTab('Engineering & Tech');
  }
}
 
/* ============================================================
   QUIZ ENGINE
   ============================================================ */
const quizState={};
function buildQuiz(key){
  const container=document.getElementById('quizContainer');
  if(!container) return;
  quizState[key]={idx:0, score:0, answered:false};
  renderQuizQuestion(key);
}
function renderQuizQuestion(key){
  const data=TOPICS[key].quiz;
  const st=quizState[key];
  const container=document.getElementById('quizContainer');
  if(st.idx>=data.length){
    let msg = st.score>=8?'Outstanding! You\'re a true Cyber Sprout 🌟' : st.score>=5?'Good job! A little more awareness goes a long way.' : 'Keep learning — review the sections above and try again!';
    const pct=Math.round((st.score/data.length)*100);
    container.innerHTML=`
    <div class="quiz-box quiz-complete" aria-live="polite">
      <div class="quiz-complete-badge"><i class="fa-solid fa-trophy"></i></div>
      <span class="eyebrow quiz-complete-kicker">Awareness complete</span>
      <h3>You scored ${st.score} / ${data.length}</h3>
      <div class="quiz-score-ring"><span>${pct}%</span></div>
      <p>${msg}</p>
      <div class="quiz-complete-actions">
        <button class="btn btn-primary" onclick="buildQuiz('${key}')"><i class="fa-solid fa-rotate-right"></i> Retake quiz</button>
        <button class="btn btn-outline" onclick="showPage('${key}')"><i class="fa-solid fa-arrow-left"></i> Review topic</button>
      </div>
    </div>`;
    localStorage.setItem('cs_quiz_'+key, JSON.stringify({score:st.score,total:data.length,date:new Date().toISOString()}));
    return;
  }
  const q=data[st.idx];
  const progress=((st.idx)/data.length)*100;
  container.innerHTML=`
  <div class="quiz-box">
    <div class="quiz-progress" role="progressbar" aria-label="Question ${st.idx+1} of ${data.length}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progress)}">
      <div class="quiz-progress-fill" style="width:${progress}%;"></div>
    </div>
    <div class="quiz-meta"><span class="tag-badge">Question ${st.idx+1} of ${data.length}</span><span class="quiz-score-pill"><i class="fa-solid fa-star"></i> ${st.score} correct</span></div>
    <h3>${q[0]}</h3>
    <div id="quizOpts" class="quiz-opts">
      ${q[1].map((opt,i)=>`<button class="quiz-opt" type="button" onclick="answerQuiz('${key}',${i})" aria-label="Answer: ${opt}">${opt}</button>`).join('')}
    </div>
  </div>`;
}
function answerQuiz(key,i){
  const st=quizState[key];
  if(st.answered) return;
  st.answered=true;
  const data=TOPICS[key].quiz[st.idx];
  const opts=document.querySelectorAll('#quizOpts .quiz-opt');
  opts.forEach((el,idx)=>{
    el.disabled=true;
    if(idx===data[2]) el.classList.add('correct');
    else if(idx===i) el.classList.add('wrong');
    if(idx===i && i===data[2]) el.classList.add('selected');
  });
  if(i===data[2]) st.score++;
  setTimeout(()=>{
    st.idx++; st.answered=false;
    renderQuizQuestion(key);
  },900);
}
 
/* ============================================================
   PLEDGE + CERTIFICATE
   ============================================================ */
function openPledgeModal(key){
  const name=prompt('Enter your name for the awareness certificate:');
  if(!name) return;
  localStorage.setItem('cs_pledge_'+key, JSON.stringify({name,date:new Date().toLocaleDateString()}));
  const stats = JSON.parse(localStorage.getItem('cs_campaign_stats') || '{"visits":0,"pages":{},"pledges":0}');
  stats.pledges = (stats.pledges || 0) + 1;
  stats.pages[key] = (stats.pages?.[key] || 0) + 1;
  localStorage.setItem('cs_campaign_stats', JSON.stringify(stats));
  generateCertificate(name, TOPICS[key].title);
}
function generateCertificate(name, topicTitle){
  const canvas=document.createElement('canvas');
  canvas.width=1200; canvas.height=850;
  const ctx=canvas.getContext('2d');
  const pledgeStamp = localStorage.getItem('cs_pledge_'+(TOPICS[Object.keys(TOPICS).find(k => TOPICS[k].title === topicTitle)]?.key || 'cyber'));
  const grad=ctx.createLinearGradient(0,0,1200,850);
  grad.addColorStop(0,'#0B3FA8'); grad.addColorStop(.5,'#1E5FE0'); grad.addColorStop(1,'#7C4DFF');
  ctx.fillStyle=grad; ctx.fillRect(0,0,1200,850);
  ctx.strokeStyle='rgba(255,255,255,.6)'; ctx.lineWidth=3;
  ctx.strokeRect(40,40,1120,770);
  ctx.strokeStyle='rgba(255,255,255,.3)'; ctx.lineWidth=1;
  ctx.strokeRect(56,56,1088,738);
 
  ctx.fillStyle='#fff'; ctx.textAlign='center';
  ctx.font='700 26px Poppins, sans-serif';
  ctx.fillText('🌱 CYBER SPROUTS — STUDENT SHIELD', 600, 150);
  ctx.font='400 16px Montserrat, sans-serif';
  ctx.fillStyle='rgba(255,255,255,.8)';
  ctx.fillText('Learn Smart • Stay Safe • Live Healthy • Choose Right', 600, 182);
 
  ctx.font='600 20px Montserrat, sans-serif';
  ctx.fillStyle='rgba(255,255,255,.85)';
  ctx.fillText('CERTIFICATE OF AWARENESS PLEDGE', 600, 260);
 
  ctx.font='400 18px Montserrat, sans-serif';
  ctx.fillText('This certifies that', 600, 330);
 
  ctx.font='700 46px Poppins, sans-serif';
  ctx.fillText(name, 600, 400);
 
  ctx.font='400 19px Montserrat, sans-serif';
  ctx.fillText('has taken the student pledge for', 600, 450);
  ctx.font='700 24px Poppins, sans-serif';
  ctx.fillText(topicTitle, 600, 490);
 
  ctx.font='italic 17px Montserrat, sans-serif';
  ctx.fillStyle='rgba(255,255,255,.85)';
  wrapText(ctx,'"I pledge to stay safe online, avoid drugs, maintain healthy habits, and make responsible choices for a better future."',600,545,760,26);
 
  ctx.font='400 15px Montserrat, sans-serif';
  ctx.fillStyle='rgba(255,255,255,.7)';
  ctx.fillText('Date: ' + new Date().toLocaleDateString(), 600, 700);
 
  ctx.font='600 15px Montserrat, sans-serif';
  ctx.fillStyle='#fff';
  ctx.fillText('Cyber Sprouts Community Service Project · 2026', 600, 760);
  if(pledgeStamp){
    ctx.font='600 14px Montserrat, sans-serif';
    ctx.fillStyle='rgba(255,255,255,.8)';
    ctx.fillText('Pledge recorded successfully', 600, 785);
  }
 
  const url=canvas.toDataURL('image/png');
  return url;
}

function showCertificatePreview(name, topicTitle, url){
  const modal=document.getElementById('globalModal') || document.querySelector('.modal');
  if(!modal) return;
  const panel=modal.querySelector('.modal-panel');
  panel.innerHTML=`
    <button class="modal-close" type="button" aria-label="Close certificate"><i class="fa-solid fa-xmark"></i></button>
    <div class="certificate-success">
      <div class="certificate-badge"><i class="fa-solid fa-certificate"></i></div>
      <span class="eyebrow">Certificate ready</span>
      <h2>Your awareness pledge is complete</h2>
      <p>${name}, your ${topicTitle.toLowerCase()} certificate has been generated.</p>
      <div class="certificate-preview"><img src="${url}" alt="Cyber Sprouts awareness certificate for ${name}"></div>
      <div class="modal-actions">
        <button class="btn btn-outline" type="button" data-close="true">Close</button>
        <a class="btn btn-primary" href="${url}" download="CyberSprouts_Certificate_${name.replace(/\s+/g,'_')}.png"><i class="fa-solid fa-download"></i> Download</a>
      </div>
    </div>`;
  modal.classList.remove('hidden');
  modal.querySelector('.modal-close').addEventListener('click', ()=>modal.classList.add('hidden'));
  modal.querySelector('[data-close="true"]').addEventListener('click', ()=>modal.classList.add('hidden'));
}

function wrapText(ctx,text,x,y,maxWidth,lineHeight){
  const words=text.split(' ');
  let line=''; let curY=y;
  for(let n=0;n<words.length;n++){
    const testLine=line+words[n]+' ';
    if(ctx.measureText(testLine).width>maxWidth && n>0){
      ctx.fillText(line,x,curY); line=words[n]+' '; curY+=lineHeight;
    } else line=testLine;
  }
  ctx.fillText(line,x,curY);
}
 
/* ============================================================
   FEEDBACK
   ============================================================ */
/* ============================================================
   ABOUT PAGE
   ============================================================ */
const TEAM=[
  ['Balivada Pydi Vamsi Krishna','24KD1A0515'],
  ['Pollakattu Vennela','24KD1A05S9'],
  ['Dasari Suresh','25KD5A0510'],
  ['Bhogapurapu Sree Charan','24KD1A0528'],
  ['Penki Nagamani Sai','24KD1A05R7'],
  ['Kanakala Surya Jagadish','24KD1A05F5'],
  ['Bunga Mani Priya','25KD5A0507']
];
function initials(n){ return n.split(' ').map(w=>w[0]).slice(0,2).join(''); }
function renderAbout(){
  return `
  <section class="topic-hero topic-blue">
    <div class="container">
      <span class="pill accent-bg"><i class="fa-solid fa-people-group"></i>&nbsp; About the Project</span>
      <h1 style="margin-top:16px;">Cyber Sprouts — Student Shield</h1>
      <p class="lead" style="color:#000;background:#fff;padding:12px 16px;border-radius:10px;display:inline-block;">A Community Service Project built by students, for students — turning awareness into everyday action.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="grid-4" data-reveal>
        <div class="type-card"><i class="fa-solid fa-user-graduate accent-text topic-blue"></i><h4>Student Reach</h4><p>Designed to help students build safer online habits and healthier everyday routines.</p></div>
        <div class="type-card"><i class="fa-solid fa-circle-check accent-text topic-blue"></i><h4>Practical Skills</h4><p>Focuses on action, prevention, and real-life judgment rather than theory alone.</p></div>
        <div class="type-card"><i class="fa-solid fa-people-arrows accent-text topic-blue"></i><h4>Peer Awareness</h4><p>Encourages students to support each other, not just learn individually.</p></div>
        <div class="type-card"><i class="fa-solid fa-chart-column accent-text topic-blue"></i><h4>Impact Tracking</h4><p>Built to measure engagement and awareness outcomes across campaigns.</p></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container grid-2" data-reveal>
      <div class="glass-card">
        <h3 style="margin-bottom:10px;font-size:1.1rem;" class="accent-text topic-blue">Mission</h3>
        <p>To equip school and college students with practical awareness of cyber threats, substance abuse, unhealthy digital habits and career pathways — through an engaging, accessible platform.</p>
      </div>
      <div class="glass-card">
        <h3 style="margin-bottom:10px;font-size:1.1rem;" class="accent-text topic-blue">Vision</h3>
        <p>A generation of students who are digitally confident, physically and mentally healthy, and equipped to make informed choices about their future.</p>
      </div>
    </div>
  </section>
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Objectives</span><h2>What this project sets out to do</h2></div>
      <div class="grid-4" data-reveal>
        <div class="type-card"><i class="fa-solid fa-bullseye accent-text topic-blue"></i><h4>Raise Awareness</h4><p>Make key safety and health knowledge simple and accessible.</p></div>
        <div class="type-card"><i class="fa-solid fa-hands-holding-child accent-text topic-blue"></i><h4>Build Prevention Skills</h4><p>Teach practical habits, not just theory.</p></div>
        <div class="type-card"><i class="fa-solid fa-comments accent-text topic-blue"></i><h4>Encourage Dialogue</h4><p>Normalise conversations around difficult topics.</p></div>
        <div class="type-card"><i class="fa-solid fa-route accent-text topic-blue"></i><h4>Guide the Future</h4><p>Connect students to real career and skill resources.</p></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Community Service Purpose</span><h2>Why we built this</h2><p>Awareness gaps quietly cost students their safety, health and opportunities. This project exists to close that gap with clear, student-friendly information — presented the way students actually engage: visually, interactively, and honestly.</p></div>
    </div>
  </section>
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Important Notice</span><h2>Safety and guidance</h2></div>
      <div class="grid-2" data-reveal>
        <div class="glass-card">
          <h3 class="accent-text topic-blue" style="margin-bottom:10px;">Disclaimer</h3>
          <p>This project provides educational awareness content for student safety and personal wellbeing. It is not a substitute for medical, legal, or professional counseling advice. For urgent concerns, please contact a trusted adult, counselor, or official helpline.</p>
        </div>
        <div class="glass-card">
          <h3 class="accent-text topic-blue" style="margin-bottom:10px;">Privacy</h3>
          <p>We do not store personal sensitive information unless you choose to submit it through a form or a pledge. Any form data is used only for awareness campaign communication and support follow-up.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Feedback</span><h2>Share your thoughts</h2></div>
      <div class="glass-card" data-reveal style="max-width:720px;margin:0 auto;">
        <form id="feedbackForm" onsubmit="handleFeedbackSubmit(event)">
          <input type="text" name="name" placeholder="Your name" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);margin-bottom:14px;" required>
          <input type="email" name="email" placeholder="Your email" style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);margin-bottom:14px;" required>
          <textarea name="message" rows="5" placeholder="Tell us what you think should improve in this project..." style="width:100%;padding:12px 14px;border-radius:10px;border:1px solid var(--border);resize:vertical;margin-bottom:14px;" required></textarea>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Feedback</button>
          <p id="feedbackStatus" style="margin-top:12px;font-size:.88rem;color:var(--text-soft);"></p>
        </form>
      </div>
    </div>
  </section>
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Campaign Structure</span><h2>How the project grows</h2></div>
      <div class="grid-4" data-reveal>
        <div class="type-card"><i class="fa-solid fa-seedling accent-text topic-blue"></i><h4>Awareness</h4><p>Build foundational knowledge through education and examples.</p></div>
        <div class="type-card"><i class="fa-solid fa-shield-heart accent-text topic-blue"></i><h4>Prevention</h4><p>Deliver practical habits that reduce risk and improve decision-making.</p></div>
        <div class="type-card"><i class="fa-solid fa-user-group accent-text topic-blue"></i><h4>Engagement</h4><p>Turn learning into community conversations and peer support.</p></div>
        <div class="type-card"><i class="fa-solid fa-chart-line accent-text topic-blue"></i><h4>Impact</h4><p>Track awareness, pledges, outreach, and program growth over time.</p></div>
      </div>
    </div>
  </section>
  <section class="section" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Partners & Institutions</span><h2>Who can support the campaign</h2></div>
      <div class="grid-4" data-reveal>
        <div class="type-card"><i class="fa-solid fa-school accent-text topic-blue"></i><h4>Schools</h4><p>Use the resource kit in classrooms and student clubs.</p></div>
        <div class="type-card"><i class="fa-solid fa-building-columns accent-text topic-blue"></i><h4>Colleges</h4><p>Introduce the awareness journey during orientation or wellness week.</p></div>
        <div class="type-card"><i class="fa-solid fa-handshake-angle accent-text topic-blue"></i><h4>NGOs</h4><p>Extend outreach to local youth and community groups.</p></div>
        <div class="type-card"><i class="fa-solid fa-briefcase accent-text topic-blue"></i><h4>Career Mentors</h4><p>Support career awareness and planning sessions for students.</p></div>
      </div>
    </div>
  </section>
  <section class="section" id="team" style="background:var(--surface);">
    <div class="container">
      <div class="section-head" data-reveal><span class="eyebrow">Team</span><h2>Meet the creators</h2></div>
      <div class="grid-4" data-reveal>
        ${TEAM.map(m=>`<div class="team-card"><div class="team-avatar">${initials(m[0])}</div><h4>${m[0]}</h4><span>${m[1]}</span></div>`).join('')}
      </div>
    </div>
  </section>
  `;
}
 
/* ============================================================
   CONTACT PAGE
   ============================================================ */
function renderContact(){
  return `
  <section class="topic-hero topic-purple">
    <div class="container">
      <span class="pill accent-bg"><i class="fa-solid fa-envelope"></i>&nbsp; Get in Touch</span>
      <h1 style="margin-top:16px;">Contact Cyber Sprouts</h1>
      <p class="lead">Connect with our team, send feedback, or reach out for support and collaboration.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="grid-3" data-reveal>
        <div class="glass-card"><i class="fa-solid fa-envelope-open-text accent-text topic-purple"></i><h3 style="margin:10px 0 8px;">Project Message</h3><p>For general project updates, collaboration, or student outreach requests.</p></div>
        <div class="glass-card"><i class="fa-solid fa-shield-heart accent-text topic-purple"></i><h3 style="margin:10px 0 8px;">Support Desk</h3><p>For student concerns, campaign assistance, and digital safety guidance.</p></div>
        <div class="glass-card"><i class="fa-solid fa-people-group accent-text topic-purple"></i><h3 style="margin:10px 0 8px;">Workshops</h3><p>For schools, colleges, NGOs, and campus outreach partnership opportunities.</p></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container grid-2" data-reveal>
      <div class="glass-card">
        <h3 style="margin-bottom:12px;font-size:1.1rem;">Contact us</h3>
        <form id="contactForm" onsubmit="submitContactForm(event)" class="contact-form">
          <input name="name" type="text" placeholder="Your full name" required>
          <input name="email" type="email" placeholder="Your email address" required>
          <input name="subject" type="text" placeholder="Subject" required>
          <textarea name="message" placeholder="Your message..." required></textarea>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Send Message</button>
          <p id="contactStatus" style="margin-top:12px;font-size:.88rem;color:var(--text-soft);"></p>
        </form>
      </div>
      <div class="glass-card">
        <h3 style="margin-bottom:12px;font-size:1.1rem;">Support & collaboration</h3>
        <p><strong>Email:</strong> <a href="mailto:vamsi799470@gmail.com" style="color:var(--blue);font-weight:600;">vamsi799470@gmail.com</a></p>
        <p><strong>Support:</strong> <a href="mailto:vamsi799470@gmail.com" style="color:var(--blue);font-weight:600;">vamsi799470@gmail.com</a></p>
        <p><strong>Campus outreach:</strong> <a href="mailto:vamsi799470@gmail.com" style="color:var(--blue);font-weight:600;">vamsi799470@gmail.com</a></p>
        <div class="social-row" style="justify-content:flex-start;">
          <a class="icon-btn" href="https://www.instagram.com/mr_smart_091?igsh=dzlkemxmeWwyY2Z4" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i></a>
          <a class="icon-btn" href="https://www.linkedin.com/in/vamsi-krishna-33258a3b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
          <a class="icon-btn" href="https://youtube.com/@vamsi-v6u?si=zNFr8oGUaVrR4EfP" target="_blank" rel="noopener"><i class="fa-brands fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </section>
  `;
}

function submitContactForm(event){
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();
  const status = document.getElementById('contactStatus');

  if(!name || !email || !subject || !message){
    status.innerHTML = '<span style="color:#E0361E;"><i class="fa-solid fa-circle-exclamation"></i> Please complete all fields before sending your message.</span>';
    return;
  }

  const targetEmail = 'vamsi799470@gmail.com';
  const mailSubject = `[Cyber Sprouts Contact] ${subject} - from ${name}`;
  const mailBody = `Hello Vamsi,

A new message was submitted through the Cyber Sprouts Contact Form:

--------------------------------------------------
Sender Details:
• Name: ${name}
• Email: ${email}
• Subject: ${subject}
--------------------------------------------------

Message:
${message}

--------------------------------------------------
Sent from Cyber Sprouts Student Shield Platform`;

  const encSubject = encodeURIComponent(mailSubject);
  const encBody = encodeURIComponent(mailBody);
  const mailtoUrl = `mailto:${targetEmail}?subject=${encSubject}&body=${encBody}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encSubject}&body=${encBody}`;

  const payload = { name, email, subject, message, date: new Date().toISOString() };
  localStorage.setItem('cs_contact_message', JSON.stringify(payload));

  // Try background web delivery as well
  try {
    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, _subject: mailSubject, message })
    }).catch(() => {});
  } catch (e) {}

  status.innerHTML = `
    <div style="margin-top:14px;padding:16px;border-radius:14px;background:rgba(15,169,104,0.08);border:1px solid rgba(15,169,104,0.3);color:var(--text);">
      <div style="display:flex;align-items:center;gap:8px;font-weight:600;color:#0FA968;margin-bottom:8px;">
        <i class="fa-solid fa-circle-check"></i> Message prepared for ${targetEmail}
      </div>
      <p style="font-size:0.86rem;color:var(--text-soft);margin-bottom:12px;line-height:1.5;">
        Your typed message has been formatted for <b>${targetEmail}</b>. Opening your email app automatically, or click below:
      </p>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:10px 18px;font-size:0.88rem;">
          <i class="fa-brands fa-google"></i> Open in Gmail Web
        </a>
        <a href="${mailtoUrl}" class="btn btn-outline" style="padding:10px 18px;font-size:0.88rem;">
          <i class="fa-solid fa-envelope"></i> Open in Mail Client
        </a>
      </div>
    </div>
  `;

  // Automatically trigger email client
  window.location.href = mailtoUrl;

  // Re-enable button after submit
  const submitBtn = form.querySelector('button[type="submit"]');
  if(submitBtn) {
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = submitBtn.dataset.defaultContent || '<i class="fa-solid fa-paper-plane"></i> Send Message';
    }, 2000);
  }

  form.reset();
}

function handleFeedbackSubmit(event){
  event.preventDefault();
  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const status = document.getElementById('feedbackStatus');

  if(!name || !email || !message){
    status.innerHTML = '<span style="color:#E0361E;"><i class="fa-solid fa-circle-exclamation"></i> Please complete all fields before submitting feedback.</span>';
    return;
  }

  const targetEmail = 'vamsi799470@gmail.com';
  const mailSubject = `[Cyber Sprouts Feedback] from ${name}`;
  const mailBody = `Hello Vamsi,

New feedback received on Cyber Sprouts:

--------------------------------------------------
Sender: ${name}
Email: ${email}
--------------------------------------------------

Feedback:
${message}

--------------------------------------------------
Sent from Cyber Sprouts Platform`;

  const encSubject = encodeURIComponent(mailSubject);
  const encBody = encodeURIComponent(mailBody);
  const mailtoUrl = `mailto:${targetEmail}?subject=${encSubject}&body=${encBody}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encSubject}&body=${encBody}`;

  const payload = { name, email, message, date: new Date().toISOString() };
  localStorage.setItem('cs_feedback', JSON.stringify(payload));

  try {
    fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name, email, _subject: mailSubject, message })
    }).catch(() => {});
  } catch (e) {}

  status.innerHTML = `
    <div style="margin-top:14px;padding:14px;border-radius:12px;background:rgba(15,169,104,0.08);border:1px solid rgba(15,169,104,0.3);color:var(--text);">
      <div style="display:flex;align-items:center;gap:8px;font-weight:600;color:#0FA968;margin-bottom:8px;">
        <i class="fa-solid fa-circle-check"></i> Feedback formatted for ${targetEmail}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
        <a href="${gmailUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="padding:8px 16px;font-size:0.85rem;">
          <i class="fa-brands fa-google"></i> Send via Gmail Web
        </a>
        <a href="${mailtoUrl}" class="btn btn-outline" style="padding:8px 16px;font-size:0.85rem;">
          <i class="fa-solid fa-envelope"></i> Send via Mail App
        </a>
      </div>
    </div>
  `;

  window.location.href = mailtoUrl;

  const submitBtn = form.querySelector('button[type="submit"]');
  if(submitBtn) {
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = submitBtn.dataset.defaultContent || 'Send Feedback';
    }, 2000);
  }

  form.reset();
}
 
/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
  autoTrackPageVisit('home');
});

function getCampaignStats(){
  try {
    const stats = JSON.parse(localStorage.getItem('cs_campaign_stats') || '{"visits":0,"pages":{},"pledges":0}');
    return {
      visits: Number(stats.visits) || 0,
      pledges: Number(stats.pledges) || 0,
      pages: stats.pages && typeof stats.pages === 'object' ? stats.pages : {}
    };
  } catch {
    return { visits: 0, pledges: 0, pages: {} };
  }
}

function autoTrackPageVisit(pageKey){
  const current = getCampaignStats();
  current.visits += 1;
  current.pages[pageKey] = (Number(current.pages[pageKey]) || 0) + 1;
  localStorage.setItem('cs_campaign_stats', JSON.stringify(current));
}

function resetCampaignStats(){
  if (!confirm('Reset the campaign dashboard counters? This cannot be undone.')) return;
  localStorage.removeItem('cs_campaign_stats');
  const app = document.getElementById('app');
  if (app) {
    const dashboard = document.getElementById('campaignDashboard');
    if (dashboard) dashboard.remove();
    app.insertAdjacentHTML('beforeend', renderCampaignStats());
    initPageWidgets('home');
  }
}

function initCampaignChart(stats){
  const chart = document.getElementById('campaignChart');
  const labels = ['Cyber', 'Drug', 'Healthy Habits', 'Career'];
  const values = [stats.pages.cyber || 0, stats.pages.drug || 0, stats.pages.social || 0, stats.pages.career || 0];
  const maxValue = Math.max(...values, 1);

  if (!chart) return;
  chart.innerHTML = `
    <div class="chart-grid" aria-hidden="true">
      ${values.map((value, index) => `
        <div class="chart-column">
          <span class="chart-value">${value}</span>
          <div class="chart-bar" style="height:${(value / maxValue) * 100}%"></div>
          <span class="chart-label">${labels[index]}</span>
        </div>`).join('')}
    </div>
    <div class="chart-legend"><span><i class="fa-solid fa-chart-column"></i> Topic views</span></div>
  `;
}

function renderCampaignStats(){
  const stats = getCampaignStats();
  const cards = [
    ['Visits', stats.visits],
    ['Cyber views', stats.pages.cyber || 0],
    ['Drug views', stats.pages.drug || 0],
    ['Pledges', stats.pledges]
  ];

  return `
    <section class="section" id="campaignDashboard" style="background:var(--surface);">
      <div class="container">
        <div class="section-head" data-reveal>
          <span class="eyebrow accent-text">Campaign Dashboard</span>
          <h2>Live awareness summary</h2>
          <p>Small actions add up — every visit, lesson, and pledge strengthens the campaign.</p>
        </div>
        <div class="campaign-tools" data-reveal>
          <div class="campaign-note"><i class="fa-solid fa-circle-info accent-text topic-blue"></i> Local browser data only; this demo does not send personal information.</div>
          <button class="btn btn-outline" onclick="resetCampaignStats()"><i class="fa-solid fa-rotate-left"></i> Reset dashboard</button>
        </div>
        <div class="grid-4" data-reveal>
          ${cards.map(([label,value])=>`
            <div class="type-card"><i class="fa-solid fa-chart-simple accent-text topic-blue"></i><h4>${label}</h4><p style="font-size:1.8rem;margin-top:8px;font-weight:700;color:var(--text);">${value}</p></div>`).join('')}
        </div>
        <div class="glass-card" data-reveal style="margin-top:24px;">
          <div class="section-head" style="margin:0 0 20px;max-width:none;text-align:left;">
            <span class="eyebrow accent-text">Engagement</span>
            <h2 style="font-size:1.35rem;">Topic views this campaign</h2>
          </div>
          <div class="campaign-chart-wrap"><canvas id="campaignChart"></canvas></div>
        </div>
      </div>
    </section>
  `;
}

window.addEventListener('load', () => {
  const app = document.getElementById('app');
  if (app) {
    const existing = app.innerHTML;
    const statsWidget = renderCampaignStats();
    if (!existing.includes('Campaign Dashboard')) {
      app.insertAdjacentHTML('beforeend', statsWidget);
      initCampaignChart(getCampaignStats());
    }
  }
});