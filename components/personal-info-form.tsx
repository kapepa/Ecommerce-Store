"use client"

import { UserType, usePersonalInfoModal } from "@/hooks/use-personal-info-modal";
import { PersonalInfoSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import { Separator } from "./ui/separator";
import { InputPhone } from "./ui/input-phone";
import { useOrderModal } from "@/hooks/use-order-modal";
import { useTranslations } from "next-intl";

interface PersonalInfoFormprops {
  initial: UserType | undefined
}

const PersonalInfoForm: FC<PersonalInfoFormprops> = (props) => {
  const { initial } = props;
  const setInfo = usePersonalInfoModal(state => state.setInfo);
  const setInfoClose = usePersonalInfoModal(state => state.onClose);
  const onOrderOpen = useOrderModal(state => state.onOpen);
  const t = useTranslations('PersonalInfoForm');
  
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
    setInfoClose();
    onOrderOpen();
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
                  <FormLabel>{t("Name")}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder={t("YourName")}
                      onChange={(e) => {
                        setInfo({ name: e.target.value });
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
                  <FormLabel>{t("Phone")}</FormLabel>
                  <FormControl>
                    <InputPhone
                      placeholder={t("YourPhone")} 
                      defaultValue={field.value}
                      onChange={(e) => {
                        setInfo({ phone: e.target.value });
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
                  <FormLabel>{t("Address")}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      placeholder={t("YourAddress")}
                      onChange={(e) => {
                        setInfo({ address: e.target.value });
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
          >
            {t("Apply")}
          </Button>
        </div>
      </form>
    </Form>
  )
};

export { PersonalInfoForm }