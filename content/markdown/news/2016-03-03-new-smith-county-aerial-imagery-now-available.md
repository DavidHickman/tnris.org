---
template: news.html
title: "New Smith County Aerial Imagery Now Available"
author: StratMap
thumbnail: static/images/updates/2015/brazos-ortho/brazos_release_th.jpg
thumbalt: Sample of new the Smith County Aerial Imagery
abstract:
    High resolution (RGBIR) natural color and color infrared aerial orthoimagery are now available from TNRIS for Smith County.
tags: stratmap, orthoimagery, smith county
---

{% import '_macros.html' as m %}

<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/baseball-cocs-brazos-6in-3096_22_4_c_2_20150127-nc-1to900.jpg')}}" alt="Natural Color preview of baseball fields in Brazos County">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/baseball-cocs-brazos-6in-3096_22_4_c_2_20150127-cir-1to900.jpg')}}" alt="Infra Red preview of baseball fields in Brazos County">
</div>
<figcaption>Baseball Fields in College Station, TX, SCALE 1:900</figcaption>
</figure>

High resolution 6-inch aerial imagery are now available from TNRIS for Smith County, including Lake Palestine. Four local entities contributed funds to collect the new imagery.

- City of Tyler
- Smith County
- Smith County 9-1-1 District
- Smith County Appraisal District

Surdex Corp. was selected under the High Priority Imagery and Data Sets (HPIDS) state contract as the orthoimagery data provider. The TNRIS Strategic Mapping Program (StratMap) administered the project providing coordination and project management services. TNRIS also performed QA/QC for the project which included inspection of interim and final orthoimagery products.

The new orthoimagery are used for city engineering and planning, 9-1-1 database updates and general mapping, appraisal district valuations, infrastructure mapping, and other applications. 

The new orthoimagery were acquired in early January 2016 during leaf-off conditions. Leaf-off imagery allows the user to identify more on-the-ground features underneath deciduous tree cover than imagery acquired during the full leaf-out season. The difference between deciduous and evergreen vegetation species is easier to identify in imagery acquired during the leaf-off period.

## Data Access

The orthoimagery files (GeoTIFF, JPEG2000) are in the public domain. The JPEG2000s are available for direct download.

View more details in the **Data Catalog Entry**:
{{m.catalog_data_card('hpids-brazos-and-palestine-2015-6in-nc-cir')}}

## Acquisition Areas
View coverage areas in the interactive map below:

<iframe width="100%" height="520" frameborder="0" src="https://tnris.cartodb.com/viz/f420e7ee-6612-11e5-bfdc-0e76aec36da9/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>

## Products

- GeoTIFF and JPEG2000 DO4Q (~1 sq. mi.) image tiles
- JPEG2000 compressed county mosaic
- Tile index shp
- Seamline shp
- Metadata xmls per image tile

## Product Specification

![USGS Quarter Quad Breakdown](static/images/updates/smith-imagery/usgs_quad.jpg)

- 6-inch pixel resolution
- 4-band, natural color and color infrared
- StatePlane TX North Central 4202 NAD83 coordinate system
- Units in feet
- DO4Q (approx. 1 sq. mi.) image tiles, 1/64th USGS 7.5-minute quadrangle

## Imagery Preview

<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/kyle-field-brazos-6in-3096_30_1_b_1_20150128-nc-1to1000.jpg')}}" alt="Natural Color preview of Kyle Field under construction at Texas A&M">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/kyle-field-brazos-6in-3096_30_1_b_1_20150128-cir-1to1000.jpg')}}" alt="Infra Red preview of Kyle Field under construction at Texas A&M">
</div>
<figcaption>Kyle Field in College Station, TX, SCALE 1:1000</figcaption>
</figure>


<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/nasa-balloon-palestine-6in-3195_11_3_a_4_20150126-nc-1to2500.jpg')}}" alt="Natural Color preview of NASA Columbia Scientific Balloon Facility">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/nasa-balloon-palestine-6in-3195_11_3_a_4_20150126-cir-1to2500.jpg')}}" alt="Infra Red preview of NASA Columbia Scientific Balloon Facility">
</div>
<figcaption> NASA Columbia Scientific Balloon Facility, SCALE 1:2500</figcaption>
</figure>


<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/residential-bryan-brazos-6in-3096_22_3_a_2_20150127-nc-1to800.jpg')}}" alt="Natural Color preview of Downtown Bryan, TX">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/residential-bryan-brazos-6in-3096_22_3_a_2_20150127-cir-1to800.jpg')}}" alt="Infra Red preview of Downtown Bryan, TX">
</div>
<figcaption>Residential Neighborhood in Bryan, TX, SCALE 1:800</figcaption>
</figure>


<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/downtown-bryan-brazos-6in-3096_22_3_a_1_20150127-nc-1to700.jpg')}}" alt="Natural Color preview of Residential Neighborhood in Bryan, TX">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/downtown-bryan-brazos-6in-3096_22_3_a_1_20150127-cir-1to700.jpg')}}" alt="Infra Red preview of Residential Neighborhood Bryan, TX">
</div>
<figcaption>Downtown Bryan, TX, SCALE 1:700</figcaption>
</figure>

<figure>
<div id="imageCompare1" class='twentytwenty-container natural-color-infrared'>
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/brazos-river-brazos-6in-3096_29_4_b_4_20150127-nc-1to8000.jpg')}}" alt="Natural Color preview of Brazos River">
  <img class="img-responsive" src="{{m.link('static/images/updates/2015/brazos-ortho/brazos-river-brazos-6in-3096_29_4_b_4_20150127-cir-1to8000.jpg')}}" alt="Infra Red preview of Brazos River">
</div>
<figcaption>Brazos River, SCALE 1:8000</figcaption>
</figure>


