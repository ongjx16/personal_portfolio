import Link from "next/link"

enum ButtonPurpose {
    Standard,
    Software,
    Design,
  }
  
  interface ButtonProps {
    text: string;
    purpose: ButtonPurpose;
    link: string;
  }
  
  export default function Button({ text, purpose, link }: ButtonProps) {
    // Component logic and JSX
    return (
      <div className='bg-red-300 w-max h-max mr-0 mt-12 absolute p-2 flex justify-end rounded shadow-[0_5px_5px_1px_rgba(0,0,0,0.1)]'>
        {/* Render your button here */}
      </div>
    );
  }