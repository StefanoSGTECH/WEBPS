import { ClienteData } from "../cliente/cliente.types"

export interface Operazione {
    operation: OperationData
    cliente: ClienteData
}

export interface OperationData {
    commento?: string
    compagnia: string
    data: string
    durata: number
    frazionamento: string
    montante: number
    montanteprov: number
    premio: number
    prodotto: string
    provvigione: number
    ramo: string
    registrazione: string
    risultato: number
    societa: string
    tipologia: string
}

export interface OperationResponse {
    status: string
    idoperation: number
}