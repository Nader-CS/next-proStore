import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { APP_NAME } from "@/lib/constants";
import { ShoppingCartIcon, UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Header = () => {
  const t = useTranslations();
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src={"/images/logo.svg"}
              height={48}
              width={48}
              priority
              alt={`${APP_NAME} logo`}
            />
            <span className="hidden lg:block font-bold text-2xl ms-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <Button asChild variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCartIcon /> {t("cart")}
            </Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href={"/sign-in"}>
              <UserIcon /> {t("sign_in")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
