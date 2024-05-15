import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex justify-center flex-col m-5 items-center">
    <h1 className="text-[25px] font-semibold mb-6">Welcome to Multi Move!</h1>
     <SignUp />;
    </div>
  )
}