import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BriefcaseBusiness, X } from "lucide-react";

const Career = () => {
  return (
    <div className="bg-[#0D1116] pb-10 px-8">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl text-white font-bold">Histoire</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Juillet 2025 - en parallèle de mon CDI"
            iconStyle={{ background: "#851DBF", color: "rgb(39, 40, 34)" }}
            icon={<BriefcaseBusiness className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title">
              Développeur React - <i>Formation</i>
            </h3>
            <span>Eiffage</span>
            <p>
              Certification RNCP37805 - BLOC3 - Développement site e-commerce,
              application de géolocalisation de restaurants, API RESTful
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - aujourd'hui"
            iconStyle={{ background: "#851DBF", color: "rgb(39, 40, 34)" }}
            icon={<BriefcaseBusiness className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title">
              Chef de projet digital - <i>CDI</i>
            </h3>
            <span>Eiffage</span>
            <p>
              Création et gestion de +10 sites internet, mise en place et
              gestion de +400 fiches google, tutorat, montage vidéo
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2020"
            iconStyle={{ background: "#851DBF", color: "rgb(39, 40, 34)" }}
            icon={<BriefcaseBusiness className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title">
              Webmaster - <i>Alternance et CDI</i>
            </h3>
            <span>Eiffage</span>
            <p>Création et gestion de sites web, montage vidéo, newsletter</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2018"
            iconStyle={{ background: "#851DBF", color: "rgb(39, 40, 34)" }}
            icon={<BriefcaseBusiness className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title">
              Community Manager - <i>Alternance</i>
            </h3>
            <span>Eiffage</span>
            <p>Administration des réseaux sociaux</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Juillet 2015"
            iconStyle={{ background: "#851DBF", color: "rgb(39, 40, 34)" }}
            icon={<BriefcaseBusiness className="text-white" />}
          >
            <h3 className="vertical-timeline-element-title">
              Architecte réseaux - <i>Stage</i>
            </h3>
            <span>Econocom</span>
            <p>
              Mise en place d'infrastructures réseaux, supervision de serveurs
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Career;
