export class Tickets {

  constructor(
    public carrier?: string,
    public price?: number,
    public originName?: string,
    public destinationName?: string,
    public departureDate?: string,
    public arrivalDate?: string,
    public id?: number,
    public origin?: string,
    public departureTime?: string,
    public arrivalTime?: string,
    public stops?: number

) {

  }

}
