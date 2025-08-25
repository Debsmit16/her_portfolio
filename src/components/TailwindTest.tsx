'use client'

export function TailwindTest() {
  return (
    <div className="bg-red-500 text-white p-4 m-4">
      <h1 className="text-2xl font-bold">Tailwind Test</h1>
      <p className="bg-blue-500 p-2 mt-2">This should be blue background</p>
      <p className="bg-primary-blue p-2 mt-2">This should be custom primary-blue</p>
      <p className="bg-primary-red p-2 mt-2">This should be custom primary-red</p>
    </div>
  )
}
