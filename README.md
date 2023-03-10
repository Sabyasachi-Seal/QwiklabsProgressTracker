<h1 id="problem-statement">Problem Statement:</h1>
<p>Often times students’ complete courses and labs on the Cloud Skills Boost Platform but they have a hard time tracking the number of labs they completed and how many and which ones they need to do. There is also a problem that arises when new labs are added or some labs are removed from an ongoing pathway. We need a method to remove the dependency of the progress from an excel sheet and make the whole process a lot more accessible. The solution should be such that the product made can be used in any of the future upcoming events revolving around cloud skills boost challenges.</p>
<h1 id="solution">Solution:</h1>
<p>My solution is a Cloud Skills Boost Progress Tracker that tracks how much a participant has finished in a certain set of challenges and labs with as least of a delay as possible. This is achieved through using a config that stores all the required labs and optional labs in a pathway and a challenge and then scrapes the public profile of a user to match the number of pathways that person has completed. Since this depends on the badges present in the link of the user’s profile, the latency is almost zero. Thus, dependency from any excel sheet is removed. Also, a user doesn’t get to see another user’s profile, so data confidentiality is maintained. A simple change in the config.js will also change the labs and tracks that the user’s badges are matched against.</p>
<h1 id="screenshots--">Screenshots: -</h1>
<p><img align=center width=100% src="https://user-images.githubusercontent.com/36451386/211213793-6005e289-4dbe-4e39-a34e-650bc70e4523.png" alt=""> 
   <img align=left width=47% src="https://user-images.githubusercontent.com/36451386/211213777-00aac0cb-dbe7-4ffd-8572-fe9ed6f882f4.png" alt=""> 
   <img align=right width=47% src="https://user-images.githubusercontent.com/36451386/211213785-a06443a2-a195-442b-8e0e-6bb2775d740a.png" alt="">
   <img align=center width=10% height=20% src="https://user-images.githubusercontent.com/36451386/224355455-4c9aec77-4945-4d36-947c-142941d0c3cf.png" alt="">
</p>
<h1 id="services-used">Services Used:</h1>

<ol>
   <li>Cloud Run (For Deployment)</li>
   <li>Cloud Build (For setting up Continuous Deployment)</li>
   <li>Cloud Storage Buckets (Used with Cloud Build)</li>
   <li>Artifact Registry (Maintaining the Containers running the web app)</li>
</ol>
<h3 id="github-link-httpsgithubcomsabyasachi-sealcloudskillsboostprogresstracker">GitHub Link: <a href="https://github.com/Sabyasachi-Seal/QwiklabsProgressTracker">Sabyasachi-Seal/CloudSkillsBoostProgressTracker</a></h3>
<h3 id="gcp-deployed-link-httpscloudskillsboostprogresstracker-j44zd2vilq-ucarunapp">GCP Deployed Link: <a href="https://cloudskillsboostprogresstracker-j44zd2vilq-uc.a.run.app/">https://cloudskillsboostprogresstracker-j44zd2vilq-uc.a.run.app/</a></h3>
<h3 id="alternative-link-deployed-on-render--20-sec-spin-up-time-httpsqwiklabsprogresstrackeronrendercom">Alternative Link (Deployed on Render – 20 Sec Spin up time): <a href="https://qwiklabsprogresstracker.onrender.com/">https://qwiklabsprogresstracker.onrender.com/</a></h3>
