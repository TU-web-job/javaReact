export type HeaderType = {
    id: number,
    headerName: string,
    menuList: string[],
    image: string,
}

export type FooterType = {
    id: number,
    footerName: string,
    footerList: string[],
}

export type Diary = {
    id: number;
    title: string;
    text: string;
    date: string;
    image: string;
}