import React from "react";
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from "./HighlightText";
import CTAButton from  "../HomePage/Button"

const InstructorSection = () => {
  return(
    <div className="mt-16 px-4">
  <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
    
    {/* Image Section */}
    <div className="w-full lg:w-1/2">
      <img
        src={Instructor}
        alt="Instructor"
        className="shadow-white w-full max-w-[500px] mx-auto"
      />
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
      <div className="text-3xl md:text-4xl font-semibold">
        Become an <HighlightText text={"Instructor"} />
      </div>

      <p className="font-medium text-[16px] text-richblack-300 max-w-[500px]">
        Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
      </p>

      <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
          <div className="flex flex-row gap-2 items-center">
            Start Learning Today
          </div>
        </CTAButton>
      </div>
    </div>

  </div>
</div>

  )
}
export default InstructorSection