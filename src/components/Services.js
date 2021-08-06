import React from 'react'

import ServiceItem from '../elements/ServiceItem'

function Services(props) {

    const services = [
        {
            icon: 'ui-keyboard',
            name: 'Development',
            list: ['JavaScript', 'Express', 'Node', 'PostgreSQL']
        },
        {
            icon: 'eye-alt',
            name: 'Visual Stuff**',
            list: ['React', 'Bootstrap', 'HTML', 'CSS']
        },
    ]
    const displayServices = services.map((item, index) => <ServiceItem key={index} icon={item.icon} title={item.name} list={item.list} />)

    return(
        <section id="aboutServices" name="aboutServices">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 services-top services-left anim-bot">
                        {props.children}
                    </div>

                    <div className="col-lg-1 col-xl-1"></div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5">
                        <div className="row">
                            {displayServices}
                        </div>
                        <p>* Node.js does a lot of stuff that would really have mucked up that bullet point, like Locally Compiling and Running JavaScript, Package Managment with NPM / NPX, Testing, Workflow Scripting and a bunch of other stuff I don't completely understand right now.</p>
                        <p>** I hesitate to call anything that I do "design" because my spouse, <a href="http://www.rebekahdenney.com">Rebekah Denney</a>, is a brilliant, educated graphic designer and calling what I do "design" would be egregious a theft as calling myself a "doctor" because I know how to take asprin when I have a headache.</p>
                    </div>

                </div>
            </div>
        </section>
    )

}

export default Services