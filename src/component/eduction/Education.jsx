import React from "react";
import { IoIosSchool } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Education = () => {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold text-white pt-2 lg:pl-32 py-12">
        My Education
      </h1> */}
      <VerticalTimeline animate={true} lineColor="#0e86d4">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2076-2079"
          iconStyle={{ background: "#003060" }}
          contentStyle={{
            background: "#ffffff",
          }}
          dateClassName="text-white"
          icon={<IoIosSchool color="white" />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Bachelor in Computer Application (BCA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            MMC-Mechi Multiple Campus
          </h4>
          <h5>Bhadrapur</h5>
          <p>Tribhuvan, University</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="text-white"
          date="2072 - 2074"
          iconStyle={{ background: "#003060" }}
          icon={<IoIosSchool color="white" />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Higher Secondary School (+2)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bibhuti Vidya Mandir Higher Secondary School
          </h4>
          <h5>Bhadrapur-10, Dhanusmode, Jhapa</h5>
          <p>N.E.B</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2071-04-01"
          dateClassName="text-white"
          iconStyle={{ background: "#003060" }}
          icon={<IoIosSchool color="white" />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            School Leaving Certificate (SLC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bibhuti Viday Mandir Higher Secondary School
          </h4>
          <h5>Bhadrapur-10,Dhanusmode, Jhapa</h5>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#003060" }}
          icon=""
        />
      </VerticalTimeline>
    </div>
  );
};

export default Education;
