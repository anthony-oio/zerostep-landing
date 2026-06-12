const opentype = require('opentype.js');
const fs = require('fs');
const font = opentype.loadSync('CaveatBrush-Regular.ttf');
const size = 200;
const word = 'zerostep';
// baseline at y=0; opentype y-axis is up in font units but getPath uses screen coords (y down)
const path = font.getPath(word, 0, 0, size);
const d = path.toPathData(3);
const bb = path.getBoundingBox();
const out = {
  d,
  bbox: { x1: bb.x1, y1: bb.y1, x2: bb.x2, y2: bb.y2,
          w: bb.x2 - bb.x1, h: bb.y2 - bb.y1 }
};
fs.writeFileSync('wordmark-path.json', JSON.stringify(out, null, 2));
console.log('bbox', out.bbox);
console.log('d length', d.length);
