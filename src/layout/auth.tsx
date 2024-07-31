import Image from "next/image";
import Link from "next/link";
import { JSX, SVGProps, ReactNode } from "react";

interface AuthLayoutProps {
   title: string;
   description: string;
   imageUrl: string;
   children: ReactNode;
   linkText: string;
   linkHref: string;
   linkLabel: string;
}

export default function AuthLayout({
   title,
   description,
   imageUrl,
   children,
   linkText,
   linkHref,
   linkLabel,
}: AuthLayoutProps) {
   return (
      <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
         <div className="bg-black flex flex-col items-start justify-center gap-6 px-8 py-12 text-primary-foreground md:px-12 lg:px-16">
            <div className="space-y-4">
               <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  {title}
               </h1>
               <p className="max-w-md text-lg">{description}</p>
            </div>
            <Image
               src={imageUrl}
               alt="Auth"
               width={400}
               height={400}
               className="max-w-[300px] sm:max-w-[400px] rounded-lg shadow-lg"
            />
         </div>
         <div className="relative flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-4">{children}</div>
            <div className="absolute top-4 right-4">
               <Link
                  href={linkHref}
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
               >
                  {linkLabel}
               </Link>
            </div>
         </div>
      </div>
   );
}

export function ChromeIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <circle cx="12" cy="12" r="10" />
         <circle cx="12" cy="12" r="4" />
         <line x1="21.17" x2="12" y1="8" y2="8" />
         <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
         <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
      </svg>
   );
}
