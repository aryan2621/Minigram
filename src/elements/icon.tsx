import React, { SVGProps } from "react";

interface IconProps extends JSX.IntrinsicAttributes, SVGProps<SVGSVGElement> {
   children: React.ReactNode;
}

function IconBase({ children, ...props }: IconProps) {
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
         {children}
      </svg>
   );
}

export function BriefcaseIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
         <rect width="20" height="14" x="2" y="6" rx="2" />
      </IconBase>
   );
}

export function HeartIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </IconBase>
   );
}

export function MessageCircleIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </IconBase>
   );
}

export function ShareIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
         <polyline points="16 6 12 2 8 6" />
         <line x1="12" x2="12" y1="2" y2="15" />
      </IconBase>
   );
}

export function HomeIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
         <polyline points="9 22 9 12 15 12 15 22" />
      </IconBase>
   );
}

export function UserIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
         <circle cx="12" cy="7" r="4" />
      </IconBase>
   );
}

export function MailIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <rect width="20" height="16" x="2" y="4" rx="2" />
         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </IconBase>
   );
}

export function UploadIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
         <polyline points="17 8 12 3 7 8" />
         <line x1="12" x2="12" y1="3" y2="15" />
      </IconBase>
   );
}
export function SettingsIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
         <circle cx="12" cy="12" r="3" />
      </IconBase>
   );
}

export function CircleHelpIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <circle cx="12" cy="12" r="10" />
         <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
         <path d="M12 17h.01" />
      </IconBase>
   );
}

export function ActivityIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
      </IconBase>
   );
}
export function DeleteIcon(
   props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
   return (
      <IconBase {...props}>
         <path d="M3 6h18" />
         <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
         <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
         <line x1="10" x2="10" y1="11" y2="17" />
         <line x1="14" x2="14" y1="11" y2="17" />
      </IconBase>
   );
}
function FrownIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
   return (
      <IconBase {...props}>
         <circle cx="12" cy="12" r="10" />
         <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
         <line x1="9" x2="9.01" y1="9" y2="9" />
         <line x1="15" x2="15.01" y1="9" y2="9" />
      </IconBase>
   )
}