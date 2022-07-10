export interface Reportv {
    totaleRCA: number
    totaleRE: number
    totaleAnnuo: number
    totaleUnico: number
    totaleCrea: number
    totaleConsulenza: number
    totale: number
}

export interface Reportop {
    operazioni: [OperazioneResponse]
    totale: number
}

export interface OperazioneResponse {
    opId: number
    societa: string
    ramo: string
    data: string
    /* Cliente */
    clientId: number
    clientNome?: string
    clientCognome?: string
    clientSoceta?: string
    /* Creator */
    creatorId: number
    creatorNome: string
    creatorCognome: string
    creatorSede: string
    creatorimage?: string
    /* ------- */
    commento?: string
    registrazione: string
    tipologia: string
    compagnia: string
    prodotto: string
    premio: number
    frazionamento: string
    durata: number
    montante: number
    montanteprov: number
    provvigione: number
    provvigioneperc: number
    provvigionelordmat: number
}

export interface ExelUrl {
    url: string
}