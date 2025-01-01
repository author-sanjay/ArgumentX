import { useClerk, useUser } from "@clerk/clerk-react";
import holo from "../../assets/img.png";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isSignedIn) {
      navigate("/dashboard");
    } else {
      openSignIn({
        afterSignInUrl: "/dashboard", 
      });
    }
  };
  return (
    <div className="hero bg-base-200 py-20">
      <div className="hero-content h-full flex-col lg:flex-row-reverse w-4/5">
        <img id="heroImage" src={holo} className="max-w-sm rounded-lg " />

        <div>
          <h1 className="text-5xl font-bold">
            <span className="line-through">Normal</span> AR Visiting Card
          </h1>

          <p className="py-6">
            Transform your branding with our innovative AR/VR cards. Your card
            can now speak your stories.
          </p>
          <button className="btn btn-primary" onClick={handleClick}>
            Book My AR Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
