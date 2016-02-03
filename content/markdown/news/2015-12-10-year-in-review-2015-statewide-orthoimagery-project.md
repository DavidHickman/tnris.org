---
template: custom/ortho-review-article.html
title: "Year in Review: 2015 Statewide Orthoimagery Project"
author: StratMap
mainimage: static/images/updates/2015/ortho-review/orthoreview_main.jpg
mainimagemobile: static/images/updates/2015/ortho-review/orthoreview_mobile.jpg
thumbnail: static/images/updates/2015/ortho-review/orthoreview_th.jpg
thumbalt: A small mosaic of aerial imagery from the project
abstract:
    A look at available data, acquisition progress and what to expect in the coming year for this important statewide data initiative.
tags: stratmap, orthoimagery, statewide, TOP, georgetown, sara, university lands, surdex
---
<div class="container">
<div class="row">
<div class="col-md-8">
<p class="lead">The [2015 Statewide Orthoimagery Project](2015-statewide-orthoimagery-project), undertaken in collaboration with other state agency partners, is one of the major data projects underway at TNRIS. It meets the crucial need for new high-quality, leaf-off imagery for the entire state. As part of TNRIS's key mission to acquire data and distribute it to the public, all of the data produced through the project will be in the public domain and available through our [data download](data-download) page.</p>

<p>We wanted to take this opportunity as 2015 comes to a close to fill you in on where the project has been and what's expected in 2016. We've accomplished a lot - we've started to release finalized data - but have also encountered some setbacks. Even with a delay to the original completion date, the project has gone exceptionally well, especially in the hands of the selected data acquisition vendor [Surdex Corp](https://www.surdex.net).</p>

<p>Read on to learn about the current dataset availability, the causes for data acquisition flight delays and the next steps. For the full background and history on the project, visit the [project page](2015-statewide-orthoimagery-project).</p>
</div>
</div>
</div>

<section class="container-fluid full">
<figure class="full-article-figure">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/el_paso_nc.jpg')}}" alt="Natural Color preview of El Paso Residential Area">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/el_paso_cir.jpg')}}" alt="Infra Red preview of El Paso Residential Area">
</div>
<figcaption class="text-center">Residential housing in El Paso, TX acquired on Mar. 15, 2015 at 0.5-meter resolution, SCALE 1:1,890</figcaption>
</figure>

</section>

<div class="container">
<h2>Latest Data Access Status</h2>
</div>

<div class="container">
<div class="row">
<div class="col-md-8">
<p>We have created a primary dataset entry for the **2015 Texas Orthoimagery Program (TOP)** in our [data catalog](data-catalog) for the imagery we've QC'ed (Quality Controlled) and finalized so far, which as of early December, is around **36% of the state**. This imagery primarily consists of **West Texas** and the **Panhandle**. **El Paso** is the most prominent urban center available in this round of data. On about a monthly basis, we are incorporating the latest finalized data into this dataset as it is QC'd and processed.</p>

{{m.catalog_data_card('texas-orthoimagery-program-top-2015-50cm-nc-cir')}}

<p>In the map thumbnails (click to expand) to the right, you can view the most recent DOQQ and CCM (Compressed County Mosaic) availability. These maps are updated with each round of data additions on the [project page](2015-statewide-orthoimagery-project).</p>

<h3>TOP 2015 Online Mapping Service</h3>
<p>In addition, we have launched a Web Mapping Service (WMS) for the 2015 TOP. You'll be able to access the imagery without downloading and have immediate access to the most current version as the dataset is updated.</p>
<p>To use WMS services in your CAD or GIS software package, please consult the software help or support information.</p>

<div class="input-group copy-url-container">
      <span class="input-group-btn">
    <button class="btn btn-tnris copy-url-btn" type="button">
      <i class="fa fa-clipboard"></i> Copy URL
    </button>
  </span>
  <input class="wms-url copy-url-input form-control" type="text" readonly value="http://r.tnris.org/arcgis/services/TOP/TOP_2015_50CM_NC/ImageServer/WMSServer">
</div>
<br>
</div>
<div class="col-md-4">
  {% include "./partials/2015-ortho/statewide-preview.html" %}
</div>
</div>
</div>

<section class="container-fluid full">
<figure class="full-article-figure">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/lake_meredith_nc.jpg')}}" alt="Natural Color preview of Lake Meredith">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/lake_meredith_ir.jpg')}}" alt="Infra Red preview of Lake Meredith">
</div>
<figcaption class="text-center">Lake Meredith in Hutchinson County acquired on Oct. 29, 2014 at 0.5-meter resolution, SCALE 1:40,000</figcaption>
</figure>

</section>

<div class="container">
<div class="row">
<div class="col-md-8">
<h3>6-Inch and 1-Foot Buy-Up Areas</h3>

<p>Our BUY-UP 6-inch and 1-foot areas were parts of the state sponsored by stakeholders seeking higher resolution imagery for their areas. </p>

<p>6,930 total square miles of 6-inch natural color and color infrared orthoimagery were independently QC’d and are now available for download for these areas:</p>

{{m.catalog_data_card('hpids-georgetown-2015-6in-nc-cir')}}

{{m.catalog_data_card('hpids-sara-2015-6in-nc-cir')}}

{{m.catalog_data_card('hpids-university-lands-2015-6in-nc-cir')}}

<br>
</div>
</div>
</div>

<section class="container-fluid full">
<figure class="full-article-figure">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/lampasas_river_nc.jpg')}}" alt="Natural Color preview of Lampasas River near  Georgetown">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/lampasas_river_ir.jpg')}}" alt="Infra Red preview of Lampasas River near Georgetown">
</div>
<figcaption class="text-center">Lampasas River in Bell County from the [HPIDS Georgetown 2015 6in NC\CIR](data-catalog/entry/hpids-georgetown-2015-6in-nc-cir) dataset, SCALE 1:3000</figcaption>
</figure> 
</section>


<div class="container">
<div class="row">
<div class="col-md-8">
<p>Stay posted for upcoming Buy-Up data releases, including NGA/USGS areas in **Amarillo**, **Dallas-Ft. Worth**, **El Paso**, **Lubbock**, and the completion of remaining San Antonio River Authority areas in **Refugio** and **Aransas Counties**.</p>

<h2>Acquisition Progress and Challenges - Clouds and Borders</h2>
</div>
</div>
</div>

<div class="container-fluid full">
<figure>
  <img class="img-responsive hidden-lg" src="{{m.link('static/images/updates/2015/ortho-review/modis_clouds.jpg')}}">
  <img class="img-responsive hidden-xs hidden-sm hidden-md" src="{{m.link('static/images/updates/2015/ortho-review/modis_clouds_long.jpg')}}">
  <figcaption class="text-center"><em>Modis images captured between January and March 2015 showing heavy cloud cover.</em></figcaption>
</figure>
</div>

<div class="container">
<div class="row">
<div class="col-md-7">

<p>The project has gone smoothly, in no small part thanks to the expertise and high quality service of the project vendor, Surdex. We've flown 91% of the state and been able to process and release 36% of the dataset as of December.</p>

<p>But due to significant rainfall and cloudy weather (as El Niño revved up in 2014), we were not able to meet the original stated completion date of September 2015, pushing us to a revised full statewide data completion date in Spring 2016.</p>
 
<p>Surdex will fly the remaining areas in the next leaf-off season, starting now in December 2015 and going through February 2016.</p>

<p>In other parts of the state, specfically, the border regions (<em>see map to right</em>), logistical issues have held up flight progress. In order to meet the image coverage requirements along the international border, Surdex must fly 15-20 miles into Mexican territory. This requires a thorough permitting process in coordination with Mexican Government authorities.</p>
</div>
<div class="col-md-5">
  {% include "./partials/2015-ortho/progress-images.html" %}
</div>
</div>

<div class="row">
<div class="col-md-8">
<h2>Ensuring Quality Control</h2>

<figure>
<div id="imageCompare1" class='twentytwenty-container twentytwenty-2 before-after-qc'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/smear-redline-before.jpg')}}" alt="Smear in high relief area before QC">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/smear-redline-after.jpg')}}" alt="Smear fixed after QC">
</div>
<figcaption><em>Smear identified in an area of high relief during QC by TNRIS, fixed in final product by Surdex.</em></figcaption>
</figure>

<p style="margin: 30px 0">The new natural color and color infrared orthoimagery are QC’d by TNRIS staff and volunteers to ensure a nearly flawless quality product to accommodate a wide variety of mapping applications for public and private users throughout the state.</p>

<figure >
<div id="imageCompare1" class='twentytwenty-container twentytwenty-2 before-after-qc'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/railroad-offset-redline-before.jpg')}}" alt="Before QCing image of curved bridge, gap">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/ortho-review/railroad-offset-redline-after.jpg')}}" alt="After QC bridge is straightened">
</div>
<figcaption><em> Left: Railroad identified as offset during QC by TNRIS | Right: Fixed in final product by Surdex. Use slider to compare images</em></figcaption>
</figure> 

<h2>What’s next for 2016</h2>

<p>We're looking forward to the upcoming months as we get even closer to completion of this important project. </p>

<p><strong>Here's what to expect:</strong></p>

<ul>
  <li>Completion of the remaining areas to be flown (9% of Texas) concentrated in the South Texas region (Dec 2015 – Feb 2016).</li>
  <li>TNRIS QC image inspection of Central, East, and South Texas.</li>
  <li>100% of the state as final orthoimagery delivered to TNRIS and available for download by **Spring 2016**.</li>
  <li>All statewide 0.5 meter orthoimagery available as an Esri Basemap Imagery Service.</li>
  <li>BUY-UP 6-inch/1-foot areas:
    <ul>
      <li>QC and final orthoimagery delivery and download availability of NGA/USGS areas – *Amarillo, Dallas-Ft. Worth, El Paso, Lubbock*.</li>
      <li>Completion of remaining San Antonio River Authority area to be flown – 1-foot *Refugio* and *Aransas Counties*</li>
    </ul>
  </li>
</ul>

<hr>

<p class="lead">Continue to visit the [project page](2015-statewide-orthoimagery-project) for weekly detailed updates. You can also [contact the project manager](2015-statewide-orthoimagery-project#contact-pm) for more information.</p>

</div>
</div>
</div>
