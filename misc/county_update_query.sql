-- updates table with the closest county to the quad's centroid; probably not
-- the optimal way to do this
UPDATE tnris_quad_wgs84_copy SET closest_county=c.countyname
FROM (
  SELECT quad_id, quadname, countyname, d
  FROM (SELECT *, rank() OVER (PARTITION BY quadname ORDER BY d ASC) as r
    FROM (
      SELECT *, st_distance(st_centroid(q.quadgeom), q.countygeom) as d
      FROM (
        SELECT quad.cartodb_id as quad_id, quad.quadname,
               county.name as countyname,
               quad.the_geom_webmercator as quadgeom,
               county.the_geom_webmercator as countygeom
        FROM tnris_quad_wgs84_copy as quad, county_extended as county
        WHERE ST_Intersects(ST_Envelope(quad.the_geom_webmercator), ST_Envelope(county.the_geom_webmercator))
      ) as q
    ) as t
  ) as z
  WHERE r = 1
) as c
where cartodb_id=c.quad_id


-- delete county-less quads (no intersection with a county);
DELETE from tnris_quad_wgs84_copy WHERE closest_county is null
