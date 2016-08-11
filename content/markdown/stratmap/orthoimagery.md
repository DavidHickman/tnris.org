---
title: Orthoimagery
template: stratmap/main.html
mainimage: static/images/updates/2015/ortho-review/orthoreview_main.jpg
---
{% import "_macros.html" as m %}

<div class="container">
<p class="lead">Orthoimagery is digital aerial photography that has been geometrically corrected (orthorectified) to remove distortion caused by camera optics, aircraft tilt, and differences in ground elevation.</p>
<p>The publicly available statewide orthoimagery datasets from TNRIS have either 0.5-meter or 1-meter pixel resolution. This level of image detail is used to identify current conditions, features, and changes on the ground serving as a base of reference for other map information. </p>

<p>Leveraging funds from multiple government agencies (State, Federal, and Local), the StratMap Program coordinated statewide orthoimagery acquisitions starting in the mid-1990s. Since then, the state has been refreshed with new orthoimagery in 2004 at 1-meter, 2008/09 at 0.5-meter & 1-meter, and 2010 at 1-meter, all in conjunction with the [National Agriculture Imagery Program (NAIP)](http://www.fsa.usda.gov/programs-and-services/aerial-photography/imagery-programs/naip-imagery/) administered by the USDA-Farm Service Agency-Aerial Photography Field Office.</p>


<h3>National Agriculture Imagery Program (NAIP) Statewide Datasets</h3>
<p>NAIP continues to refresh Texas statewide with new orthoimagery every two years at 1-meter pixel resolution (2012, 2014) during the leaf-on growing season (April – October acquisitions). </p>

<p>Pooling State funds again in 2014, StratMap coordinated a new statewide 0.5-meter leaf-off acquisition that occurred during the 2014/15 (91% of state) & 2015/16 (9% of state) winter seasons.</p>

<h3>High-Resolution Imagery </h3>

Since 2009, the StratMap Program has coordinated numerous higher resolution (6-inch/1-foot) orthoimagery regional acquisition projects within Texas. A contracting vehicle called the [StratMap Contract](stratmap/stratmap-contracts) provides an efficient way to procure new orthoimagery from a list of prequalified geospatial data product and services vendors.

</div>

<section id="stratmap-by-the-numbers" class="ortho-numbers">
    <div class="container">
      <h2>Orthoimagery by the Numbers</h2>
        <div class="row">
            <div class="col-sm-4">
              <strong>37</strong><br> past agency partners and counting...
            </div>
            <div class="col-sm-4">
              <strong>13</strong><br> project Statement of Work (SOW) releases since 2009 and counting...
            </div>
            <div class="col-sm-4">
              <strong>$5.1 Million</strong><br> total spent on orthoimagery data products for the State of Texas since 2009 through cost-share initiatives.
            </div>
            <!-- <div class="col-xs-12">
              Timeline? --- StratMap Program direct funding over time
            </div> --> 
          </div>
      </div>
</section>
<div class="container">

<h2>StratMap Orthoimagery Datasets</h2>

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

{{m.catalog_data_tile('stratmap-bexar-2010-6in-nc')}}
{{m.catalog_data_tile('stratmap-brazos-2011-6in-1ft-nc-cir')}}
{{m.catalog_data_tile('stratmap-brazos-2013-6in-1ft-nc-cir')}}
{{m.catalog_data_tile('stratmap-brazos-and-palestine-2015-6in-nc-cir')}}
{{m.catalog_data_tile('stratmap-galveston-2009-6in-cir')}}
{{m.catalog_data_tile('stratmap-galveston-2009-6in-nc-cir')}}
{{m.catalog_data_tile('stratmap-georgetown-2015-6in-nc-cir')}}
{{m.catalog_data_tile('stratmap-houston-2013-1ft-nc-cir')}}
{{m.catalog_data_tile('stratmap-nga-usgs-2015-1ft-nc-cir')}}
{{m.catalog_data_tile('stratmap-sara-2015-6in-nc-cir')}}
{{m.catalog_data_tile('stratmap-smith-2010-1ft-nc-cir')}}
{{m.catalog_data_tile('stratmap-smith-2014-6in-nc-cir')}}
{{m.catalog_data_tile('stratmap-smith-2016-6in-nc-cir')}}
{{m.catalog_data_tile('stratmap-south-texas-2013-6in-9in-12in-nc')}}
{{m.catalog_data_tile('stratmap-tpwd-2015-6in-1ft-nc-cir')}}
{{m.catalog_data_tile('stratmap-university-lands-2015-6in-nc-cir')}}

</div>
