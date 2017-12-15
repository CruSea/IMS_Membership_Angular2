
export class ContactsPaginator{
     public  current_page: number;
     public first_page_url: string;
     public from: number;
     public  last_page: number;
     public  last_page_url: string;
     public  next_page_url: string;
     public path: string;
     public per_page: number;
     public  prev_page_url: string;
     public to: number;
     public  total: number;
     public data: Contact[];

      constructor(){
        this.current_page = null;
        this.from = null;
        this.last_page = null;
        this.per_page = null;
        this.to = null;
        this.total = null;
        this.first_page_url = '';
        this.last_page_url = '';
        this.next_page_url = '';
        this.prev_page_url = '';
        this.path = '';

      }
}
export class Contact {
  public id: number;
  public firstname: string;
  public middlename: string;
  public lastname: string;
  public sex: string;
  public age: number;
  public region: string;
  public wereda: string;
  public kebele: number;
  public housenumber: number;
  public officenumber: number;
  public mobilenumber: number;
  public resnumber: number;
  public pobox: number;
  public synod: string;
  public cong: string;
  public occupation: string
  public email: string;
  public created_at: string;
  public updated_at: string;
  public name: string;
     constructor() {
     this.id = null;
     this.firstname = '';
     this.middlename = '';
     this.lastname = '';
     this.sex = '';
     this.age = null;
     this.region = '';
     this.wereda = '';
     this.kebele = null;
     this.housenumber = null;
     this. officenumber = null;
     this.mobilenumber = null;
     this.resnumber = null;
     this.pobox = null;
     this.synod = '';
     this.cong = '';
     this.occupation = '';
     this.email = '';
     this.created_at = '';
     this.updated_at = '';
     this.name = '';

     }
}
