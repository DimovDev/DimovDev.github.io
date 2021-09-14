import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import Tooltip from '@material-ui/core/Tooltip';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
    <>
  <div className='project'>
    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack '>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item '>
            {item}
          </li>
        ))}
      </ul>
    )}

    <span className="project__footer">
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
        rel="noreferrer"
        target='_blank'
      >

        <Tooltip title="source code" enterDelay={500} leaveDelay={200}>
          <GitHubIcon />
        </Tooltip>
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
        rel="noreferrer"
        target='_blank'
      >
        <Tooltip title="live preview" enterDelay={500} leaveDelay={200}>
        <LaunchIcon />
        </Tooltip>
      </a>
    )}
  </span>
  </div>
    </>
)

export default ProjectContainer
