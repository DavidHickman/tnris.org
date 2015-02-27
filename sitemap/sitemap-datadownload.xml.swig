<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {% for county in areas.counties %}
  <url>
      <loc>http://tnris.org/data-download/#/county/{{ county | url_encode }}</loc>
      <lastmod>{{ modified_date | date('Y-m-d') }}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
  </url>
  {% endfor %}
  {% for quad in areas.quads %}
  <url>
      <loc>http://tnris.org/data-download/#/quad/{{ quad | url_encode }}</loc>
      <lastmod>{{ modified_date | date('Y-m-d') }}</lastmod>
      <changefreq>daily</changefreq>
      <priority>0.5</priority>
  </url>
  {% endfor %}
</urlset>
