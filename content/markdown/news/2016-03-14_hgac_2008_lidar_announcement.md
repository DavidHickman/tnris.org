---
template: news.html
title: "Lidar Data Release For Harris County, Texas and Surronding Areas "
author: Joey Thomas
thumbnail: 
mainimage: 
imagealt: A sample of collected Lidar data
abstract: 
    TNRIS is releasing newly acquired high resolution Lidar data for 3,700 square miles of Central East Texas data 
tags: lidar, data
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 3,700 square miles of Harris County, Texas and surronding areas.   Aerial collection took place from February 1, 2008 through March 4, 2008 during the leaf-off season.  Merrick & company performed data acquisition/processing on behalf of the Houston-Galveston Area Councit(HGAC).

This project was administered by the Houston-Galveston Area Council as part of ther Lidar Cost-Share Acquisition of 2008. </p>

<div style="float: left; width: 350px; margin-right: 20px">
<a href="{{m.link('static/images/updates/2013/lidar-data-release-north-central/AOI_North_3090_full.jpg')}}" alt="map of lidar coverage"><img src="{{m.link('static/images/updates/2013/lidar-data-release-north-central/AOI_North_3090_small.jpg')}}" alt="map of lidar coverage"></a>
<caption style="font-size: 10px;">Click for Full Preview</caption>
</div>
<div style="float: left; width: 350px;">
<a href="{{m.link('static/images/updates/2013/lidar-data-release-north-central/AOI_Central.jpg')}}" alt="Aoi Central Image"><img src="{{m.link('static/images/updates/2013/lidar-data-release-north-central/AOI_Central_small.jpg')}}" alt="AOI Central image"></a>
<caption style="font-size: 10px;">Click for Full Preview</caption>
</div>

## Data Access
<div class="media">
  <div class="media-left">
    {% include "./partials/order-button.html" %}
  </div>
  <div class="media-body">
    <p>Lidar data and the associated geospatial products listed above are available for cost of reproduction through TNRIS.</p>
  </div>
</div>

## Products

- Classified all-return Lidar DOQQ tiles (1/4th of USGS Quad) in LAS 1.1 format
- Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
- Hydro-flattening and transportation breaklines in SHP
- File-level FGDC metadata in XML

## Product Specification

- Vertical accuracy: RMSEz tested ~ 0.22 feet.
- Point density is 1 points per square meter (ppsm) 
- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
	- Class 1: Unclassified
	- Class 2: Ground			
	- Class 9: Water
- Horizontal projection is State Plane(Texas South Central) NAD 1983 HARN US Feet
- Vertical projection is NAVD88 
- Units are in feet denoting orthometric heights
- Structure for data listed above shall conform to 1/4th USGS 7.5-minute quadrangle
- Quarter quadrangle (DOQQ)<br>
![A diagram of the DOQQ grid system](static/images/data/quad.png)

## Sample Images

![A sample of collected LiDAR data](static/images/updates/2013/lidar-data-release-north-central/image001.jpg)

![A sample of collected LiDAR data](static/images/updates/2013/lidar-data-release-north-central/image003.png)

![A sample of collected LiDAR data](static/images/updates/2013/lidar-data-release-north-central/image004.png)
