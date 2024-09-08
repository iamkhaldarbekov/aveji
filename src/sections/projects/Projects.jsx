import project from '../../assets/img/project.png';
import project1 from '../../assets/img/project1.png';
import project2 from '../../assets/img/project2.png';
import project3 from '../../assets/img/project3.png';
import project4 from '../../assets/img/project4.png';
import project5 from '../../assets/img/project5.png';

export default function Projects() {
  return (
    <div id='projects' className="sm:mb-section-mob mb-section">
      <h2 className="sm:h2-mob sm:mb-[20px] mb-[32px] h2">Проекты</h2>
      <div className='sm:flex sm:overflow-auto grid grid-cols-3 gap-[20px]'>
        <img className='sm:mr-[20px] sm:h-[352px]' src={project} alt="project" />
        <img className='sm:mr-[20px] sm:h-[352px]' src={project1} alt="project" />
        <img className='sm:mr-[20px] sm:h-[352px]' src={project2} alt="project" />
        <img className='sm:mr-[20px] sm:h-[352px]' src={project3} alt="project" />
        <img className='sm:mr-[20px] sm:h-[352px]' src={project4} alt="project" />
        <img className='sm:mr-[20px] sm:h-[352px]' src={project5} alt="project" />
      </div>
    </div>
  )
}