import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import React from "react";

export default function AccountSettings() {
   return (
      <section
         id="account-settings"
         className="bg-background rounded-lg border shadow-sm p-6"
      >
         <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
         <div className="grid gap-4">
            <div className="container mx-auto my-12 px-4 md:px-6 lg:px-8">
               <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                     <CardHeader>
                        <CardTitle>Account Deletion</CardTitle>
                        <CardDescription>
                           Permanently delete your account and all associated
                           data.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="password">Password</Label>
                              <Input
                                 id="password"
                                 type="password"
                                 placeholder="Enter your password"
                                 required
                              />
                           </div>
                           <Button
                              type="submit"
                              variant="destructive"
                              className="w-full"
                           >
                              Delete Account
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Account Transfer</CardTitle>
                        <CardDescription>
                           Transfer your account to another user.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="email">Recipient Email</Label>
                              <Input
                                 id="email"
                                 type="email"
                                 placeholder="Enter recipient email"
                                 required
                              />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="amount">Transfer Amount</Label>
                              <Input
                                 id="amount"
                                 type="number"
                                 placeholder="Enter transfer amount"
                                 required
                              />
                           </div>
                           <Button type="submit" className="w-full">
                              Transfer Account
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Account Deactivation</CardTitle>
                        <CardDescription>
                           Temporarily deactivate your account.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <AlertDialog>
                           <AlertDialogTrigger asChild>
                              <Button variant="destructive" className="w-full">
                                 Deactivate Account
                              </Button>
                           </AlertDialogTrigger>
                           <AlertDialogContent>
                              <AlertDialogHeader>
                                 <AlertDialogTitle>
                                    Are you sure you want to deactivate your
                                    account?
                                 </AlertDialogTitle>
                                 <AlertDialogDescription>
                                    This action cannot be undone. Your account
                                    and all associated data will be temporarily
                                    deactivated.
                                 </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                 <AlertDialogCancel>Cancel</AlertDialogCancel>
                                 <AlertDialogAction>
                                    Deactivate
                                 </AlertDialogAction>
                              </AlertDialogFooter>
                           </AlertDialogContent>
                        </AlertDialog>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Account Backup</CardTitle>
                        <CardDescription>
                           Backup your account data for safekeeping.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="backup-email">Backup Email</Label>
                              <Input
                                 id="backup-email"
                                 type="email"
                                 placeholder="Enter backup email"
                                 required
                              />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="backup-frequency">
                                 Backup Frequency
                              </Label>
                              <Select defaultValue="weekly">
                                 <SelectContent>
                                    <SelectItem value="daily">Daily</SelectItem>
                                    <SelectItem value="weekly">
                                       Weekly
                                    </SelectItem>
                                    <SelectItem value="monthly">
                                       Monthly
                                    </SelectItem>
                                 </SelectContent>
                              </Select>
                           </div>
                           <Button type="submit" className="w-full">
                              Backup Account
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Account Export</CardTitle>
                        <CardDescription>
                           Export your account data for personal use.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="export-format">
                                 Export Format
                              </Label>
                              <Select defaultValue="csv">
                                 <SelectContent>
                                    <SelectItem value="csv">CSV</SelectItem>
                                    <SelectItem value="json">JSON</SelectItem>
                                    <SelectItem value="xml">XML</SelectItem>
                                 </SelectContent>
                              </Select>
                           </div>
                           <Button type="submit" className="w-full">
                              Export Account
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
                  <Card>
                     <CardHeader>
                        <CardTitle>Account Recovery</CardTitle>
                        <CardDescription>
                           Recover your account in case of issues.
                        </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <form className="space-y-4">
                           <div className="space-y-2">
                              <Label htmlFor="recovery-email">
                                 Recovery Email
                              </Label>
                              <Input
                                 id="recovery-email"
                                 type="email"
                                 placeholder="Enter recovery email"
                                 required
                              />
                           </div>
                           <div className="space-y-2">
                              <Label htmlFor="recovery-phone">
                                 Recovery Phone
                              </Label>
                              <Input
                                 id="recovery-phone"
                                 type="tel"
                                 placeholder="Enter recovery phone"
                                 required
                              />
                           </div>
                           <Button type="submit" className="w-full">
                              Recover Account
                           </Button>
                        </form>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>
   );
}
