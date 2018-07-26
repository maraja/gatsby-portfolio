import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ProjectsBanner from '../components/ProjectsBanner'
import { withPrefix } from 'gatsby-link'
import projects from '../projects';

// import { Tag } from 'antd';
// import Tag from 'antd/lib/tag';
// import 'antd/lib/tag/style';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

class Projects extends React.Component {
    render() {

        return (
            <div>

                <ProjectsBanner />

                <div id="main">
                    <section id="one" className="tiles projects">

                        {projects.map((p, index) => (
                            <article style={{backgroundImage: `url(${require(`../assets/images/${p.image}`)})`}}>
                                <header className="major">
                                    <h3>{p.name}</h3>
                                    <p>{p.description}</p>
                                    {p.skills.map((s, index) => <Tag>{s}</Tag>)}
                                </header>
                                <Link to="/landing" className="link primary"></Link>
                            </article>
                        ))}

                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Massa libero</h2>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Get Started</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default Projects