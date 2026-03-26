import Button from "@mui/material/Button";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

function MyEducation() {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      <h1 className="text-center">My Education</h1>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          <h2>2023-Present</h2>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h1>Mapua University</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit architecto minima laboriosam illum unde eligendi, esse
            sequi eum exercitationem sapiente deserunt quod numquam? Laboriosam
            obcaecati ipsum voluptas similique! Pariatur, ducimus!
          </p>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          <h2>2021-2023</h2>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h1>iACADEMY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit architecto minima laboriosam illum unde eligendi, esse
            sequi eum exercitationem sapiente deserunt quod numquam? Laboriosam
            obcaecati ipsum voluptas similique! Pariatur, ducimus!
          </p>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          <h2>2021-2013</h2>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <h1>Notre Dame of Greater Manila</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit architecto minima laboriosam illum unde eligendi, esse
            sequi eum exercitationem sapiente deserunt quod numquam? Laboriosam
            obcaecati ipsum voluptas similique! Pariatur, ducimus!
          </p>
          <Button variant="contained" color="primary">
            Learn More
          </Button>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default MyEducation;
