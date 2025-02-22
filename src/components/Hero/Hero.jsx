
import heroimage from "../../assets/Guido.png"
import { TypeAnimation } from "react-type-animation"

const Hero = () => {
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">

            <div className="col-span-1 my-auto pr-10 mx-auto w-[500px] h-auto lg:w-[500px]" id="unico">
                <img src={heroimage} alt="hero image"/>
            </div>

            <div className="col-span-2 px-5 my-auto">
                <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
                    <span className="primary-color">
                        Hi, I am
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "FullStack Dev",
                            1000,
                            "Web Designer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className="text-white sm:text-lg my-6 lg:text-xl">
                    My name is Guido Contartese and i have +1 year of experience in
                    Web Development
                </p>

                <div className="my-8">
                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1ljcqymbXhCQaU5pZlDpEzFKzWQso0xrK&export=download" className="px-6 py-3 w-full rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                        Download CV
                    </a>
                    <a href="#contact" className="mx-3 px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none">
                        Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero