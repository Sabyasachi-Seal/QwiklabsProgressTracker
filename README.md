# Problem Statement: 

Often times students’ complete courses and labs on the Cloud Skills Boost Platform but they have a hard time tracking the number of labs they completed and how many and which ones they need to do. There is also a problem that arises when new labs are added or some labs are removed from an ongoing pathway. We need a method to remove the dependency of the progress from an excel sheet and make the whole process a lot more accessible. The solution should be such that the product made can be used in any of the future upcoming events revolving around cloud skills boost challenges. 

# Solution: 

My solution is a Cloud Skills Boost Progress Tracker that tracks how much a participant has finished in a certain set of challenges and labs with as least of a delay as possible. This is achieved through using a config that stores all the required labs and optional labs in a pathway and a challenge and then scrapes the public profile of a user to match the number of pathways that person has completed. Since this depends on the badges present in the link of the user’s profile, the latency is almost zero. Thus, dependency from any excel sheet is removed. Also, a user doesn’t get to see another user’s profile, so data confidentiality is maintained. A simple change in the config.js will also change the labs and tracks that the user’s badges are matched against.

# Screenshots: -

<img align=center width=100% src="https://user-images.githubusercontent.com/36451386/211213793-6005e289-4dbe-4e39-a34e-650bc70e4523.png">
<img align=left width=48% src="https://user-images.githubusercontent.com/36451386/211213777-00aac0cb-dbe7-4ffd-8572-fe9ed6f882f4.png">
<img align=right width=48% src="https://user-images.githubusercontent.com/36451386/211213785-a06443a2-a195-442b-8e0e-6bb2775d740a.png">

# Services Used:

1.	Cloud Run (For Deployment)
2.	Cloud Build (For setting up Continuous Deployment)
3.	Cloud Storage Buckets (Used with Cloud Build)
4.	Artifact Registry (Maintaining the Containers running the web app)

### GitHub Link: https://github.com/Sabyasachi-Seal/CloudSkillsBoostProgressTracker

### GCP Deployed Link: https://cloudskillsboostprogresstracker-j44zd2vilq-uc.a.run.app/

### Alternative Link (Deployed on Render – 20 Sec Spin up time):  https://qwiklabsprogresstracker.onrender.com/
