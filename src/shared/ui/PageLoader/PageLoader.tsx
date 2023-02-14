import { classNames } from "shared/lib/classNames/classNames";
import  "./PageLoader.scss";

interface PageLoaderProps {
   className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
   return (
      <div className={classNames("PageLoader", {}, [className])}>
         <span className="loader"></span>
      </div>
   );
};
