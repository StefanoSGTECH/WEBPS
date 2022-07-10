export interface Notifications
{
     notificationId: number
     title: string
     body: string
     date: Date
     docId?: number
     topic: string
}

export interface NotificationTopicResponse
{
     id: number,
     name: string
}

export interface OperazioneResponse
{
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