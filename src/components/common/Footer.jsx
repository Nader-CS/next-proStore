import { APP_NAME } from "@/lib/constants";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LangaugeSwitcher";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center flex-col gap-2">
        <p>
          {currentYear} {APP_NAME}. {t("all_rights_reserved")}
        </p>
        <div className="flex flex-col">
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
