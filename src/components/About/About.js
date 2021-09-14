import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import {about} from '../../portfolio'
import './About.css'

const About = () => {
    const {name, role, description, resume, social} = about

    return (
        <div className='about center'>
            {name && (
                <h1>
                    Hi, I am <span className='about__name'>{name}.</span>
                </h1>
            )}

            {role && <h2 className='about__role'>A {role}.</h2>}
            <p className='about__desc'>{description && description}</p>

            <div className='about__contact center'>
                {resume && (
                    <a href={resume}
                       target="_blank ">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                                target="_blank ">
                                <img align="left" alt="linked-in" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
                            </a>
                        )}
                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                                target="_blank "
                            >
                                <img align="left" alt="linked-in" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
                            </a>
                        )}
                        {social.stack_overflow && (
                            <a
                                href={social.stack_overflow}
                                aria-label='stack-overflow'
                                className='link link--icon'
                                target="_blank "
                            >
                                <img align="left" alt="stack-overflow" src="https://img.shields.io/badge/stack%20overflow-FE7A16?logo=stack-overflow&logoColor=white&style=for-the-badge" />
                            </a>
                        )}


                    </>
                )}
            </div>
        </div>
    )
}

export default About
