import TravelPlanner from "../components/TravelPlanner";

/**
 * TravelPlannerPage Component (Evaluation-I)
 * Dedicated Multi-Page Trip Planner & Custom Itinerary Generator.
 * Demonstrates: Controlled components, form validation, state management.
 */
export function TravelPlannerPage() {
  return (
    <main style={{ paddingTop: "120px", paddingBottom: "100px", minHeight: "85vh" }}>
      <TravelPlanner />
    </main>
  );
}

export default TravelPlannerPage;
