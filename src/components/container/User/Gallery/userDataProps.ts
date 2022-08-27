import type { PostData, SalesData } from "../../../../utils/common/PropTypes";

type UserPostsProps = {
  typeOfItem?: string;
  dataItems?: PostData[];
  cols:number;
  view:string;  
};

type UserSalesProps = {
  typeOfItem?: string;
  dataItems?: SalesData[];
  cols:number;
  view:string;  
};

type UserFavoritesProps = {
  product: SalesData[];
  post: PostData[];
  type?: string;
  cols:number;
  view:string;
};

export type { UserPostsProps, UserSalesProps,UserFavoritesProps };
