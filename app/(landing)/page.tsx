import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

const LandingPage = () => {
  return (
    <div>
        <div>
           <SignIn />
        </div>  
    </div>
  );
}

export default LandingPage;