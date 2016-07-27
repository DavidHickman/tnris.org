---
template: news.html
title: "San Antonio River Authority 2015/2016 Aerial Imagery Now Available"
author: StratMap
mainimage: static/images/updates/2016/tpwd-2015/tpwd_2015_main.jpg
thumbnail: static/images/updates/2016/tpwd-2015/tpwd_2015_th.jpg
thumbalt: Sample of new the San Antonio River Authority Aerial Imagery
abstract:
    High resolution (RGBIR) natural color and color infrared aerial orthoimagery are now available from TNRIS for two San Antonio River Authority areas.
tags: stratmap, orthoimagery, sara, wilson, karnes, goliad, refugio, aransas, calhoun
---

{% import '_macros.html' as m %}

High resolution 6-inch/12-inch aerial imagery are now available from TNRIS for two areas of interest commissioned by the [San Antonio River Authority](https://www.sara-tx.org): 
- Wilson, Karnes and Goliad Counties at 6-inch resolution
- Refugio and Aransas Counties at 12-inch resolution

The San Antonio River Authority contributed funds to collect the new imagery as part of the [2015 Statewide Orthoimagery Project](https://tnris.org/2015-statewide-orthoimagery-project/) BUY-UP option to increase pixel resolution beyond 0.5-meter.

[Surdex Corp.](https://www.surdex.net) was selected under the legacy High Priority Imagery and Data Sets (HPIDS) state contract as the orthoimagery data provider. The TNRIS Strategic Mapping Program [(StratMap)](https://tnris.org/stratmap/) administered the project providing coordination and project management services. TNRIS also performed QA/QC for the project which included inspection of interim and final orthoimagery products.

The new orthoimagery are used by the San Antonio River Authority for engineering, general mapping, and other applications. 

The new orthoimagery were acquired March 23-28, 2015 over Wilson, Karnes and Goliad Counties, and January 28-29, 2016 over Refugio and Aransas Counties during leaf-off conditions.

## Data Access

The orthoimagery files (GeoTIFF, JPEG2000) are in the public domain. The JPEG2000s are available for direct download.

View more details in the **Data Catalog Entry**:
{{m.catalog_data_card('stratmap-sara-2015-6in-nc-cir')}}

## Acquisition Areas
View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="http://tnris.cartodb.com/viz/74be531c-897e-11e5-9e0b-0e5db1731f59/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>


## Products

- GeoTIFF and JPEG2000 DO4Q (~1 sq. mi.) image tiles
- JPEG2000 compressed county mosaic
- Tile index shp
- Seamline shp
- Metadata xmls per image tile

## Product Specification

![USGS Quarter Quad Breakdown](static/images/updates/smith-imagery/usgs_quad.jpg)

- 6-inch pixel resolution for Wilson, Karnes and Goliad Counties
- 12-inch pixel resolution for Refugio and Aransas Counties
- 4-band, natural color and color infrared
- StatePlane TX S Central 4204 NAD83 coordinate system
- Units in feet
- DO4Q (approx. 1 sq. mi.) image tiles, 1/64th USGS 7.5-minute quadrangle

## Imagery Preview

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_burnscar_nc_1to21000_20151119.jpg')}}" alt="Natural Color preview of Hidden Pins Fire Burn Scar">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_burnscar_cir_1to21000_20151119.jpg')}}" alt="Color infra red of Hidden Pins Fire Burn Scar">
</div>
<figcaption>Oil/Gas Extraction 6in SCALE 1:576</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_powderhornranch_nc_1to18000_20151028.jpg')}}" alt="Natural Color preview of Powderhorn Ranch">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_powderhornranch_cir_1to18000_20151028.jpg')}}" alt="Color Infrared preview of Powderhorn Ranch">
</div>
<figcaption>Oil/Gas Extraction Overview 6in SCALE 1:70000</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>San Antonio River 6in SCALE 1:1300</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>Karnes City Football Field 6in SCALE 1:850</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>Docks along coast in Calhoun County 12in SCALE 1:3400</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>Coastal marsh in Refugio County 12in SCALE 1:9000</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>Oil & Gas Exploration Clearing 12in SCALE 1:10000</figcaption>
</figure>

<figure class="data-preview">
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_nc_1to10000_20150425.jpg')}}" alt="Natural Color preview of Hueco Tanks">
  <img class="img-responsive" src="{{m.link('static/images/updates/2016/tpwd-2015/tpwd15_huecotankssp_cir_1to10000_20150425.jpg')}}" alt="Color Infrared preview of Hueco Tanks">
</div>
<figcaption>Refugio, TX 12in SCALE 1:1400</figcaption>
</figure>
