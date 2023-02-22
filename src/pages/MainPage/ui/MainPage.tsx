import { BugButton } from "app/providers/ErrorBoundary";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage:FC = function () {
   const { t } = useTranslation();
   return (
      <div>
         {t("Главная страница")}
         <BugButton />
      </div>
   );
}

export default MainPage;
