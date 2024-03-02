export interface Categories {
    name: string;
}

export interface Cat {
    id: string;
    url: string;
    name: string;
    categories?: Categories[]; 
}
