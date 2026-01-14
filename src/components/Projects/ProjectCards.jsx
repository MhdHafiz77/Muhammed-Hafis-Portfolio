import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

/**
 * ProjectCards Component
 *
 * Props:
 *  imgPath: string       -> Image URL for the project card
 *  title: string         -> Project title
 *  description: string   -> Short description of the project
 *  ghLink: string        -> GitHub repository link
 *  demoLink?: string     -> Live demo link (optional)
 *  isBlog?: boolean      -> True if the project is a blog
 */

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog }) {
  const links = [
    { icon: <BsGithub />, url: ghLink, label: isBlog ? "Blog" : "GitHub" },
    ...(demoLink && !isBlog ? [{ icon: <CgWebsite />, url: demoLink, label: "Demo" }] : []),
  ];

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={`${title} project image`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>

        {links.map((link, idx) => (
          <Button
            key={idx}
            variant="primary"
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Open ${title} ${link.label} link`}
            style={{ marginLeft: idx !== 0 ? "10px" : "0" }}
          >
            {link.icon} &nbsp; {link.label}
          </Button>
        ))}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
