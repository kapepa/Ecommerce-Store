"use client"

import { UserType, usePersonalInfoModal } from "@/hooks/use-personal-info-modal";
import { PersonalInfoSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import { Separator } from "./ui/separator";
import { InputPhone } from "./ui/input-phone";

const PersonalInfoForm: FC = () => {
  const getInfo = usePersonalInfoModal(state => state.info);
  const setInfo = usePersonalInfoModal(state => state.setInfo);
  const [initial, setInitial] = useState<UserType | undefined>(undefined)

  useLayoutEffect(() => {
    setInitial(getInfo)
  },[])

  const form = useForm<z.infer<typeof PersonalInfoSchema>>({
    resolver: zodResolver(PersonalInfoSchema),
    defaultValues: initial || {
      name: "",
      phone: "",
      address: "",
    },
  })

  function onSubmit(values: z.infer<typeof PersonalInfoSchema>) {
    setInfo(values);
    
  }

  return (
    <Form {...form}>
      <form 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-8 grid w-full max-w-md"
      >
        <div
          className="grid w-full col-span-1 gap-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Your name" 
                      onChange={(e) => {
                        setInfo({ name: field.value });
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <InputPhone
                      placeholder="Your phone" 
                      defaultValue={field.value}
                      onChange={(e) => {
                        setInfo({ phone: field.value });
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder="Your address" 
                      onChange={(e) => {
                        setInfo({ address: field.value });
                        field.onChange(e)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </div>
        <Separator />
        <div
          className="flex justify-center"
        >
          <Button 
            type="submit"
            className="px-10 py-4"
          >Send</Button>
        </div>
      </form>
    </Form>
  )
};

export { PersonalInfoForm }