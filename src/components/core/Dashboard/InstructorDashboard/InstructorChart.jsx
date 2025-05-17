import { useState, useMemo } from "react"
import { Chart, registerables } from "chart.js"
import { Pie } from "react-chartjs-2"

Chart.register(...registerables)

export default function InstructorChart({ courses }) {
  const [currChart, setCurrChart] = useState("students")

  // Labels from course names
  const labels = useMemo(
    () => courses.map((course) => course.courseName),
    [courses]
  )

  // Keep color consistent per chart render
  const chartColors = useMemo(() => {
    const base = [
      "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6", "#EC4899", "#F43F5E", "#14B8A6",
    ]
    return courses.map((_, idx) => base[idx % base.length])
  }, [courses.length])

  // Data for chart based on type
  const data = {
    labels,
    datasets: [
      {
        label: currChart === "students" ? "Enrolled Students" : "Income Generated",
        data: courses.map((course) =>
          currChart === "students"
            ? course.totalStudentsEnrolled
            : course.totalAmountGenerated
        ),
        backgroundColor: chartColors,
        borderColor: "#0F172A",
        borderWidth: 2,
      },
    ],
  }

  // Chart config
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#E5E7EB",
          font: { size: 13, family: "Inter, sans-serif" },
        },
      },
    },
  }

  return (
    <div className="flex flex-1 flex-col gap-y-5 rounded-2xl bg-richblack-800 p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-richblack-5">📊 Visual Insights</h2>
        <div className="flex gap-x-2">
          {["students", "income"].map((type) => (
            <button
              key={type}
              onClick={() => setCurrChart(type)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200
                ${
                  currChart === type
                    ? "bg-yellow-50 text-richblack-900"
                    : "bg-transparent text-yellow-100 border border-yellow-100 hover:bg-yellow-100 hover:text-richblack-900"
                }`}
            >
              {type === "students" ? "Students" : "Income"}
            </button>
          ))}
        </div>
      </div>

      {courses.length === 0 ? (
        <div className="mt-10 text-center text-richblack-300">
          No data available to display the chart.
        </div>
      ) : (
        <div className="relative h-[300px] w-full md:h-[350px]">
          <Pie data={data} options={options} />
        </div>
      )}
    </div>
  )
}
