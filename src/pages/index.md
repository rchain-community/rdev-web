---
title: 'RChain Developer Cooperation'
description: ''
layout: '@/layouts/MainLayout.astro'
setup: |
  import {Markdown} from 'astro/components';
  import FooterLayout from '@/layouts/FooterLayout.astro';

  import BannerSection from '@/sections/banner/BannerSection.astro';
  import Banner from '@/sections/banner/Banner.astro';

  import BulletpointsSection from '@/sections/bulletpoints/BulletpointsSection.astro';
  import MissionSection from '@/sections/mission/MissionSection.astro';
  import FeaturesSection from '@/sections/features/FeaturesSection.astro';
  import ProjectsSection from '@/sections/projects/ProjectsSection.astro';

  import BulletpointLayout from '@/sections/bulletpoints/BulletpointLayout.astro';
  import FeatureLayout from '@/sections/features/FeatureLayout.astro';
  import CopyText from '../components/CopyText.svelte';
---

<BannerSection>
  <Banner>
    <span style="color: #A93226;">**Learn, Contribute, Earn and Fund Great Projects**</span>
    ===============
    <p class="lead hero-small-text">RChain Developers Cooperation aims to become a leaderless cooperation among RChain Cooperative members, incubating teams, learning peer to peer, crash courses, bootcamp, meetups, running our own rhobot shard and mainnet validators, crowdfunding, rewarding ourselves, building dapps, helping to make RChain scale.</p>
    <p class="lead">
      <a href="#features" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
    </p>
  </Banner>
</BannerSection>

<BulletpointsSection>
  <BulletpointLayout delay={0} icon="assets/book.svg">
    **Learn**
    ---------------
    Learn Rholang and RChain development through our workstudies and bootcamps.
  </BulletpointLayout>

  <BulletpointLayout delay={100} icon="assets/code.svg">
    **Contribute**
    ---------------
    Apply the experience and skills learnt during our workstudy sessions to existing projects.
  </BulletpointLayout>

  <BulletpointLayout delay={200} icon="assets/money.svg">
    **Earn**
    ---------------
    Through our leaderless approach, we collective reward ourselves in a fair manner.
  </BulletpointLayout>

  <BulletpointLayout delay={300} icon="assets/wallet.svg">
    **Fund**
    ---------------
    You can also contribute to open source projects building by being one of our sponsors.
  </BulletpointLayout>
</BulletPointsSection>
    
<MissionSection>
  <span style="color: #A93226;">**RChain**</span> Developers Cooperation Mission
  ===============
  
  <div class="lead">
    <Markdown >
      Empowering and supporting individual developers/teams and helping fund their development.
    </Markdown>
  </div>
</MissionSection>

<FeaturesSection>
  <FeatureLayout image="assets/play.svg">
    About <span class="text-muted"><span style="color: #A93226;">**RChain**</span> Developers Cooperation.</span>
    ===============
    <Markdown >
      RChain Developers Cooperation, also called RDev, is a workers cooperation structured as a membership association.  It is intended to provide staff and human resources tools and services to allow dApp developers, project managers, dApp investors, and entrepreneurs to connect and collaborate together to build trustworthy decentralized solutions.
    </Markdown>
  </FeatureLayout>

  ---

  <FeatureLayout image="assets/hand.svg" flip={true}>
    Support the Open Web <span class="text-muted">and Influence its Future</span>
    ===============
    <Markdown >
      Support community funded open source projects that will not only form the future of RChain but that will also become leaders of the evolving web3 space and in turn disrupt the internet we know today.
    </Markdown>
    <a class="btn btn-primary btn-donate" href="#projects">Support</a>
  </FeatureLayout>

  ---

  <FeatureLayout image="assets/collab.svg">
    Existing <span class="text-muted">Problem</span>
    ===============
    <Markdown >
      RChain aims to enable cooperation at scale in a decentralized manner. Our challenge is to enable autonomy and cooperation such that we exhibit a collective intelligence of our members rather than the least common denominator.
    </Markdown>
  </FeatureLayout>

  ---

  <FeatureLayout image="assets/teamwork.svg" flip={true}>
      Our Collective <span class="text-muted">Solution</span>
      ===============
      <Markdown >
        - Bring your own project or join an existing one. See the pinned items in [our discord channel](https://discord.com/channels/375365542359465989/762748307180224512).
        - Develop standards and [norms](https://docs.google.com/document/d/16L-erVLi4nuTEjMjN67PPgPaYG5LLV3AeS3dSxH-dlk/edit#heading=h.7iskciwt7wat) needed so our services can work together.
        - Together we can solve common problems and create libraries. We can create teams from members and develop apps.
        - We can run our own rdev rchain network ultimately to become a mainnet shard for our own work with our own RDEV token that might achieve market value if governed well.
        - We can follow collective [intelligence best practices](https://docs.google.com/presentation/d/1qFK10rFcCiBO72aeSFIfII0e1TeIXDKgZqwVlP-wREk/edit#slide=id.p) and create things much greater than we can do alone.
        - We can [govern ourselves](https://docs.google.com/document/d/14JJPWtrFxkxzHa1NAmwzhTmeQO1vJtKDOJgBB_MPyfY/edit) autonomously employing top down trust metrics and bottom up liquid democracy within our teams and stakeholder groups forming a sociocratic polyarchy.
      </Markdown>
  </FeatureLayout>
</FeaturesSection>


<br/><br/><br/><br/><br/>

<ProjectsSection>
  <div class="DonationInfo" id="hanging-icons">
  <p style="margin-top: 0.6em;">
  Send contributions for other activities of the Rchain Developers Cooperative including running the RhoBot RChain network to 
  </p>
  <CopyText text={"1111bchR8ErGzjkq7TY35pJB7oGosXhHoGP4Wj1mu27tYSV6yeWQ7"} client:visible/>
  </div>
</ProjectsSection>


<FooterLayout>
    © 2021 RChain Developers Cooperation · [Join our Discord](https://discord.com/channels/375365542359465989/762748307180224512) · [Read the guiding document](https://docs.google.com/document/d/14JJPWtrFxkxzHa1NAmwzhTmeQO1vJtKDOJgBB_MPyfY/edit#) 
</FooterLayout>

<style>
  .DonationInfo {
    padding: 1em;
    border-radius: 1em;
    margin-right: auto;
    margin-left: auto;
    display: flex;
  }
</style>
