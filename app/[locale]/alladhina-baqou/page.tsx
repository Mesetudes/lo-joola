import Link from "next/link";
import PeopleCover from "@/components/sections/PeopleCover";
import PeopleGallery from "@/components/sections/PeopleGallery";
import FamiliesSection from "@/components/sections/FamiliesSection";
import SurvivorsSection from "@/components/sections/SurvivorsSection";
import SeatsInstallation from "@/components/sections/SeatsInstallation";

export default function AlladhinaBaqouPage() {
  return (
    <main className="flex flex-col">
      <PeopleCover />
      <PeopleGallery />
      <FamiliesSection />
      <SurvivorsSection />
      <SeatsInstallation />
      <section className="flex justify-center bg-deep-navy px-6 pb-24 pt-8">
        <Link href="/ar/aldhakira" className="rounded-full border border-off-white/30 px-8 py-3 text-base font-medium text-off-white transition hover:border-sea-blue">الذاكرة ←</Link>
      </section>
    </main>
  );
}