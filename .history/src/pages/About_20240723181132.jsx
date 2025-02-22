import "./About.css";
import avatarNikita from "../Imagez/avatar-nikita.jpg";
import avatarChristian from "../Imagez/avatar-christian.jpg";
import avatarCruz from "../Imagez/avatar-cruz.jpg";
import avatarDrake from "../Imagez/avatar-drake.jpg";
import avatarGriffin from "../Imagez/avatar-griffin.jpg";
import avatarAden from "../assets/avatar-aden.jpg";
import DirectorCard from "../components/DirectorCard";
import ContactBanner from "../components/ContactBanner";

const About = () => {
  const directors = [
    {
      id: 1,
      image: "/Imagez/avatar-nikita.jpg",
      person: "Nikita Marks",
      position: "Founder & CEO",
      quote:
        "It always amazes me how much talent there is in every corner of the globe.",
    },
    {
      id: 2,
      image: avatarChristian,
      person: "Cristian Duncan",
      position: "Co-founder & COO",
      quote:
        "Distributed teams required unique processes. You need to approach work in a new way.",
    },
    {
      id: 3,
      image: avatarCruz,
      person: "Cruz Hamer",
      position: "Co-founder & CTO",
      quote:
        "Technology is at the forefront of enabling distributed teams. That's where we come in.",
    },
    {
      id: 4,
      image: avatarDrake,
      person: "Drake Heaton",
      position: "Business Development Lead",
      quote:
        "Hiring similar people from similar backgrounds is a surefire way to stunt innovation.",
    },
    {
      id: 5,
      image: avatarGriffin,
      person: "Griffin Wise",
      position: "Lead Marketing",
      quote:
        "Unique perspectives shape unique products, which is what you need to survive these days.",
    },
    {
      id: 6,
      image: avatarAden,
      person: "Aden Allan",
      position: "Head of Talent",
      quote:
        "Empowered teams create truly amazing products. Set the north star and let them follow it.",
    },
  ];

  return (
    <div className="about">
      <section className="about-company">
        <h1>About</h1>
        <p>
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
      </section>
      <section className="directors">
        <h2>Meet the Directors</h2>
        <div className="director-container">
          {directors.map((director) => (
            <DirectorCard key={director.id} {...director} />
          ))}
        </div>
      </section>
      <section className="clients">
        <h2>Some of our clients</h2>
        <div className="client-logos">
          <div className="client-logo">
            <img src="/Imagez/logo-the-verge.png" alt="The Verge" />
          </div>
          <div className="client-logo">
            {/* <img src={logoJakartaPost} alt="Jakarta Post" /> */}
            <img src="/Imagez/logo-jakarta-post.png" alt="Jakarta Post" />
          </div>
          <div className="client-logo">
            <img src="/Imagez/logo-the-guardian.png" alt="The Guardian" />
          </div>
          <div className="client-logo">
            <img src="/Imagez/logo-tech-radar.png" alt="Tech Radar" />
          </div>
          <div className="client-logo">
            <img src="/Imagez/logo-gadgets-now.png" alt="Gadgets Now" />
          </div>
        </div>
      </section>
      <ContactBanner />
    </div>
  );
};

export default About;
