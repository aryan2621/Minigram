import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import React from "react";

export default function Support() {
   return (
      <section
         id="help-and-support"
         className="bg-background rounded-lg border shadow-sm p-6"
      >
         <h2 className="text-xl font-bold">Help & Support</h2>
         <main className="container mx-auto py-12 px-4 md:px-6 grid gap-12">
            <section>
               <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                     <CardHeader>
                        <CardTitle>Common Questions</CardTitle>
                        <CardDescription>
                           Answers to the most frequently asked questions.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <Accordion type="single" collapsible>
                           <AccordionItem value="item-1">
                              <AccordionTrigger>How do I delete my account?</AccordionTrigger>
                              <AccordionContent>
                                 To delete your account, go to the settings page
                                 and click the "Delete Account" button. This
                                 will permanently remove your account and all
                                 associated data.
                              </AccordionContent>
                           </AccordionItem>
                           <AccordionItem value="item-2">
                              <AccordionTrigger>How do I change my profile picture?</AccordionTrigger>
                              <AccordionContent>
                                 To change your profile picture, go to the
                                 settings page and click the "Change Profile
                                 Picture" button. You can then upload a new
                                 image from your device.
                              </AccordionContent>
                           </AccordionItem>
                           <AccordionItem value="item-3">
                              <AccordionTrigger>How do I report a post?</AccordionTrigger>
                              <AccordionContent>
                                 To report a post, click the three-dot menu in
                                 the top right of the post and select "Report".
                                 You can then choose the reason for reporting
                                 the post.
                              </AccordionContent>
                           </AccordionItem>
                        </Accordion>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                        <CardDescription>
                           Get in touch with our support team.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="space-y-4">
                           <div className="space-y-1">
                              <Label htmlFor="name">Name</Label>
                              <Input
                                 id="name"
                                 type="text"
                                 placeholder="John Doe"
                              />
                           </div>
                           <div className="space-y-1">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                 id="email"
                                 type="email"
                                 placeholder="john@example.com"
                              />
                           </div>
                           <div className="space-y-1">
                              <Label htmlFor="message">Message</Label>
                              <Textarea
                                 id="message"
                                 rows={4}
                                 placeholder="How can we help you?"
                              />
                           </div>
                           <Button type="submit" className="w-full">
                              Submit
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </section>
         </main>
      </section>
   );
}
