
import aboutImg from "../../assets/about.jpg"

const About = () => {
    return (
        <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
            <div className="md:grid md:grid-cols-2 sm:py-16">
                <div className="mt-4 md:mt-0 text-left flex ">
                    <div className="my-auto mx-6">
                        <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                        <p className="text-base lg:text-lg">
                            My name is Guido Contartese i am an Argentinian Fullstack Developer. I love making sites and creating aesthetical solutions for my clients while
                            while sharing my experience with colleagues and partners. I have been doing this for +2 years learning by myself and as a freelancer and one year ago started to do it professionally acheiving a degree in Fullstack Development. 
                            My main techs are JavaScript, React, Next, and Redux for client-side views, as well as Node.JS, Express, and Sequelize for server-side operations, and, of course, version control with Git.
                            Additionally, my skills extend to managing relational databases with PostgreSQL, MySQL, and API consumption. I wish you the best and hope we could work togheter sometime, if so...contact me!! 
                        </p>
                    </div>
                </div>
                <img className="mx-auto rounded-3xl py-8 md:py-0" src={aboutImg} width={300} height={300} />
            </div>
        </div>
    )
}

export default About