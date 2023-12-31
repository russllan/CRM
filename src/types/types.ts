export interface MainCard{
     img:string
    }
export interface CarouselCard {
  id: number;
  img: string;
  title: string;
  mark: string;
  price: number;
}

export interface ModalDataType {
  title: string
}

export interface HeadersType {
  title: string
}

export interface footerIcons{
  img:string
  to: string
 }
 export interface AdminHeadersType {
  title: string;
  route: string;
}

// 
export interface DataBaseCard {
  icon: string
  text: string
  sum: number
  strategy: string
}
