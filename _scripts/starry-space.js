// Add twinkling stars and constellation effect
document.addEventListener('DOMContentLoaded', function() {
  const headerBig = document.querySelector('header[data-big]');
  
  if (headerBig) {
    // Create stars container
    const starsContainer = document.createElement('div');
    starsContainer.style.position = 'absolute';
    starsContainer.style.top = '0';
    starsContainer.style.left = '0';
    starsContainer.style.width = '100%';
    starsContainer.style.height = '100%';
    starsContainer.style.overflow = 'hidden';
    starsContainer.style.pointerEvents = 'none';
    starsContainer.style.zIndex = '2';
    
    // Create SVG for constellation lines
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.top = '0';
    svg.style.left = '0';
    
    // Real constellation patterns
    const constellationPatterns = [
      // Orion (猎户座) - Most recognizable constellation
      (x, y) => [
        // Belt (three stars in a row)
        [{x: x, y: y + 8}, {x: x + 3, y: y + 8}, {x: x + 6, y: y + 8}],
        // Upper body
        [{x: x - 2, y: y}, {x: x, y: y + 8}],
        [{x: x + 8, y: y}, {x: x + 6, y: y + 8}],
        // Lower body
        [{x: x - 3, y: y + 16}, {x: x, y: y + 8}],
        [{x: x + 9, y: y + 16}, {x: x + 6, y: y + 8}]
      ],
      // Ursa Major/Big Dipper (北斗七星)
      (x, y) => [
        [{x: x, y: y}, {x: x + 3, y: y + 1}, {x: x + 6, y: y + 2}, {x: x + 9, y: y + 3}],
        [{x: x + 6, y: y + 2}, {x: x + 7, y: y + 6}, {x: x + 9, y: y + 9}, {x: x + 11, y: y + 11}]
      ],
      // Cassiopeia (仙后座) - W shape
      (x, y) => [
        [{x: x, y: y + 4}, {x: x + 3, y: y}, {x: x + 6, y: y + 3}, {x: x + 9, y: y}, {x: x + 12, y: y + 4}]
      ],
      // Cygnus/Northern Cross (天鹅座/北十字)
      (x, y) => [
        // Main vertical
        [{x: x + 5, y: y}, {x: x + 5, y: y + 5}, {x: x + 5, y: y + 10}, {x: x + 5, y: y + 14}],
        // Horizontal arms
        [{x: x, y: y + 5}, {x: x + 5, y: y + 5}, {x: x + 10, y: y + 5}]
      ],
      // Leo (狮子座) - Simplified
      (x, y) => [
        // Head and mane
        [{x: x + 2, y: y}, {x: x, y: y + 3}, {x: x + 1, y: y + 6}, {x: x + 3, y: y + 8}],
        // Body
        [{x: x + 3, y: y + 8}, {x: x + 7, y: y + 9}, {x: x + 11, y: y + 10}],
        // Tail
        [{x: x + 11, y: y + 10}, {x: x + 13, y: y + 6}, {x: x + 15, y: y + 3}]
      ],
      // Scorpius (天蝎座) - Tail curve
      (x, y) => [
        // Head
        [{x: x, y: y + 5}, {x: x + 2, y: y + 3}, {x: x + 4, y: y + 5}],
        // Body and tail
        [{x: x + 2, y: y + 3}, {x: x + 5, y: y + 6}, {x: x + 8, y: y + 8}, {x: x + 11, y: y + 9}, {x: x + 13, y: y + 7}, {x: x + 14, y: y + 4}]
      ]
    ];
    
    // Generate 2-3 random real constellations
    const numConstellations = Math.floor(Math.random() * 2) + 2;
    const constellations = [];
    const usedPatterns = new Set();
    
    // Define zones excluding center area (where logo/title are)
    const safeZones = [
      {xMin: 5, xMax: 25, yMin: 10, yMax: 90},   // Left side
      {xMin: 75, xMax: 95, yMin: 10, yMax: 90},  // Right side
      {xMin: 25, xMax: 75, yMin: 5, yMax: 20},   // Top area
      {xMin: 25, xMax: 75, yMin: 75, yMax: 95}   // Bottom area
    ];
    
    for (let i = 0; i < numConstellations; i++) {
      // Pick a random safe zone
      const zone = safeZones[Math.floor(Math.random() * safeZones.length)];
      
      // Random position within safe zone
      const x = Math.random() * (zone.xMax - zone.xMin) + zone.xMin;
      const y = Math.random() * (zone.yMax - zone.yMin) + zone.yMin;
      
      // Pick unique random pattern
      let patternIndex;
      do {
        patternIndex = Math.floor(Math.random() * constellationPatterns.length);
      } while (usedPatterns.has(patternIndex) && usedPatterns.size < constellationPatterns.length);
      
      usedPatterns.add(patternIndex);
      const pattern = constellationPatterns[patternIndex];
      const shapes = pattern(x, y);
      
      constellations.push(...shapes);
    }
    
    const starPositions = [];
    
    constellations.forEach((constellation, idx) => {
      constellation.forEach((point, i) => {
        // Create star
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = '4px';
        star.style.height = '4px';
        star.style.backgroundColor = '#90EE90';
        star.style.borderRadius = '50%';
        star.style.left = point.x + '%';
        star.style.top = point.y + '%';
        star.style.boxShadow = '0 0 10px 3px rgba(144, 238, 144, 0.8)';
        star.style.animation = `twinkle ${Math.random() * 2 + 3}s ease-in-out infinite`;
        star.style.animationDelay = (idx * 0.3 + i * 0.2) + 's';
        starsContainer.appendChild(star);
        
        // Draw line to next point
        if (i < constellation.length - 1) {
          const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', point.x + '%');
          line.setAttribute('y1', point.y + '%');
          line.setAttribute('x2', constellation[i + 1].x + '%');
          line.setAttribute('y2', constellation[i + 1].y + '%');
          line.setAttribute('stroke', 'rgba(144, 238, 144, 0.4)');
          line.setAttribute('stroke-width', '1');
          line.style.animation = `fadeIn 2s ease ${(idx * 0.5 + i * 0.3)}s backwards`;
          svg.appendChild(line);
        }
      });
    });
    
    starsContainer.appendChild(svg);
    
    // Create random twinkling stars
    const starCount = 40;
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = Math.random() * 2 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.backgroundColor = 'white';
      star.style.borderRadius = '50%';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.opacity = Math.random() * 0.5 + 0.3;
      star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
      star.style.animationDelay = Math.random() * 5 + 's';
      
      starsContainer.appendChild(star);
    }
    
    headerBig.insertBefore(starsContainer, headerBig.firstChild);
  }
});
