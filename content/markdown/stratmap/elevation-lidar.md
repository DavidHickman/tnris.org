---
title: Elevation – Lidar
template: stratmap/main.html
mainimage: static/images/stratmap/lidar_banner.jpg
---
{% import "_macros.html" as m %}


<div class="container"><img class="img-responsive pull-right" style="max-width: 400px;" src="http://lidar-america.com/wp-content/uploads/2014/03/LiDAR-Escaneo-Ejemplo.jpg" alt="illustration of lidar">
<p class="lead"><strong>Lidar - Light Detection and Ranging,</strong> is a remote sensing technique that utilizes light in the form of a rapidly pulsed laser to measure return distances from the Earth captured by a sensor at the source of the pulse. These combined pulse return measurements with additional spatial and temproral data recorded by the acquisition system(airborne or terrestial) produce a three-dimensional(3-D), detailed representation of the shape of the Earth illuminating its surface characteristics.</p>
</div>

<figure class="full-article-figure">
<div id="imageCompare1" class='twentytwenty-container lidar-compare'>
<img class="img-responsive" src="{{m.link('static/images/stratmap/flyover_pointcloud_lidar_sample.jpg')}}" alt="Lidar Point Cloud of College Station Texas">
<img class="img-responsive" src="{{m.link('static/images/stratmap/flyover_render_buildings_lidar_sample.jpg')}}" alt="lidar 3-d render of buildings in College Station">
</div>
<figcaption class="text-center">Left: Sample of 3-D point cloud of Area in College Station, TX | Right: 3-D rendering of Lidar with Aerial Imagery Overlay</figcaption>
</figure>

<div class="container">
<p class="lead">Lidar goes beyond traditional bare earth digital elevation models (DEMs) by producing point cloud information that can be classified into existing features such as vegetation and man-made structures.  </p>

<h2>TNRIS Lidar Coverage</h2>

<iframe class="pull-right" width="60%" height="600" frameborder="0" src="https://tnris.cartodb.com/viz/0447c616-bee6-11e5-bf8f-0ea31932ec1d/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe><p class="lead"> TNRIS acquires Lidar data through partnerships with other federal and state agencies through the <a href="{{m.link('stratmap/stratmap-contracts')}}"><strong>StratMap Contract</strong></a>, which operates through the <a href="http://dir.texas.gov/">Texas Department of Information Resources (TxDIR)</a>.

<p class="lead">Historically, TNRIS acquired data through the now <strong>defunct</strong> <a href="{{m.link('high-priority-imagery-data-sets')}}">High Priority Imagery and Data Sets (HPIDS)</a> contract.</p>

<p class="lead">
Lidar coverage varies across the state. Lidar coverage and project details (date, nps, vendor, etc.) can be found on the [LiDAR Status Map](https://tnris-twdb.cartodb.com/u/tnris/viz/41bcf87c-0248-11e6-b572-0e31c9be1b51/public_map). All details about each dataset in our collection can be found in the supplemental reports for each project.</p>

<hr class="clearfix">

<h2>StratMap Lidar Datasets</h2>

<p class="lead">All Lidar datasets are available at reproduction cost through our Research and Distribution center. They can be obtained by filling out an <a href="https://tnris.org/order-data/">order form</a>.</p>

{% for category in catalog|sortBy(['category', 'name'])|groupBy('category') %}
  
  {% if loop.key === 'Lidar' %}
      {% for item in category %}
        {{m.catalog_data_tile_entry(item)}}
      {% endfor %}
    {% endif %}
{% endfor %}

</div>
