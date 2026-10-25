import { validateAstraviaData } from "../src/services/dataValidator.js";
import destinations from "../src/data/destinations.js";
import { getVirtualTour } from "../src/data/virtualTours.js";
import hotels from "../src/data/hotels.js";

console.log("=== ASTRAVIA DESTINATION DATA SYNCHRONIZATION AUDIT ===");

// 1. Run Data Validator
const validation = validateAstraviaData();
if (!validation.valid) {
  console.error("FAILED: Data validation found issues:", validation.issues);
  process.exit(1);
} else {
  console.log("✓ Core data validation PASSED with 0 errors.");
}

// 2. Audit KASHMIR
const kashmirDest = destinations.find((d) => d.id === "kashmir");
const kashmirTour = getVirtualTour("kashmir");

console.log("\n--- Checking KASHMIR ---");
console.log(`Name: ${kashmirDest.name}`);
console.log(`Scenes count: ${kashmirTour.scenes.length}`);
kashmirTour.scenes.forEach((sc, idx) => {
  console.log(`  Scene ${idx + 1}: [${sc.id}] "${sc.title}" (destinationId: ${sc.destinationId})`);
  console.log(`    Panorama: ${sc.panoramaUrl}`);
  console.log(`    Sound: ${sc.soundProfile}`);
  console.log(`    Hotspots: ${sc.hotspots.map((h) => h.title).join(", ")}`);
  
  // Verify NO Taj Mahal in Kashmir
  if (sc.panoramaUrl.includes("1548013146-72479768bada") && sc.id.includes("gulmarg")) {
    console.error("ERROR: Gulmarg is still using Taj Mahal photo!");
    process.exit(1);
  }
  if (sc.destinationId !== "kashmir") {
    console.error(`ERROR: Scene destinationId mismatch: ${sc.destinationId}`);
    process.exit(1);
  }
});

// 3. Audit TAJ MAHAL
console.log("\n--- Checking TAJ MAHAL ---");
const tajDest = destinations.find((d) => d.id === "taj-mahal");
const tajTour = getVirtualTour("taj-mahal");
console.log(`Name: ${tajDest.name}`);
console.log(`Scenes count: ${tajTour.scenes.length}`);
tajTour.scenes.forEach((sc, idx) => {
  console.log(`  Scene ${idx + 1}: [${sc.id}] "${sc.title}" (destinationId: ${sc.destinationId})`);
  console.log(`    Panorama: ${sc.panoramaUrl}`);
  console.log(`    Sound: ${sc.soundProfile}`);
  console.log(`    Hotspots: ${sc.hotspots.map((h) => h.title).join(", ")}`);
  
  if (sc.destinationId !== "taj-mahal") {
    console.error(`ERROR: Scene destinationId mismatch: ${sc.destinationId}`);
    process.exit(1);
  }
});

// Verify Taj Mahal Quiz
console.log(`Taj Mahal Quiz Questions: ${tajDest.quiz.length}`);
tajDest.quiz.forEach((q, idx) => {
  console.log(`  Q${idx + 1}: ${q.question} (Answer: ${q.options[q.correctIndex]})`);
});

// 4. Audit All other destinations
console.log("\n--- Checking ALL ${destinations.length} Destinations ---");
destinations.forEach((dest) => {
  const tour = getVirtualTour(dest.id);
  if (!tour || tour.scenes.length === 0) {
    console.error(`ERROR: Destination ${dest.id} has no tour!`);
    process.exit(1);
  }
  const destHotels = hotels.filter((h) => h.destinationId === dest.id);
  console.log(`✓ ${dest.name.padEnd(20)} [${dest.id.padEnd(14)}] Scenes: ${tour.scenes.length}, Hotspots: ${tour.scenes.reduce((a, s) => a + s.hotspots.length, 0)}, Quiz: ${dest.quiz?.length || 0}, Hotels: ${destHotels.length}`);
});

console.log("\n=== ALL SYNCHRONIZATION AUDIT CHECKS PASSED SUCCESSFULLY ===");
