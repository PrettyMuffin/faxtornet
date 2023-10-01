export type ContestType = {
  currentPage?: string;
  recensioni?: Review[];
  recensioniTotali?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<string>>;
};

export type ElementoNavigazione = {
  idRef: string;
  displayString: string;
};

export type CaroselloItem = {
  imgPath: string;
  title: string;
  description: string;
};

export type WhyNoiCard = {
  imgPath: string;
  title: string;
  descrizione: string;
};

export type NavBar = {
  currentPage: string;
  handlePage: Function;
};

export interface ToastProp {
  canShow?: boolean;
  text: string;
  error: boolean;
}

export interface Review {
  author_name: string;
  text: string;
  relative_time_description?: string;
}
