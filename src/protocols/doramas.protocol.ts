export type DoramaEntity = {
    id: number,
    name: string,
    overview: string,
    grade: number
}

export type NewDorama = Omit<DoramaEntity, "id">

export type updateDorama = Partial<DoramaEntity>