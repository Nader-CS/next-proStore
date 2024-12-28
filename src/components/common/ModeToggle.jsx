"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { SunIcon, MoonIcon, SunMoon } from "lucide-react";
import { useTranslations } from "next-intl";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  const renderIcon = () => {
    switch (theme) {
      case "light":
        return <SunIcon />;
      case "dark":
        return <MoonIcon />;
      default:
        return <SunMoon />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{renderIcon()}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t("appearance")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={theme == "system"}
          disabled={theme == "system"}
          onClick={() => setTheme("system")}
        >
          {t("system")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          disabled={theme == "light"}
          checked={theme == "light"}
          onClick={() => setTheme("light")}
        >
          {t("light")}
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={theme == "dark"}
          disabled={theme == "dark"}
          onClick={() => setTheme("dark")}
        >
          {t("dark")}
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default ModeToggle;
