import ContactBanner from "../components/ContactBanner";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="find">
        <div className="find__content">
          <h1 className="find__title">
            Find the best <span className="find__title--coral">talent</span>
          </h1>
          <p className="find__description">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </section>
      <section className="build">
        <div className="build__content">
          <h2 className="build__title">
            Build & manage distributed teams like no one else.
          </h2>
          <div className="build__items">
            <div className="build__item">
              <img
                // src={iconPerson}
                src="/Imagez/icon-person.svg"
                alt="Experienced Individuals"
                className="build__icon"
              />
              <div className="build__text">
                <h3>Experienced Individuals</h3>
                <p>
                  Our network is made up of highly experienced professionals who
                  are passionate about what they do.
                </p>
              </div>
            </div>
            <div className="build__item">
              <img
                // src={iconCog}
                src="/Imagez/icon-cog.svg"
                alt="Easy to Implement"
                className="build__icon"
              />
              <div className="build__text">
                <h3>Easy to Implement</h3>
                <p>
                  Our processes have been refined over years of implementation
                  meaning our teams always deliver.
                </p>
              </div>
            </div>
            <div className="build__item">
              <img
                // src={iconChart}
                src="/Imagez/icon-chart.svg"
                alt="Enhanced Productivity"
                className="build__icon"
              />
              <div className="build__text">
                <h3>Enhanced Productivity</h3>
                <p>
                  Our customized platform with in-built analytics helps you
                  manage your distributed teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="delivering">
        <div className="delivering__content">
          <h2 className="delivering__title">
            Delivering real results for top companies. Some of our{" "}
            <span className="delivering__title--rapture-blue">
              success stories.
            </span>
          </h2>
          <div className="delivering__quotes">
            <div className="delivering__quote">
              <p>
                “The team perfectly fit the specialized skill set required. They
                focused on the most essential features helping us launch the
                platform eight months faster than planned.”
              </p>
              <h3>Kady Baker</h3>
              <p className="name__tag">Product Manager at Bookmark</p>
              <img src="/Imagez/avatar-aiysha.jpg" alt="Kady Baker" />
            </div>
            <div className="delivering__quote">
              <p>
                “We needed to automate our entire onboarding process. The team
                came in and built out the whole journey. Since going live, user
                retention has gone through the roof!”
              </p>
              <h3>Aiysha Reese</h3>
              <p className="name__tag">Founder of Manage</p>
              <img src="/Imagez/avatar-aiysha.jpg" alt="Aiysha Reese" />
            </div>
            <div className="delivering__quote">
              <p>
                “Amazing. Our team helped us build an app that delivered a new
                experience for hiring a physio. The launch was an instant
                success with 100k downloads in the first month.”
              </p>
              <h3>Arthur Clarke</h3>
              <p className="name__tag">Co-founder of MyPhysio</p>
              <img src="/Imagez/avatar-arthur.jpg" alt="Arthur Clarke" />
            </div>
          </div>
        </div>
      </section>
      <ContactBanner />
    </div>
  );
};

export default Home;
