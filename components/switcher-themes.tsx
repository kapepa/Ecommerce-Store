"use client"

import { FC, useMemo, useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Moon, Sun } from "lucide-react";
import { ThemesView } from "@/enum/themes";
import { useTheme } from 'next-themes'
import { cn } from "@/lib/utils";

interface SwitcherThemesProps {
  className?: string
}

const SwitcherThemes: FC<SwitcherThemesProps> = (props) => {
  const { className } = props;
  const { theme, setTheme } = useTheme();

  const onChangeTheme = (state: boolean) => {
    const newTheme = ThemesView.light === theme ? ThemesView.dark : ThemesView.light;
    setTheme(newTheme);
  }

  const switchIco = useMemo(
    () => {
      switch (theme) {
        case ThemesView.light :
          return <Sun size={30} />;
        case ThemesView.dark:
          return <Moon size={30} />
      }
    },
    [theme]
  ) 

  return (
    <div
      className={cn("flex items-center gap-x-2 py-4", className)}
    >
      { switchIco }
      <Checkbox
        enabled={theme === ThemesView.light}
        setEnabled={onChangeTheme}
      />
    </div>
  )
}

export { SwitcherThemes };