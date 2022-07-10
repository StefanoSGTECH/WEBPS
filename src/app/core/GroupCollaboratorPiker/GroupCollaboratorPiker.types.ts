export enum CollaboratorType {
    allv,
    sede,
    user,
    null
}

export interface DropdownOptionCollaborator {
    id: number
    value: string
    type: CollaboratorType
}

export interface Colabp {
    id: number, 
    type: String
}