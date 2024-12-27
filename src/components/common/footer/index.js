import { APP_NAME } from "@/lib/constants";
import { useTranslations } from "next-intl";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  return (
    <footer className="border-t">
      <div className="p-5 flex-center">
        <p>
          {currentYear} {APP_NAME}. {t("all_rights_reserved")}
        </p>
      </div>
    </footer>
  );
};
export default Footer;
