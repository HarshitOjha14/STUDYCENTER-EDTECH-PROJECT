import IconBtn from "./IconBtn"

export default function ConfirmationModal({ modalData }) {
  if (!modalData) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm px-4 py-6">
      <div className="w-full max-w-md rounded-lg border border-richblack-400 bg-richblack-800 p-6 sm:p-8 shadow-lg max-h-[90vh] overflow-y-auto">
        <p className="text-xl sm:text-2xl font-semibold text-richblack-5">
          {modalData?.text1}
        </p>
        <p className="mt-3 mb-6 text-sm sm:text-base leading-6 text-richblack-200">
          {modalData?.text2}
        </p>
        <div className="flex flex-col sm:flex-row justify-end gap-3">
          <button
            className="w-full sm:w-auto rounded-md bg-richblack-200 py-2 px-4 font-semibold text-richblack-900"
            onClick={modalData?.btn2Handler}
          >
            {modalData?.btn2Text}
          </button>
          <IconBtn
            onClick={modalData?.btn1Handler}
            text={modalData?.btn1Text}
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </div>
  )
}
