"use client";
import * as z from "zod";
import { SubmitHandler, useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SuccessDialog } from "./sucess-dialog";
import { useState } from "react";

type ReminderFormSchemaType = z.infer<typeof reminderFormSchema>;

export const reminderFormSchema = z.object({
  email: z.string().min(1, { message: "Valid email required!" }),
});

const CreateReminder = () => {
  const [openModal, setopenModal] = useState(false);
  const form = useForm<ReminderFormSchemaType>({
    resolver: zodResolver(reminderFormSchema),
  });

  const onSubmit: SubmitHandler<ReminderFormSchemaType> = (formData) => {
    console.log("Form data submitted:", formData);
    setopenModal(true);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)(e);
  };

  const handleModal = () => {
    setopenModal(!openModal);
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4 pt-6">
        <FormField
          control={form.control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <div className="flex justify-between">
                <FormLabel>Email address</FormLabel>
                <div className="text-errorColor">
                  <FormMessage />
                </div>
              </div>
              <FormControl>
                <Input
                  className={`h-[56px] cursor-pointer rounded-lg ${
                    form.formState.errors.email
                      ? "border-errorColor bg-errorColor/20 placeholder:text-errorColor"
                      : "bg-white placeholder:text-emailColor/20"
                  } `}
                  type="email"
                  placeholder="email@company.com"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="outline"
          className="h-[56px] w-full cursor-pointer rounded-lg bg-emailColor text-white hover:bg-gradient-to-b hover:from-topGradient hover:to-bottomGradient"
        >
          Subscribe to monthly newsletter
        </Button>
      </form>

      {form.formState.isSubmitSuccessful && (
        <SuccessDialog
          openModal={openModal}
          handleModal={handleModal}
          email={form.getValues("email")}
        />
      )}
    </Form>
  );
};

export default CreateReminder;
