import NotFoundUrl from "@/components/common/NotFoundUrl";
import { useTranslations } from "next-intl";

export default function CatchAllPages() {
  const t = useTranslations();
  return (
    <NotFoundUrl
      title={t("not_found")}
      message={t("could_not_find_requested_page")}
      buttonMessage={t("go_to_home")}
    />
  );
}
