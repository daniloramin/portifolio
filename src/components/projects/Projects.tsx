import { StyledProjects, StyledProjectBox, StyledTechnologyBadge } from "./style";
import { SectionTitle } from "@components/sectionTitle";

export const Projects = () => {
  return (
    <div className="width">
      <SectionTitle $color="primary">Projects</SectionTitle>

      <StyledProjects>
        <StyledProjectBox>
          <div className="left">
            <img src="https://placeholder.co/250x250" alt="" />
          </div>

          <div className="right">
            <h3>Lorem ipsum dolor sit.</h3>

            <div className="technologies">
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi voluptates
              veniam. Deserunt unde vero tempore aperiam quaerat deleniti voluptatum dolor alias
              earum.
            </p>
          </div>
        </StyledProjectBox>

        <StyledProjectBox>
          <div className="left">
            <img src="https://placeholder.co/250x250" alt="" />
          </div>

          <div className="right">
            <h3>Lorem ipsum dolor sit.</h3>

            <div className="technologies">
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi voluptates
              veniam. Deserunt unde vero tempore aperiam quaerat deleniti voluptatum dolor alias
              earum.
            </p>
          </div>
        </StyledProjectBox>

        <StyledProjectBox>
          <div className="left">
            <img src="https://placeholder.co/250x250" alt="" />
          </div>

          <div className="right">
            <h3>Lorem ipsum dolor sit.</h3>

            <div className="technologies">
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi voluptates
              veniam. Deserunt unde vero tempore aperiam quaerat deleniti voluptatum dolor alias
              earum.
            </p>
          </div>
        </StyledProjectBox>

        <StyledProjectBox>
          <div className="left">
            <img src="https://placeholder.co/250x250" alt="" />
          </div>

          <div className="right">
            <h3>Lorem ipsum dolor sit.</h3>

            <div className="technologies">
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
              <StyledTechnologyBadge src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi voluptates
              veniam. Deserunt unde vero tempore aperiam quaerat deleniti voluptatum dolor alias
              earum.
            </p>
          </div>
        </StyledProjectBox>
      </StyledProjects>
    </div>
  );
};
