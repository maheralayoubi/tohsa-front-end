type News = {
    id: string
    title: string,
    image: string,
    content1: string,
    content2: string,
    dateTime: string,
    place: string,
    rigesterFor: string,
    program: ProgramIndex[],
    content3: string
}

type ProgramIndex = {
    content: string,
    list?: ProgramIndex[]
}