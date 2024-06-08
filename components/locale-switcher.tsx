"use client"

import { FC, useState, useTransition } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { usePathname, useRouter } from "next/navigation";

enum LocaleTranslation {
  RU = "ru",
  UK = "uk",
}

type LocaleType = `${LocaleTranslation}`

interface LocaleSwitchProps {
  locale: string,
}

const LocaleSwitch: FC<LocaleSwitchProps> = (props) => {
  const { locale } = props;
  const router = useRouter();
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [selectedValue, setSelectedValue] = useState<LocaleType>(locale as LocaleType);

  const onSetLanguage = (value: LocaleType) => {
    startTransition(() => {
      const splitting = pathname.split("/")
      splitting.splice(1, 1, value)
      router.replace(splitting.join("/"));
      setSelectedValue(value)
    })
  }

  return (
    <Select
      disabled={isPending}
      defaultValue={selectedValue}
      onValueChange={onSetLanguage}
    >
      <SelectTrigger className="w-20">
        <SelectValue placeholder={LocaleTranslation.RU} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={LocaleTranslation.RU}>{LocaleTranslation.RU.toUpperCase()}</SelectItem>
        <SelectItem value={LocaleTranslation.UK}>{LocaleTranslation.UK.toUpperCase()}</SelectItem>
      </SelectContent>
    </Select>
  )
}

export { LocaleSwitch }