
export class MessagePaginator{
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
  public data: Message[];

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
export class Message {
  public id: number;
  public message: string;
  public group_id: number;
  public mobilenumber: number;
  public sent_by: string;
  public created_at: string;
  public updated_at: string;
  constructor() {
    this.id = null;
    this.message = '';
    this.group_id = null;
    this.mobilenumber = null;
    this.sent_by = '';
    this.created_at = '';
    this.updated_at = '';


  }
}
