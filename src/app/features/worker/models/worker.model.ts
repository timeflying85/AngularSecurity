export interface Worker {
    firstname: string
    lastname: string
    department: string | null
}

export type WorkerEntity = Worker & { id: number }
export type WorkerEntities = WorkerEntity[]