---
title: 2015 Brazos County LiDAR Announcement
author: Joey Thomas, StratMap
template: news.html
thumbnail:
thumbalt: 
mainimage: 
mainimagealt: 
abstract:
    A collaborative initiative to capture high-quality Lidar data for Brazos County, Texas
---

The Texas Natural Resources Information System (TNRIS) is pleased to announce the release of newly acquired high resolution Lidar data for 286 square miles of Brazos County, Texas. Aerial collection took place  February 9-10, 2015 during the leaf-off season. Dewberry performed data acquisition/processing while Surveying and Mapping, LLC provided third-party quality assurance and quality control (QA/QC).

This project was administered by the TNRIS Strategic Mapping Program (StratMap) and the data were procured through the Council on Competitive Government’s (CCG) High Priority Imagery and Datasets (HPIDS) contract. Funding was provided by the City of College Station, City of Bryan and Texas A&M University.

<img class="img-responsive" src=>

## Data Access
<div class="media">
  <div class="media-left">
    {% include "./partials/order-button.html" %}
  </div>
  <div class="media-body">
    <p>Lidar data and the associated geospatial products are available for cost of reproduction through TNRIS.</p>
  </div>
</div>

Please check our [Lidar status map](http://tnris.maps.arcgis.com/apps/Viewer/index.html?appid=3a5712b6cc36472f8036446e7b49c52d) for exact coverage. 

### Catalog Entry
{{m.catalog_data_card()}}


##PRODUCTS
- Classified all-return lidar DO4Q tiles (1/64th of USGS Quad) in LAS 1.2 format
- Bare-earth digital elevation model (DEM) in USGS .dem format (1-meter)
- Lidar intensity images in GeoTIFF format (1-meter)
- Hydro-flattening breaklines in SHP
- File-level FGDC metadata in XML


## PRODUCT SPECIFICATION
- Vertical accuracy (RMSEz) tested 4.4 cm in non-vegetation. 
- Average first-return point density is slightly over 4 points per square meter (ppsm)
- Point data are classified according to the following American Society for Photogrammetry and Remote Sensing (ASPRS) class schema:
  * Class 1: Unclassified
  * Class 2: Ground
  * Class 3: Low Vegetation
  * Class 4: Medium Vegetation
  * Class 5: High Vegetation
  * Class 6: Buildings
  * Class 7: Low Point (noise)
  * Class 9: Water
  * Class 13: Bridges 
  * Class 14: Culverts
  
<img class=>

**Projection Specifications**
- Horizontal projection is UTM NAD83 (NSRS 2007) Zones 14
- Vertical projection is NAVD88 Geoid 12A
- Units are in meters denoting orthometric heights
- Structure for data listed above shall conform to 1/64th USGS 7.5-minute quadrangle
- Quarter-quarter-quarter quadrangle (DOQQQQ, or DO4Q)




