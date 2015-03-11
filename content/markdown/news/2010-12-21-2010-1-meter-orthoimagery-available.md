---
template: news.html
title: "2010 1-meter Orthoimagery Now Available"
author: RDC
thumbnail: static/images/updates/2010/2010_ccm_deliverystatus.jpg
abstract:
    The USDA Farm Services Agency National Agriculture Imagery Program (NAIP), with contribution from the State of Texas, acquired 1-meter multi spectral orthoimagery covering the entire state.
tags: data, naip, orthoimagery
---

The USDA Farm Services Agency National Agriculture Imagery Program (NAIP), with contribution from the State of Texas, acquired 1-meter multi spectral orthoimagery covering the entire state. Aerial image flights began mid-April 2008 and continued throughout the agricultural growing season in September. The imagery supports USDA crop programs and provides the state with a update to this essential base information for updating a wide variety of maps.

## Products

- Compressed County Mosaics (CCMs) at 1-meter pixel resolution are available through the TNRIS data . The CCMs are 3-band color infrared (CIR) composites in MrSID format, 15:1 target compression ratio.
- Digital Orthophoto Quarter-Quads (DOQQs) at 1-meter pixel resolution are also available through the TNRIS data library. The DOQQs are 4-band (NC/CIR) in compressed (5:1) JPEG2000 format. Uncompressed GeoTIFF DOQQs are available from TNRIS by special request.

NOTE: The CCMs and DOQQs are provisional datasets. Replacement versions are made available until QA procedures are complete in mid to late 2011.

## Acquisition Areas

All 254 counties in Texas were acquired under NAIP during the 2010 agricultural growing season, April 15 – September 30.

## Data Details

- 1-meter GSD (ground sample distance) imagery captured with Leica ADS80 digital sensors from aircraft
- CCMs are 3-band CIR; DOQQs are 4-band (NC/CIR)
Horizontal accuracy within +/- 6 meters to true ground
- Image data contain less than 10% cloud cover per 3.75’ x 3.75’ quarter quadrangle.
- CCMs and DOQQs are orthorectified and projected to the UTM NAD83 coordinate system. The full datasets span UTM zones 13, 14, and 15.
- Compression
  + CCMs – MrSID Generation 3 format, 15:1 compression ratio
  + DOQQs – JPEG2000 format, 5:1 compression ratio.
  + For the CCMs, image data were mosaicked and compressed to cover a full county extent within one manageable file. Image quality is lower compared to the DOQQs because the compression rate was higher on the CCMs.
- File size per CCM MrSID image ranges 500 MB to 3 GB depending on county size. And some larger counties are split into 2 – 5 pieces. Each DOQQ JPEG2000 image averages 50 MB.
- Seam line shapefiles and metadata are available per CCM. Metadata text files accompany each DOQQ. A DOQQ index is also available.
- File naming convention
  + CCM – ProgramNameYear_CountyName_FIPsCode_version#.sid or shp
  (Example: NAIP10_Hardin_199_v1.sid and NAIP10_Hardin_199_v1.shp)
  + DOQQ – ProgramNameYear_Resolution_DegreeBlock_Quad_QuarterQuad_AcquisitionDateYYYYMMDD.jp2
  (Example: naip10_1m_2597_04_1_20100424.jp2)

## Available Counties

All 254 counties in Texas are available in both CCM and DOQQ image datasets.

## Additional Information

For more information about the NAIP 2010 1-meter Orthoimagery, please contact TNRIS Data Support.
