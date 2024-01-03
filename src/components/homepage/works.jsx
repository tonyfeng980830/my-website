import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./syracuse_university.png"
								alt="Syracuse University"
								className="work-image"
							/>
							<div className="work-title">Syracuse University</div>
							<div className="work-subtitle">
								Teaching Assistant
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./syracuse_university.png"
								alt="syracuse university"
								className="work-image"
							/>
							<div className="work-title">Syracuse University</div>
							<div className="work-subtitle">
								Full-stack research assistant
							</div>
							<div className="work-duration">2022 - 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
