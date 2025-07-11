import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import Footer from '../components/common/Footer'
import ReviewSlider from "../components/common/ReviewSlider"

const Home =() =>{
    return(
        <div>
            <div className='relative mx-auto flex flex-col w-11/12 items-center
             text-white justify-between max-w-maxContent'>
                <Link to= {"/signup"}>
                    <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 
                    transition-all duration-200 hover:scale-95 w-fit'>
                       <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                       transition-all duration-200 group-hover:bg-richblack-900 '>
                        <p>Become an Instructor</p>
                        < FaArrowRight />
                       </div>
                    </div>
                </Link>

                <div className='text-center text-4xl font-semibold mt-7'>
                    Empower Your Future With 
                    <HighlightText text={"Coding Skills"}></HighlightText>
                </div>

                <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-500'>
                    With our online course you can learn at your own pace,from anywhere in the world and get access to wealth of resources  , including hands-on projects,quizzes and
                    personalized feedback from instructors.
                </div>

                <div className='flex flex-row gap-7 mt-8'>
                    <CTAButton active={true}linkto={"/signup"}>
                      Learn More
                    </CTAButton>

                    <CTAButton active={false}linkto={"/login"}>
                    Book a Demo
                    </CTAButton>
                </div>

                <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <video 
                     className="shadow-[20px_20px_rgba(255,255,255)]"
                    muted
                    loop
                    autoPlay
                    playsInline
                    >
                        <source  src ={Banner} type='video/mp4' />

                    </video>
                </div>

                {/*CodeSECTION 1*/}

                <div>
                    <CodeBlocks 
                    className="w-full lg:w-1/2"

                    position={'flex flex-col lg:flex-row'}
                    heading={
                        <div className="text-4xl font-semibold">
                            Unlock Your
                            <HighlightText text={"Coding Potential"}></HighlightText>
                            with our Online Course
                        </div>

                    }
                    subheading={
                        "Our Course are designed and tought by industry experts"
                    }
                    ctabtn1={
                        {
                            btnText: "Try it yourself",
                            linkto: "/signup",
                            active: true,
                        }
                    }

                    ctabtn2={
                        {
                            btnText: "Learn more",
                            linkto: "/login",
                            active: true,
                        }
                    }
                    codeColor={"text-yellow-25"}
                    codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                    backgroundGradient={<div className="codeblock1 absolute"></div>}
                    />
                </div>

                  {/*CodeSECTION 2*/}
                
                  <div>
          <CodeBlocks
          className="w-full lg:w-1/2"

          position={'flex flex-col lg:flex-row'}
            heading={
              <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                Start
                <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              link: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              link: "/signup",
              active: false,
            }}
            codeColor={"text-white"}
            codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
            backgroundGradient={<div className="codeblock2 absolute"></div>}
          />
        </div>

        {/* Explore Section */}
        <ExploreMore />
      </div>

           
            {/*section2*/}

            <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

                <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center 
                justify-between gap-8'>

<div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">

<div className="text-4xl font-semibold lg:w-[45%] ">
                          Get the Skill You need for a

                          <HighlightText text={"Job that is in demand"}></HighlightText> 
                        </div>

                        <div className='flex flex-col gap-10 lg:w-[40%] items-start'>

                        <div className='text-[16px]'>
                        The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
                        </div> 
                        <CTAButton active={true} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>   
                    </div>


                        
                    </div>

                    <TimelineSection/>

                    <LearningLanguageSection/>


                </div>

                


            </div>
            
             {/*section3*/}

             <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between
              bg-richblack-900 text-white'>

                <InstructorSection/>

                <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
             </div>


             {/*section4*/}

             <Footer></Footer>



        </div>
    )
}

export default Home