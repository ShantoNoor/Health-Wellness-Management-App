import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div
      className="hero min-h-[80vh] mt-6 rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/r3Rqh00/ffda7dfb-5127-442a-a845-e92d31fa0d2f.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-6">
            Welcome to our wellness events management website! We are passionate
            about promoting health and well-being in our community. Our team is
            dedicated to organizing and hosting a variety of events, including
            Health Fairs, Yoga and Fitness Retreats, Wellness Expos, and more.
          </p>
          <p className="mb-6">
            With years of experience in event planning and a commitment to
            creating positive and transformative experiences, we aim to provide
            you with the best wellness events possible. Our goal is to inspire
            and empower individuals on their journey to a healthier and happier
            life.
          </p>
          <p className="mb-6">
            Thank you for choosing us to be a part of your wellness journey. We
            look forward to helping you discover new opportunities for personal
            growth and well-being through our events.
          </p>
          <button onClick={() => navigate("/")} className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
