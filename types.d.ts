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

type Blog = {
    id: string
    title: string,
    image: string,
    content: string
}

type Project = {
    id: string
    title: string,
    image: string,
    about: string,
    subImage: string,
    subTitle: string,
    contentEnd: string,
}

type Ontotologies = {
    id: string
    title: string,
    content: string,
}