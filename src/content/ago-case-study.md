## Designing Beyond the Gallery Walls

*I set out to fix the Art Gallery of Ontario's online account. Three studies later, I found the real gap wasn't on the website. It was inside the gallery.*

| Role | Timeline | Team | Methods |
| --- | --- | --- | --- |
| Sole UX researcher | Sept – Dec 2025 (4 months) | Solo, advised by Prof. Jessika Tremblay | Competitive analysis, interviews, contextual inquiry, netnography |

<p class="cs-eyebrow" id="overview">Overview</p>

### I set out to study an account. The answer was the whole visit.

<div class="cs-snapshot">
<div class="cs-card"><p class="cs-label"><span>1</span>The problem</p><p class="cs-big">The AGO had an online account that no one had a reason to use.</p><p class="cs-small">It lived only at checkout and offered nothing beyond a ticket.</p></div>
<div class="cs-card"><p class="cs-label"><span>2</span>The insight</p><p class="cs-big">Visitors didn't need a better account. They needed a better visit.</p><p class="cs-small">Their biggest frustrations happened inside the gallery, not online.</p></div>
<div class="cs-card"><p class="cs-label"><span>3</span>The solution</p><p class="cs-big">Turn the account into a guide for the visit, after fixing the basics.</p><p class="cs-small">Five prioritized recommendations, presented Dec 6, 2025.</p></div>
</div>

<p class="cs-eyebrow" id="approach">Approach</p>

### Three studies, three kinds of evidence

I started with what the website does, then asked people what they want, then watched what they actually do.

<div class="cs-studies">
<div class="cs-card"><p class="cs-num">01 <span>What the sites do</span></p><p class="cs-title">Competitive analysis</p><p class="cs-ask">How does the AGO's website compare with world-class peers?</p><dl><div><dt>Compared</dt><dd>The AGO, The Met and the British Museum</dd></div><div><dt>How</dt><dd>Business context, heuristic review, automated and manual WCAG checks, keyboard-only checkout</dd></div><div><dt>When</dt><dd>Sept 2025</dd></div><div><dt>Produced</dt><dd>7 findings and a hypothesis: visitors want a richer account</dd></div></dl></div>
<div class="cs-card"><p class="cs-num">02 <span>What people say</span></p><p class="cs-title">Semi-structured interviews</p><p class="cs-ask">Do visitors want more from their account, and what would make them use it?</p><dl><div><dt>Who</dt><dd>5 people: 2 student account holders, 2 tourism professionals, 1 former museum member</dd></div><div><dt>How</dt><dd>60-min sessions on Microsoft Teams with a guide per audience, then thematic coding</dd></div><div><dt>When</dt><dd>Oct 24 – 29, 2025</dd></div><div><dt>Produced</dt><dd>Report, 2 personas, 2 journey maps. The hypothesis didn't hold.</dd></div></dl></div>
<div class="cs-card"><p class="cs-num">03 <span>What people do</span></p><p class="cs-title">Contextual inquiry</p><p class="cs-ask">What actually happens during a museum visit, from the ticket to the exhibit?</p><dl><div><dt>Where</dt><dd>2 think-aloud visits at the ROM and Nielsen Park Creative Centre, an AGO walkthrough, and a Reddit netnography</dd></div><div><dt>How</dt><dd>60-min observations with a discussion and observation guide, clustered with the earlier findings</dd></div><div><dt>When</dt><dd>Nov 2025</dd></div><div><dt>Produced</dt><dd>11 findings, 5 recommendations and an account concept</dd></div></dl></div>
</div>

<details class="cs-guide">
<summary><span>Research questions and objectives<small>What the interviews and the contextual inquiry set out to answer</small></span><b aria-hidden="true">+</b></summary>
<div class="cs-guide-body">
<div class="cs-guide-cols">
<div><p class="cs-guide-h">02 Interviews</p><p class="cs-who">Research questions</p><ol><li>What do users think of the AGO account functionality?</li><li>What features or functionalities would make the account more valuable?</li><li>What motivates users to create and maintain an account with a cultural institution?</li><li>How do users perceive data sharing, privacy and personalization in a museum context?</li></ol><p class="cs-who">Objectives</p><ul><li>Explore how users currently interact with their AGO account (if at all)</li><li>Understand what users expect an account to offer</li><li>Identify barriers and frustrations</li><li>Generate insights for a more engaging account</li></ul></div>
<div><p class="cs-guide-h">03 Contextual inquiry</p><p class="cs-who">Research questions</p><ol><li>What do users think about their AGO / museum experience: frustrations, pain points, opportunities?</li><li>How do users engage with the museum digitally, in person and at home: interactivity, ticketing, maps, QR codes?</li><li>How do users engage non-digitally while visiting: asking staff, brochures, physical maps?</li><li>What, if anything, would motivate users to create and keep a museum account?</li><li>How do users perceive data sharing, privacy and personalization in a museum context?</li></ol><p class="cs-who">Objectives</p><ul><li>Identify frustrations during a visit</li><li>Understand expectations and what visitors value</li><li>Explore how people move from ticket to gallery</li><li>Uncover opportunities, digital and in person</li></ul></div>
</div>
</div>
</details>

<p class="cs-part" id="competitive-analysis"><span>01</span>Competitive analysis · Sept 2025</p>

### The AGO lagged its peers on the basics

#### 1.1 Three museums, three different promises

All three museums aim to connect people with art, culture and education, but each positions itself differently. **The British Museum and The Met build for the world**, with deep online collections and resources for researchers. **The AGO builds for its own community**, and its site is organized around visit planning, tickets and memberships.

<div class="cs-compare">
<div class="cs-card cs-card--accent"><span class="cs-logo"><img src="/ago/logos/ago-logo.png" alt="Art Gallery of Ontario logo" /></span><p class="cs-title">Art Gallery of Ontario</p><p class="cs-tag">A local museum with a membership model</p><dl><div><dt>Serves</dt><dd>Mainly local and domestic visitors, through exhibitions, community programs, memberships and education</dd></div><div><dt>Goals</dt><dd>Visitor engagement, financial sustainability<sup>1</sup>, and more diverse collections and programs<sup>2</sup></dd></div><div><dt>Site built around</dt><dd>Planning a visit, tickets, memberships</dd></div></dl></div>
<div class="cs-card"><span class="cs-logo"><img src="/ago/logos/british-museum.svg" alt="British Museum logo" /></span><p class="cs-title">British Museum</p><p class="cs-tag">A global public resource</p><dl><div><dt>Serves</dt><dd>A worldwide audience</dd></div><div><dt>Goals</dt><dd>Preserving its collection and sharing it with the world<sup>3</sup></dd></div><div><dt>Site built around</dt><dd>Multilingual resources and extensive digital collections<sup>4</sup></dd></div></dl></div>
<div class="cs-card"><span class="cs-logo"><img src="/ago/logos/the-met.svg" alt="The Met logo" /></span><p class="cs-title">The Met</p><p class="cs-tag">A home for scholarship and visitors</p><dl><div><dt>Serves</dt><dd>Visitors, students, educators and researchers</dd></div><div><dt>Goals</dt><dd>Inclusivity<sup>5</sup>, advancing scholarship<sup>6</sup>, and excellent visits online and in person<sup>7</sup></dd></div><div><dt>Site built around</dt><dd>Online collections, publications, learning resources</dd></div></dl></div>
</div>

That positioning makes the account *more* important for the AGO, not less. A museum that depends on its local audience and on memberships needs a way to keep in touch with visitors between visits.

<p class="cs-takeaway"><span>Key takeaway</span>The AGO's business depends on repeat local visitors, so its account should be doing more than any peer's.</p>

#### 1.2 Six frictions between a visitor and a ticket

I tested each site against usability heuristics and WCAG, and completed checkout using only a keyboard. The AGO had the most issues in every area I looked at.

<div class="cs-card cs-bars-card">
<p class="cs-who">Accessibility</p>
<p class="cs-title">Automated WCAG errors on each museum's website</p>
<div class="cs-bars" role="img" aria-label="WCAG errors: AGO 13, The Met 2, British Museum 0">
<div class="cs-bar cs-bar--accent"><span class="cs-bar-who"><img src="/ago/logos/ago-logo.png" alt="" />AGO</span><span class="cs-track"><span style="width:100%"></span></span><b>13</b></div>
<div class="cs-bar"><span class="cs-bar-who"><img src="/ago/logos/the-met.svg" alt="" />The Met</span><span class="cs-track"><span style="width:15%"></span></span><b>2</b></div>
<div class="cs-bar"><span class="cs-bar-who"><img src="/ago/logos/british-museum.svg" alt="" />British Museum</span><span class="cs-track"><span style="width:0%"></span></span><b>0</b></div>
</div>
<p class="cs-caption">The AGO also had 5 contrast errors, despite committing to full WCAG AA compliance by 2021<sup>8</sup>.</p>
</div>

1. **Accessibility gaps.** The most WCAG errors of the three, and fewer physical accessibility offerings<sup>9</sup>.
2. **Trapped in checkout.** No progress bar, and the only way back a step is the browser's back button<sup>11</sup>.
3. **Unexplained tickets.** Options come with little explanation, and quantities are set with a confusing dropdown.
4. **Forms that fail late.** No autocomplete or input masks, and errors only appear after pressing Register<sup>10</sup>.
5. **Search without help.** No autocomplete, no search history and no filters on site-wide results.
6. **An account that forgets you.** "Sign In" stays visible after you log in, and signed-in visitors see exactly the same site.

<section class="case-study-placeholder case-study-image-gallery" aria-label="Annotated AGO website issues"><div class="case-study-image-grid"><figure><img src="/ago/competitiveanalysis/CA1_Issues_W_Cart_Flow.png" alt="Annotated AGO cart flow with no progress indicator" loading="lazy" /><figcaption>Checkout: no progress bar, no way back</figcaption></figure><figure><img src="/ago/competitiveanalysis/CA2_Issue_W_Ticket_Types.png" alt="Annotated AGO ticket type selection" loading="lazy" /><figcaption>Ticket types with little explanation</figcaption></figure><figure><img src="/ago/competitiveanalysis/CA4_Issues_W_Form_Fields_ErrorFeedback.png" alt="Annotated AGO registration form with errors only after submit" loading="lazy" /><figcaption>Form errors only after you submit</figcaption></figure><figure><img src="/ago/competitiveanalysis/CA5_Issue_w_Search.png" alt="Annotated AGO search bar with no autocomplete" loading="lazy" /><figcaption>Search with no suggestions or filters</figcaption></figure><figure><img src="/ago/competitiveanalysis/CA6_Issue_W_Account.png" alt="AGO sign-in page shown to a user who is already logged in" loading="lazy" /><figcaption>Asked to sign in while signed in</figcaption></figure></div></section>

#### 1.3 A hypothesis worth testing

The account was the most telling gap. It existed only inside the cart, and signing in changed nothing about the site. That led me to a hypothesis: **visitors would want a richer account**, with saved artworks, personalized recommendations and loyalty rewards.

<p class="cs-takeaway"><span>Key takeaway</span>The AGO had an account, but no reason for anyone to use it.</p>

<p class="cs-bridge"><b>→</b>I had a hypothesis about what visitors wanted. The next step was to ask them.</p>

<p class="cs-part" id="interviews"><span>02</span>Interviews · Oct 2025</p>

### My hypothesis was wrong, in a useful way

<div class="cs-card cs-hypothesis"><p class="cs-who">Hypothesis going in</p><p class="cs-big">Users find the account limiting because it only exists in the cart. They'd value saving artworks (like Pinterest), personalized content and loyalty rewards.</p><p class="cs-verdict">Result: partly right about the problem, wrong about the fix.</p></div>

#### 2.1 Recruiting showed the problem before the interviews did

I spoke with two student account holders, two tourism professionals who visit museums worldwide, and a former ROM member. My screener asked for account holders who had bought tickets in the last two years. **I couldn't find enough of them.**

I widened the criteria to anyone who'd used an account to visit. Even those participants had barely touched their accounts. That turned into a finding.

I wrote a separate discussion guide for each audience. Sessions were semi-structured: the guide was a starting point, and I followed each participant's lead with follow-up probes.

<details class="cs-guide">
<summary><span>Read the interview questions<small>Questions from my 60-minute sessions, in 6 sections</small></span><b aria-hidden="true">+</b></summary>
<div class="cs-guide-body">
<div class="cs-guide-cols">
<div><p class="cs-guide-h">1. Warm-up <small>~5 min</small></p><ul><li>Could you tell me a little bit about yourself?</li><li>What do you do for fun? What does your typical week look like?</li></ul></div>
<div><p class="cs-guide-h">2. Visiting habits</p><ul><li>How often do you go to the AGO? What made you start visiting?</li><li>How do you decide when you want to visit?</li><li>Has anything changed about the way you plan your visit or engage with the AGO over time?</li></ul></div>
<div><p class="cs-guide-h">3. Planning and tickets</p><ul><li>Did you use the website to plan your visit? On which device?</li><li>Can you tell me about your most recent ticket purchase for the AGO?</li><li>How do you find out about upcoming exhibits and events? How do you prefer to get updates?</li></ul></div>
<div><p class="cs-guide-h">4. The account</p><p class="cs-who">Account holders</p><ul><li>Walk me through the last time you used your AGO account.</li><li>Probe: What were you trying to do? How often do you use it?</li></ul><p class="cs-who">Non-account holders</p><ul><li>What, if anything, would make you want to create an AGO account?</li><li>What has made you not want to create one? Do you have any concerns?</li><li>What is your understanding of the benefits of an AGO account?</li><li>If you made one, what would you want to use it for, and how often?</li></ul></div>
<div><p class="cs-guide-h">5. Feelings and comparisons</p><ul><li>How do you feel when you visit the AGO?</li><li>Could you tell me about your ideal online experience with the AGO?</li><li>How do your visits to other museums around the world compare?</li></ul></div>
<div><p class="cs-guide-h">6. Wrap-up <small>~2 min</small></p><ul><li>Is there anything you'd like to add about your experiences?</li></ul></div>
</div>
</div>
</details>

#### 2.2 Every participant called the pass something different

The AGO offers accounts, memberships, and a free annual pass for visitors aged 14–24. Participants couldn't tell them apart. Several didn't know which ones they had, and every participant had their own name for the pass.

> "I think that [the Free Annual Pass] is referring to the 14–24 free pass for students… I am not sure if I only get it for a year."
>
> <cite>Oliver (persona), student account holder</cite>

<p class="cs-takeaway"><span>Key takeaway</span>If visitors can't name what they have, they can't see why they'd want more of it.</p>

#### 2.3 Nobody asked for saved artworks. They asked for exclusivity.

The features I'd hypothesized barely came up. What participants expected instead was **early access**: news about exhibits before the public, ongoing perks and discounts. And they noticed that signing in made no difference at all.

> "I don't see much of a difference between having an account and not having an account… I have the same access to everything on the website."
>
> <cite>Participant 5, student account holder</cite>

<figure class="case-study-analysis-image"><img src="/ago/interviews/I1_Coding.png" alt="Interview transcripts coded and clustered into themes" loading="lazy" /><figcaption>Coding the five transcripts into themes: motivations, global comparisons, account features and concerns</figcaption></figure>

<p class="cs-takeaway"><span>Key takeaway</span>The fix wasn't more features. It was a reason to sign in.</p>

#### 2.4 Privacy has a price, and the AGO wasn't paying it

Participants didn't want another password. They saw no reason for the sign-up form to ask for their home address and phone number. One tourism professional happily downloaded an AGO app for an interactive exhibit, because it didn't make her create an account.

Yet the same participants said they'd trade their details for something worth it. **Even free Wi-Fi was enough.**

<p class="cs-takeaway"><span>Key takeaway</span>Ask for less, explain why, and give something exclusive back.</p>

#### 2.5 Two visitors, two very different reasons to care

**Oliver** is a student who uses the free pass and visits with friends. **Emily** visits for work with tour groups, and compares the AGO with museums in Europe and Asia. Both left their visits confused about what the account was for.

<section class="case-study-placeholder case-study-image-gallery" aria-label="Personas and journey maps"><div class="case-study-image-grid"><figure><img src="/ago/slides/persona-oliver.jpg" alt="Persona: Oliver, student account holder" loading="lazy" /><figcaption>Oliver wants quick booking with his pass, and his account to tell him what's on</figcaption></figure><figure><img src="/ago/slides/journey-oliver.jpg" alt="Journey map for Oliver" loading="lazy" /><figcaption>Excited before, uplifted during, confused after: he logs in to subscribe to news and can't find the option</figcaption></figure><figure><img src="/ago/slides/persona-emily.jpg" alt="Persona: Emily, tourism professional" loading="lazy" /><figcaption>Emily judges the AGO against the best museums in the world</figcaption></figure><figure><img src="/ago/slides/journey-emily.jpg" alt="Journey map for Emily" loading="lazy" /><figcaption>Captivated by an interactive exhibit, then unable to find any information about others online</figcaption></figure></div></section>

#### 2.6 Visits are social. The account is not.

Nobody described visiting alone. Visits were family outings, trips with friends, hosting guests or work tours, and most participants bought tickets for their whole group. The AGO's tools assume one person, one ticket.

<p class="cs-takeaway"><span>Key takeaway</span>Design the account for the group, not the individual.</p>

<p class="cs-bridge"><b>→</b>If the account needed a reason to exist, where would that reason come from? I went into the galleries to find out.</p>

<p class="cs-part" id="contextual-inquiry"><span>03</span>Contextual inquiry · Nov 2025</p>

### The biggest gap was standing in front of the art

<div class="cs-card cs-hypothesis"><p class="cs-who">Hypothesis going in</p><p class="cs-big">Account holders rarely use their accounts beyond tickets, and non-holders find little reason to sign up on site. The environment (crowds, signage, maps, Wi-Fi, QR codes) shapes how comfortably visitors get around.</p><p class="cs-verdict">Result: confirmed, and it pointed beyond the account.</p></div>

#### 3.1 Turned away on day one

My approved plan was to recruit visitors in the AGO lobby. On the first day, **staff stopped the research**. Within days I recruited two participants through my network, moved the sessions to the Royal Ontario Museum and Nielsen Park Creative Centre, and added a Reddit netnography to keep AGO visitors' voices in the study.

The setback became a comparison: I could now see what the ROM did differently.

<details class="cs-guide">
<summary><span>Read the observation and discussion guide<small>Think-aloud visit · 60 minutes · from admission to leaving</small></span><b aria-hidden="true">+</b></summary>
<div class="cs-guide-body">
<div class="cs-guide-cols">
<div><p class="cs-guide-h">1. Warm-up <small>~10 min</small></p><ul><li>Why did you decide to visit today? Have you been before?</li><li>How often do you visit other cultural institutions? What motivates you?</li><li>Do you have an AGO account, or one with any other institution?</li><li>How did you plan your visit? What do you expect from it today?</li></ul></div>
<div><p class="cs-guide-h">2. Admission</p><p class="cs-who">Observe</p><ul><li>How do they buy tickets, and how easily do they find prices?</li><li>What format is the ticket: paper, digital wallet, screenshot?</li><li>Any confusion between memberships and passes? Any friction?</li><li>Do staff encourage an account or membership? Are personal details shared, for example for Wi-Fi?</li></ul><p class="cs-who">Ask</p><ul><li>What do you think and feel about the admission process?</li><li>Account holders: walk me through the last time you used your AGO account.</li><li>Non-account holders: what has made you not want an AGO account?</li></ul></div>
<div><p class="cs-guide-h">3. Moving through the museum</p><p class="cs-who">Observe</p><ul><li>Where do they go first, and how do they know?</li><li>Do they use a map, brochure, signage, staff or their phone?</li><li>Do they take photos, scan QR codes or look things up?</li></ul><p class="cs-who">Ask</p><ul><li>How did you decide where to go today?</li><li>How do you feel about finding your way around?</li></ul></div>
<div><p class="cs-guide-h">4. Ending the visit</p><ul><li>Observe: how do they know they're done? Do they visit the gift shop or mention coming back?</li><li>How satisfied are you with your visit today?</li><li>Is there anything you would change about the visitor experience?</li><li>How would you describe your visit today?</li></ul></div>
</div>
<p class="cs-caption">Condensed from the full guide in my research plan (Nov 13, 2025).</p>
</div>
</details>

<figure class="case-study-analysis-image"><img src="/ago/contextualinquiry/CI1.png" alt="Synthesis board with clusters for interviews, ROM, Nielsen Park, AGO, Reddit netnography and an AGO map" loading="lazy" /><figcaption>One board for every source: interviews, ROM, Nielsen Park, the AGO, Reddit and a map of the AGO</figcaption></figure>

<p class="cs-takeaway"><span>Key takeaway</span>Losing site access gave me a benchmark I'd never have planned.</p>

#### 3.2 The map was there. Nobody could find it.

Interview participants told me they couldn't find a physical map at the AGO, or any information about the heART Rate Monitor, an interactive experience included with admission. When I visited, I saw why. **The maps were small and tucked away, and the exhibit was hidden behind a wall.**

At the ROM, maps and tours were everywhere, in several languages, with audio tours a QR code away.

<div class="cs-grid cs-grid--2"><figure><img src="/ago/slides/ago-maps.jpg" alt="A small stack of AGO maps, and a floor plan showing the heART Rate Monitor booth hidden behind a wall" loading="lazy" /><figcaption>AGO: a small stack of maps, and my floor plan showing the heART Rate Monitor booth hidden behind a wall</figcaption></figure><figure><img src="/ago/slides/rom-guides.jpg" alt="ROM brochure racks in many languages, mobile tour QR codes and tour schedules" loading="lazy" /><figcaption>ROM: guides in many languages, QR mobile tours and daily tour times</figcaption></figure></div>

#### 3.3 Reading the back of the exhibit

In the China gallery, I asked a participant to find the name of one object. She spent a long time working down a list of text beside the case, trying to match it to what she saw. Then she realized **we were standing at the back of the glass case**. Nothing had told her.

Nearby, a pamphlet meant to explain a case of snuff bottles was broken, in English only, and not accessible.

<div class="cs-grid cs-grid--3"><figure><img src="/ago/slides/snuff-bottles.jpg" alt="Display case of snuff bottles at the AGO" loading="lazy" /><figcaption>Dozens of objects, one hard-to-find pamphlet</figcaption></figure><figure><img src="/ago/slides/china-gallery-object.jpg" alt="Object in the China gallery" loading="lazy" /><figcaption>"How would you find out the title of this item?"</figcaption></figure><figure><img src="/ago/slides/china-gallery-list.jpg" alt="Identification list next to the display case" loading="lazy" /><figcaption>The answer was in a long list on the other side</figcaption></figure></div>

<p class="cs-takeaway"><span>Key takeaway</span>Visitors want to learn. The museum has to hand them the information.</p>

#### 3.4 When the screen matched the shelf

At the ROM, an interactive map laid out exactly like the display case changed everything. My participant tapped through the objects and **learned more in minutes than she had all visit**. The match between what she saw and what the screen showed did the work.

But not every case had one, and several devices were broken, low-contrast, English and French only, and inaccessible.

<div class="cs-grid cs-grid--2"><figure><img src="/ago/slides/rom-interactive-map.jpg" alt="Interactive map matching a display case at the ROM" loading="lazy" /><figcaption>ROM: the screen mirrors the case, so finding an object is instant</figcaption></figure><figure><img src="/ago/slides/devices-disrepair.jpg" alt="Interactive devices in disrepair" loading="lazy" /><figcaption>The same idea fails when the hardware does</figcaption></figure></div>

<p class="cs-takeaway"><span>Key takeaway</span>Information works best when it matches what's directly in front of you.</p>

#### 3.5 People come to be surprised, and to reflect

The moments participants remembered were interactive, surprising or reflective: exhibits that asked them a question, or invited them to think about repatriation, reconciliation and who tells a story.

<section class="case-study-placeholder case-study-image-gallery case-study-image-gallery--uncaptioned" aria-label="Interactive and reflective museum experiences"><div class="case-study-image-grid"><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_1png.png" alt="Reflect and Connect visitor prompt" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_2.png" alt="Reflective installation" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_3.png" alt="Interactive Decisions, Decisions exhibit" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_4.png" alt="Reflective visitor installation" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_5.png" alt="Participatory reflection prompt" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_6.png" alt="Interactive reflection station" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_7.png" alt="Visitor reflection materials" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_8.png" alt="Accessible digital interpretation" loading="lazy" /></figure></div></section>

> "Exhibition design is a simultaneously networked dialectical process, one which develops in a dialogue between verbal-conceptual and visual-representational rhetorical techniques. The focal point of this process of reflection is the individual and his or her intellectual and physical perceptual capabilities."
>
> <cite>Bertron, Schwarz &amp; Frey, <em>Designing Exhibitions</em> (2012)<sup>12</sup></cite>

<p class="cs-takeaway"><span>Key takeaway</span>The best moments were interactive. The account could bring more of them.</p>

<p class="cs-eyebrow" id="findings">What I found</p>

### Five insights that change what the account is for

Each insight is backed by at least two studies.

#### 01 The account is a receipt, not a relationship.

> It only works inside checkout, forgets you're signed in, and shows you the same site as everyone else. Even account holders couldn't say what it was for. *Competitive analysis · Interviews*

#### 02 Nobody knows what they've signed up for.

> Account, membership and pass blur together. Every participant called the free pass something different. *Interviews · Contextual inquiry*

#### 03 Privacy is a price the AGO isn't paying.

> Visitors will share their details for real value, like early access, perks or even Wi-Fi. Right now they get nothing back. *Interviews · Contextual inquiry*

#### 04 Visitors want the museum to meet them at the object.

> The hardest moments were in the gallery: hidden maps, lists to decode, the back of a case. Information worked when it matched what was in front of them. *Interviews · Contextual inquiry*

#### 05 Museums are visited in groups. The account assumes you came alone.

> Visits were family outings, friends and guests, and most people bought tickets for everyone. No tool helps them plan together. *Interviews · Contextual inquiry*

| Study | What I believed | What I learned |
| --- | --- | --- |
| 01 Competitive analysis | The account needs more features | It barely works as an account at all |
| 02 Interviews | Visitors want saved artworks and personalization | They want a reason to sign in: exclusivity and clarity |
| 03 Contextual inquiry | The opportunity is on the website | The biggest unmet needs are inside the gallery |

<p class="cs-eyebrow" id="recommendations">What I recommended</p>

### From a checkout tool to a visit companion

I turned the insights into a redesigned account and a sequence of changes, starting with the fixes that help every visitor. I presented the final report on December 6, 2025.

<div class="cs-roadmap">
<div class="cs-card"><p class="cs-num">01</p><p class="cs-title">Fix the foundations</p><p class="cs-small">WCAG audit, inline form errors, checkout progress, the sign-in bug</p></div>
<div class="cs-card"><p class="cs-num">02</p><p class="cs-title">Clarify the offer</p><p class="cs-small">One page comparing account, membership and pass</p></div>
<div class="cs-card"><p class="cs-num">03</p><p class="cs-title">Give a reason to join</p><p class="cs-small">Exclusive perks, early access, saved exhibits</p></div>
<div class="cs-card"><p class="cs-num">04</p><p class="cs-title">Bring it into the gallery</p><p class="cs-small">Interactive maps, QR object pages, tours</p></div>
<div class="cs-card"><p class="cs-num">05</p><p class="cs-title">Design for groups</p><p class="cs-small">Group trips, shared plans, ticket sharing</p></div>
</div>

#### Before and after: the account

<div class="cs-grid cs-grid--2"><figure><img src="/ago/competitiveanalysis/CA6_Issue_W_Account.png" alt="Current AGO sign-in page shown to a logged-in user" loading="lazy" /><figcaption>Before: a sign-in page, even when you're signed in</figcaption></figure><figure><img src="/ago/contextualinquiry/recommendations/CI_R2_Redesign_Account.png" alt="Redesigned AGO account concept" loading="lazy" /><figcaption>After: an account that plans the visit</figcaption></figure></div>

1. **An account that knows you.** The sign-in state is respected; the account becomes a home, not a form. *(Insight 01)*
2. **Plan a trip and group trips.** Pick a date, party size and interests; invite others. *(Insight 05)*
3. **Saved exhibits and tours.** Self-guided and audio tours that continue where you left off. *(Insight 04)*
4. **Recommended for you.** Interests, upcoming events and language preference. *(Insights 02 and 03)*

#### Before and after: in the gallery

<div class="cs-grid cs-grid--2"><figure><img src="/ago/slides/ago-maps.jpg" alt="Current AGO map display" loading="lazy" /><figcaption>Before: a small stack of paper maps</figcaption></figure><figure><img src="/ago/slides/concept-display-map.jpg" alt="Concept: a digital display case that mirrors the physical case, with object details on tap" loading="lazy" /><figcaption>After: a display map that mirrors the case, with object details on tap</figcaption></figure></div>

1. **An interactive map in the account.** Find galleries and exhibits before and during the visit. *(Insight 04)*
2. **Maps that match the case.** Tap an object on a layout that mirrors the display. *(Finding 3.4)*
3. **QR object pages.** More context per object, in more languages. *(Finding 3.3)*

<p class="cs-eyebrow" id="takeaways">Takeaways</p>

### What I'd carry into the next study

<div class="cs-roadmap cs-roadmap--3">
<div class="cs-card"><p class="cs-num">01</p><p class="cs-title">Let each study rewrite the question</p><p class="cs-small">I set out to design account features. Following the evidence led me to the whole visit, and kept me from recommending features nobody wanted.</p></div>
<div class="cs-card"><p class="cs-num">02</p><p class="cs-title">Treat site access as part of the method</p><p class="cs-small">Being turned away on day one taught me to secure permission before fieldwork, not assume it.</p></div>
<div class="cs-card"><p class="cs-num">03</p><p class="cs-title">Five interviews show patterns, not proof</p><p class="cs-small">Next: recruit long-term account holders, visitors with accessibility needs and families, and usability-test the redesign.</p></div>
</div>

### References

1. Auditor General of Ontario. Auditor General of Ontario Annual Report 2022 Chapter 1 Section 1.13 Museums & Galleries Art Gallery of Ontario. *Auditor General of Ontario Annual Report* <https://www.auditor.on.ca/en/content/annualreports/arreports/en22/1-13-2museumsAGO_en22.pdf> (2022).
2. Art Gallery of Ontario. Plans, Reports, and Policies. *Art Gallery of Ontario* <https://ago.ca/about/plans-reports-and-policies>.
3. British Museum. Governance | British Museum. *British Museum* <https://www.britishmuseum.org/about-us/governance>.
4. The British Museum. The British Museum Towards 2020 The British Museum Strategy. <https://www.britishmuseum.org/sites/default/files/2019-10/Towards_2020-The_British_Museum_Strategy.pdf> (2019).
5. The Metropolitan Museum of Art. About The Met. *The Metropolitan Museum of Art* <https://www.metmuseum.org/about-the-met>.
6. The Metropolitan Museum of Art. The Artist Project - The Metropolitan Museum of Art. *The Metropolitan Museum of Art* <https://www.metmuseum.org/perspectives/series/the-artist-project?hash=D3FCF72C6B3B50A7314EB7CB5FB08023&sc_lang=en&>.
7. Hernandez-Eli, J. Building Tomorrow’s Met - The Metropolitan Museum of Art. <https://www.metmuseum.org/perspectives/building-tomorrows-met> (2022).
8. Art Gallery of Ontario. Commitment to Accessibility. *Art Gallery of Ontario* <https://ago.ca/commitment-accessibility>.
9. Clark, S. AGO Competitive Analysis. *Google Drive* <https://drive.google.com/file/d/1ue6qsSZ_FfnOiHAffpQkQNLRIHYzHXOq/view?usp=sharing> (2025).
10. Krause, R. Maintain Consistency and Adhere to Standards (Usability Heuristic #4). *Nielsen Norman Group* <https://www.nngroup.com/articles/consistency-and-standards/> (2021).
11. Harley, A. Visibility of System Status. *Nielsen Norman Group* <https://www.nngroup.com/articles/visibility-system-status/> (2018).
12. Bertron, A., Schwarz, U. & Frey, C. *Ausstellungen entwerfen – Designing Exhibitions: Kompendium für Architekten, Gestalter und Museologen – A Compendium for Architects, Designers and Museum Professionals*. (Walter de Gruyter, 2012).
