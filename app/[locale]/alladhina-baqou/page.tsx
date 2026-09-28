import PeopleCover from "@/components/sections/PeopleCover";
import PeopleGallery from "@/components/sections/PeopleGallery";
import FamiliesSection from "@/components/sections/FamiliesSection";

export default function AlladhinaBaqouPage() {
  return (
    <main className="flex flex-col">
      <PeopleCover />
      <PeopleGallery />
      <FamiliesSection />
    </main>
  );
}