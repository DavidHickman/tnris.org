---
template: news.html
title: "Digging Into the Augmented Reality Sandbox"
author: Miguel Pavon, Data & Mapping Solutions
mainimage: static/images/texas-gis-forum/2015/forum-recap/32_web.jpg
mainimagealt: The Augmented Reality Sandbox, a rainbow spectrum projected onto sand
mainimagecaption: The topographic color map and contour lines are updated in real time as the real sand surface is manipulated, and virtual water flows over the real sand surface realistically. Over the course of the Forum, the sandbox grew trees and some dinosaurs moved in.
thumbnail: static/images/updates/2015/sandbox_th.jpg
thumbalt: A thumbnail of the augmented reality sandbox, projected topography
abstract:
    Miguel Pavon explains the idea and process for making the Augmented Reality Sandbox. Includes links to the original creator's tutorials and open source software.
tags: forum
---

When Richard Wade, director of TNRIS, returned from the ESRI Users Conference in July of 2015, he came back with a mission in mind. Richard had seen a version of an Augmented Reality Sandbox that impressed him and wanted to emulate it at the Annual Texas GIS Forum in October. That left us with only 3 months to research, plan and execute it.

I started to research by watching a couple of videos of how the AR sandbox works, and reading documentation from [University of California Davis’ Oliver Kreylos](http://idav.ucdavis.edu/~okreylos/ResDev/SARndbox/) on how to build it. A kinect sensor, projector and desktop were pulled together and the first proof-of-concept prototype was built at the TNRIS offices, mapping a cone of paper taped to the wall of my office.

The objective was to teach earth science concepts in an easy-to-understand, intuitive way. The final result would be a hands-on exhibit combining a real wooden sandbox, virtual topography and water created using Kinect_2.8, Virtual reality and Sandbox software in a Linux box, and a Microsoft Kinect 3D camera and a data projector. 

The resulting augmented reality (AR) sandbox allows users to create topography models by shaping real sand, which is then augmented in real time by an elevation color map, topographic contour lines, and simulated water. The system teaches geographic, geologic, and hydrologic concepts such as how to read a topography map, the meaning of contour lines, watersheds, catchment areas, levees, etc.

<figure>
<img class="img-responsive" src="{{m.link('static/images/texas-gis-forum/2015/forum-recap/05_web.jpg')}}" alt="Atendees gather around the sandbox, playing with the sand and taking pictures">
<figcaption>Forum Attendees gathered at the sandbox during breaks between presentation sessions.</figcaption>
</figure>

But, aside from all that educational stuff, no matter how old you get, no one can resist the urge to play with sand.

## Make Your Own
<img class="img-responsive pull-right" src="{{m.link('static/images/updates/2015/sandbox_structure.jpg')}}" alt="A view of the Full Structure">

All the software and techniques for building the Augmented Reality Sandbox are free and open source. The only costs to you are the components, materials and your time.

<a class="btn btn-md btn-danger btn-center" href="http://idav.ucdavis.edu/~okreylos/ResDev/SARndbox/" >Visit the AR Sandbox Instructional Page</a>

In order to assist do-it-yourself efforts, Mr. Kreylos recently created a series of videos illustrating the core steps necessary to add the AR component to an already existing sandbox. There are three main steps: two include calibrating the Kinect 3D camera with respect to the sandbox, and one to calibrate the data projector with respect to the Kinect 3D camera (and, by extension, the sandbox). These videos elaborate on steps described in the AR Sandbox software’s README file, but sometimes videos can be worth more than than a 1000 READMEs.

<figure>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/sandbox_guts.jpg')}}" alt="The components on the top of the sandbox, labels for the PC, Projector, and Kinect">
  <figcaption>The guts inside the top portion of the Sandbox, projecting downward onto the sand.</figcaption>
</figure>

In order, these calibration steps are:

- Step 1 (optional, but recommended): [Internally calibrate the Kinect camera](http://www.youtube.com/watch?v=Qo05LVxdlfo) and then check the calibration result.
- Step 2: [Calculate sandbox base plane](http://www.youtube.com/watch?v=9Lt4J_BErs0)
- Step 3: [Measure 3D extents of sand surface](http://www.youtube.com/watch?v=RmE6tkXoSJw)
- Step 4: [Calibrate projector with respect to Kinect 3D camera](http://www.youtube.com/watch?v=vXkA9gUoSAc)

<img class="img-responsive pull-right" style="max-width: 350px;" src="{{m.link('static/images/texas-gis-forum/2015/forum-recap/15_web.jpg')}}" alt="A smiling woman drops sand on top of a small pile of sand with topography projected">Basically, if you already own a fairly recent PC, a Kinect, a data projector, and some initiative, give it a try ! It should be possible to put together a working system in a matter of hours (add 30 minutes if you need to install Linux first).

We installed the sandbox as a mostly unsupervised hands-on exhibit at the Forum, and allowed visitors to informally learn about geographical, geological, and hydrological principles by playing with sand. We provided hand tools like shovels and rakes as an alternative for people who didn't want to get sand under their fingernails.

We hope this has been interesting and informative, especially to encourage you to build you own augmented reality sandbox. But if you're not the crafty type, don't fret, the AR sandbox will be waiting for you at TNRIS and will likely make a reappearance at the 2016 GIS Forum. We'll see you then!


