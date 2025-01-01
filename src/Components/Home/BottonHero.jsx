import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function BottonHero() {
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
    <div
      className="hero min-h-[60vh]"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/1209751/pexels-photo-1209751.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60 h-full"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Take Your Networking to the Next Level
          </h1>
          <p className="mb-5">
            Augmented Reality isn’t the future—it’s the now. Don’t get left
            behind. Impress your clients, connect with prospects, and stand out
            with AR Visiting Cards.
          </p>
          <button className="btn btn-primary" onClick={handleClick}>
            Order Your Card Today
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottonHero;
