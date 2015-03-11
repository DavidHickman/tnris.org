---
template: news.html
title: "GEMSS is Featured in Microsoft Case Study"
author: RDC
thumbnail: static/images/updates/2010/2010_ccm_deliverystatus.jpg
abstract:
    The USDA Farm Services Agency National Agriculture Imagery Program (NAIP), with contribution from the State of Texas, acquired 1-meter multi spectral orthoimagery covering the entire state.
tags: data, naip, orthoimagery
---

Since its inception, TNRIS has played an important role in the emergency management of events such as the Space Shuttle Columbia incident in 2003 and Hurricanes Rita and Katrina in 2005. In the aftermath of Hurricane Rita, TNRIS was awarded a grant by the Federal Emergency Management Agency (FEMA) to develop a statewide Hurricane Rita data repository. Known as the Geospatial Emergency Management Support System (GEMSS), the project's primary goal was to establish a geospatial data repository for emergency management in the State of Texas. The principal ongoing activity of the clearinghouse is to acquire, organize, integrate, and disseminate geospatial data and resources to support mitigation, response, and recovery activities in the state and along its borders. 

"The challenge today is to provide people with the ability to access or view geospatial information from anywhere in the world regardless of where it specifically resides," explains Richard Wade, Team Lead at the Texas Natural Resources Information System. "Assuring that an individual always has access the latest and most accurate information is what really matters when it comes to managing an event or crisis," says Wade." For a system such as GEMSS to be successful, it needs to be fast, reliable, accurate, and easy to use. With this in mind, TNRIS went back to the drawing board and reviewed every option available to begin building a new foundation that would support access to data already familiar and available to GIS users. 

According to a survey on GISjobs.com, nearly 80 percent of all GIS users worldwide work with ArcGIS software and spatial database management applications developed by Microsoft® Gold Certified Partner ESRI. So TNRIS began looking for a flexible, robust, and reliable technology that would interface easily with existing ESRI investments. "We needed a solution that would allow us to access several sources for information and tie it all together in one common viewer," Wade says. "Our main challenge was how to discover and visualize those vast amounts of geospatial data through a simple interface.
SOLUTION

In 2006, TNRIS began working on a new web-based mapping environment they called "Atlas", that would be the new foundation and basis for all future mapping projects developed by TNRIS including the GEMSS project. This new foundation would incorporate the latest online web viewing applications and the latest in database technology into a common platform that could be used for multiple applications. 

"We knew that we'd be using ESRI tools to develop our data," says Wade. "But we also realized that integrating other technologies into our existing GIS environment would make web-based mapping applications more accessible to more people." The Atlas system utilizes the Microsoft Virtual Earth™ 6.2 online mapping platform and Microsoft SQL Server® 2008 Enterprise data management software. "Virtual Earth is a powerful resource," Wade says. "The technology behind the application is very complex, but it is incredibly simple to use. It's also a browser-based system, which means it can be accessed by anyone who has access to the Internet. This is exactly what we were looking for." Virtual Earth provides a rich user experience with a dynamic combination of three-dimensional, aerial, and satellite imagery. Other features include geocoding distance and area measuring functions, customizable raster and vector layers, customizable buttons, and the ability to incorporate map services from third-party sources. 

TNRIS uses the customizable application programming interfaces (APIs) in Virtual Earth to build applications that pull data from its existing GIS and from a services that display things like weather conditions and warnings, agricultural imagery, and drought monitoring, etc. and overlay that information in the Virtual Earth viewer. In other words, TNRIS can create, manage, maintain, and analyze data in its existing GIS with other services and then visualize that data using Virtual Earth. "Almost anything in GIS world is a possibility through Virtual Earth," Says TNRIS' lead developer Ragunath Jayabalakrishnan. The API allows the developer to take total control of the Virtual Earth components and drive the map seamlessly. In our experience, the API allowed us to quickly develop the interactive mapping components and integrate them with the analytical abilities to display of all types of geospatial information." 

TNRIS has tightly integrated the spatial management capabilities of SQL Server 2008 into Atlas. Chris Williams, TNRIS' Database Administrator has been working with SQL server for 10 years and has been testing the spatial capabilities of SQL Server 2008 since the early Betas. "One of the understated aspects of this application is that TNRIS has been able to leverage all of our years of experience with traditional GIS fundamentals against the new spatial offerings found in SQL Server 2008. SQL Server's new ability to manage spatial data is really the backbone of this application, not to mention the future of Data Management at TNRIS," says Williams. 

The Atlas system manages local data as either tile-based or vector-based layers. The tile-based layers are composed primarily of millions of small tile images that provide online mapping applications like Virtual Earth the ability to display images quickly. TNRIS has developed an extremely efficient way to manage and display a large number of raster tiles without degrading performance. 

"We take the tile concept a step further by removing them from the raw directory structure and loading them directly into SQL server. This allows the database to control the tile access to Virtual Earth which greatly improves the speed and efficiency," say Williams. TNRIS has even found a solution to effectively incorporate vector layers into the application. "Vector layers offer a unique challenge," say Williams. "They are integral part of complete system but there is a drawback. Because of the limitations in JavaScript, there is a limit and performance issue as to how many features can be displayed in Virtual Earth. This is especially evident with larger datasets. Our solution involves taking advantage of the performance of the cached tile layers while providing the ability to retieve the attributes of the underlying vector layers through a spatial query within SQL server. This solution works because SQL Server 2008 is able to handle spatial data natively. It's fairly straight forward once you understand it", say Williams. 

"Use the image-based layers for visual performance and use SQL server to retrieve the vector-based information that the tiles represent. TNRIS is also currently reviewing a Silverlight solution which has some benefit of traditional JavaScript that help resolve some of these issues." In addition to data management, SQL Server 2008 is also used to perform distance calculations, proximity searches, and sophisticated spatial queries. SQL Server 2008 contains more than 80 different spatial methods, all of which comply with Open Geospatial Consortium (OGC) standards. Another extremely important element of the application was the overall design and functionality of the user interface. TNRIS spent a great deal of its development efforts focused on three key components of the UI.

## Tag-based data layer search

All data is tagged with keywords, metadata, and descriptions that can be searched. Based on these tags, data can be categorized. "Most people who are familiar with more traditional GIS systems navigate a directory tree structure to add layers to the system," Wade says. "Atlas's navigation is based on simple keyword or category searching to locate data layers in the system."

## "Smart Interface"

The Smart Interface is the ability for the system to change modes during an operation in anticipation of your desired intent or action. For example, if you choose to add a point to the map. You would choose the "add point" function from the tool bar and place a point on the map. Now, if you choose to pan the map, you would not have to change back to the "pan mode" for this operation. You can simply click and pan normally. Based on your mouse movements, the system understands that you are trying to pan the map and not trying to add another point.

Intelligent Inquiry - Intelligent Inquiry is the ability to perform an inquiry of multiple layers simultaneously without having to first select an active layer. The system will automatically search all available layers in the viewer and return the results for each layer within the search tolerance in a tabbed result window by order of closest proximity to the search point.

"We made a conscious effort to minimize the interaction with the systems interface by implementing some intelligence into the system to really enhance the user experience and to provide the desired results," Wade explains. The interface has 5 functional areas:
Map Window - The map window is the Virtual Earth portion of the application. It will display all the map data and will allow users to add information and spatially evaluate layers as part of the analytical process.
Available Layer Panel - This is a collapsible panel that displays the available layers to be place in the map window. It utilizes a drag and drop interface and contains access links to metadata about the layers for reference.
Active Layers Panel - This is a collapsible panel that displays the current layers that are being displayed in the map window. In contains controls to adjust layer transparency and visibility. Layers can also be reordered by dragging layers above or below other layers for proper display.
Information Panel - This is a collapsible panel provides a tabular or spreadsheet style listing of information that is currently being displayed in the map window. It allows to user to visualize the database content of specific layers in the map. It is also use to display results from data queries, travel directions, track location markers that have been defined.
Toolbar - The toolbar allows users to access the various administration functions such as changing passwords, accessing the layer control panel (for administrators only) and access to graphic placement features or measurement tools.

One of the most important and complex components of Atlas is the complete set of comprehensive administrative functions that manage and control data layers and user accounts. There are two primary components of the Administration Panel are the Layer Administration Panel and the User Administration Panel. Both panels can be accessed through the "options" link in the main viewer toolbar. Built on SQL server 2008, these panels provide the tools to manage parameters for the data and user elements of the application. These panels require administrative privileges to be accessed. The Layer Administration Panel manages all aspects of the data layers in the system including:
Tag generation, assignments, and management
- Layer access control
- Keyword assignments
- Description and Metadata development
- Database field assignment and display parameters
- Footprint extent and location
- Zoom level control
- WMS, WFS, ODM, Tiles administration
- Icon placement
- The User Administration Panel manages all aspects of the users account information in the system including:
  - User access
  - Login and password information
  - User roles
  - User activities
  - Personal information management

## Benefits

By integrating the latest Virtual Earth mapping technologies and SQL Server 2008 spatial database software with its existing GIS investments, TNRIS created a simple yet robust solution that improves decision-making, spurs innovation, and speeds time to market.
Easy, Intuitive Access to Data

By using Virtual Earth and SQL Server as the foundation for its solution, TNRIS has created a system that is easy for anyone to use. GIS and non-GIS professionals are able to access information over the Internet with the click of a mouse. TNRIS' own Web site, www.tnris.org, receives more than 30,000 users and processes 1.4 terabytes of downloaded information each month. "We plan to use the Atlas foundation to build the next evolution for data access at TNRIS. The application will incorporate the best of all applications including new ways to access and download data as well as discover new data and services available online," says Wade.
Improved Decision Making

The technology used in Atlas can give the decision makers instant access to crucial data providing them the ability review and analyse information quickly so that critical decision can be made. Prior to this solution, decision makers had to rely on teams of people to compile data for geospatial maps before they could assess the scenario or develop a plan of action.
Faster Time to Market

TNRIS has developed an integrated solution that is easily customizable, increasing the speed with which the agency can bring these tools to the marketplace. The same foundation can be used on multiple projects dramatically cutting down the development time for each project. TNRIS can also make its solutions available more quickly and to a broader market because Virtual Earth is a browser-based system-users do not need to install or maintain any software onsite.

## More Room for Innovation

TNRIS looked beyond the status quo to develop an innovative solution to a complex challenge. "When you have the right resources, you don't have to think traditionally," says Wade. "Once we knew what we wanted to accomplish and understood all that Virtual Earth and SQL Server 2008 had to offer, we began to see new ways to turn our vision into reality. We've been building this solution for nearly two years, and every month we get together and ask, 'What's new? What do we need to understand to continue developing this technology?' Microsoft gives us the tools to think outside the box." Wade concludes, "I think we've used Virtual Earth, SQL Server 2008, and our existing GIS environment to create a very intuitive and flexible platform that allows us to visualize and centralize geospatial information in one simple application. It's extremely powerful, yet everything can be done with one or two clicks of the mouse. All the functionality that makes Virtual Earth so easy to use is right at our fingertips." Click here to view online version of Microsoft's Case Study
