"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { DeleteIcon } from "@/elements/icon";
import { UpdateUser, User } from "@/model";
import { uploadProfile } from "@/server/storage";
import { ReloadIcon } from "@radix-ui/react-icons";
import ky from "ky";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export default function UserProfile() {
   const router = useRouter();

   const [user, setUser] = useState<User>(new User({}));
   const [isUserLoading, setIsUserLoading] = useState(true);
   const [isUserUpdating, setIsUserUpdating] = useState(false);
   const [update, setUpdate] = useState<UpdateUser>(new UpdateUser({}));
   const [preview, setPreview] = useState<string | null>(null);
   const [file, setFile] = useState<File | null>(null);
   const ref = useRef<HTMLInputElement>(null);

   useEffect(() => {
      const fetchUser = async () => {
         try {
            setIsUserLoading(true);
            const res = await ky.get("/api/user").json();
            setUser(new User((res as any).data));
            setPreview((res as any).data.profilePic);
         } catch (error) {
            console.error("Error while fetching user data", error);
         } finally {
            setIsUserLoading(false);
         }
      };
      fetchUser();
   }, []);

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
         setIsUserUpdating(true);

         update.bio = user.bio ?? "";
         update.age = user.age ?? 0;
         update.dateOfBirth = user.dateOfBirth ?? "";
         update.profilePic = user.profilePic ?? "";
         await ky.post("/api/user", { json: update }).json();
         toast({
            title: "User Updated",
            description: "Your profile has been updated successfully",
         });
      } catch (error) {
         console.error("Error while updating user data", error);
         toast({
            title: "Error",
            description: "Error while updating user data",
         });
      } finally {
         setIsUserUpdating(false);
      }
   };
   useEffect(() => {
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setPreview(reader.result as string);
         };
         reader.readAsDataURL(file);
      }
   }, [file]);

   const clearImage = () => {
      setPreview(null);
      setFile(null);
      setUser(new User({ ...user, profilePic: "" }));
      if (ref.current) {
         ref.current.value = "";
      }
   };

   const logOut = async () => {
      try {
         await ky.get("/api/logout");
         toast({
            title: "Logged out",
            description: "You have been logged out successfully",
         });
         router.push("/login");
      } catch (error) {
         console.error("Error while logging out", error);
         toast({
            title: "Error",
            description: "Error while logging out",
         });
      }
   };

   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files as FileList;
      setFile(files[0]);
      const url = await uploadProfile(files[0]);
      setUser(new User({ ...user, profilePic: url }));
   };

   if (isUserLoading) {
      return (
         <section
            id="basic-info"
            className="bg-background rounded-lg border shadow-sm p-6"
         >
            <h2 className="text-xl font-semibold mb-4">Basic Info</h2>
            <div className="grid gap-4">
               {[...Array(6)].map((_, i) => (
                  <div key={i} className="grid gap-2">
                     <Skeleton className="h-4 w-1/4" />
                     <Skeleton className="h-10 w-full" />
                  </div>
               ))}
            </div>
         </section>
      );
   }

   const parseDate = (date: string) => {
      if (!date) return "";
      const d = new Date(date);
      return d.toISOString().split("T")[0];
   };

   return (
      <section
         id="basic-info"
         className="bg-background rounded-lg border shadow-sm p-6"
      >
         <h2 className="text-xl font-semibold mb-4">Basic Info</h2>
         <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
               <Label htmlFor="name">Name</Label>
               <Input
                  id="name"
                  disabled
                  value={user?.firstName + " " + user?.lastName}
               />
            </div>
            <div className="grid gap-2">
               <Label htmlFor="age">Age</Label>
               <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  min={18}
                  value={user?.age ?? ""}
                  onChange={(e) =>
                     setUser(
                        new User({
                           ...user,
                           age: parseInt(e.target.value),
                        })
                     )
                  }
               />
            </div>
            <div className="grid gap-2">
               <Label htmlFor="email">Email</Label>
               <Input
                  id="email"
                  type="email"
                  disabled
                  value={user?.email ?? ""}
               />
            </div>
            <div className="grid gap-2">
               <Label htmlFor="bio">Bio</Label>
               <Textarea
                  id="bio"
                  rows={3}
                  value={user?.bio ?? ""}
                  onChange={(e) =>
                     setUser(new User({ ...user, bio: e.target.value }))
                  }
               />
            </div>
            <div className="flex items-center gap-4">
               <div className="relative h-32 w-32 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                  {preview ? (
                     <>
                        <Image
                           src={preview}
                           alt="Image Preview"
                           layout="fill"
                           objectFit="cover"
                           className="rounded-full"
                        />
                        <button
                           onClick={clearImage}
                           className="absolute top-2 right-2 bg-white rounded-full p-1"
                           aria-label="Remove Image"
                        >
                           <DeleteIcon className="w-5 h-5 text-red-500" />
                        </button>
                     </>
                  ) : (
                     <div className="flex items-center justify-center h-full text-gray-500">
                        No Image
                     </div>
                  )}
               </div>
               <div className="flex flex-col gap-2">
                  <Input
                     accept="image/*"
                     onChange={handleFileChange}
                     id="profile-picture"
                     type="file"
                     ref={ref}
                  />
               </div>
            </div>
            <div className="grid gap-2">
               <Label htmlFor="date-of-birth">Date of Birth</Label>
               <Input
                  id="date-of-birth"
                  type="date"
                  value={parseDate(user?.dateOfBirth ?? "")}
                  onChange={(e) =>
                     setUser(
                        new User({
                           ...user,
                           dateOfBirth: e.target.value,
                        })
                     )
                  }
               />
            </div>
            <Button disabled={isUserUpdating} type="submit" className="mt-4">
               {isUserUpdating ? (
                  <>
                     <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                     Please wait
                  </>
               ) : (
                  <>Update Profile</>
               )}
            </Button>
            <Button
            variant={"destructive"}
            type="button" onClick={logOut} className="mt-4">
               Log Out
            </Button>
         </form>
      </section>
   );
}
