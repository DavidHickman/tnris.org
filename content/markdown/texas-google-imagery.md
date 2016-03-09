---
template: google-imagery.html
title: Texas Google Imagery Service Pilot Project
mainimage: static/images/google/google-imagery-full-2.jpg
abstract: A Geographic Resource for Texas Government Agencies, Easy to Access, Utilize and Incorporate into the Work you do for the Public.
---
### GENERAL FAQ

## How can Google Imagery help my organization?
The Texas Google Imagery Service serves 6-inch, natural color imagery for the State of Texas.
 
It provides state organizations with a current and consistent data source while offering the highest resolution imagery available for any statewide program through an OGC compliant Web Mapping Service (WMS).
 
Google hosts the Google imagery service through the Google Maps Engine.  It provides significant cost savings by streaming imagery directly to your GIS or application.  There is no need to pay large storage costs for serving terabytes of data.

## How is the Google Imagery Service different from the imagery seen in Google Earth and Google Maps?
The Google Imagery Service has a higher level of positional accuracy (~0.5m) because it has been reprocessed using existing ground control points where available (mostly in high density urban areas). Imagery can be downloaded for on-premise use and archiving (coming soon). The Google Imagery Service can be used in all state and local government web applications without an API key, including those applications that are not public facing or require a login. The Google Imagery Service can be used to derive data and the imagery can be incorporated into base map tiles, etc without restriction.

## How will this project initiative be impacted in light of Google’s recent announcement that Google Maps Engine (GME) will be turned off early next year?
A GME-based WMS service is how the most current imagery service is being delivered to Texas for acceptance testing. That service is expected to be replaced with a WMS and WMTS (tile service) hosted on the Google Cloud Platform (GCP) in the coming months. The GIS Solutions Group will select a software application to serve the imagery from GCP from among the existing commercial and open-source choices such as ArcGIS Server, MapProxy, or Geoserver.

At this point we see the GCP option as being superior to the GME platform as it gives us more control, flexibility, and potential cost-savings. Initial access to the service will be via a temporary WMS URL. In a few months, the temporary URL would be need to be replaced with links that use the new GCP-based service.

## Who can use the Google Imagery Services?
The Texas Google Imagery Service is a restricted license and is only for use by public organizations in the State of Texas (ie. state, regional and local governments).  Contractors for any public organization are permitted to use the imagery as long as the project or program being performed directly supports the public organization. 

Rights to use the imagery terminate upon completion of work by the outside entities. The sponsoring agency will need to request an imagery link on behalf of any contractor or outside 3rd party.

## How will maintenance and imagery update costs be covered in the future?
During the pilot year, which extends through March 2016, the GIS Solutions Group will review options for a fair and reasonable cost-recovery model using usage metrics and other factors. The more that play the less we all pay.
 
## I don’t use the Google Maps API, how can I incorporate the services into my tools and applications?
Google Maps API provides access to the rich mapping content services from Google. Maps API is a commercial product that requires licensing based on quantities of use but is not required to access the Google Imagery Service.

The Texas Google Imagery Service is an open-standard service and can be incorporated into a wide variety of GIS software and web mapping applications that support open-standard formats such as the Esri suite of products, QGIS, or Global Mapper.
 
Check with your IT Department or software provider to determine if an OGC compliant Web Service is supported by your applications.
 

## How is the Texas Google Imagery Service different from the State Programs currently in place to acquire imagery such as the Texas Orthoimagery Program (TOP) or the National Agriculture Imagery Program (NAIP)?
The Texas Google Imagery Service is a mapping service that is available on-demand.  It is licensed, hosted, and served by Google.  It offers 6-inch resolution imagery, which is four times higher resolution than the 1/2-meter Texas Orthoimagery Program (TOP) imagery and approximately 16 times greater resolution than the 1-meter National Agriculture Imagery Program (NAIP) imagery.   
 
The imagery represented by the Texas Google Imagery Service is not in the public domain and is restricted under license.
 
## Will the state continue to pursue its own acquisition of statewide imagery such as the Texas Orthoimagery Program (TOP) and National Agriculture Imagery Program (NAIP) partnerships?

Yes, TNRIS will continue to work in coordination with partners to determine the need for orthoimagery. Persisting situations will call for new statewide leaf-off (TOP) or leaf-on (NAIP) acquisition projects to meet higher specific requirements (resolution, positioning) or even greater currency than Google’s update cycle goals (targeted for a 3 year refresh cycle around the State). Additionally, at the federal level, we currently expect the statewide 1 meter 2-year NAIP updates, contracted by the USDA, and the high resolution NGA 133 Cities imagery programs to continue. These products are different enough from the Google imagery, in terms of acquisition schedule and specs, that they should be complementary data resources.

## What do I do if I suspect that my link has been compromised or is being used by someone or an organization that is not authorized to use it?
If you feel that an unauthorized party has compromised your links, please contact TNRIS immediately.  We will disable your current links and re-establish new links for you to use.

------

### TECHNICAL FAQ

## How do I add the Google Imagery services to my software?

Click on the button for your GIS software to learn how to add the imagery service.

<a href="http://resources.arcgis.com/en/help/main/10.2/index.html#/Adding_WMTS_Services/00sp00000021000000/" class="btn btn-default btn-lg">ArcMap</a>

<a href="{{m.link('static/documents/google/WMS2Pro.pdf')}}" class="btn btn-default btn-lg"><i class="glyphicon glyphicon-"></i>ArcGIS Pro</a>

<a href="https://doc.arcgis.com/en/arcgis-online/create-maps/add-layers.htm#ESRI_SECTION2_C34EB22293D94DEAA28712CAF132A78B" class="btn btn-default btn-lg">ArcGIS Online</a>

<a href="http://www.bluemarblegeo.com/knowledgebase/global-mapper/index.htm" class="btn btn-default btn-lg">GlobalMapper</a>

<a href="http://knowledge.autodesk.com/support/autocad-map-3d/learn-explore/caas/CloudHelp/cloudhelp/2015/ENU/MAP3D-Use/files/GUID-A9F620AD-6B9A-487D-9B33-7D365307D571-htm.html" class="btn btn-default btn-lg">AutoCAD MAP 3D</a>

<a href="http://docs.autodesk.com/CIV3D/2013/ENU/index.html?url=filesMAPC3D/GUID-1B5EFA15-225A-43B9-95F5-ADCD1F677F16.htm,topicNumber=MAPC3Dd30e49336" class="btn btn-default btn-lg">AutoCAD CIVIL 3D 2013</a>

<a href="{{m.link('static/documents/google/MicroStationGoogleWMSDemo.pdf')}}" class="btn btn-default btn-lg">MicroStation</a>

## How do I add the Google WMTS link to my web application using Esri JavaScript API?

A special thanks to the Texas Department of Transportation (TxDOT) for solving this problem. TxDOT reports that since replacing the WMS link with WMTS link, response times have significantly improved.

Download a slideshow tutorial for this process below:

<a class="btn btn-lg btn-success" href="{{ m.link('static/documents/google/google-wmts-with-esri-javascript-api.pdf')}}"><i class="glyphicon glyphicon-file"></i> Download Tutorial</a>
 
## The Google Imagery Service now contains layers by year. What are these new layers?

<p><figure class="pull-right"><img alt="A view of the layers in ArcMap" src="{{m.link('static/images/google/googlelayers_arcmap.jpg')}}">
  <figcaption>A view of the layers in ArcMap</figcaption>
</figure>There are now four layers in the WMS and WMTS Google Imagery GCP Service. The “Texas” layer contains the most current imagery available for Texas. As new imagery become available for 'block' areas in Texas (Ex. Dallas, Houston, etc), the older imagery are placed into the yearly layers depending on the year the imagery was flown. For example, the Austin block is shown in ‘texas-2014’ as 2014 flown imagery because this block was updated with 2015 flown imagery represented in the ‘Texas’ image catalog.</p>

Layer Descriptions:

### Texas
Statewide mosaic of latest available imagery in the Google Imagery Service. This layer includes years 2015, 2014, 2013, 2012, and a small portion from 2011. To determine date of imagery, please refer to the instructions received with your unique link or request access. 

### texas-2014 
This layer contains imagery captured by Google in 2014 that is now archived to the texas-2014 layer after new imagery became available. This layer will eventually contain all imagery collected in 2014. 

### texas-2013 
This layer contains imagery captured by Google in 2013 that is now archived to the texas-2013 layer after new imagery became available. This layer will eventually contain all imagery collected in 2013.

### texas-2012 
This layer contains imagery captured by Google in 2012 that is now archived to the texas-2012 layer after new imagery became available. This layer will eventually contain all imagery collected in 2012.

### texas-2011 
This layer contains imagery captured by Google in 2011 that is now archived to the texas-2011 layer after new imagery became available. This layer will eventually contain all imagery collected in 2011.

## Should I use the WMS service link or the WMTS service link?
If your GIS/CAD software can ingest a WMTS, discontinue using the WMS link and begin using the WMTS link throughout your organization. WMTS is optimized for efficient web delivery and map printing. 

If your GIS/CAD software cannot ingest a WMTS, continue to use the WMS link.

Both of your unique WMS and WMTS links will continue to serve the Texas Google imagery to your organization under the pilot program.

Known issue: The WMTS may present offset imagery in ArcGIS version 10.1. The offset is not an issue in 10.3.

## The WMTS link does not work in ArcGIS Online. Can this be fixed?
Esri is aware of this issue and has temporarily resolved it until it can be fixed in the next release. Add the following text to the end of your unique WMTS link - /wmts?service=wmts&VERSION=1.0.0&request=GetCapabilities

Ex. https://txgi.tnris.org/login/path/xxxx-xxxxxx-xxx-xxxx/wmts?service=wmts&VERSION=1.0.0&request=GetCapabilities

The WMS link is compatible in ArcGIS Online.

## Why does my downloaded tile imagery look blocky/patchy when displayed in ArcGIS? 

If you are adding the **downloaded** imagery tiles (not the Service) into ArcGIS, open the Layers Properties dialog and make sure to uncheck the “**Apply Gamma Stretch**:” option and to set the “**Stretch**” type to None. 

<figure>
  <img class="img-responsive" src="{{m.link('static/images/google/layer-properties.jpg')}}" alt="Highlighting the properties to change for better display">
  <figcaption>The Layer properties dialog box on ArcGIS</figcaption>
</figure>

## What if my link stops working?
There may be times when links will be updated to allow for access of newly added imagery.  Most likely, your agency would have been notified about these updates.  The fastest way to know whether this is the reason for your non-functioning links is to check status updates at the top of this page:

<a href="#project-updates" class="smooth-scroll"><i class="glyphicon glyphicon-menu-right"></i> View Status Updates</a> 

These updates will provide link status updates, announcements, and instructions on how to reestablish your link.
 
If there is nothing on the portal page regarding updates, please use the “Contact and Feedback Form” and we will reactivate or reinstate your link.
 
 ## How do I request a link for my organization?
 Request a Unique link today
</a> if you are working for a public organization in the State of Texas (ie. state, regional or local government) and would like to obtain a link for your agency, visit the request form using the button below.

<a class="btn btn-danger btn-lg" href="{{m.link('google-request')}}">
<i class="glyphicon glyphicon-comment"></i> Request a Unique Link</a>
 
**Note:** Because the Texas Google Imagery Service is a restricted license, it is only for use by public organizations in the State of Texas.
 
Contractors or any individual working on behalf of a public organization are permitted to use the imagery as long as the work being performed directly supports the public organization.  The sponsoring agency will need to request an imagery link on behalf of any contractor or outside 3rd party.
 

 
## How do I know if and when new imagery has come online?
To learn about new imagery or any updates to the Google imagery service, please visit the status section at the top of this page. 

<a href="#project-updates" class="smooth-scroll"><i class="glyphicon glyphicon-menu-right"></i> View Status Updates</a> 

We will continually monitor and update this section to provide the information and history of all updates relating to the service.
 
## Do I need to refresh my service or get a new link to see new imagery?
No. Your current links should be updated automatically and always reflect the latest imagery.  However, during the pilot year, there may be some platform adjustments that will occur that would warrant the creation of new links.  For example, Google is phasing out the Google Maps Engine platform in favor of their Google Cloud Platform (GCP).  This change is expected to occur late in 2015 for Texas.  Once this happens, new links will need to be created for all users.  TNRIS will do our best to notify all users well before the change takes place so that you can plan accordingly. 
 
## What if I see errors or inconsistencies in the imagery?  How should I report it and to whom do I report it?
Use the button below to go to the Questions and Feedback form located on this page.
<a class="btn btn-default btn-lg smooth-scroll" href="#contact-pm">
<i class="glyphicon glyphicon-question-sign"></i> General Questions or Feedback
</a>

TNRIS will log these issues and work with Google staff to find solutions to correct them in future releases. 

## What projection is the Google Imagery Service using?
The map service tiles are  Web Mercator EPSG:3857. 
 
## Can I download or get a physical copy of the original image that is in the service?
Yes.  Individual agencies may download the imagery for use within the agency only. To learn more about downloading imagery, please contact TNRIS.
<a class="btn btn-default btn-lg smooth-scroll" href="#contact-pm">
<i class="glyphicon glyphicon-question-sign"></i> General Questions or Feedback
</a>

## What projection are the downloaded JPEG2000 (jp2) tiles using? 
The downloaded JPEG2000 tiles are Platte Carre Geographic EPSG:4326.

## Is it possible to get a Color Infrared (CIR) version of the imagery as a service?
Not at this time.  The Google Imagery Service will only be serving out the natural color imagery for now.  The CIR version of the imagery is not available for download in the pilot year.
 
After the pilot year, the CIR image download may be done at an additional cost.  These details are still pending.  TNRIS is still working with the Texas GIS Solutions Group, DIR and Google to determine the process and costs for downloading imagery after the pilot year is over.
 
## How can I get more information about upcoming flights in Texas?
To learn about upcoming flights in Texas and any other updates to the Google Imagery Service, please visit the status section at the top of this page.

 <a href="#project-updates" class="smooth-scroll"><i class="glyphicon glyphicon-menu-right"></i> View Status Updates</a> 

This section will provide the information about the upcoming scheduled flights for specific areas in Texas. 
 
Please note that information in the Google flight schedules are used as general guidelines and may have several overriding factors such as weather conditions and conflicting schedules.  This information can change at any time.
 
## How do I know how much my organization has used the Google imagery service?
Contact TNRIS for a usage report.

## Request a Unique Link
If you feel all your questions have been answered, and are ready to get connected, please use the button below to request a unique link for your organization.

<a class="btn btn-danger btn-lg" href="{{m.link('google-request')}}">
<i class="glyphicon glyphicon-comment"></i> Request a Unique Link Today
</a>

