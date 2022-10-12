export interface IAlbum{
name:string
author:IAuthor
year:string | number
duration:string | number
cover:string
link: string | undefined
}

export interface IAuthor{
    name: string
    band: IBand | undefined
    link: string | undefined
}
export interface IBand{
    guitar?:string,
    guitar2?:string,
    voice?:string
    bass?:string
    keyboards?:string
    drums?:string
}
