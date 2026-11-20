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
<div class="cs-card cs-card--accent"><span class="cs-logo"><img src="/ago/logos/ago-logo.png" alt="Art Gallery of Ontario logo" /></span><p class="cs-title">Art Gallery of Ontario</p><p class="cs-tag">A local museum with a membership model</p><dl><div><dt>Serves</dt><dd>Mainly local and domestic visitors, through exhibitions, community programs, memberships and education</dd></div><div><dt>Goals</dt><dd>Visitor engagement, financial sustainability<sup>3</sup>, and more diverse collections and programs<sup>2</sup></dd></div><div><dt>Site built around</dt><dd>Planning a visit, tickets, memberships</dd></div></dl></div>
<div class="cs-card"><span class="cs-logo"><img src="/ago/logos/british-museum.svg" alt="British Museum logo" /></span><p class="cs-title">British Museum</p><p class="cs-tag">A global public resource</p><dl><div><dt>Serves</dt><dd>A worldwide audience</dd></div><div><dt>Goals</dt><dd>Preserving its collection and sharing it with the world<sup>5</sup></dd></div><div><dt>Site built around</dt><dd>Multilingual resources and extensive digital collections<sup>6</sup></dd></div></dl></div>
<div class="cs-card"><span class="cs-logo"><img src="/ago/logos/the-met.svg" alt="The Met logo" /></span><p class="cs-title">The Met</p><p class="cs-tag">A home for scholarship and visitors</p><dl><div><dt>Serves</dt><dd>Visitors, students, educators and researchers</dd></div><div><dt>Goals</dt><dd>Inclusivity<sup>11</sup>, advancing scholarship<sup>12</sup>, and excellent visits online and in person<sup>9</sup></dd></div><div><dt>Site built around</dt><dd>Online collections, publications, learning resources</dd></div></dl></div>
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
<p class="cs-caption">The AGO also had 5 contrast errors, despite committing to full WCAG AA compliance by 2021<sup>1</sup>.</p>
</div>

The AGO also had the most WCAG errors of the three and fewer physical accessibility offerings<sup>7</sup>. The other five problems all sit between a visitor and a ticket:

<div class="cs-explorer"><input type="radio" name="cs-explorer-ca" id="cs-ex-ca-1" checked /><input type="radio" name="cs-explorer-ca" id="cs-ex-ca-2" /><input type="radio" name="cs-explorer-ca" id="cs-ex-ca-3" /><input type="radio" name="cs-explorer-ca" id="cs-ex-ca-4" /><input type="radio" name="cs-explorer-ca" id="cs-ex-ca-5" /><div class="cs-explorer-stage"><figure class="cs-explorer-shot"><img src="/ago/competitiveanalysis/CA1_Issues_W_Cart_Flow.png" alt="Annotated AGO cart flow with no progress indicator" loading="lazy" /><figcaption><b>01</b> Checkout: no progress bar, no way back</figcaption></figure><figure class="cs-explorer-shot"><img src="/ago/competitiveanalysis/CA2_Issue_W_Ticket_Types.png" alt="Annotated AGO ticket type selection" loading="lazy" /><figcaption><b>02</b> Ticket types with little explanation</figcaption></figure><figure class="cs-explorer-shot"><img src="/ago/competitiveanalysis/CA4_Issues_W_Form_Fields_ErrorFeedback.png" alt="Annotated AGO registration form with errors only after submit" loading="lazy" /><figcaption><b>03</b> Form errors only appear after you submit</figcaption></figure><figure class="cs-explorer-shot"><img src="/ago/competitiveanalysis/CA5_Issue_w_Search.png" alt="Annotated AGO search bar with no autocomplete" loading="lazy" /><figcaption><b>04</b> Search with no suggestions or filters</figcaption></figure><figure class="cs-explorer-shot"><img src="/ago/competitiveanalysis/CA6_Issue_W_Account.png" alt="AGO sign-in page shown to a user who is already logged in" loading="lazy" /><figcaption><b>05</b> Asked to sign in while already signed in</figcaption></figure></div><div class="cs-explorer-cards" role="radiogroup" aria-label="Website problems"><label for="cs-ex-ca-1"><span class="cs-explorer-num">01</span><span class="cs-explorer-title">Trapped in checkout</span><span class="cs-explorer-desc">No progress bar, and the only way back a step is the browser&rsquo;s back button<sup>8</sup>.</span></label><label for="cs-ex-ca-2"><span class="cs-explorer-num">02</span><span class="cs-explorer-title">Unexplained tickets</span><span class="cs-explorer-desc">Options come with little explanation, and quantities are set with a confusing dropdown.</span></label><label for="cs-ex-ca-3"><span class="cs-explorer-num">03</span><span class="cs-explorer-title">Forms that fail late</span><span class="cs-explorer-desc">No autocomplete or input masks, and errors only appear after pressing Register<sup>10</sup>.</span></label><label for="cs-ex-ca-4"><span class="cs-explorer-num">04</span><span class="cs-explorer-title">Search without help</span><span class="cs-explorer-desc">No autocomplete, no search history and no filters on site-wide results.</span></label><label for="cs-ex-ca-5"><span class="cs-explorer-num">05</span><span class="cs-explorer-title">An account that forgets you</span><span class="cs-explorer-desc">&ldquo;Sign In&rdquo; stays visible after you log in, and signed-in visitors see exactly the same site.</span></label></div><p class="cs-explorer-hint">Select a problem to see it on the AGO&rsquo;s website.</p></div>

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

I combined the interviews into two personas with journey maps. **Oliver**, the primary persona, is a student who uses the free pass and visits with friends. **Emily** visits for work with tour groups, and compares the AGO with museums in Europe and Asia.

<div class="cs-tabs"><input type="radio" name="cs-persona-tabs" id="cs-tab-oliver" checked /><input type="radio" name="cs-persona-tabs" id="cs-tab-emily" /><div class="cs-tablist"><label for="cs-tab-oliver">Oliver <span>Primary</span></label><label for="cs-tab-emily">Emily <span>Tertiary</span></label></div><div class="cs-tab-panel cs-tab-panel--1"><div class="cs-card cs-persona"><div class="cs-persona-side"><img class="cs-avatar" src="/ago/avatar-oliver.jpg" alt="Portrait used for the Oliver Stewart persona" loading="lazy" /><p class="cs-who">Persona · Primary</p><p class="cs-title">Oliver Stewart</p><p class="cs-tag">Uses the free pass and visits with friends</p><dl><div><dt>Account</dt><dd>AGO account and free pass for ages 14–24</dd></div><div><dt>Visits</dt><dd>2 a year</dd></div><div><dt>Lives in</dt><dd>Toronto, age 21</dd></div><div><dt>Represents</dt><dd>30% of users</dd></div></dl></div><div class="cs-persona-main"><p class="cs-persona-desc">A busy student who makes time for arts and culture and wants to learn more about the world. He made an AGO account to get free admission for 14–24 year olds, and mostly visits with friends, sometimes to see a specific exhibit.</p><div class="cs-persona-cols"><div><p class="cs-who">Goals</p><ul><li>Book tickets quickly with his student pass</li><li>Find upcoming exhibits and events through his account</li><li>Learn as much as he can in the gallery, through tours or interactive activities</li><li>Plan trips with friends and family more easily</li></ul></div><div><p class="cs-who">Frustrations</p><ul><li>Unsure whether the “annual” pass has to be renewed every year</li><li>Can’t tell an AGO account from an AGO membership</li><li>Signing in shows the same content as not signing in</li></ul></div><div><p class="cs-who">Uses the account to</p><ul><li>Book tickets with his pass</li><li>Plan visits at home, on his own</li><li>Look for news on upcoming exhibits</li></ul></div></div><div class="cs-persona-quotes"><p class="cs-who">In their words</p><p class="cs-persona-quote">“I don’t see much of a difference between having an account and not having an account… I have the same access to everything on the website… I thought if I signed in and looked at what events are going on and stuff there would have been more detail about what’s being exhibited right now.” Participant 5</p></div></div></div><div class="cs-journey"><div class="cs-journey-head"><p class="cs-who">Journey map</p><p class="cs-journey-hint" aria-hidden="true">Scroll →</p></div><div class="cs-jm-scroll" tabindex="0" role="region" aria-label="Oliver's journey map"><div class="cs-jm" style="--jm-n:6"><div class="cs-jm-label cs-jm-label--feel">Feeling<small>good</small><small>low</small></div><div class="cs-jm-feel"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M8.33 18 C16.67 18 16.67 82 25.00 82 C33.33 82 33.33 82 41.67 82 C50.00 82 50.00 50 58.33 50 C66.67 50 66.67 18 75.00 18 C83.33 18 83.33 50 91.67 50" /></svg><span class="cs-jm-dot cs-jm-dot--good" style="left:8.33%;top:18%"><i></i><em>Excited</em></span><span class="cs-jm-dot cs-jm-dot--low" style="left:25.00%;top:82%"><i></i><em>Confused</em></span><span class="cs-jm-dot cs-jm-dot--low" style="left:41.67%;top:82%"><i></i><em>Disappointed</em></span><span class="cs-jm-dot cs-jm-dot--mixed" style="left:58.33%;top:50%"><i></i><em>Satisfied</em></span><span class="cs-jm-dot cs-jm-dot--good" style="left:75.00%;top:18%"><i></i><em>Overwhelmed, then inspired</em></span><span class="cs-jm-dot cs-jm-dot--mixed" style="left:91.67%;top:50%"><i></i><em>Positive, still curious</em></span></div><div class="cs-jm-label">Stage</div><ol class="cs-jm-line"><li class=""><i></i><b>01</b>Awareness</li><li class="is-low"><i></i><b>02</b>Account set-up</li><li class="is-low"><i></i><b>03</b>Planning</li><li class=""><i></i><b>04</b>Arrival</li><li class=""><i></i><b>05</b>In the gallery</li><li class=""><i></i><b>06</b>Reflection</li></ol><div class="cs-jm-label">Doing</div><div class="cs-jm-cell">Hears about the free pass at the library, checks the AGO website</div><div class="cs-jm-cell">Uploads documents, creates an account, adds the pass to Apple Wallet</div><div class="cs-jm-cell">Logs in hoping for help planning the trip with friends</div><div class="cs-jm-cell">Enters with the pass in Apple Wallet, looks for a map</div><div class="cs-jm-cell">Walks the galleries, scans a few QR codes, looks for the heART Rate Monitor</div><div class="cs-jm-cell">Shares photos, looks for a newsletter option in his account</div><div class="cs-jm-label">Pain point</div><div class="cs-jm-cell cs-jm-pain">Unsure what “annual” means</div><div class="cs-jm-cell cs-jm-pain">“Free Annual Pass”, “student pass” and “membership” blur together</div><div class="cs-jm-cell cs-jm-pain">The account has nothing to help plan</div><div class="cs-jm-cell cs-jm-pain">No physical maps or brochures</div><div class="cs-jm-cell cs-jm-pain">Little information online or on site</div><div class="cs-jm-cell cs-jm-pain">No way to subscribe from the account</div><div class="cs-jm-label">Opportunity</div><div class="cs-jm-cell cs-jm-empty">—</div><div class="cs-jm-cell cs-jm-opp">Shareable event planning tools</div><div class="cs-jm-cell cs-jm-opp">Exclusive content for account holders</div><div class="cs-jm-cell cs-jm-opp">More maps, and staff to help people find their way</div><div class="cs-jm-cell cs-jm-opp">Self-guided tours in the account</div><div class="cs-jm-cell cs-jm-opp">A visible newsletter option and saved art</div></div></div></div><p class="cs-caption">Oliver’s lowest points come before he arrives, when the pass and the account don’t make sense.</p></div><div class="cs-tab-panel cs-tab-panel--2"><div class="cs-card cs-persona"><div class="cs-persona-side"><img class="cs-avatar" src="/ago/avatar-emily.jpg" alt="Portrait used for the Emily Gould persona" loading="lazy" /><p class="cs-who">Persona · Tertiary</p><p class="cs-title">Emily Gould</p><p class="cs-tag">Judges the AGO against the best museums in the world</p><dl><div><dt>Role</dt><dd>Tourism professional, visits for work</dd></div><div><dt>Visits</dt><dd>5 museums a year</dd></div><div><dt>Lives in</dt><dd>Toronto, age 37</dd></div><div><dt>Represents</dt><dd>10% of users</dd></div></dl></div><div class="cs-persona-main"><p class="cs-persona-desc">A busy career professional who visits the AGO for work, hosting receptions and familiarization tours for client groups from out of town. She travels to museums in Europe and Asia regularly, and compares every visit with the best she has seen.</p><div class="cs-persona-cols"><div><p class="cs-who">Goals</p><ul><li>Compare Toronto’s attractions with museums around the world</li><li>Know what the city offers, so she can promote it to clients</li><li>Find interactive, digital exhibits like the ones abroad</li></ul></div><div><p class="cs-who">Frustrations</p><ul><li>The AGO’s few interactive pieces aren’t advertised online or in person</li><li>Language barriers at some global museums</li><li>Privacy and security concerns about creating an account</li></ul></div><div><p class="cs-who">Would sign up for</p><ul><li>Digital and interactive exhibits</li><li>Exclusive discounts and perks</li><li>Personalized news about events and exhibits</li></ul></div></div><div class="cs-persona-quotes"><p class="cs-who">In their words</p><p class="cs-persona-quote">“I need to know what we have in the city, what we could promote and market… how do they compare to attractions in London or New York… It helps me to do my job better by knowing what we have available.” Participant 1</p></div></div></div><div class="cs-journey"><div class="cs-journey-head"><p class="cs-who">Journey map</p><p class="cs-journey-hint" aria-hidden="true">Scroll →</p></div><div class="cs-jm-scroll" tabindex="0" role="region" aria-label="Emily's journey map"><div class="cs-jm" style="--jm-n:5"><div class="cs-jm-label cs-jm-label--feel">Feeling<small>good</small><small>low</small></div><div class="cs-jm-feel"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M10.00 50 C20.00 50 20.00 50 30.00 50 C40.00 50 40.00 18 50.00 18 C60.00 18 60.00 82 70.00 82 C80.00 82 80.00 50 90.00 50" /></svg><span class="cs-jm-dot cs-jm-dot--mixed" style="left:10.00%;top:50%"><i></i><em>Analytical</em></span><span class="cs-jm-dot cs-jm-dot--mixed" style="left:30.00%;top:50%"><i></i><em>Satisfied, a bit unsure</em></span><span class="cs-jm-dot cs-jm-dot--good" style="left:50.00%;top:18%"><i></i><em>Satisfied</em></span><span class="cs-jm-dot cs-jm-dot--low" style="left:70.00%;top:82%"><i></i><em>Curious, then let down</em></span><span class="cs-jm-dot cs-jm-dot--mixed" style="left:90.00%;top:50%"><i></i><em>Wants more</em></span></div><div class="cs-jm-label">Stage</div><ol class="cs-jm-line"><li class=""><i></i><b>01</b>Awareness</li><li class=""><i></i><b>02</b>Getting a pass</li><li class=""><i></i><b>03</b>Arrival</li><li class="is-low"><i></i><b>04</b>In the gallery</li><li class=""><i></i><b>05</b>Reflection</li></ol><div class="cs-jm-label">Doing</div><div class="cs-jm-cell">Researches the ROM for a work comparison</div><div class="cs-jm-cell">Books a free TPL MAP pass online</div><div class="cs-jm-cell">Shows her email confirmation, finds maps in many languages</div><div class="cs-jm-cell">Gets tips from volunteers, follows QR self-guided tours</div><div class="cs-jm-cell">Shares marketing notes with colleagues</div><div class="cs-jm-label">Pain point</div><div class="cs-jm-cell cs-jm-empty">—</div><div class="cs-jm-cell cs-jm-pain">Unclear whether the pass covers a +1, and what ID is needed</div><div class="cs-jm-cell cs-jm-pain">The front entrance was closed without notice</div><div class="cs-jm-cell cs-jm-pain">Signage didn’t answer her questions, and a floor was closed</div><div class="cs-jm-cell cs-jm-pain">The ROM feels behind global museums</div><div class="cs-jm-label">Opportunity</div><div class="cs-jm-cell cs-jm-opp">A professional or industry account at the AGO</div><div class="cs-jm-cell cs-jm-opp">Redeem the TPL MAP pass on the AGO website</div><div class="cs-jm-cell cs-jm-opp">Signage about closures, online and on site</div><div class="cs-jm-cell cs-jm-opp">Exclusive information and self-guided tours in the account</div><div class="cs-jm-cell cs-jm-opp">More interactive exhibits and tours at the AGO</div></div></div></div><p class="cs-caption">Emily’s journey follows a visit to the ROM. Each opportunity is one the AGO could act on.</p></div></div>

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

<figure class="cs-floorplan"><div class="cs-floorplan-scroll" tabindex="0" role="img" aria-label="Floor plan of the AGO entrance. Visitors come in the front doors; annual pass members go to the greeting desk, everyone else to the ticket counter, where the only maps are. Both paths lead to the entrance. The heART Rate Monitor booth sits behind a wall beside the entrance, out of sight."><svg viewBox="0 0 800 400" aria-hidden="true"><rect class="fp-room" x="4" y="66" width="148" height="326" rx="6" /><text class="fp-label" x="78" y="234" text-anchor="middle">Gift shop</text><rect class="fp-room" x="158" y="26" width="136" height="40" rx="6" /><text class="fp-label" x="226" y="51" text-anchor="middle">Exit</text><rect class="fp-room" x="488" y="26" width="136" height="40" rx="6" /><text class="fp-label" x="556" y="44" text-anchor="middle">Entrance</text><text class="fp-label fp-small" x="556" y="59" text-anchor="middle">tickets checked</text><line class="fp-wall" x1="294" y1="46" x2="488" y2="46" /><text class="fp-label fp-small" x="391" y="62" text-anchor="middle">Wall</text><rect class="fp-booth" x="314" y="4" width="154" height="32" rx="6" /><text class="fp-label fp-accent" x="391" y="25" text-anchor="middle">heART Rate Monitor</text><rect class="fp-room" x="222" y="250" width="124" height="40" rx="6" /><text class="fp-label" x="284" y="268" text-anchor="middle">Greeting desk</text><text class="fp-label fp-small" x="284" y="283" text-anchor="middle">annual pass members</text><rect class="fp-room" x="616" y="90" width="64" height="200" rx="6" /><text class="fp-label" x="648" y="182" text-anchor="middle">Ticket</text><text class="fp-label" x="648" y="197" text-anchor="middle">counter</text><circle class="fp-map" cx="648" cy="226" r="6" /><text class="fp-label fp-small fp-accent" x="648" y="248" text-anchor="middle">maps</text><circle class="fp-staff" cx="716" cy="108" r="9" /><circle class="fp-staff" cx="716" cy="146" r="9" /><circle class="fp-staff" cx="716" cy="184" r="9" /><circle class="fp-staff" cx="716" cy="222" r="9" /><circle class="fp-staff" cx="716" cy="260" r="9" /><text class="fp-label fp-small" x="716" y="288" text-anchor="middle">staff</text><rect class="fp-room" x="752" y="100" width="40" height="170" rx="6" /><text class="fp-label fp-small" x="772" y="185" text-anchor="middle" transform="rotate(-90 772 185)">TV screens: ticket options</text><rect class="fp-room" x="190" y="354" width="298" height="40" rx="6" /><text class="fp-label" x="339" y="379" text-anchor="middle">Front doors</text><rect class="fp-room" x="684" y="342" width="112" height="46" rx="6" /><text class="fp-label" x="740" y="370" text-anchor="middle">Coat check</text><path class="fp-path fp-path--pass" d="M300 354 C298 330 292 312 290 292 M340 262 C390 205 440 150 520 68" /><path class="fp-path fp-path--public" d="M362 354 C372 286 520 232 614 206 M614 206 C596 176 590 124 592 68" /></svg></div><div class="cs-floorplan-legend"><span><i class="fp-key fp-key--public"></i>TPL MAP pass holders and general public</span><span><i class="fp-key fp-key--pass"></i>Annual pass holders</span><span><i class="fp-key fp-key--booth"></i>Exhibit hidden behind a wall</span></div><figcaption>My floor plan of the AGO entrance: maps are only at the ticket counter, and the heART Rate Monitor sits behind a wall that every visitor walks past.</figcaption></figure>

<div class="cs-grid cs-grid--3 cs-grid--portrait"><figure><img src="/ago/photos/ago-map-stack.jpg" alt="A small stack of AGO paper maps on the ticket counter" loading="lazy" /><figcaption>AGO: a small stack of paper maps at the counter</figcaption></figure><figure><img src="/ago/photos/rom-brochures.jpg" alt="ROM brochure rack with guides in many languages" loading="lazy" /><figcaption>ROM: guides in many languages</figcaption></figure><figure><img src="/ago/photos/rom-qr-tour.jpg" alt="ROM sign with a QR code for a mobile tour" loading="lazy" /><figcaption>ROM: a mobile tour one QR code away</figcaption></figure></div>

#### 3.3 Reading the back of the exhibit

In the China gallery, I asked a participant to find the name of one object. She spent a long time working down a list of text beside the case, trying to match it to what she saw. Then she realized **we were standing at the back of the glass case**. Nothing had told her.

<div class="cs-grid cs-grid--2 cs-grid--portrait"><figure><img src="/ago/photos/rom-china-object.jpg" alt="Bronze object in a ROM China gallery case, circled" loading="lazy" /><figcaption>&ldquo;How would you find out the title of this item?&rdquo;</figcaption></figure><figure><img src="/ago/photos/rom-china-list.jpg" alt="Long numbered list of object names beside the case, outlined" loading="lazy" /><figcaption>The answer was in a long list, on the other side of the case</figcaption></figure></div>

At the AGO, a pamphlet meant to explain a case of snuff bottles was broken, in English only, and not accessible.

<div class="cs-grid cs-grid--3"><figure><img src="/ago/photos/ago-snuff-wall.jpg" alt="Dozens of Chinese snuff bottles on small shelves at the AGO" loading="lazy" /><figcaption>Dozens of objects on one wall</figcaption></figure><figure><img src="/ago/photos/ago-snuff-holder.jpg" alt="Holder with in-gallery-use-only pamphlets about the snuff bottle collection" loading="lazy" /><figcaption>One pamphlet holder for the whole wall</figcaption></figure><figure><img src="/ago/photos/ago-snuff-pamphlet.jpg" alt="Opened snuff bottle pamphlet with small object photos" loading="lazy" /><figcaption>The pamphlet, English only</figcaption></figure></div>



<p class="cs-takeaway"><span>Key takeaway</span>Visitors want to learn. The museum has to hand them the information.</p>

#### 3.4 When the screen matched the shelf

At the ROM, an interactive map laid out exactly like the display case changed everything. My participant tapped through the objects and **learned more in minutes than she had all visit**. The match between what she saw and what the screen showed did the work.

<div class="cs-grid cs-grid--3"><figure><img src="/ago/photos/rom-screen-1.jpg" alt="ROM touchscreen showing the minerals in the case beside it" loading="lazy" /><figcaption>The screen lays out the case it sits beside</figcaption></figure><figure><img src="/ago/photos/rom-screen-2.jpg" alt="Participant tapping a mineral on the touchscreen" loading="lazy" /><figcaption>Tap the object you can see</figcaption></figure><figure><img src="/ago/photos/rom-screen-3.jpg" alt="Touchscreen showing details for crocoite" loading="lazy" /><figcaption>Name, origin and details appear</figcaption></figure></div>

But not every case had one, and several devices were broken, low-contrast, English and French only, and inaccessible.

<div class="cs-grid cs-grid--2 cs-grid--portrait"><figure><img src="/ago/photos/rom-device-blank.jpg" alt="A blank, switched-off touchscreen at the ROM" loading="lazy" /><figcaption>A screen that doesn&rsquo;t turn on</figcaption></figure><figure><img src="/ago/photos/rom-device-windows.jpg" alt="A ROM touchscreen showing a Windows desktop instead of the exhibit" loading="lazy" /><figcaption>A screen stuck on the Windows desktop</figcaption></figure></div>



<p class="cs-takeaway"><span>Key takeaway</span>Information works best when it matches what's directly in front of you.</p>

#### 3.5 People come to be surprised, and to reflect

The moments participants remembered were interactive, surprising or reflective: exhibits that asked them a question, or invited them to think about repatriation, reconciliation and who tells a story.

<section class="case-study-placeholder case-study-image-gallery case-study-image-gallery--uncaptioned" aria-label="Interactive and reflective museum experiences"><div class="case-study-image-grid"><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_1png.png" alt="Reflect and Connect visitor prompt" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_2.png" alt="Reflective installation" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_3.png" alt="Interactive Decisions, Decisions exhibit" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_4.png" alt="Reflective visitor installation" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_5.png" alt="Participatory reflection prompt" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_6.png" alt="Interactive reflection station" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_7.png" alt="Visitor reflection materials" loading="lazy" /></figure><figure><img src="/ago/contextualinquiry/4.%20Visitors%20want%20more%20information%20before%20and%20during%20their%20visit/display/ci4_8.png" alt="Accessible digital interpretation" loading="lazy" /></figure></div></section>

> "Exhibition design is a simultaneously networked dialectical process, one which develops in a dialogue between verbal-conceptual and visual-representational rhetorical techniques. The focal point of this process of reflection is the individual and his or her intellectual and physical perceptual capabilities."
>
> <cite>Bertron, Schwarz &amp; Frey, <em>Designing Exhibitions</em> (2012)<sup>4</sup></cite>

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

<p class="cs-eyebrow" id="redesign">From research to screens</p>

### Redesigned screens

I presented these concepts with the final report. Each change below starts with what I found, shows the AGO today, and then how the redesign would handle it.

<article class="cs-card cs-change"><header class="cs-change-head"><p class="cs-num">01</p><div><p class="cs-title">Turn the account into a guide for the visit</p><p class="cs-change-why"><span>Why</span>The account only worked at checkout, and signing in changed nothing. Visitors also plan in groups, but the account assumes one person. <em>(Insights 01 and 05)</em></p><p class="cs-change-quote">&ldquo;I don&rsquo;t see much of a difference between having an account and not having an account.&rdquo; <cite>Participant 5</cite></p></div></header><div class="cs-change-compare"><div class="cs-change-pane"><p class="cs-who">Before</p><img class="cs-change-img" src="/ago/competitiveanalysis/CA6_Issue_W_Account.png" alt="Current AGO sign-in page shown to a logged-in user" loading="lazy" /><p class="cs-change-cap">A sign-in page, even when you&rsquo;re signed in</p></div><span class="cs-change-arrow" aria-hidden="true"></span><div class="cs-change-pane cs-change-pane--after"><p class="cs-who">After</p><img class="cs-change-img" src="/ago/contextualinquiry/recommendations/CI_R2_Redesign_Account.png" alt="Redesigned AGO account concept" loading="lazy" /><p class="cs-change-cap">An account that plans the visit</p></div></div><div class="cs-change-what"><p class="cs-who">What changes</p><ol><li><b>An account that knows you.</b> The sign-in state is respected, and the account becomes a home instead of a form. <em>(Insight 01)</em></li><li><b>Plan a trip and group trips.</b> Pick a date, party size and interests, and invite others. <em>(Insight 05)</em></li><li><b>Saved exhibits and tours.</b> Self-guided and audio tours that continue where you left off. <em>(Insight 04)</em></li><li><b>Recommended for you.</b> Interests, upcoming events and language preference. <em>(Insights 02 and 03)</em></li></ol></div></article>

<article class="cs-card cs-change"><header class="cs-change-head"><p class="cs-num">02</p><div><p class="cs-title">Bring the account into the gallery</p><p class="cs-change-why"><span>Why</span>The hardest moments happened in front of the art: hidden maps, and lists to decode at the back of a case. Information worked when it matched what visitors could see. <em>(Insight 04)</em></p></div></header><div class="cs-change-compare"><div class="cs-change-pane"><p class="cs-who">Before</p><img class="cs-change-img" src="/ago/photos/ago-map-stack.jpg" alt="A small stack of AGO paper maps on the ticket counter" loading="lazy" /><p class="cs-change-cap">A small stack of paper maps</p></div><span class="cs-change-arrow" aria-hidden="true"></span><div class="cs-change-pane cs-change-pane--after"><p class="cs-who">After</p><img class="cs-change-img" src="/ago/photos/concept-display-case.png" alt="Concept: a digital display case that mirrors the physical case, with object details on tap" loading="lazy" /><p class="cs-change-cap">A display map that mirrors the case, with object details on tap</p></div></div><div class="cs-change-what"><p class="cs-who">What changes</p><ol><li><b>An interactive map in the account.</b> Find galleries and exhibits before and during the visit. <em>(Insight 04)</em></li><li><b>Maps that match the case.</b> Tap an object on a layout that mirrors the display. <em>(Finding 3.4)</em></li><li><b>QR object pages.</b> More context for each object, in more languages. <em>(Finding 3.3)</em></li></ol></div></article>

<p class="cs-eyebrow" id="takeaways">Takeaways</p>

### What I'd carry into the next study

<div class="cs-roadmap cs-roadmap--3">
<div class="cs-card"><p class="cs-num">01</p><p class="cs-title">Let each study rewrite the question</p><p class="cs-small">I set out to design account features. Following the evidence led me to the whole visit, and kept me from recommending features nobody wanted.</p></div>
<div class="cs-card"><p class="cs-num">02</p><p class="cs-title">Treat site access as part of the method</p><p class="cs-small">Being turned away on day one taught me to secure permission before fieldwork, not assume it.</p></div>
<div class="cs-card"><p class="cs-num">03</p><p class="cs-title">Five interviews show patterns, not proof</p><p class="cs-small">Next: recruit long-term account holders, visitors with accessibility needs and families, and usability-test the redesign.</p></div>
</div>

### References

1. Art Gallery of Ontario. (n.d.-a). *Commitment to accessibility*. https://ago.ca/commitment-accessibility
2. Art Gallery of Ontario. (n.d.-b). *Plans, reports, and policies*. https://ago.ca/about/plans-reports-and-policies
3. Auditor General of Ontario. (2022). *Annual report 2022: Chapter 1, Section 1.13: Museums and galleries: Art Gallery of Ontario*. https://www.auditor.on.ca/en/content/annualreports/arreports/en22/1-13-2museumsAGO_en22.pdf
4. Bertron, A., Schwarz, U., & Frey, C. (2012). *Ausstellungen entwerfen – Designing exhibitions: Kompendium für Architekten, Gestalter und Museologen – A compendium for architects, designers and museum professionals*. Walter de Gruyter.
5. British Museum. (n.d.). *Governance*. https://www.britishmuseum.org/about-us/governance
6. British Museum. (2019). *Towards 2020: The British Museum strategy*. https://www.britishmuseum.org/sites/default/files/2019-10/Towards_2020-The_British_Museum_Strategy.pdf
7. Clark, S. (2025). *AGO competitive analysis* [Unpublished manuscript]. Google Drive. https://drive.google.com/file/d/1ue6qsSZ_FfnOiHAffpQkQNLRIHYzHXOq/view?usp=sharing
8. Harley, A. (2018). *Visibility of system status*. Nielsen Norman Group. https://www.nngroup.com/articles/visibility-system-status/
9. Hernandez-Eli, J. (2022). *Building tomorrow's Met*. The Metropolitan Museum of Art. https://www.metmuseum.org/perspectives/building-tomorrows-met
10. Krause, R. (2021). *Maintain consistency and adhere to standards (Usability heuristic #4)*. Nielsen Norman Group. https://www.nngroup.com/articles/consistency-and-standards/
11. Metropolitan Museum of Art. (n.d.-a). *About The Met*. https://www.metmuseum.org/about-the-met
12. Metropolitan Museum of Art. (n.d.-b). *The Artist Project*. https://www.metmuseum.org/perspectives/series/the-artist-project
