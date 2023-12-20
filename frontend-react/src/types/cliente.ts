export type Cliente = {
    id: number;
    name: string;
    total: number;
}

export type ClientePage = {
    content: Cliente[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}