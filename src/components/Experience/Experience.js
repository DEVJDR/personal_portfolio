import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Experience.css'

const Projects = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section projects'>
      <h2 className='section__title'>Experience</h2>
      <div className='projects__grid'>
        {experience.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
