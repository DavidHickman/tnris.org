---
template: news.html
title: "H-GAC 2008 Lidar Data Released for Harris County and Surrounding Areas"
author: Joey Thomas
thumbnail: static/images/data-catalog/entry/houston_galveston_area_council_h_gac_2008_lidar_th.jpg
mainimage: static/images/updates/2016/hgac_2008_main.jpg
imagealt: A sample of collected Lidar data
abstract: 
    TNRIS is releasing recently acquired high resolution Lidar data for 3,700 square miles of Central East Texas data. 
tags: lidar, data
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of recently acquired high resolution Lidar data for 3,700 square miles of Harris County, Texas and surrounding areas. Aerial collection took place from February 1, 2008 through March 4, 2008 during the leaf-off season.  Merrick & company performed data acquisition/processing on behalf of the Houston-Galveston Area Council (HGAC).

This project was administered by the Houston-Galveston Area Council as part of ther Lidar Cost-Share Acquisition of 2008.

## Data Access
<div class="media">
  <div class="media-left">
    {% include "./partials/order-button.html" %}
  </div>
  <div class="media-body">
    <p>Lidar data and the associated geospatial products listed above are available for cost of reproduction through TNRIS.</p>
  </div>
</div>

View more details in the **Data Catalog Entry**:
{{m.catalog_data_card('houston-galveston-area-council-h-gac-2008-lidar')}}

## Products

- Classified all-return Lidar DOQQ tiles (1/4th of USGS Quad) in LAS 1.1 format
- Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
- Hydro-flattening  breaklines in SHP
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

<img src="{{m.link('static/images/data-catalog/entry/houston_galveston_area_council_h_gac_2008_lidar_detail.jpg')}}" alt="A sample of collected LiDAR data" class="img-responsive">
