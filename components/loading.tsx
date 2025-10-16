export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFCF8] dark:bg-[#0F1419]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-8 h-8 bg-[#2D5A27] dark:bg-[#4A7C59] rounded-full animate-pulse"></div>
        <p className="text-[#666666] dark:text-[#A0A0A0]">Loading sayshot...</p>
      </div>
    </div>
  )
}
