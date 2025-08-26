
import { Button } from "../../../components/common/Button"

const CTASection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 px-4">

        <Button variant="gradient" className="flex gap-2 w-[400px] rounded-full ">
            <span className="text-xl font-bold px-16 mt-1 p-2">Book or Organize Event</span> 
            <span className="text-lg mt-1">
            </span>
          </Button>
    </div>
  )
}

export default CTASection