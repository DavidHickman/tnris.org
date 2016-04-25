---
template: news.html
title: "Amarillo-DFW-El Paso-Lubbock 2015 Aerial Imagery Now Available"
author: StratMap
mainimage: static/images/updates/2016/tpwd-2015/tpwd_2015_main.jpg
thumbnail: static/images/updates/2016/tpwd-2015/tpwd_2015_th.jpg
thumbalt: Sample of new the Texas Parks and Wildlife Aerial Imagery
abstract:
    High resolution (RGBIR) natural color and color infrared aerial orthoimagery are now available from TNRIS for four urban areas.
tags: stratmap, orthoimagery, nga, el paso, dallas, fort worth, amarillo, lubbock
---

{% import '_macros.html' as m %}

High resolution 12-inch aerial imagery are now available from TNRIS for four areas of interest commissioned by the [National Geospatial-Intelligence Agency](https://www.nga.mil/Pages/Default.aspx): 
- Bastrop State Park/Hidden Pines fire
- [Powderhorn Ranch](http://tpwd.texas.gov/newsmedia/releases/?req=20140821a)
- [Hueco Tanks State Park & Historic Site](http://tpwd.texas.gov/state-parks/hueco-tanks). 

The National Geospatial-Intelligence Agency contributed funds to collect the new imagery as part of the [2015 Statewide Orthoimagery Project](https://tnris.org/2015-statewide-orthoimagery-project/) BUY-UP option to increase pixel resolution beyond 0.5-meter.

[Surdex Corp.](https://www.surdex.net) was selected under the High Priority Imagery and Data Sets (HPIDS) state contract as the orthoimagery data provider. The TNRIS Strategic Mapping Program (StratMap) administered the project providing coordination and project management services. TNRIS also performed QA/QC for the project which included inspection of interim and final orthoimagery products.

The new orthoimagery were acquired in 2015 on March 13 over Amarillo, October 28-29 and November 2 & 8 over Dallas-Fort Worth, October 25 over El Paso, and March 22 over Lubbock during leaf-on conditions.

## Data Access

The orthoimagery files (GeoTIFF, JPEG2000) are in the public domain. The JPEG2000s are available for direct download.

View more details in the **Data Catalog Entry**:
{{m.catalog_data_card('hpids-tpwd-2015-6in-1ft-nc-cir')}}

## Acquisition Areas
View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris.cartodb.com/viz/dd5ba2c6-df05-11e5-90a3-0ea31932ec1d/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

## Products

- GeoTIFF and JPEG2000 image tiles
- Tile index shp
- Seamline shp
- Metadata xmls per image tile

## Product Specification

- 12-inch pixel resolution for Hueco Tanks and Powderhorn Ranch
- 4-band, natural color and color infrared
- UTM WGS84 coordinate system 
- Units in meters

## Imagery Preview

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_burnscar_nc_1to21000_20151119.jpg')}}" alt="Natural Color preview of Hidden Pins Fire Burn Scar">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_burnscar_cir_1to21000_20151119.jpg')}}" alt="Color infra red of Hidden Pins Fire Burn Scar">
</div>
<figcaption>Hidden Pines Fire Burn Scar  SCALE 1:21000</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_powderhornranch_nc_1to18000_20151028.jpg')}}" alt="Natural Color preview of Powderhorn Ranch">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_powderhornranch_cir_1to18000_20151028.jpg')}}" alt="Color Infrared preview of Powderhorn Ranch">
</div>
<figcaption>Powderhorn Ranch near Port O'Connor, TX  SCALE 1:18000</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>Hueco Tanks State Park & Historic Site near El Paso, TX  SCALE 1:10000</figcaption>
</figure>
