# Tendril: speaker notes

Scene-by-scene, in display order. Pull this up on a second screen during the talk.

---

## 01 · Cover

Okay. Before I show you anything, I want you to forget that we make glasses for a second.

What I've been building toward this week is a company called Tendril. The one-liner is that it's an operating system for the open field, and tonight I want to walk you all the way through why I think this is the thing, from zero, because I've gone deep on the research and you two haven't yet.

---

## 02 · Where we already are

Here's the thing I keep coming back to. The hardest part of Ocura was never the glasses. It was the brain: a system that can perceive a chaotic real-world scene, remember it over time, reason about what matters, and act.

We already built that. And that exact stack doesn't care what it's pointed at. A living room, or a field. That's the whole seed of this.

---

## 03 · The question on the table

So the real question isn't "can we build it." We have the capacity to build the brain. The question is where it pays off fastest.

Ocura is a moral mission, and I love it, but blind users mostly can't pay for ROI, and it's a slow market. Agriculture is the opposite: it's a financial buyer, it's enormous, and every time I look at it I feel conviction instead of just spreadsheet logic. Same brain, completely different economics.

---

## 04 · The problem

Here's the pain. There are 548 documented cases of herbicide-resistant weeds, and we haven't had a genuinely new way to kill a weed (a new mode of action) since the 1980s. The chemistry is running out.

Meanwhile half to seventy percent of the cost of growing specialty crops is labor, and almost nothing is automated. So farmers spray more chemicals for worse results, can't find people, and are basically reacting blind across thousands of acres. That's a treadmill, and it's breaking.

---

## 05 · Why now (and why it's big)

And the timing is not subtle. YC literally put out a request for low-pesticide agriculture and called it generational. Edge AI got cheap enough to act on a single plant. Farm robotics kept getting funded even when the rest of agtech cratered. And regulation keeps tightening on chemicals.

The part I want you to sit with: our market isn't the weed budget for one crop. It's the entire management spend of every acre we run. That number is huge.

---

## 06 · The insight

This is the inversion the whole company sits on.

Every player in this space is a hardware company that bolted on some AI. We're the opposite. We're an intelligence company, and the robots are its tendrils: the hands and eyes in the field. That's literally where the name comes from. The brain reaches into the field through them. That flip changes everything about what's defensible, and it's exactly the thing we already know how to do.

---

## 07 · What we build

Concretely, it's a loop. The fleet perceives every plant and builds a live 3D map. It remembers where problems recur. It decides what to do per plant and pre-empts the hotspots it's seen before. Then it acts with the right tool, and the result feeds straight back into the model.

And the perception runs at two scales at once. Per-plant: every leaf, weed, lesion. Whole-field: a continuously updated 3D map of the farm itself, using vSLAM (visual SLAM) on each robot. Because the fleet is a swarm, we get cross-validation for free: multiple agents see the same patch in parallel and over time in series, so the map gets more accurate the more we run it. That's the part that's quietly very convenient for us.

That loop is the product. The robots and the dashboard are just how the farmer touches it.

---

## 08 · The unfair advantage

This is literally Ocura's intelligence layer, only repointed. The two hardest things we built map perfectly. Persistent spatial memory: in Ocura, the idea was to remember a user's patterns and day-to-day life. In a field, that becomes remembering where the weeds and disease keep returning. The notice-first proactivity: in Ocura it flags the approaching cyclist. In a field it catches the outbreak before it spreads.

Every competitor has to build that intelligence layer from scratch. We're starting from it. That's a multi-year head start.

---

## 09 · Who's already here

I need you to know this is a real, funded space. That's a good sign, not a scary one. Carbon Robotics has raised around 177 million for a tractor-scale laser weeder. Ecorobotix about 150. John Deere's See and Spray is the incumbent. They own the dealer channel.

Worth zooming in on Deere here, because it's the bigger story. They bought Blue River Technology for around 300 million back in 2017, and that's now See and Spray Ultimate: factory-installed on the flagship sprayer, a camera every meter along the boom, two-thirds less spray volume, and they claim 87% less drift and 93% less runoff. Dyson got there earlier with their own subsidiary, and AGZEN (an MIT spinout) is pushing into smart spray too.

Two takeaways. One: if Deere is paying 300 million for vision-spray AI and Dyson and MIT are in the race, this isn't a niche we're sneaking into. It's huge, and yes, eventually a Deere could want to acquire us. Two: nobody in that smart-spray race, Deere included, is building a swarm of small robots stitched together by an agentic layer. That's the shape that's genuinely new, and the shape we're best positioned to build.

The one to remember on the chart is Aigen, down there at about 19 million. Small, solar, mechanical weeding robots. They're our closest comparable, and I'll show you in a second exactly how we go beyond them.

---

## 10 · How we're different

So here's the head-to-head, and I want to be fair to them. Aigen is good. They proved a small robot can mechanically weed a field. Respect.

But they built a tool. We're building a system. Their robot does one job and forgets the field between passes. Ours remembers, pre-empts, swaps tools across the whole season, and the intelligence (the dashboard) is the actual product. The robot is just a limb.

---

## 11 · The moat

"But can't someone copy the robot?" Sure. Hardware gets copied. What doesn't get copied is a field that's been remembered for three seasons.

Every acre we run feeds a compounding 3D dataset: our own plant foundation-model. The longer we're on a farm, the smarter and stickier we get, because leaving means losing the intelligence about your own land. That's the moat, and it grows on its own.

And one more thing I want you to see clearly: the dataset itself is a product. Live, ground-truth plant and agronomy data at continental scale is the kind of thing Deere, Bayer, Microsoft, and Google will pay for. It's a real revenue line in its own right, and it's a real lever in any acquisition conversation. The moat doubles as a second top-line.

---

## 12 · Business model

The model is robotics-as-a-service. The farmer doesn't buy a six-figure machine. They subscribe to an outcome, and we charge per acre we actually tend.

That does two things at once: it kills the adoption friction, and every acre we service feeds the data flywheel. Recurring revenue and a compounding moat from the same motion.

---

## 13 · Go-to-market

Go-to-market is where this gets accessible. 96% of U.S. farms are family-owned: about 1.9 million of them, and 86% are small family farms. That's the USDA number; I'm using 96, not the looser 97 or 98 you'll see floating around, so it's bulletproof.

These people are reachable. No procurement department, no dealer gatekeeper. We sign two or three as real design partners and build the thing with them. They're squeezed and underserved, which means they actually want this.

---

## 14 · Who we'd call first

And this isn't a persona I made up. This is Matt Griggs: fifth-generation farmer in Humboldt, Tennessee, about 2,000 acres of cotton, corn, soybeans, and wheat. Did a WIRED interview that's been watched over two million times.

The thing that genuinely surprised me when I watched that interview is how deep his knowledge runs. He talks fluently about agronomy, soil health, trade policy, the economics of equipment, GPS-line precision on planting, the mortality rate of farming as a profession. This is the kind of operator you build a system with, not for.

Now look at the numbers. He says his farm does about $1.8 million in revenue. His profit in a good year is around $92 thousand. Last year he was negative three hundred thousand. So the gross is enormous and the actual take-home is razor-thin in a good year, underwater in a bad one. He is one of 1.9 million families in that exact spot.

And here's how we'd approach him. Not with a six-figure machine. With this pitch: let us partner with you for free. We come to your farm, learn how you actually run it, test on your ground. You don't have to do a thing. If it works and you want to buy in later, you get a friend's rate. If it doesn't, we walk away. There are millions like him and they all have phones. We just have to pick them up. I'm sure they'd be willing to try.

---

## 15 · Their biggest cost

This is the slide that reframes the whole prize. Griggs says his single biggest line item isn't seed or chemicals. It's repairing and maintaining equipment, 200 to 300 thousand a year. New iron is worse: 450K for a tractor, a million for a combine, 1.2 million for a corn picker he uses two weeks a year.

That's the money we're actually after. Our model attacks it directly: no machine to buy today, and over time, less giant single-purpose iron sitting idle. Be careful how I say it, though: day one, we don't replace his combine. Harvest is the last, hardest stage. The honest claim is the model attacks capex now, and shrinking the big iron is the vision.

The framing I want to land is this: imagine even a 20% improvement on his cost structure. Tangibly, we can probably offer more later. But even at 20%, that's not a nice-to-have. That's essential. The link below the stats is the actual WIRED video if anyone wants to watch the source.

---

## 16 · Why small wins

And there's a second problem with big iron that I didn't expect. Griggs says one of the most stressful, dangerous parts of his job is just moving the equipment. The machines got enormous, the roads didn't, and the roads keep getting busier as towns sprawl into farmland.

A swarm of small modular robots makes that whole problem vanish. Nothing oversized to haul, you scale by adding units, one failing doesn't stop the field, and they're gentle on the soil.

The framing I want to land on this slide: Deere and Carbon are betting on bigger. Aigen went small, sure, but they built a single-task robot, basically a programmable weeder. They aren't building a system. We're the only ones building small plus agentic plus a full farm OS. That's the shape they can't copy without blowing up their whole approach.

---

## 17 · Better for the land

I want to be clear about something I've been understating across this whole deck, because it's actually one of the reasons I want to build this.

Everything we just talked about, the small machines, no spraying, gentle on the soil, is also genuinely better for the land. Less energy: small electric robots replace diesel iron, orders of magnitude less fuel and emissions per acre treated. Fewer chemicals: mechanical, chemical-free weeding by design. Whatever Deere is selling on drift and runoff, we take further by simply not spraying in v1. Healthier soil: lighter machines compact the soil less, and per-plant action preserves the microbial life the next harvest depends on.

This is the same fight as the chemical treadmill from slide four, just told from the land's side. It's not a marketing layer. It's a core mission. Mariia, the friend from Yale I'll mention later, is exactly the right kind of person to pull in here.

---

## 18 · The knowledge burden

This is the one that ties it all back to us. Griggs says, and I'm paraphrasing, that a farmer has to be an agronomist, a pathologist, a mechanic, sometimes an electrician, all at once. The cognitive load is insane.

That's our core, right there. The agentic layer is the expert that's always on: it reads the field, spots the disease, flags the failing part, and turns it into a decision tailored to their farm. We don't hand them one more tool to learn. We carry the expertise for them. This is why "intelligence company, not hardware company" actually matters to a human being.

---

## 19 · We did our homework

I did, frankly, way too much research on how farming actually works today, because we are not agronomists yet. Every crop runs on the same four stages: soil prep before the season, planting and sowing in the spring window, crop management during the growing season, and harvest at maturity peak.

And the framing on this slide is important. We can touch all four. The same brain runs across the whole cycle. We just start at stage three, crop management, because it's the most painful, the most automatable, and it's exactly where our perception and memory edge is sharpest. Then we expand outward, soil prep, planting, and last of all harvest, which is the hardest to automate. The expansion path is obvious once you're in. That's why this stops being a weeding company and becomes a farm OS.

---

## 20 · The wedge (v1)

v1 is deliberately tiny. The OS plus a single small modular robot doing chemical-free mechanical weeding in one crop, and a live 3D field map from day one. That single thing proves the hands and the brain at once.

The framing I want for this slide: the system is crop-agnostic at the core. We tune the perception model and the tool head per crop, but the OS doesn't change. We're going to specialize in one of the big commodity crops first (corn, cotton, soybeans, wheat). A high-value specialty crop stays on the table as a faster-proof option, but it's an option, not the default.

How do we actually pick? Honestly, we just have to call people and see what hurts. Twenty farmers, twenty conversations, pick the crop where our system saves them the most money fastest. The decision is empirical, not theoretical. That's what I want us to agree on tonight.

---

## 21 · Roadmap

The roadmap is narrow now, inevitable later. Phase one is the core: weeding, one crop, the live map. Phase two: same brain, same chassis, new snap-in tools. UV-C for disease, more crops. Phase three is the full platform: spot-treatment, seeding, the whole field run by the fleet.

The thing that never changes across all three is the brain. We build it once and keep pointing it at bigger problems.

---

## 22 · The hard parts (honest)

I'd rather put every risk on one slide than have you catch me hiding one later, so here's the list. I've grouped them into Market risks, Execution risks, and a Team risk so you can see them by category.

Market: commodity means thin margins and Deere; specialty means a more fragmented market; the sales cycle is seasonal, basically one shot per year per farm. Execution: UV-C is power-hungry, which is why it's a later phase; hardware is capital-heavy even with RaaS. Team: we're not agronomists yet. The answer to that last one is the whole design-partner strategy, we embed, and one of us goes deep and becomes the crop expert.

That's the honest list. None of these are surprises. I'd rather you find them now than three months in.

---

## 23 · Why us

Why us, specifically. It's the overlap of three things that rarely show up together: a massive market, a capability we already own, and genuine conviction (the thing I keep feeling and can't shake).

A hardware company would have to build the brain from scratch. We start from the brain and give it hands and legs. That's the unfair part.

---

## 24 · The ask

So here's the ask, and it's not "quit everything tomorrow." It's: let's commit to exploring this seriously, together.

Four concrete moves. Pick the beachhead crop (tonight if we can). Land two or three design-partner farms. One of us goes deep and becomes the expert. And we scope the smallest prototype that proves the hands and the brain.

One name to keep in our back pocket on the environmental and energy side: Mariia Hodovanets, Yale junior, BA in Economics and Environmental Engineering, doing research at the MIT Energy Initiative this summer. I met her at the Crews dinner. She's probably the only person I know majoring in environmental engineering, and given how much of our story is about doing this better for the land, she's worth a coffee.

That's the start.

---

## 25 · The bigger picture

And the last thing I want to leave on the table before I land this, because it's the thing I personally cannot stop thinking about.

The world is adding about two billion more people by 2084. We have to feed them on roughly the same arable land we have today, without clearing more forest. The only real lever there is efficiency per acre. If an honest, per-plant, agentic system could squeeze even a 20% yield improvement out of the same acre, that reframes a generational problem.

I'm not promising 20%. I'm saying it's tangibly possible. And the upside on getting it right isn't just a good business. It's the kind of company that gets noticed. That's the kind of company I want to build.

---

## 26 · Close

I'll leave you with the analogy that made it click for me.

A content management system runs a website. We want to run the field: perceive it, remember it, decide, act, every day, as a service. That's the company. And honestly? Of everything we've kicked around, this is the one I actually want to build for the next ten years. Let's do it.
