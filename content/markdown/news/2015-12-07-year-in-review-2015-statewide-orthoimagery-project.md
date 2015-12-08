---
template: news.html
title: "Year in Review: 2015 Statewide Orthoimagery Project"
author: StratMap
thumbnail: static/images/updates/2015/georgetown-buyup/georgetown_buyup_th.jpg
thumbalt: Sample of the new City of Georgetown Aerial Imagery
abstract:
    ortho project year in review
tags: stratmap, orthoimagery, statewide, TOP, georgetown, sara, university lands, surdex
---

<p class="lead">The [2015 Statewide Orthoimagery Project](2015-statewide-orthoimagery-project), undertaken in collaboration with other state agency partners, is one of the major data projects underway at TNRIS. It meets the crucial need for new high-quality, leaf-off imagery for the entire state. As part of TNRIS's key mission to acquire data and distribute it to the public, all of the data produced through the project will be in the public domain and available through our [data download](data-download) page.</p>

We wanted to take this opportunity as 2015 comes to a close to fill you in on where the project has been and what's expected in 2016. We've accomplished a lot - we've started to release finalized data - but have also encountered some setbacks. Even with a delay to the original completion date, the project has gone exceptionally well, especially in the hands of the selected data acquisition vendor [Surdex Corp](https://www.surdex.net).

Read on to learn about the current dataset availability, the causes for data acquisition flight delays and the next steps. For the full background and history on the project, visit the [project page](2015-statewide-orthoimagery-project).

## Latest Data Access Status

We have created a primary dataset entry for the **2015 Texas Orthoimagery Program (TOP)** in our [data catalog](data-catalog) for the imagery we've QC'ed and finalized so far, which as of early December, is around 36% of the state, which primarily consists of West Texas and the Panhandle. On about a monthly basis, we are adding to this and incorporating the latest final data as it is QC'ed and processed.

{{m.catalog_data_card('texas-orthoimagery-program-top-2015-50cm-nc-cir')}}

In the maps below, you can view the most recent DOQQ and CCM (Compressed County Mosaic) availability. These maps are updated with each round of data additions on the [project page](2015-statewide-orthoimagery-project).

{% include "./partials/2015-ortho/statewide-preview.html" %}

<hr class="clearfix">

<h3>6-Inch and 1-Foot Buy-Up Areas</h3>

Our BUY-UP 6-inch and 1-foot areas were parts of the state sponsored by stakeholders seeking higher resolution imagery for their areas. 

6,930 total square miles of 6-inch natural color and color infrared orthoimagery were independently QC’d and are now available for download for these areas:

{{m.catalog_data_card('hpids-georgetown-2015-6in-nc-cir')}}

{{m.catalog_data_card('hpids-sara-2015-6in-nc-cir')}}

{{m.catalog_data_card('hpids-university-lands-2015-6in-nc-cir')}}

<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/georgetown-buyup/georgetown_lampasas_nc.jpg')}}" alt="Natural Color preview of Lampasas River near  Georgetown">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/georgetown-buyup/georgetown_lampasas_cir.jpg')}}" alt="Infra Red preview of Lampasas River near Georgetown">
</div>
<figcaption>Lampasas River in Bell County from the [HPIDS Georgetown 2015 6in NC\CIR](data-catalog/entry/hpids-georgetown-2015-6in-nc-cir) dataset, SCALE 1:3000</figcaption>
</figure>


Stay posted for upcoming Buy-Up data releases, including NGA/USGS areas in **Amarillo**, **Dallas-Ft. Worth**, **El Paso**, **Lubbock**, and the completion of remaining San Antonio River Authority areas in **Refugio** and **Aransas Counties**.

## Acquisition Progress and Challenges - Clouds and Borders

The project has gone smoothly, in no small part thanks to the expertise and high quality service of the project vendor, Surdex. We've flown 91% of the state and been able to process and release 36% of the dataset as of December.


<figure style="margin-right: -200px; max-width: none !important;">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/modis_clouds.jpg')}}">
  <figcaption>Modis images captured between January and March 2015</figcaption>
</figure>

But due to significant rainfall and cloudy weather (as El Niño revved up in 2014), we were not able to meet the original stated completion date of September 2015, pushing us to a revised full statewide data completion date in Spring 2016.

-- Red lines indicate completed flightlines (thumb).

Surdex will fly the remaining areas in the next leaf-off season, starting now in December 2015 and going through February 2016.

-- Insert map of border acquisition plan

In other parts of the state, namely, the border regions, primarily logistical issues have held up flight progress. In order to meet the image coverage requirements along the international border, Surdex must fly 15-20 miles into Mexican territory. This requires a thorough permitting process in coordination with Mexican Government authorities.

## A Focus on Quality

<figure>
<div id="imageCompare1" class='twentytwenty-container before-after-qc'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/curved-bridge-redline-before.jpg')}}" alt="Before QCing image of curved bridge, gap">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/curved-bridge-redline-after.jpg')}}" alt="After QC bridge is straightened">
</div>
<figcaption>Smear identified in area of high relief during QC by TNRIS, fixed in final product by Surdex.</figcaption>
</figure>

The new natural color and color infrared orthoimagery are QC’d (Quality Controlled) by TNRIS staff and volunteers to ensure a nearly flawless quality product to accommodate a wide variety of mapping applications for public and private users throughout the state. 

<figure>
<div id="imageCompare1" class='twentytwenty-container before-after-qc'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/railroad-offset-redline-before.jpg')}}" alt="Before QCing image of curved bridge, gap">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/railroad-offset-redline-after.jpg')}}" alt="After QC bridge is straightened">
</div>
<figcaption>Railroad identified as offset during QC by TNRIS, fixed in final product by Surdex.</figcaption>
</figure>

## What’s next for 2016

We're looking forward the upcoming months as we get even closer to completion on this important project. 

Here's what to expect:

*	Completion of the remaining areas to be flown (9% of Texas) concentrated in the South Texas region (Dec 2015 – Feb 2016).
*	TNRIS QC image inspection of Central, East, and South Texas.
*	100% of the state as final orthoimagery delivered to TNRIS and available for download by **Spring 2016**.
* All statewide 0.5 meter orthoimagery available as an Esri Basemap Imagery Service.
*	BUY-UP 6-inch/1-foot areas:
  *	QC and final orthoimagery delivery and download availability of NGA/USGS areas – *Amarillo, Dallas-Ft. Worth, El Paso, Lubbock*
  *	Completion of remaining San Antonio River Authority area to be flown – 1-foot *Refugio* and *Aransas Counties*

---------------

<p class="lead">Continue to visit the [project page](2015-statewide-orthoimagery-project) for weekly detailed updates. You can also [contact the project manager](2015-statewide-orthoimagery-project#contact-pm) for more information.</p>
