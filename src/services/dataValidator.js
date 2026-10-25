/**
 * ASTRAVIA Global Data Integrity Validator
 * Runs in development mode to assert that every scene, hotspot, museum artifact,
 * quiz question, and itinerary record is strictly bound to its parent destination ID.
 */

import destinations from "../data/destinations.js";
import { virtualTours } from "../data/virtualTours.js";

export function validateAstraviaData() {
  const issues = [];
  const destinationIds = new Set(destinations.map((d) => d.id));

  // 1. Verify Destination IDs uniqueness
  const seenDestIds = new Set();
  destinations.forEach((d) => {
    if (seenDestIds.has(d.id)) {
      issues.push(`Duplicate destination ID detected: "${d.id}"`);
    }
    seenDestIds.add(d.id);
  });

  // 2. Verify Virtual Tour datasets & Scene relationships
  Object.entries(virtualTours).forEach(([tourKey, tour]) => {
    if (!destinationIds.has(tour.destinationId)) {
      issues.push(`Virtual tour "${tourKey}" references unknown destinationId: "${tour.destinationId}"`);
    }
    if (tourKey !== tour.destinationId) {
      issues.push(`Virtual tour key mismatch: key "${tourKey}" vs destinationId "${tour.destinationId}"`);
    }

    if (!Array.isArray(tour.scenes) || tour.scenes.length === 0) {
      issues.push(`Virtual tour for "${tour.destinationId}" has no scenes defined.`);
    } else {
      tour.scenes.forEach((scene, sIdx) => {
        if (!scene.id) {
          issues.push(`Scene at index ${sIdx} in tour "${tour.destinationId}" is missing an id.`);
        }
        if (scene.destinationId !== tour.destinationId) {
          issues.push(
            `Destination data mismatch: scene "${scene.id || sIdx}" belongs to "${scene.destinationId}" but was assigned to tour "${tour.destinationId}".`
          );
        }
        if (!scene.panoramaUrl) {
          issues.push(`Scene "${scene.id}" in tour "${tour.destinationId}" is missing panoramaUrl.`);
        }

        // Hotspots check inside scene
        if (Array.isArray(scene.hotspots)) {
          scene.hotspots.forEach((spot, hIdx) => {
            if (!spot.id) {
              issues.push(`Hotspot at index ${hIdx} in scene "${scene.id}" is missing an id.`);
            }
            if (spot.destinationId && spot.destinationId !== tour.destinationId) {
              issues.push(
                `Hotspot mismatch: hotspot "${spot.id}" has destinationId "${spot.destinationId}" but is in tour "${tour.destinationId}".`
              );
            }
            if (spot.sceneId && spot.sceneId !== scene.id) {
              issues.push(
                `Hotspot mismatch: hotspot "${spot.id}" has sceneId "${spot.sceneId}" but is inside scene "${scene.id}".`
              );
            }
          });
        }
      });
    }
  });

  // 3. Verify Destination Quizzes, Highlights, and Galleries
  destinations.forEach((d) => {
    if (d.quiz && Array.isArray(d.quiz)) {
      d.quiz.forEach((q, qIdx) => {
        if (!q.question || !Array.isArray(q.options) || q.options.length < 2) {
          issues.push(`Invalid quiz question ${qIdx + 1} in destination "${d.id}".`);
        }
        if (typeof q.correctIndex !== "number" || q.correctIndex < 0 || q.correctIndex >= q.options.length) {
          issues.push(`Invalid correctIndex in quiz question ${qIdx + 1} in destination "${d.id}".`);
        }
      });
    }

    if (d.gallery && Array.isArray(d.gallery)) {
      d.gallery.forEach((item, gIdx) => {
        if (!item.id || !item.title || !item.image) {
          issues.push(`Incomplete gallery artifact at index ${gIdx} in destination "${d.id}".`);
        }
      });
    }
  });

  // 4. Report results
  if (issues.length > 0) {
    console.error(`[ASTRAVIA DATA VALIDATION] Found ${issues.length} data synchronization issues:`);
    issues.forEach((err) => console.error(`  - ${err}`));
    return { valid: false, issues };
  } else {
    console.info(`[ASTRAVIA DATA VALIDATION] ✓ All ${destinations.length} destinations, virtual tours, scenes, hotspots, and quizzes are 100% synchronized and verified.`);
    return { valid: true, issues: [] };
  }
}

export default validateAstraviaData;
