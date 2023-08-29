// import React from 'react'

import Donate from "./Donate";

function About() {
  return (
    <>
      <div className="about  row">
        <div className="col-lg-6">
          <div className="topic px-3 ">About</div>
          <div className="para mx-5">
            <p>
              Embracing a green lifestyle is imperative for the well-being of
              our planet and future generations. By transitioning to sustainable
              practices and renewable energy sources, we can mitigate the
              devastating effects of climate change, preserve biodiversity, and
              safeguard vital ecosystems. Going green not only reduces carbon
              emissions and pollution but also fosters innovation, creating new
              economic opportunities and green jobs. This holistic approach
              prioritizes environmental balance, ensures resource longevity, and
              ultimately strives for a harmonious coexistence between humanity
              and nature, securing a healthier and more prosperous future for
              all.
            </p>
            <p>
              Moreover, adopting green practices cultivates a sense of
              responsibility and stewardship, encouraging individuals,
              communities, and industries to make conscientious choices that
              minimize their ecological footprint. The shift towards sustainable
              agriculture, efficient transportation, and waste reduction not
              only reduces strain on finite resources but also promotes a
              cleaner and healthier living environment. By going green, we can
              inspire a cultural shift towards mindful consumption and mindful
              living, fostering a global movement that recognizes the
              interconnectedness of all life forms and the importance of
              ensuring a balanced, thriving planet for generations to come.
            </p>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="topic px-3 ">Donate</div>
          <p>
            Join us in nurturing a greener world and making a lasting impact
            through your generous support. Every donation you make to our NGO
            for greenery goes directly towards planting trees, restoring
            ecosystems, and fostering environmental sustainability. Your
            contribution helps combat deforestation, reduce carbon footprints,
            and create habitats for wildlife. With your support, we can turn
            barren landscapes into thriving green spaces, ensuring a healthier
            planet for generations to come. Together, let&apos;s sow the seeds
            of a greener future and watch as our collective efforts blossom into
            a more vibrant and sustainable world. Your donation, no matter the
            size, fuels our mission to create a better environment for all.
          </p>
          <Donate />
        </div>
      </div>
    </>
  );
}

export default About;
