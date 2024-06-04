import React from 'react';
import FeatureBox from './FeaturesBox/FeatureBox';
import { faPencilAlt, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="features bg-black">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-none d-lg-block">
            <FeatureBox
              icon={faPencilAlt}
              title="All Courses"
              description="Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
              link="More Info"
            />
          </div>
          <div className="col-lg-4  d-none d-lg-block">
            <FeatureBox
              icon={faGraduationCap}
              title="Virtual Class"
              description="Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
              link="Details"
            />
          </div>
          <div className="col-lg-4  d-none d-lg-block">
            <FeatureBox
              icon={faBook}
              title="Real Meeting"
              description="Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
              link="Read More"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
