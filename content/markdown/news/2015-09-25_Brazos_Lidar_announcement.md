
---
template: news.html
title: "Lidar Data Release For Brazos County, Texas"
author: Joey Thomas, StratMap
thumbnail: 
mainimage: 
imagealt: A sample of collected Lidar data
abstract: 
    TNRIS is releasing newly acquired high resolution Lidar data for 286 square miles of Central Texas in Brazaos County. 
tags: lidar, data
---
 
The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 286 square miles of Brazos County, Texas. Aerial collection took place on February 9-10 , 2015 during the leaf-off season. Dewberry performed the data acquisition/processing while Survey and Mapping, LLC provided third-party quality assurance and quality control (QA/QC).  

<figure>
<img class=>
<figcaption></figcaption>
</figure>

## Data Access
<div class="media">
  <div class="media-left">
    {% include "./partials/order-button.html" %}
  </div>
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for cost of reproduction through TNRIS.</p>
  </div>
</div>

### Catalog Entry
{{m.catalog_data_card()}}

## Interactive AOI (Area of Interest) Map
<iframe width="100%" height="520" frameborder="0" src="></iframe>

The map above shows the area of acquisition. The data is available in DO4Q tiles.

## Products

-	Classified all-return Lidar DO4Q tiles (1/64th of USGS Quad) in LAS 1.4 format
-	Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
-	Lidar intensity images in GeoTIFF format (1-meter)
-	Hydro-flattening breaklines in SHP
-	File-level FGDC metadata in XML

<figure>
<img class="img-responsive" src="{{m.link('')}}" alt="">
<figcaption></figcaption>
</figure>

## Product Specification

 - Vertical accuracy (RMSEz) of 4.4 cm  which exceeds the project specification of 10 cm.
 - Average first-return point density is 4 points per square meter (ppsm).

 - Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
   - Class 1: Unclassified	
   - Class 2: Ground
   - Class 3: Low Vegetation
   - Class 4: Medium Vegetation		
   - Class 5: High Vegetation
   - Class 6: Buildings	
   - Class 7. Low Point (noise)
   - Class 9. Water
   - Class 13. Bridges 
  - Class 14. Culverts
- Horizontal projection is UTM NAD83 (2011) Zones 14N

- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data  tiles conforms to 1/64th USGS 7.5-minute quadrangle 
  Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)
