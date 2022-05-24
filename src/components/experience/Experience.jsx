import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What We Do</h5>
      <h2>Track The Records</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Optimizing graphics and page speed for enhanced user experience</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Create tools that enhance user interaction in any browser</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Frameworks and Libraries</h4>
              <small className='text-light'>Developing features to make websites mobile-friendly</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Cross Browser Testing</h4>
              <small className='text-light'>Checking for brand consistency across the website</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Web Performance Optimization (WPO)</h4>
              <small className='text-light'>Saying NO to slow-loading websites</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Search Engine Optimization (SEO)</h4>
              <small className='text-light'>Implementing on-site search engine optimization</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Backend Programming Languages</h4>
              <small className='text-light'>Java, Python, PHP, etc</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Databases</h4>
              <small className='text-light'>MySQL, SQL, PostgreSQL, MongoDB, etc</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>APIs</h4>
              <small className='text-light'>JSON, SOAP, REST, GSON, etc</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Version Control</h4>
              <small className='text-light'>AWS Code Commit, GitHub, GitLab, etc</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Cross Browser Testing</h4>
              <small className='text-light'>Checking for brand consistency across the website</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Server Handling</h4>
              <small className='text-light'>Docker, Kubernetes,etc</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__products'>
          <h3>Software and Web Products</h3>
          <div className='experience__content'>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Blogs</h4>
              <small className='text-light'>Creating, maintenance and running blogs</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>E-Commerce</h4>
              <small className='text-light'>Creating and maintenance of sites to buy and sell physical goods, services, and digital products</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Content Writing and Creation</h4>
              <small className='text-light'>Creating entertaining or educational material to be expressed through any medium or channel</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Admin Dashboards</h4>
              <small className='text-light'>Providing important overview information about the system.</small>
              </div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Templates and responsive sites</h4>
              <small className='text-light'>Predesigned resources and responce to current device</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__graphics'>
          <h3>Graphic Designs</h3>
          <div className='experience__content'>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div><h4>UI/UX</h4></div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div><h4>Logos, Flyers, Stationeries, etc</h4></div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div><h4>3D Animation and Motion Graphics</h4></div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div><h4>Video and Photo editing</h4></div>
            </article>
            <article className='experence__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div><h4>Photography</h4></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience