---
title: Orthoimagery
template: stratmap/main.html
mainimage: static/images/stratmap/ortho_banner.jpg
abstract: Orthoimagery is digital aerial photography that has been geometrically corrected (orthorectified) to remove distortion caused by camera optics, aircraft tilt, and differences in ground elevation. 
---
{% import "_macros.html" as m %}

<div class="container">
<p>The publicly available statewide orthoimagery datasets from TNRIS have either 0.5-meter or 1-meter pixel resolution. This level of image detail is used to identify current conditions, features, and changes on the ground serving as a base of reference for other map information. </p>

<p>Leveraging funds from multiple government agencies (State, Federal, and Local), the StratMap Program coordinated statewide orthoimagery acquisitions starting in the mid-1990s. Since then, the state has been refreshed with new orthoimagery in 2004 at 1-meter, 2008/09 at 0.5-meter & 1-meter, and 2010 at 1-meter, all in conjunction with the [National Agriculture Imagery Program (NAIP)](http://www.fsa.usda.gov/programs-and-services/aerial-photography/imagery-programs/naip-imagery/) administered by the USDA-Farm Service Agency-Aerial Photography Field Office.</p>


<h3>National Agriculture Imagery Program (NAIP) Statewide Datasets</h3>
<p>NAIP continues to refresh Texas statewide with new orthoimagery every two years at 1-meter pixel resolution (2012, 2014) during the leaf-on growing season (April – October acquisitions). </p>

{{m.catalog_data_card('national-agriculture-imagery-program-naip-2012-1m-nc-cir')}}

{{m.catalog_data_card('national-agriculture-imagery-program-naip-2010-1m-nc-cir')}}

<p>Pooling State funds again in 2014, StratMap coordinated a new statewide 0.5-meter leaf-off acquisition that occurred during the 2014/15 (91% of state) & 2015/16 (9% of state) winter seasons.</p>

<h3>High-Resolution Imagery </h3>

Since 2009, the StratMap Program has coordinated numerous higher resolution (6-inch/1-foot) orthoimagery regional acquisition projects within Texas. A contracting vehicle called the [StratMap Contract](stratmap/stratmap-contract) provides an efficient way to procure new orthoimagery from a list of prequalified geospatial data product and services vendors.

{{m.catalog_data_card('hpids-smith-2014-6in-nc-cir')}}

<h2>StratMap Lidar Datasets</h2>

<p class="lead">All Lidar datasets are available at reproduction cost through our Research and Distribution center. They can be obtained by filling out an <a href="https://tnris.org/order-data/">order form</a>.</p>

<h3>Statewide Datasets</h3>

{% for category in catalog|sortBy(['category', 'name'])|groupBy('category') %}
  
  {% if loop.key === 'Orthoimagery - Statewide' %}
      {% for item in category %}
        {{m.catalog_data_tile_entry(item)}}
      {% endfor %}
    {% endif %}
{% endfor %}

<hr class="clearfix">

<h3>Regional Datasets</h3>

{{m.catalog_data_tile('hpids-bexar-2010-6in-nc')}}
{{m.catalog_data_tile('hpids-brazos-2011-6in-1ft-nc-cir')}}
{{m.catalog_data_tile('hpids-brazos-2013-6in-1ft-nc-cir')}}
{{m.catalog_data_tile('hpids-brazos-and-palestine-2015-6in-nc-cir')}}
{{m.catalog_data_tile('hpids-galveston-2009-6in-cir')}}
{{m.catalog_data_tile('hpids-galveston-2009-6in-nc-cir')}}
{{m.catalog_data_tile('hpids-georgetown-2015-6in-nc-cir')}}
{{m.catalog_data_tile('hpids-houston-2013-1ft-nc-cir')}}
{{m.catalog_data_tile('hpids-nga-usgs-2015-1ft-nc-cir')}}
{{m.catalog_data_tile('hpids-sara-2015-6in-nc-cir')}}
{{m.catalog_data_tile('hpids-smith-2010-1ft-nc-cir')}}
{{m.catalog_data_tile('hpids-smith-2014-6in-nc-cir')}}
{{m.catalog_data_tile('hpids-smith-2016-6in-nc-cir')}}
{{m.catalog_data_tile('hpids-south-texas-2013-6in-9in-12in-nc')}}
{{m.catalog_data_tile('hpids-tpwd-2015-6in-1ft-nc-cir')}}
{{m.catalog_data_tile('hpids-university-lands-2015-6in-nc-cir')}}

</div>
