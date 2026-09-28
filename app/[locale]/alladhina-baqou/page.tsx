import PeopleCover from "@/components/sections/PeopleCover";
import PeopleGallery from "@/components/sections/PeopleGallery";
import FamiliesSection from "@/components/sections/FamiliesSection";
import SurvivorsSection from "@/components/sections/SurvivorsSection";

export default function AlladhinaBaqouPage() {
  return (
    <main className="flex flex-col">
      <PeopleCover />
      <PeopleGallery />
      <FamiliesSection />
      <SurvivorsSection />
    </main>
  );
}