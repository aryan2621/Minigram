import React from "react";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import {
   BarchartChart,
   LinechartChart,
   PiechartcustomChart,
} from "@/elements/chart";

export default function Activity() {
   return (
      <section
         id="activity"
         className="bg-background rounded-lg border shadow-sm p-6"
      >
         <h2 className="text-xl font-semibold mb-4">Activity</h2>
         <div className="w-full min-h-screen bg-background text-foreground">
            <main className="container mx-auto py-12 px-4 md:px-6 grid gap-12">
               <section>
                  <h2 className="text-2xl font-bold mb-6">Posts</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                     <Card>
                        <CardHeader>
                           <CardTitle>Posts Over Time</CardTitle>
                           <CardDescription>
                              A line chart showing the number of posts per
                              month.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <LinechartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                     <Card>
                        <CardHeader>
                           <CardTitle>Post Engagement</CardTitle>
                           <CardDescription>
                              A bar chart showing the average engagement (likes,
                              comments) per post.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <BarchartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                  </div>
               </section>
               <section>
                  <h2 className="text-2xl font-bold mb-6">Likes</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                     <Card>
                        <CardHeader>
                           <CardTitle>Likes Over Time</CardTitle>
                           <CardDescription>
                              A line chart showing the total number of likes per
                              month.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <LinechartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                     <Card>
                        <CardHeader>
                           <CardTitle>Likes by Post</CardTitle>
                           <CardDescription>
                              A pie chart showing the distribution of likes
                              across your top posts.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <PiechartcustomChart className="aspect-square" />
                        </CardContent>
                     </Card>
                  </div>
               </section>
               <section>
                  <h2 className="text-2xl font-bold mb-6">Comments</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                     <Card>
                        <CardHeader>
                           <CardTitle>Comments Over Time</CardTitle>
                           <CardDescription>
                              A line chart showing the total number of comments
                              per month.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <LinechartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                     <Card>
                        <CardHeader>
                           <CardTitle>Comments by Post</CardTitle>
                           <CardDescription>
                              A bar chart showing the number of comments per
                              post.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <BarchartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                  </div>
               </section>
               <section>
                  <h2 className="text-2xl font-bold mb-6">Followers</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                     <Card>
                        <CardHeader>
                           <CardTitle>Followers Over Time</CardTitle>
                           <CardDescription>
                              A line chart showing the total number of followers
                              per month.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <LinechartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                     <Card>
                        <CardHeader>
                           <CardTitle>Follower Growth</CardTitle>
                           <CardDescription>
                              A bar chart showing the month-over-month growth in
                              followers.
                           </CardDescription>
                        </CardHeader>
                        <CardContent>
                           <BarchartChart className="aspect-[9/4]" />
                        </CardContent>
                     </Card>
                  </div>
               </section>
            </main>
         </div>
      </section>
   );
}
