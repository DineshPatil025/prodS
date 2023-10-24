import { ProductsStatus } from "../const/prodEnum";

export interface Iproducts {
    pname: string;
    pdetails: string;
    pstatus: ProductsStatus;
    id: string;
}