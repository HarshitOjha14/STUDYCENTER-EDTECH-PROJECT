import React from "react"
import HighlightText from "./HighlightText"
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson  from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className="mt-[130px] mb-32">
        <div className="flex flex-col  gap-5 items-center">

            <div className=" text-4xl font-semibold text-center">
                Your Swiss Knife for
                <HighlightText text={"learning any language"}></HighlightText>
            </div>

            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              using spin making learning multiple languages easy. with 20+ languages realists voice-over,
              process tracking, cusrtom shedule and more.
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
               <img
                 src={know_your_progress}
                 alt="KnowYourProgressImage"
                 className="object-contain  lg:-mr-32"
               />

              <img  
                 src={compare_with_others}
                 alt="KnowYourProgressImage"
                 className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
               />

                <img
                 src={plan_your_lesson}
                 alt="KnowYourProgressImage"
                 className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
               />

            </div>

            <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
              <CTAButton active={true} linkto={"/signup"}>
                  <div>
                    Learn More
                  </div>

              </CTAButton>
            </div>

        </div>

    </div>
  )
}

export default LearningLanguageSection 