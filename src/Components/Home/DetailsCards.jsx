import {
  BriefcaseBusiness,
  DollarSign,
  FileVideo,
} from "lucide-react";
import SingleDetailsCard from "./SingleDetailsCard";

function DetailsCards() {
  return (
    <section className="h-auto w-screen items-center justify-center flex flex-col py-28">
      <div className="w-1/3  flex-col items-center justify-center flex ">
        <h1 className="text-3xl font-bold">Personalized Branding</h1>
        <h3 className="text-center mt-5">
          Discover how AR Cards can transform your branding
        </h3>
      </div>
      <div className="mt-20 h-auto w-3/4 flex flex-row items-center gap-10 justify-between">
        <SingleDetailsCard
          details="Host a video introduction, 3D product demo, or message."
          icon={<FileVideo />}
          title="Immersive Storytelling"
        />
        <SingleDetailsCard
          icon={<BriefcaseBusiness />}
          details="Just one scan and share your work with your clients"
          title="Instant Work Sharing"
        />
        <SingleDetailsCard
          icon={<DollarSign />}
          title="Save Money"
          details="Reduce paper waste and money with our reusable, tech-forward solution."
        />
      </div>
    </section>
  );
}

export default DetailsCards;
